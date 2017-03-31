package com.linux.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

public final class BoardPaging {
    @Autowired
    private SqlSession sqlSession;
    
    private static int PAGE_SIZE = 10;
    
    public static Map<String, Object> selectGetBoardPageList(SqlSession sqlSession, String sqlId, Map<String, Object> pMap){
	Map<String, Object> rMap = new HashMap<String, Object>();
	
	//전체 개수
	int totalCnt = sqlSession.selectOne("oracle.selectGetBoardCount");
	//현재 페이지 번호
	int pageNo = Integer.parseInt((String)pMap.get("pageNo"));
	//페이지 개수
	int pageBlock = (totalCnt/PAGE_SIZE) + 1;
	//화면에 표시될 시작 페이지 번호
	int startPageNo = (pageNo * PAGE_SIZE) - (PAGE_SIZE - 1);
	//화면에 표시될 마지막 페이지 번호
	int endPageNo = startPageNo + (PAGE_SIZE - 1);
	
	//게시판 데이터
	List<Object> dataList = sqlSession.selectList(sqlId);
	rMap.put("dataList", dataList);
	
	Map<String, Object> dataMap = (Map<String, Object>) dataList.get(0);
	Set<?> key = dataMap.keySet();
	
	List<String> keyList = new ArrayList<String>();
	//게시판 데이터 key값만 별도 추출
	for( Iterator<?> iterator = key.iterator(); iterator.hasNext(); ) {
            String keyName = (String) iterator.next();

            keyList.add(keyName);
        }
	
	rMap.put("keyList", keyList);
	rMap.put("pageNo", pageNo);
	rMap.put("pageBlock", pageBlock);
	rMap.put("startPageNo", startPageNo);
	rMap.put("endPageNo", endPageNo);
	
	return rMap;
    }
}
