<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>Alopex UI/UX íì¤ Main Workspace í</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<!-- <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script> -->
	<script src="alopex-ui/alopex/script/jquery/jquery-1.11.3.js"></script>
	
	<%@ include file="/alopex-ui/cssbind.jsp" %>
	<%@ include file="/alopex-ui/scriptbind.jsp" %>
	
	<script type="text/javascript" src="js/common.js"></script>
</head>
<body class="Margin-0 Padding-0">
	<div class="Width-100">
		<!-- header -->
		<%@include file="/alopex-ui/common/header.jsp" %>
		<!-- //header -->
		<div class="Grid-wrapper">
			<h3 class="Header-4 Padding-bottom-10" style="border-bottom: 1px solid #d8d8d8">Main Workspace Type</h3>
			<!-- Main Sample Start-->
			<div class="Grid-sm-12">
				<div class="Grid-sm-12">
					<h1 class="Float-left Header-5"><img src="/alopex-ui/alopex/css/portal_img/sk-logo.gif" alt="SK Holding C&amp;C"></h1>
					<div class="Float-right">
						<!-- 오른쪽 topmenu -->
						<ul>
							<li class="Display-inline"><a href="#0" class="Font-small Color-primary Text-none">Utility01</a></li>
							<li class="Display-inline Margin-left-10"><a href="#0" class="Font-small Color-primary Text-none">Utility02</a></li>
							<li class="Display-inline Margin-left-10"><a href="#0" class="Font-small Color-primary Text-none">Utility03</a></li>
							<li class="Display-inline Margin-left-10"><a href="#0" class="Font-small Color-primary Text-none">Utility04</a></li>
						</ul>
						<!-- 하단 검색창 -->
						<div class="Text-right">
							<input class="Textinput Margin-right-5" placeholder="검색어를 입력하세요"><button class="Button Onlyicon"><span class="Icon Search" data-position="top"></span></button>
						</div>
					</div>
				</div>
				<!-- menu -->
				<div class="Grid-sm-12">
					<ul class="Navmenu" style="z-index:100">
					    <li><a name="portalType" href="#">Main Sample</a>
					        <ul>
					            <li><a name="portalType" href="#">Portal 형</a></li>
					            <li><a name="workspaceType" href="#">Workspace 형</a></li>
					        </ul>
					    </li>
					   <li><a href="../template/basic1.html">Basic Template</a>
					        <ul>
					            <li><a href="../template/basic1.html">Basic Type</a>
					            	<ul>
					            		<li><a href="../template/basic1.html">1 Grid board</a></li>
					            		<li><a href="../template/basic2.html">Grid/Table/Tab 복합형</a></li>
					            	</ul>
					            </li>
					            <li><a href="../template/board1.html">게시판형</a>
					                <ul>
					                	<li><a href="../template/board1.html">2 Grid board</a></li>
					                	<li><a href="../template/board2.html">Grid/Table 복합형</a></li>
					                	<li><a href="../template/board3.html">Grid/Table/Tree</a></li>
					                	<li><a href="../template/board4.html">Form/Chart 복합형</a></li>
					                </ul>
					            </li>
					            <li><a href="../template/table1.html">테이블형</a>
					            	<ul>
					            		<li><a href="../template/table1.html">Table 내 Table</a></li>
					            	</ul>
					            </li>
					            <li>
					            	<a href="../template/dialog1.html">Dialog &amp; Popup</a>
					            	<ul>
					            		<li><a href="../template/dialog1.html">Dialog</a></li>
					            		<li><a href="../template/popup1.html">Popup</a>
					            	</ul>
					            </li>
					            <li>
					            	<a href="../template/contents.html">컨텐츠</a>
					            	<ul>
					            		<li><a href="../template/contents.html">컨텐츠 리스트형</a></li>
					            	</ul>
					            </li>
					        </ul>
					    </li>
					    <li><a href="../template/object1.html">Object Template</a>
					    	<ul>
					    		<li><a href="../template/object1.html">Accordion Template</a></li>
					    		<li><a href="../template/object2.html">Button Template</a></li>
					    		<li><a href="../template/object3.html">Carousel</a></li>
					    		<li><a href="../template/object4.html">Paging</a></li>
					    		<li><a href="../template/object5.html">Progress bar</a></li>
					    	</ul>
					    </li>
					    <li><a href="../template/layout1.html">Layout Template</a>
					    	<ul>
					    		<li><a href="../template/layout1.html">UI Grid Layout</a></li>
					    		<li><a href="../template/layout2.html">Search Box Template</a></li>
					    		<li><a href="../template/layout3.html">LNB Template</a></li>
					    		<li><a href="../template/layout4.html">Static Contents</a></li>
					    		<li><a href="../template/layout5.html">Footer Template</a></li>
					    		<li><a href="../template/layout6.html">Error Template</a></li>
					    	</ul>
					    </li>
					</ul>
					<div class="Grid-sm-12 Margin-top-20">
						<!-- left contents -->
						<div class="Grid-sm-4">
							<div id="carousel" class="Carousel" style="width:388px; height:500px" data-autoSlidemode="true" data-autoSlideDuration="5000">
							    <div class="Scroller">
							        <div class="Page">
							            <img src="/alopex-ui/alopex/css/portal_img/main2-carousel3.jpg">
							        </div>
							        <div class="Page">
							            <img src="/alopex-ui/alopex/css/portal_img/main2-carousel2.jpg">
							        </div>
							        <div class="Page">
							            <img src="/alopex-ui/alopex/css/portal_img/main2-carousel1.jpg">
							        </div>
							    </div>
							    <div class="Paging Mobile">
							        <a class="Link">1</a>
							        <a class="Link">2</a>
							        <a class="Link">3</a>
							    </div>
							</div>
							<div class="Margin-top-10">
								<div class="Grid-sm-12 Margin-top-5">
									<div class="Grid-sm-6">
										<div class="Panel Margin-right-10">
											<img src="/alopex-ui/alopex/css/portal_img/content-img1.png" class="Width-100" alt="">
											<div class="Padding-left-10 Padding-right-10 Padding-bottom-10">
												<h5 class="Margin-0 Padding-top-10 Padding-bottom-10">Forest Protection Activities</h5>
												<p class="Margin-0 Font-default">On Arbor Day every year, the executives and employees</p>
											</div>
										</div>
									</div>
									<div class="Grid-sm-6">
										<div class="Panel Margin-left-10">
											<img src="/alopex-ui/alopex/css/portal_img/content-img2.png" class="Width-100" alt="">
											<div class="Padding-left-10 Padding-right-10 Padding-bottom-10">
												<h5 class="Margin-0 Padding-top-10 Padding-bottom-10">Supporting Social Adaption</h5>
												<p class="Margin-0 Font-default">We conduct regular programs for children with physical</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- center contents -->
						<div class="Grid-sm-5">
							<div class="Grid-sm-12 Margin-left-20">
								<div class="Panel Padding-top-15 Padding-left-20 Padding-bottom-15">
									<div class="Padding-bottom-25" style="border-bottom: 1px solid #d8d8d8">
										<h4 class="Float-left Header-5 Margin-0">Board List Contents</h4>
										<div class="Float-right Padding-right-20 ">
											<a href="#0" class="Margin-right-5"><span class="Icon Chevron-left"></span></a>
											<a href="#0" class="Margin-right-5"><span class="Icon Chevron-right"></span></a>
											<a href="#0"><span class="Icon Plus-sign"></span></a>
										</div>
									</div>
									<div>
										<p class="Display-inblock Width-35"><img src="/alopex-ui/alopex/css/portal_img/content-img2.png" alt=""></p>
										<dl class="Display-inblock Width-60 Padding-left-20">
											<dt class="Font-bold Padding-bottom-10"><a href="#0" class="Text-none Color-primary">Thumbnails Board Type Contents Subject Name</a></dt>
											<dd class="Font-default Margin-0">This will provide some detailed information about the thumbnail board type.</dd>
											<dd class="Font-default Margin-0 Padding-top-10">2016.03.22</dd>
										</dl>
										<ul class="List-style-none Margin-0 Padding-0 Font-default">
											<li class="Padding-top-10">
												<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis">We conduct regular programs for children with physical and mental disabilities living</span></a>
												<span class="Margin-left-10">2016.03.22</span>
											</li>
											<li class="Padding-top-10">
												<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis">Thumbnails Board Type Contents Subject Name</span></a>
												<span class="Margin-left-10">2016.03.22</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							
							<div class="Grid-sm-12 Margin-left-20">
								<div class="Panel Padding-top-10 Padding-left-20 Padding-bottom-15">
									<div class="Padding-bottom-25" style="border-bottom: 1px solid #d8d8d8">
										<h4 class="Float-left Header-5 Margin-0">Board List Contents</h4>
										<div class="Float-right Padding-right-20 ">
											<a href="#0" class="Margin-right-5"><span class="Icon Chevron-left"></span></a>
											<a href="#0" class="Margin-right-5"><span class="Icon Chevron-right"></span></a>
											<a href="#0"><span class="Icon Plus-sign"></span></a>
										</div>
									</div>
									<ul class="List-style-none Margin-0 Padding-0 Font-default">
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis"><span class="Label Danger Margin-right-10">Hot</span>For people with disabilities living at home who face mobility difficulties</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis"><span class="Label Warning Margin-right-10">Notice</span>For people with disabilities living at home who face mobility difficulties</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis"><span class="Label Default Margin-right-10">News</span>We conduct regular programs for children with physical and mental disabilities living</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis"><span class="Label Default Margin-right-10">News</span>Forest Protection Activities</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis"><span class="Label Confirm Margin-right-10">Biz &amp; Tech</span>We conduct regular programs for children with physical and mental disabilities living</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis"><span class="Label Warning Margin-right-10">Notice</span>Supporting Social Adaption</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis"><span class="Label Success Margin-right-10">성공스토리</span>We conduct regular programs for children with physical and mental disabilities living</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
									</ul>
								</div>
							</div>
							
							<div class="Grid-sm-12 Margin-left-20">
								<div class="Panel Padding-top-10 Padding-left-20 Padding-bottom-15">
									<div class="Padding-bottom-25" style="border-bottom: 1px solid #d8d8d8">
										<h4 class="Float-left Header-5 Margin-0">Board List Contents</h4>
										<div class="Float-right Padding-right-20 ">
											<a href="#0"><span class="Icon Plus-sign"></span></a>
										</div>
									</div>
									<ul class="List-style-none Margin-0 Padding-0 Font-default">
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis">On Arbor Day every year, the executives and employees of SK holdings C&map;C</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis">For people with disabilities living at home who face mobility difficulties</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis">On Arbor Day every year, the executives and employees of SK holdings</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis">Supporting Social Adaption</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis">We conduct regular programs for children with physical and mental disabilities living</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis">For people with disabilities living at home who face mobility difficulties</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
										<li class="Padding-top-10">
											<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-80 Ellipsis">Supporting Social Adaption</span></a>
											<span class="Margin-left-10">2016.03.22</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<!-- right contents -->
						<div class="Grid-sm-3">
							<div class="Panel Margin-left-40">
								<div class="Panel-header">Notice Panel
									<p class="Float-right Margin-0" style="margin-top:-4px"><button class="Float-right Button Default Onlyicon"><span class="Icon Plus-sign" data-position="top"></span></button></p>
								</div>
    							<div class="Panel-content">
    								<ul class="List-style-none Margin-0 Padding-0">
    									<li><a href="#0" class="Display-inblock Width-95 Ellipsis Margin-0 Color-default Text-none">스마트 팩토리, 제조산업의 미래를 본다.조산업의 미래를 본</a><p class="Margin-top-5">2016.05.05</p></li>
    									<li><a href="#0" class="Display-inblock Width-95 Ellipsis Margin-0 Color-default Text-none">BigData에게 빅데이터를 묻다</a><p class="Margin-top-5">2016.05.05</p></li>
    									<li><a href="#0" class="Display-inblock Width-95 Ellipsis Margin-0 Color-default Text-none">알파고와 이세돌 9단의 제 5국 경기 종합 정리</a><p class="Margin-top-5">2016.05.05</p></li>
    									<li><a href="#0" class="Display-inblock Width-95 Ellipsis Margin-0 Color-default Text-none">알파고와 이세돌 9단의 제 5국 경기 종합 정리</a><p class="Margin-top-5">2016.05.05</p></li>
    								</ul>
    							</div>
							</div>
							<div class="Margin-top-20 Margin-left-40">
								<img src="/alopex-ui/alopex/css/portal_img/left-banner4.png" class="Width-100" alt="">
								<img src="/alopex-ui/alopex/css/portal_img/left-banner5.png" class="Width-100 Margin-top-10" alt="">
								<img src="/alopex-ui/alopex/css/portal_img/left-banner1.png" class="Width-100 Margin-top-10" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--//Main Sample End -->

			<!-- footer start -->
			<%@include file="/alopex-ui/common/footer.jsp" %>
			<!-- //footer end -->
		</div>
	</div>
</body>
</html>