<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
	
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="/js/oracle/oracle.js"></script>
	<script type="text/javascript" src="/uitemplate/admin/js/app.js"></script>
	
	<%@ include file="cssbind.jsp" %>
</head>
<body class="skin-red">
	<%@ include file="headerclass.jsp" %>
	<%@ include file="sidebar.jsp" %>
	
	<div class="content-wrapper">
	</div>
	
	<footer class="main-footer">
		<center>
			<hr>
			${welCome}
			<hr>
		</center>
		<div>
			<button id="createBtn" name="create"> Create Table </button>
			<button id="writeBtn" name="write"> Write Data </button>
		</div>
		<div>
			<button id="moveBtn" name="move"> Select Oracle Database Info </button>
		</div>
		<div>
			<button id="insertBtn" name="board"> Board Page </button>
		</div>
	</footer>
</body>


</html>