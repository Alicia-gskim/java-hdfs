<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
	<head>
		<title>Alopex UI/UX 표준 Main Portal 형</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		
		<script src="alopex-ui/alopex/script/jquery/jquery-1.11.3.js"></script>
		<%@ include file="/alopex-ui/cssbind.jsp" %>
		<%@ include file="/alopex-ui/scriptbind.jsp" %>
		<script type="text/javascript" src="js/selectPage.js"></script>
	</head>
	

<body class="Margin-0 Padding-0">
	<div id="content">
		<h2>Welcome, ${hello}, <span data-bind="text:name"></span></h2>
	
		<p>Click the button. After click the button, you will see the next page.</p><p>Please, Choise the button.</p>
	</div>
	
	<br>
	
	<center>
		<h3>ButtonList</h3>
		<hr>
		
		<div style="width:50%">
			<ul class="List">
				<li class="Link"><a name="hdfsPage" href="#">HDFS Page</a></li>
			</ul>
			<ul class="List">
				<li class="Link"><a name="alopexPage" href="#">Alopex-UI Page</a></li>
			</ul>
		</div>
	</center>
</body>
</html>