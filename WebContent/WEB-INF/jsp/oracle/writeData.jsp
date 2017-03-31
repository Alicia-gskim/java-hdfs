<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Write Data Page</title>
	
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="/js/oracle/writeData.js"></script>
	
	<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
</head>
<body>
	<center><hr>${msg }<hr></center>
	
	<div>
		<button id="getTbl">Get Table List</button>
	</div>
	
	<div class="row">
		<div id="tblList" class="col-xs-12">
			
		</div>
		<div id="tblContents" class="col-xs-12">
		
		</div>
	</div>
</body>
</html>