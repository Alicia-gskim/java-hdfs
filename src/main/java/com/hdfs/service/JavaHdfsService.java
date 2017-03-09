package com.hdfs.service;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FSDataOutputStream;
import org.apache.hadoop.fs.FileStatus;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.hdfs.utils.CustomDataFormatter;

@Service
public class JavaHdfsService {
    
    @Autowired
    private CustomDataFormatter customDataFormatter;
    
    private Configuration conf = new Configuration();
    
    private static String defaultPath = "hdfs://192.168.240.134:9000";
    
    private static String localPath = "C:/Users/gskim/workspace/Java-hdfs/WebContent/upload/";
    
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
        
        FileSystem hdfs = null;
        List<String> detailPathArr = new ArrayList<String>();
        BufferedReader br = null;
        List<String> listStr = new ArrayList<String>();
        
        try{
            Path path = new Path(hdfsDirPath);
            
            hdfs = FileSystem.get(new URI(defaultPath), conf);
            FileStatus[] fileStatus = hdfs.listStatus(path);
            
            if(hdfs.isFile(path)){
                
                br = new BufferedReader(new InputStreamReader(hdfs.open(path)));
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
                
                hdfs.close();
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
            
            hdfs.close();
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
    public String hdfsMkdirService(String dirName) throws Exception {
	conf.set("fs.defaultFS", defaultPath);
	String result = "";
	FileSystem fs = null;
	
	System.out.println("create Directory Name : " + dirName);
	
	try{
	    fs = FileSystem.get(conf);
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
	    fs.close();
	}
	
	return result;
    }
    
    /**
     * 하둡경로 폴더/파일 삭제
     * 
     * @param conf	접속할 하둡의 hostname+port 값
     * @param dirName	하둡의 경로
     * @return		success, fail 결과 msg
     */
    public String hdfsDeleteService(String dirName) throws Exception {
	conf.set("fs.defaultFS", defaultPath);
	String result = "";
	FileSystem fs = null;
	
	System.out.println("delete Directory Name : " + dirName);
	
	try{
	    fs = FileSystem.get(conf);
	    Path path = new Path(dirName);
	    
	    if(fs.isDirectory(path)) {
		result = "Dir : " + dirName + " delete success!";
	    } else {
		result = "File : " + dirName + " delete success!";
	    }
	    
	    fs.delete(path, true);
	    fs.close();
	} catch (IOException e) {
	    result = e.getMessage();
	    fs.close();
	}
	
	return result;
    }
    
    /**
     * 하둡 경로에 파일 업로드
     *  - 추가하고자 하는 파일 목록을 이동한 하둡 폴더 경로에 저장
     *  - JavaHdfs 의 copyFromLocalFile(srcPath, dstPath) 메소드를 이용한 업로드
     *  
     * @param srcPath		저장할 파일이 있는 로컬 경로
     * @param dstPath		파일을 저장할 하둡의 경로
     * @return			저장한 결과 값(int)
     * @throws URISyntaxException 
     */
    public Map<String, Object> hdfsPutFilesService(String uploadPath, MultipartHttpServletRequest mReq) throws Exception {
	System.out.println("File upload start ------ local path");
//	Set<String> localPath = req.getServletContext().getResourcePaths("/upload/");
	
	File dir = new File(localPath);
	if(!dir.isDirectory()) {
	    dir.mkdirs();
	}
	
	Iterator<String> iterator = mReq.getFileNames();
	MultipartFile mFile;
	List<Map<String, Object>> fileInfoList = new ArrayList<Map<String, Object>>();
	Map<String, Object> fileMap = null;
	String newFileName = "";
	while(iterator.hasNext()) {
	    mFile = mReq.getFile(iterator.next());
	    String originFileName = mFile.getOriginalFilename();
	    String fileName = originFileName.substring(0, originFileName.indexOf("."));
	    String newBaseFileName = customDataFormatter.customDateFormatter(fileName);
	    String ext = originFileName.substring(originFileName.indexOf("."), originFileName.length());
	    System.out.println("Uploading File Name : " + newBaseFileName + " , Uploading File Expression : " + ext);
	    newFileName = newBaseFileName + ext;
	    String contentType = mFile.getContentType();
	    System.out.println(contentType);
	    
	    fileMap = new HashMap<String, Object>();
	    fileMap.put("fileName", newFileName);
	    fileMap.put("filePath", localPath);
	    fileInfoList.add(fileMap);
	    
	    try {
		File newFile = new File(localPath, newFileName);
		mFile.transferTo(newFile);
		System.out.println("local upload path : " + localPath+newFileName + " ---> upload success");
	    } catch(Exception e) {
		System.out.println("local upload path : " + localPath+newFileName + " ---> upload fail");
		e.printStackTrace();
	    }
	}
	System.out.println("File upload end ------ local path");
	
	Map<String, Object> result = new HashMap<String, Object>();
	conf.set("fs.defaultFS", defaultPath);
	
	FileSystem fs = null;
	FSDataOutputStream out = null;
	InputStream in = null;
	
	String msg = "";
	try {    
	    fs = FileSystem.get(new URI(defaultPath), conf);
	    Path path = null;
	    if(uploadPath.equals("/")) {
		path = new Path(uploadPath+newFileName);
	    } else {
		path = new Path(uploadPath + "/" + newFileName);
	    }
	    
	    System.out.println("hadoop save path : " + path);
	    
	    //하둡경로에 생성한 파일을 OutputStream에 저장(업로드하는 파일의 내용을 저장히기 위함)
	    out = fs.create(path);
	    
	    in = new BufferedInputStream(new FileInputStream(localPath + newFileName));
	    int readBuffer = 0;
	    byte[] buffer = new byte[512];
	    while((readBuffer = in.read(buffer)) != -1) {
		out.write(buffer, 0, readBuffer);
	    }
	    msg = "File created successfully in HDFS "+ fs.getFileChecksum(path);
	    
	} catch(IOException e) {
	    msg = e.getMessage();
	} finally {
	    if(in != null) { in.close(); }
	    if(out != null) { out.close(); }
	    if(fs != null) { fs.close(); }
	}
	result.put("msg", msg);
	result.put("fileInfoList", fileInfoList);
	
	return result;
    }
}
