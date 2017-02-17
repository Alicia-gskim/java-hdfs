<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>Insert title here</title>
		
		<script src="alopex-ui/alopex/script/jquery/jquery-1.11.3.js"></script>
		<%@ include file="/alopex-ui/cssbind.jsp" %>
		<%@ include file="/alopex-ui/scriptbind.jsp" %>
		<script type="text/javascript" src="js/index.js"></script>
		
	</head>
	

<body>
	<center>
	
		<h3>This Page Introduce.</h3>
		<p>This page is ${result}</p>
	
		<form>
	        <label>이름 :
		        <input id="name" class="Textinput">
		        <input id="next" class="Button" value="조회">
	        </label>
		</form>
	
		<br>
		<hr>
		<p>Input the name and click the button. After click the button, you will see the next page.</p><p>Please, Input the name correctly.</p>
	</center>
</body>
</html>
<%--  <%	response.sendRedirect("home"); %> --%>