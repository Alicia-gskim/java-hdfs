<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
	
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="/js/oracle/oracle.js"></script>
</head>
<body>
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
	
	<div class="jsonViewArea">
		<table class="selectInfo" border="1px solid">
			<thead>
				<tr>
					<th scope="col">IDX</th>
					<th scope="col">TITLE</th>
					<th scope="col">NAME</th>
					<th scope="col">IP</th>
					<th scope="col">INS_DT</th>
					<th scope="col">UPD_DT</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>
	</div>
</body>
</html>