package com.hdfs.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileStatus;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.springframework.stereotype.Service;

@Service
public class JavaHdfsService {
    
    private Configuration conf = new Configuration();
    
    private static String defaultPath = "hdfs://192.168.240.134:9000";
    
    public JavaHdfsService() {
	// default Constructor
    }
    
    /**
     * 전달받은 주소의 하둡 경로에 접속 후 폴더 및 파일, 파일내용에 대한 정보 조회
     * 
     * @param hdfsDirPath 	접속할 하둡 경로 값
     * @return			resMap : 상위 경로, 전체 경로, 접속한 경로의 폴더 및 파일 정보
     * @throws Exception	접속한 하둡 경로에 파일, 폴더가 존재하지 않을 경우 상위 경로로 이동하기 위한 상위경로 값
     */
    public Map<String, Object> hdfsGetInfo(String hdfsDirPath) throws Exception {
        System.setProperty("hadoop.home.dir", "C:/Users/gskim/Downloads/hadoop-2.7.3.tar/hadoop-2.7.3");
        conf.set("fs.defaultFS", defaultPath);
        
        Map<String, Object> resMap = new HashMap<String, Object>();
        
        List<String> detailPathArr = new ArrayList<String>();
        FileSystem fs = null;
        BufferedReader br = null;
        List<String> listStr = new ArrayList<String>();
        
        try{
            fs = FileSystem.get(conf);
            
            Path path = new Path(hdfsDirPath);
            
            FileSystem hdfs = FileSystem.get(new URI(defaultPath), conf);
            FileStatus[] fileStatus = hdfs.listStatus(path);
            
            if(hdfs.isFile(path)){
                
                br = new BufferedReader(new InputStreamReader(fs.open(path)));
                String str1 = null;
                while((str1 = br.readLine()) != null){
                    listStr.add(str1);
                }
                resMap.put("fileContents", listStr);
                
                br.close();
            }
            
            // 폴더내 목록이 있는 경우
            if(fileStatus != null && fileStatus.length > 0){
        	/* 
        	 * INPUT DATA -> hdfs://192.168.240.134:9000/common
        	 * 공통경로를 제외한 나머지 경로의 값 : hdfsDirPath만 이용
        	 * 1. path가 "/"인 경우 === param : /
        	 * 2. path가 2dept이상인 경우 === param : /var
        	 * 		/var/tmp
        	 * 3. path가 파일인 경우 === param : tmp.log
        	 * 		/var/tmp/tmp.log
        	 */
        	
                String parentPath = "";
                
                if(hdfsDirPath.split("/").length == 2){ //1. "/"인 경우
                    parentPath = hdfsDirPath.split("/")[0];
                    if(parentPath.equals("")){
                	parentPath = "/";
                    }
                }else if(hdfsDirPath.split("/").length > 2){ //2. dept가 2이상인 경우
                    parentPath = hdfsDirPath.substring(hdfsDirPath.indexOf("/"), hdfsDirPath.lastIndexOf("/"));
                } else {
                    parentPath = "";
                }
                String fullPath = hdfsDirPath;
                
                for(int i = 0; i < fileStatus.length; i++){
                    String tempPath = (fileStatus[i].getPath().toString()).split(defaultPath)[1];
                    
                     //하둡에서 가져온 데이터가 파일인지 여부 확인
                    String lastPathStr = tempPath.substring(tempPath.lastIndexOf("/")+1, tempPath.length());
                    detailPathArr.add(lastPathStr);
    		}
                resMap.put("detailPath", detailPathArr);
                resMap.put("parentPath", parentPath);
                resMap.put("fullPath", fullPath);
                
                fs.close();
            } else {
        	// 폴더내 목록이 없는 경우
        	String parentPath = hdfsDirPath.substring(hdfsDirPath.indexOf("/"), hdfsDirPath.lastIndexOf("/"));
        	if(parentPath.equals("")){
        	    parentPath = "/";
        	}
        	resMap.put("parentPath", parentPath);
        	resMap.put("fullPath", hdfsDirPath);
        	System.out.println("Empty Directory && Empty File");
        	resMap.put("detailPath", "");
            }
    
        } catch (Exception e) {
            System.out.println(e);
            String parentPath = hdfsDirPath.substring(hdfsDirPath.indexOf("/"), hdfsDirPath.lastIndexOf("/"));
            if(parentPath.equals("")){
        	parentPath = "/";
            }
            resMap.put("parentPath", parentPath);
            resMap.put("fullPath", hdfsDirPath);
            
            fs.close();
        }
        
        return resMap;
    }
    
    
    /**
     * 하둡 경로 폴더 생성
     * 
     * @param conf	접속할 하둡의 hostname+port 값
     * @param dirName	하둡의 경로
     * @return		success, fail 결과 msg
     */
    public String mkdirService(String dirName){
	conf.set("fs.defaultFS", defaultPath);
	String result = "";
	
	System.out.println("create Directory Name : " + dirName);
	
	try{
	    FileSystem fs = FileSystem.get(conf);
	    Path path = new Path(dirName);
	    
	    result = "Dir : " + dirName + " create success!";
	    if(fs.exists(path)){
		System.out.println("Dir : " + dirName + " already exists!");
		result = "Dir : " + dirName + " already exists!";
	    }
	    
	    //fs.create(path) => 폴더를 만드는 명령이 아님, 파일을 만드는 명령임.
	    fs.mkdirs(path);
	    fs.close();
	} catch (IOException e) {
	    result = e.getMessage();
	}
	
	return result;
    }
    
    /**
     * 하둡경로 폴더 삭제
     * 
     * @param conf	접속할 하둡의 hostname+port 값
     * @param dirName	하둡의 경로
     * @return		success, fail 결과 msg
     */
    public String deldirService(String dirName) {
	conf.set("fs.defaultFS", defaultPath);
	String result = "";
	
	System.out.println("delete Directory Name : " + dirName);
	
	try{
	    FileSystem fs = FileSystem.get(conf);
	    Path path = new Path(dirName);
	    
	    result = "Dir : " + dirName + " delete success!";
//	    if(fs.exists(path)){
//		System.out.println("Dir : " + dirName + " delete fail!");
//		result = "Dir : " + dirName + " delete fail!";
//	    }
	    
	    fs.delete(path, true);
	    fs.close();
	} catch (IOException e) {
	    result = e.getMessage();
	}
	
	return result;
    }
}
