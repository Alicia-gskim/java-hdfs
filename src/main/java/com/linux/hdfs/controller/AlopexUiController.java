package com.linux.hdfs.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AlopexUiController {
    public AlopexUiController(){
	//default constructor
    }
    
    @RequestMapping(value="portalType")
    public ModelAndView portalType(Map<String, Object> requstMap){
	ModelAndView mav = new ModelAndView("/main/ui-main-portal");
	
	System.out.println("portalType");
	
	return mav;
    }
    
    @RequestMapping(value="workspaceType")
    public ModelAndView workspaceType(Map<String, Object> requestMap){
	ModelAndView mav = new ModelAndView("/main/ui-main-workspace");
	
	System.out.println("workspaceType");
	
	return mav;
    }
}
