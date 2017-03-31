package com.linux.hdfs.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainPageController {
    
    public MainPageController() {
	//default Constructor
    }
    
    @RequestMapping(value="/")
    public ModelAndView index(){
	System.out.println("Index Start-----");
	
	String str = "Alopex UI Sample Main Page";
	
	ModelAndView mav = new ModelAndView("index");
	mav.addObject("result", str);
	
	System.out.println("Index End-----");
	
	return mav;
    }
    
    @RequestMapping(value="/selectPage")
    public ModelAndView selectPage(Object requestMap) {
	System.out.println("----- Select Page -----");
	ModelAndView mav = new ModelAndView("/selectPage/selectPage");
	
	return mav;
    }
}
