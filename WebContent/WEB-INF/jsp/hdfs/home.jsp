<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>Insert title here</title>
		
<!-- 		<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script> -->
		<script src="alopex-ui/alopex/script/jquery/jquery-1.11.3.js"></script>
		<%@ include file="/alopex-ui/cssbind.jsp" %>
		<%@ include file="/alopex-ui/scriptbind.jsp" %>
		<script type="text/javascript" src="js/hdfsInfo.js"></script>
	
	</head>
	

<body>
	<center>
		<h2>Hello Test Page, Spring MVC & Hadoop File System</h2>
	
		<p>Welcome, <strong>${pageName}</strong></p>
	</center>
	
	<div style="display:none;">
		<input type="text" name="parentPath" >
	</div>
	
	<div style="line-height: 30px; margin-bottom: 10px;">
		<div id="groupBtn" class="Margin-bottom-10" style="float:right !important;">
			<div style="float:right !important;">
				<label>폴더명: <input id="dirName" class="Textinput" placeholder="값을 입력하세요."></label>
				<button id="addDir" name="/mkdir" class="Button">ADD</button>
				
				<select id="cnt_dirName" class="Select" data-bind-option="cnt:dirName" data-bind="options:option_data" data-placeholder="선택"></select>
				
				<button id="delDir" name="/deldir" class="Button">DELETE</button>
			</div>
		</div>
		<div id="showPath"></div>
	</div>
	
	<div style="float:left !important; width:100%;">
	    <div id="pathFrame" class="top_panel"></div>  
	    <div id="valueFrame" class="bottom_panel"></div>
	</div>
	
</body>
</html>
