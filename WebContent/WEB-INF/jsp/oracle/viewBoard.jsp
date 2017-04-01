<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>View Board Page</title>
	
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="/js/oracle/viewBoard.js"></script>
	<script type="text/javascript" src="/uitemplate/datatables/jquery.dataTables.js"></script>
	<script type="text/javascript" src="/uitemplate/datatables/dataTables.bootstrap.js"></script>
	<script type="text/javascript" src="/uitemplate/admin/js/bootstrap.min.js"></script>
	
	<%@ include file="cssbind.jsp" %>
</head>
<body class="skin-red">
	
		<%@ include file="headerclass.jsp" %>
		<%@ include file="sidebar.jsp" %>
	
	<div class="content-wrapper">
		<center><hr>${msg }<hr></center>
		<br/>
		
		<div class="row">
			<div id="tblList" class="col-xs-12">
				
			</div>
			<div id="tblContents" class="col-xs-12">
			
			</div>
		</div>
	</div>
	<footer class="main-footer">
		<center><hr>Board Main Page Footer<hr></center>
	</footer>
</body>
</html>