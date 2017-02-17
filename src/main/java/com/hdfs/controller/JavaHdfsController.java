package com.hdfs.controller;

import java.util.HashMap;
import java.util.Map;

import org.apache.hadoop.conf.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.hdfs.service.JavaHdfsService;

@Controller
public class JavaHdfsController {
    
    private Configuration conf = new Configuration();
    
    @Autowired
    private JavaHdfsService javaHdfsService;
    
    public JavaHdfsController(){
	// default Constructor
    }
    
    /**
     * 하둡 디렉토리 구조 조회  - 메인 화면
     * 
     * @param requestMap
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/hdfsHome")
    public ModelAndView hdfsHome(Object requestMap) throws Exception {
	ModelAndView mav = new ModelAndView("/hdfs/home");
	
	mav.addObject("pageName", "HDFS Test page");
	
	return mav;
    }

    /**
     * 하둡 경로 정보 조회(폴더, 파일, 파일내용)
     * 
     * @param requestMap
     * @throws Exception
     */
    @RequestMapping(value = "/hdfsInfo")
    public ModelAndView hdfsInfo(Object requestMap) throws Exception {
	Map<String, Object> pMap = (Map<String, Object>) requestMap;
	
	String hdfsDirPath = (String) pMap.get("data");
	if(hdfsDirPath == null || hdfsDirPath.equals("")){
            hdfsDirPath = "/";
        }
	Map<String, Object> map = javaHdfsService.hdfsGetInfo(hdfsDirPath);
	
	ModelAndView mav = new ModelAndView("jsonView");
	mav.addObject("result", map);
	
	return mav;
    }
    
    /**
     * 하둡 경로 폴더 생성
     * 
     * @param requestMap
     * @return
     */
    @RequestMapping(value = "/mkdir")
    public ModelAndView mkdir(Object requestMap) {
	Map<String, Object> pMap = (Map<String, Object>) requestMap;
	String dirName = (String) pMap.get("data");
	
	String result = javaHdfsService.mkdirService(dirName);
	
	ModelAndView mav = new ModelAndView("jsonView");
	mav.addObject("msg", result);
	
	return mav;
    }
    
    
    /**
     * 하둡경로 폴더 삭제
     * 
     * @param requestMap
     * @return
     */
    @RequestMapping(value = "/deldir")
    public ModelAndView hdfsPutFile(Object requestMap){
	Map<String, Object> pMap = (Map<String, Object>) requestMap;
	String dirName = (String) pMap.get("data");
	
	String result = javaHdfsService.deldirService(dirName);
	
	ModelAndView mav = new ModelAndView("jsonView");
	mav.addObject("msg", result);
	
	return mav;
    }
    
//    @RequestMapping(value = "/hdfsPutFile")
}