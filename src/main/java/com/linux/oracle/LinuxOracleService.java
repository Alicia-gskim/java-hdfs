package com.linux.oracle;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LinuxOracleService {
    
    @Autowired
    private LinuxOracleDao linuxOracleDao;
    
    public LinuxOracleService() {
	//default Constructor
    }
    
    public Map<String, Object> selectGetTblList(){
	Map<String, Object> resultMap = new HashMap<String, Object>();
	List<Object> info = linuxOracleDao.selectGetTblList();
	resultMap.put("info", info);
	
	return resultMap;
    }
    
    public Map<String, Object> selectColumnName(Map<String, Object> rMap){
	String tblName = (String) rMap.get("tblName");
	
	Map<String, Object> resultMap = new HashMap<String, Object>();
	List<Object> colInfo = linuxOracleDao.selectColumnName(tblName);
	resultMap.put("colInfo", colInfo);
	
	return resultMap;
    }
    
    public Map<String, Object> selectUserTblInfo(Map<String, Object> rMap){
	Map<String, Object> resultMap = new HashMap<String, Object>();
	
	String tblName = (String) rMap.get("tblName");
	List<Object> colInfo = linuxOracleDao.selectColumnName(tblName);
	resultMap.put("colInfo", colInfo);
	
	List<Object> info = linuxOracleDao.selectUserTblInfo(rMap);
	resultMap.put("info", info);
	
	
	return resultMap;
    }
    
    public Map<String, Object> selectGetBoardInfo(Map<String, Object> pMap){
	Map<String, Object> resultMap = new HashMap<String, Object>();
	
	Map<String, Object> boardInfo = linuxOracleDao.selectGetBoardInfo(pMap);
	resultMap.put("boardInfo", boardInfo);
	
	return resultMap;
    }
}
