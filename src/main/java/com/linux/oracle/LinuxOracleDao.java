package com.linux.oracle;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.linux.utils.BoardPaging;

@Repository
public class LinuxOracleDao {
    
    @Autowired
    private SqlSession sqlSession;
    
    public LinuxOracleDao() {
	//default Constructor
    }
    
    public List<Object> selectGetTblList(){
	List<Object> result = sqlSession.selectList("oracle.selectGetTblList");
	
	return result;
    }
    
    public List<Object> selectColumnName(String tblName){
	List<Object> result = sqlSession.selectList("oracle.selectColumnName", tblName);
	
	return result;
    }
    
    public List<Object> selectUserTblInfo(Map<String, Object> rMap){
	List<Object> result = sqlSession.selectList("oracle.selectTblInfo", rMap);
	
	return result;
    }
    
    public Map<String, Object> selectGetBoardInfo(Map<String, Object> pMap){
//	List<Object> result = sqlSession.selectList("oracle.selectGetBoardInfo");
	return BoardPaging.selectGetBoardPageList(sqlSession, "oracle.selectGetBoardInfo", pMap);
    }
}
