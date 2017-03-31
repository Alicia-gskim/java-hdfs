<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
	
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="/js/oracle/createTbl.js"></script>
</head>
<body>
	<center><hr>${msg }<hr></center>
	<div>
		<form method="post">
			<table id="tblInfo">
				<thead>
					<tr>
						<th scope="row">CREATE TABLE</th>
						<td><input type="text" name="tblName"/></td>
						<th scope="row">(</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">IDX NUMBER,</th>
						<td>TITLE VARCHAR2(50),</td>
						<td>NAME VARCHAR2(10),</td>
						<td>IP VARCHAR2(30),</td>
						<th scope="row">INS_DT SYSDATE,</th>
						<th scope="row">UPD_DT SYSDATE</th>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<th scope="row">);</th>
					</tr>
				</tfoot>
			</table>
		</form>
	</div>
</body>
</html>