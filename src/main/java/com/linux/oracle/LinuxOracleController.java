package com.linux.oracle;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping(value = "/oracle")
@Controller
public class LinuxOracleController {
    
    @Autowired
    private LinuxOracleService linuxOracleService;
    
    public LinuxOracleController() {
	//default Constructor
    }
    
    /**
     * Oracle DataBase Main Page
     * 
     * @return
     */
    @RequestMapping(value = "/mainPage")
    public ModelAndView mainPage() {
	System.out.println("===== Oracle DB Select Controller =====");
	ModelAndView mav = new ModelAndView("/oracle/oracle");
	
	mav.addObject("welCome", "Welcome, Oracle Database Page");
	return mav;
    }
    
    /**
     * 접속한 계정에 대한 Table 목록 조회
     * 
     * @return
     */
    @RequestMapping(value = "/selectTbl")
    public ModelAndView selectTbl() {
	Map<String, Object> result = linuxOracleService.selectGetTblList();
	
	ModelAndView mav = new ModelAndView("jsonView");
	mav.addObject("data", result);
	
	return mav;
    }
    
    /**
     * 선택한 Table에 대한 Data 조회
     * 
     * @return
     */
    @RequestMapping(value = "/selectTblInfo")
    public ModelAndView selectTblInfo(Object requestMap) {
	Map<String, Object> rMap = (Map<String, Object>) requestMap;
	
	ModelAndView mav = new ModelAndView("jsonView");
	
	Map<String, Object> resultColumn = linuxOracleService.selectColumnName(rMap);
	mav.addObject("resultColumn", resultColumn);
	
	Map<String, Object> result = linuxOracleService.selectUserTblInfo(rMap);
	mav.addObject("data", result);
	
	return mav;
    }
    
    @RequestMapping(value = "/createTbl")
    public ModelAndView createTbl(Object requestMap) {
	ModelAndView mav = new ModelAndView("/oracle/createTbl");
	
	mav.addObject("msg", "Oracle Database Create Table Page");
	return mav;
    }
    
    @RequestMapping(value = "/writeData")
    public ModelAndView writeData(Object requestMap) {
	ModelAndView mav = new ModelAndView("/oracle/writeData");
	
	mav.addObject("msg", "Oracle Database Insert Data Page");
	return mav;
    }
    
    @RequestMapping(value = "/viewBoard")
    public ModelAndView viewBoard() {
	ModelAndView mav = new ModelAndView("/oracle/viewBoard");
	
	mav.addObject("msg", "Welcome, Board page");
	return mav;
    }
    
    @RequestMapping(value = "/selectGetBoardInfo")
    public ModelAndView selectGetBoardInfo(Object requestMap) {
	Map<String, Object> pMap = (Map<String, Object>) requestMap;
	Map<String, Object> result = linuxOracleService.selectGetBoardInfo(pMap);
	ModelAndView mav = new ModelAndView("jsonView");
	
	mav.addObject("data", result);
	
	return mav;
    }
}
