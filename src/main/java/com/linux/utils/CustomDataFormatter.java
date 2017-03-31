package com.linux.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Service;

@Service
public class CustomDataFormatter {
    
    public CustomDataFormatter() {
	//default Constructor
    }
    
    public String customDateFormatter(String fileName) {
	
	Date date = new Date();
	SimpleDateFormat sdf = new SimpleDateFormat("_yyyyMMdd_HHmmss");
	String time = sdf.format(date);
	
	String newFileName = fileName.concat(time);
	System.out.println(newFileName);
	
	return newFileName;
    }
}
