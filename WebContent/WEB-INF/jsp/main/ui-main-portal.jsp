<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
	<title>Alopex UI/UX íì¤ Main Portal í</title>
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
			<h3 class="Header-4 Padding-bottom-10" style="border-bottom: 1px solid #d8d8d8">Main Portal Type</h3>
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
						<div class="Grid-sm-3">
							<div class="Padding-right-20">
								<img src="/alopex-ui/alopex/css/portal_img/left-banner1.png" alt="">
							</div>
							<ul class="List Margin-0 Margin-right-20 Margin-top-15">
							    <li class="Link"><a href="#0"><span class="Icon Star"></span><span class="Margin-left-5">Status Menu01</span></a></li>
							    <li class="Link"><a href="#0"><span class="Icon User"></span><span class="Margin-left-5">Status Menu02</span></a></li>
							    <li class="Link"><a href="#0"><span class="Icon File"></span><span class="Margin-left-5">Status Menu03</span></a></li>
							    <li class="Link"><a href="#0"><span class="Icon Book"></span><span class="Margin-left-5">Status Menu04</span></a></li>
							    <li class="Link"><a href="#0"><span class="Icon Tint"></span><span class="Margin-left-5">Status Menu05</span></a></li>
							    <li class="Link"><a href="#0"><span class="Icon Inbox"></span><span class="Margin-left-5">Status Menu06</span></a></li>
							    <li class="Link"><a href="#0"><span class="Icon Check"></span><span class="Margin-left-5">Status Menu07</span></a></li>
							</ul>
							<div class="Margin-top-20">
								<a href="#0"><img src="/alopex-ui/alopex/css/portal_img/left-banner2.png" alt=""></a>
								<a href="#0"><img src="/alopex-ui/alopex/css/portal_img/left-banner3.png" class="Margin-top-10" alt=""></a>
								<a href="#0"><img src="/alopex-ui/alopex/css/portal_img/left-banner4.png" class="Margin-top-10" alt=""></a>
								<a href="#0"><img src="/alopex-ui/alopex/css/portal_img/left-banner5.png" class="Margin-top-10" alt=""></a>
							</div>
						</div>
						<!-- center contents -->
						<div class="Grid-sm-6">
							<div id="carousel" class="Carousel" data-autoSlidemode="true" data-autoSlideDuration="5000">
							    <div class="Scroller">
							        <div class="Page">
							            <img src="/alopex-ui/alopex/css/portal_img/carousel3.jpg">
							        </div>
							        <div class="Page">
							            <img src="/alopex-ui/alopex/css/portal_img/carousel2.jpg">
							        </div>
							        <div class="Page">
							            <img src="/alopex-ui/alopex/css/portal_img/carousel1.jpg">
							        </div>
							    </div>
							    <a class="Prev"></a>
    							<a class="Next"></a>
							    <div class="Paging Mobile">
							        <a class="Link">1</a>
							        <a class="Link">2</a>
							        <a class="Link">3</a>
							    </div>
							</div>
							<div class="Margin-top-25">
								<div class="Padding-bottom-30" style="border-bottom: 1px solid #d8d8d8">
									<h4 class="Float-left Header-5 Margin-0">Title Content</h4>
									<button class="Float-right Button Default Onlyicon"><span class="Icon Plus-sign" data-position="top"></span></button>
								</div>
								<div class="Grid-sm-12 Margin-top-10">
									<div class="Grid-sm-4">
										<a href="#0"><img src="/alopex-ui/alopex/css/portal_img/content-img1.png" class="Width-95" alt=""></a>
										<h5 class="Margin-0 Padding-top-10 Padding-bottom-10"><a href="#0" class="Color-primary">Forest Protection Activities</a></h5>
										<p class="Margin-0 Font-default Width-95">On Arbor Day every year, the executives and employees of SK holdings C&amp;C and its subsidiaries plant seedlings in the ecologica</p>
									</div>
									<div class="Grid-sm-4">
										<a href="#0"><img src="/alopex-ui/alopex/css/portal_img/content-img2.png" class="Width-95 Margin-left-5" alt=""></a>
										<h5 class="Margin-0 Padding-top-10 Padding-bottom-10 Margin-left-5"><a href="#0" class="Color-primary">Clean Street Campaign with people</a></h5>
										<p class="Margin-0 Font-default Width-95 Margin-left-5">The members of organization engage in the Smoking Cessation Campaign near our office in Bundang and 
										</p>
									</div>
									<div class="Grid-sm-4">
										<a href="#0"><img src="/alopex-ui/alopex/css/portal_img/content-img3.png" class="Width-95 Margin-left-10" alt=""></a>
										<h5 class="Margin-0 Padding-top-10 Padding-bottom-10 Margin-left-5"><a href="#0" class="Color-primary">Supporting Social Adaption</a></h5>
										<p class="Margin-0 Font-default Width-95 Margin-left-5">We conduct regular programs for children with physical and mental disabilities living in welfare welfare physical a</p>
									</div>
								</div>
							</div>
							<div class="Grid-sm-12 Margin-top-35">
								<div class="Padding-bottom-30" style="border-bottom: 1px solid #d8d8d8">
									<h4 class="Float-left Header-5 Margin-0">Thumnails Contents</h4>
									<button class="Float-right Button Default Onlyicon"><span class="Icon Plus-sign" data-position="top"></span></button>
								</div>
								<ul class="List-style-none Margin-0 Padding-0">
									<li class="Overflow-hid">
										<p class="Float-left Width-30"><a href="#0"><img src="/alopex-ui/alopex/css/portal_img/content-img3.png" alt=""></a></p>
										<dl class="Float-left Width-65 Padding-left-10">
											<dt class="Font-bold Padding-bottom-10"><a href="#0" class="Text-none Color-primary">Thumbnails Board Type Contents Subject Name</a></dt>
											<dd class="Font-default Margin-0">This will provide some detailed information about the thumbnail board type. This will provide some detailed information about the thumbnail board type.</dd>
											<dd class="Font-default Margin-0 Padding-top-10">2016.03.22</dd>
										</dl>
									</li>
									<li class="Overflow-hid">
										<p class="Float-left Width-30 Margin-0"><a href="#0"><img src="/alopex-ui/alopex/css/portal_img/content-img2.png" alt=""></a></p>
										<dl class="Float-left Width-65 Padding-left-10 Margin-0">
											<dt class="Font-bold Padding-bottom-10"><a href="#0" class="Text-none Color-primary">Thumbnails Board Type Contents Subject Name</a></dt>
											<dd class="Font-default Margin-0">This will provide some detailed information about the thumbnail board type. This will provide some detailed information about the thumbnail board type.</dd>
											<dd class="Font-default Margin-0 Padding-top-10">2016.03.22</dd>
										</dl>
									</li>
									<li class="Overflow-hid">
										<p class="Float-left Width-30"><a href="#0"><img src="/alopex-ui/alopex/css/portal_img/content-img1.png" alt=""></a></p>
										<dl class="Float-left Width-65 Padding-left-10">
											<dt class="Font-bold Padding-bottom-10"><a href="#0" class="Text-none Color-primary">Thumbnails Board Type Contents Subject Name</a></dt>
											<dd class="Font-default Margin-0">This will provide some detailed information about the thumbnail board type. This will provide some detailed information about the thumbnail board type.</dd>
											<dd class="Font-default Margin-0 Padding-top-10">2016.03.22</dd>
										</dl>
									</li>
								</ul>
							</div>
							<div class="Grid-sm-12 Margin-top-20">
								<div class="Padding-bottom-30" style="border-bottom: 1px solid #d8d8d8">
									<h4 class="Float-left Header-5 Margin-0">Board List Contents</h4>
									<button class="Float-right Button Default Onlyicon"><span class="Icon Plus-sign" data-position="top"></span></button>
								</div>
								<ul class="List-style-none Margin-0 Padding-0 Font-default">
									<li class="Padding-top-5">
										<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-60 Ellipsis">For people with disabilities living at home who face mobility difficulties</span></a>
										<span class="Margin-left-10">SK C&amp;C</span>
										<span class="Margin-left-10">Hong Gil dong</span>
										<span class="Margin-left-10">2016.03.22</span>
									</li>
									<li class="Padding-top-5">
										<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-60 Ellipsis">For people with disabilities living at home who face mobility difficulties</span></a>
										<span class="Margin-left-10">SK C&amp;C</span>
										<span class="Margin-left-10">Hong Gil dong</span>
										<span class="Margin-left-10">2016.03.22</span>
									</li>
									<li class="Padding-top-5">
										<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-60 Ellipsis">For people with disabilities living at home who face mobility difficulties</span></a>
										<span class="Margin-left-10">SK C&amp;C</span>
										<span class="Margin-left-10">Hong Gil dong</span>
										<span class="Margin-left-10">2016.03.22</span>
									</li>
									<li class="Padding-top-5">
										<a href="#0" class="Text-none Color-primary"><span class="Float-left Width-60 Ellipsis">For people with disabilities living at home who face mobility difficulties</span></a>
										<span class="Margin-left-10">SK C&amp;C</span>
										<span class="Margin-left-10">Hong Gil dong</span>
										<span class="Margin-left-10">2016.03.22</span>
									</li>
								</ul>
							</div>
						</div>
						<!-- right contents -->
						<div class="Grid-sm-3">
							<div class="Panel Margin-left-20">
								<div class="Panel-header">Notice Panel
									<p class="Float-right Margin-0" style="margin-top:-4px"><button class="Float-right Button Default Onlyicon"><span class="Icon Plus-sign" data-position="top"></span></button></p>
								</div>
    							<div class="Panel-content">
    								<ul class="List-style-none Margin-0 Padding-0">
    									<li><a href="#0" class="Display-inblock Width-95 Ellipsis Margin-0 Color-default Text-none">스마트 팩토리, 제조산업의 미래를 본다.조산업의 미래를 본</a><p class="Margin-top-5">2016.05.05</p></li>
    									<li><a href="#0" class="Display-inblock Width-95 Ellipsis Margin-0 Color-default Text-none">BigData에게 빅데이터를 묻다</a><p class="Margin-top-5">2016.05.05</p></li>
    									<li><a href="#0" class="Display-inblock Width-95 Ellipsis Margin-0 Color-default Text-none">알파고와 이세돌 9단의 제 5국 경기 종합 정리</a><p class="Margin-top-5">2016.05.05</p></li>
    									<li><a href="#0" class="Display-inblock Width-95 Ellipsis Margin-0 Color-default Text-none">알파고와 이세돌 9단의 제 5국 경기 종합 정리</a><p class="Margin-top-5">2016.05.05</p></li>
    									<li><a href="#0" class="Display-inblock Width-95 Ellipsis Margin-0 Color-default Text-none">알파고와 이세돌 9단의 제 5국 경기 종합 정리</a><p class="Margin-top-5">2016.05.05</p></li>
    								</ul>
    							</div>
							</div>
							<div class="Panel Margin-left-20">
								<div class="Panel-header">TRAND REPORT</div>
								<div class="Panel-content">
									<img src="/alopex-ui/alopex/css/portal_img/left-banner-sample1.png" class="Width-100">
									<p class="Font-bold">공짜가 핵심 비즈니스 가치가 된 이유</p>
									<p>오픈소스, 그러니까 무료로 공유하는 자유 소프트웨어는 지난 1980년대 초반 등장했다. 리눅스 같은 운영ㅇ체제가 주목을 받기도 했지만 2016년 현재 오픈 소스....</p>
									<span>2016.04.01 Biz &amp; Tech / 스페셜 리포트</span>
								</div>
							</div>
							<div class="Margin-left-20">
								<div class="Tabs">
								    <ul>
								        <li data-content="#tab1">Tab Menu1</li>
								        <li data-content="#tab2">Tab Menu2</li>
								    </ul>
								    <div id="tab1" class="Width-100" style="border: 1px solid #040404; border-top:0; height:300px">
								        <ul class="List-style-none Margin-0 Padding-left-10 Padding-top-10 Font-default">
								        	<li>
								        		<span class="Label Default">News</span>
								        		<p class="Width-95 Ellipsis Margin-top-5">ICT개발자를 위한 토크 콘서트 디톡스가 개최됩니다.</p>
								        	</li>
								        	<li>
								        		<span class="Label Confirm">Biz &amp; Tech</span>
								        		<p class="Width-95 Ellipsis Margin-top-5">스페셜 리포트: 알파고와 이세돌9단의 현상을 가다.</p>
								        	</li>
								        	<li>
								        		<span class="Label Primary">Trand Report</span>
								        		<p class="Width-95 Ellipsis Margin-top-5">디지털시대, 모으고 연결하고 즐겨라</p>
								        	</li>
								        	<li>
								        		<span class="Label Success">Global C&amp;C</span>
								        		<p class="Width-95 Ellipsis Margin-top-5">세계속의 SK C&amp;C.</p>
								        	</li>
								        	<li>
								        		<span class="Label Warning">Warning</span>
								        		<p class="Width-95 Ellipsis Margin-top-5">봄철 황사 미세먼지를 조심하세요.</p>
								        	</li>
								        	<li>
								        		<span class="Label Primary">Trand Report</span>
								        		<p class="Width-95 Ellipsis Margin-top-5">디지털시대, 모으고 연결하고 즐겨라</p>
								        	</li>
								        </ul>
								    </div>
								    <div id="tab2" class="Width-100" style="border: 1px solid #040404; border-top:0; height:300px">
								    	<div class="Padding-left-20 Padding-right-20">
								    		<img src="/alopex-ui/alopex/css/portal_img/banner3.png" class="Width-100 Margin-top-20">
								    		<p>We are contributing to society by using our expertise in IT to construct websites for welfare facilities to improve information accessibility for the marginalized classes. 
								    		In addition, we have been running computer donation programs and computer repair services to help...</p>
								    	</div>
								    </div>
								</div>
							</div>
							<!-- Text Carousel -->
							<div class="Carousel Margin-left-20 Margin-top-20" style="width:270px; height: 180px; background: #e1e2e6" data-autoSlidemode="true" data-autoSlideDuration="5000">
							    <div class="Scroller">
							        <div class="Page Text-center Margin-top-15 Padding-left-20 Padding-right-20">
							            <p class="Font-bold Font-big Color-warning">Creative ICT Factory</p> 
							            <p>With superior technological prowess and industry insight</p>
							        </div>
							        <div class="Page Text-center Margin-top-15 Padding-left-20 Padding-right-20">
							            <p class="Font-bold Font-big Color-success">IT Sector Activities</p> 
							            <p>Website Construction for Non-Profit Organizations</p>
							        </div>
							        <div class="Page Text-center Margin-top-15 Padding-left-20 Padding-right-20">
							            <p class="Font-bold Font-big Color-info">Age Group-Based IT Education</p> 
							            <p>we are offering customized IT education programs</p>
							        </div>
							    </div>
							    <div class="Paging Mobile">
							        <a class="Link">1</a>
							        <a class="Link">2</a>
							        <a class="Link">3</a>
							    </div>
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