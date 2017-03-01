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
<!-- 		<script type="text/javascript" src="js/fileupload.js"></script> -->
		
	</head>
	

<body>
	<center>
		<h2>Hello Test Page, Spring MVC & Hadoop File System</h2>
	
		<p>Welcome, <strong>${pageName}</strong></p>
	</center>
	
	<div style="display:none;">
		<input type="text" name="parentPath" >
		<input type="text" name="fullPath" >
	</div>
	
	<div style="line-height: 30px;">
		<div id="groupBtn" class="Margin-bottom-40" style="float:right !important;">
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
	
	<div id="upload_area" style="float:left; width:100%;">
		<center>
			<h4>The subfunction allows you can upload</h4>
			<h4>the file to the desired path</h4>
		</center>
		
		<div id="fileuploader" class="Fileupload" data-selectType="advance" ></div>

		<div class="Float-right Margin-top-5">
			<button id="startUpload" class="Button Confirm"> startUpload </button>
			<button id="stopUpload" class="Button Danger"> stopUpload </button>
			<button id="cancelAll" class="Button Warning"> cancelAll </button>
		</div>
	</div>
	
	<script id="template-upload" type="text/x-tmpl">
{%=fileList%}
		{% for (var i=0, file; file=o.files[i]; i++) { %}
    		<tr class="template-upload fade">
        		<td>
            		<span class="preview"></span>
        		</td>
        		<td>
		            <p class="name">{%=file.name%}</p>
            		<strong class="error"></strong>
        		</td>
        		<td>
            		<p class="size">Processing...</p>
	            	<div class="progress"></div>
        		</td>
        		<td>
            		{% if (!i && !o.options.autoUpload) { %}
                		<button class="start" disabled>Start</button>
            		{% } %}
            		{% if (!i) { %}
                		<button class="cancel">Cancel</button>
            		{% } %}
        		</td>
    		</tr>
		{% } %}
		</script>
	
</body>
</html>
