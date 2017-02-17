$a.page(function() {
	
	var data = [
    	{
    		"name": "Vera",
    		"phone": "138-955-8109",
    		"email": "eu.odio@maurisblanditmattis.ca",
    		"birthday": "2015-07-18",
    		"zip": "467025",
    		"salary": 787197,
    		"absence": 100,
    		"country": "Bahamas",
    		"city": "Serrungarina",
    		"company": "Suspendisse Dui Fusce PC",
    		"type": 2
    	},
    	{
    		"name": "Autumn",
    		"phone": "369-405-2973",
    		"email": "Quisque@loremsemper.com",
    		"birthday": "2014-05-03",
    		"zip": "370659",
    		"salary": 168857,
    		"absence": 200,
    		"country": "Suriname",
    		"city": "Eigenbrakel",
    		"company": "Nibh Dolor Nonummy LLC",
    		"type": 9
    	},
    	{
    		"name": "Amy",
    		"phone": "693-6192",
    		"email": "sit@egetmagnaSuspendisse.ca",
    		"birthday": "2015-08-06",
    		"zip": "2794",
    		"salary": 235913,
    		"absence": 30,
    		"country": "Cocos (Keeling) Islands",
    		"city": "Chartres",
    		"company": "Tincidunt Consulting",
    		"type": 1
    	},
    	{
    		"name": "Thor",
    		"phone": "569-6512",
    		"email": "parturient.montes.nascetur@imperdietnon.edu",
    		"birthday": "2014-01-17",
    		"zip": "26962",
    		"salary": 853938,
    		"absence": 10,
    		"country": "Spain",
    		"city": "Beho",
    		"company": "Nulla LLC",
    		"type": 10
    	},
    	{
    		"name": "Dakota",
    		"phone": "270-477-0444",
    		"email": "sed.pede@tortordictumeu.edu",
    		"birthday": "2015-06-17",
    		"zip": "7374PU",
    		"salary": 575048,
    		"absence": 10,
    		"country": "Bonaire, Sint Eustatius and Saba",
    		"city": "Yahyalı",
    		"company": "Parturient Montes Nascetur Inc.",
    		"type": 1
    	},
    	{
    		"name": "Cooper",
    		"phone": "610-9420",
    		"email": "placerat.Cras.dictum@eratVivamus.net",
    		"birthday": "2015-07-20",
    		"zip": "73706",
    		"salary": 170683,
    		"absence": 100,
    		"country": "New Caledonia",
    		"city": "Deline",
    		"company": "Nulla Tincidunt Neque Ltd",
    		"type": 2
    	},
    	{
    		"name": "Bethany",
    		"phone": "949-378-7845",
    		"email": "erat@Morbiaccumsanlaoreet.edu",
    		"birthday": "2014-12-16",
    		"zip": "83245-257",
    		"salary": 998642,
    		"absence": 89,
    		"country": "Poland",
    		"city": "Milwaukee",
    		"company": "Vel Sapien Company",
    		"type": 1
    	},
    	{
    		"name": "Ronan",
    		"phone": "503-6165",
    		"email": "pellentesque@egestasDuisac.co.uk",
    		"birthday": "2015-03-23",
    		"zip": "1124",
    		"salary": 38416,
    		"absence": 65,
    		"country": "Aruba",
    		"city": "Calgary",
    		"company": "Donec PC",
    		"type": 7
    	},
    	{
    		"name": "Lamar",
    		"phone": "244-4542",
    		"email": "enim.sit@nonarcu.com",
    		"birthday": "2015-07-29",
    		"zip": "18214",
    		"salary": 106591,
    		"absence": 4,
    		"country": "Palau",
    		"city": "Portland",
    		"company": "Tristique Pharetra Quisque Corp.",
    		"type": 4
    	},
    	{
    		"name": "Gisela",
    		"phone": "203-196-7156",
    		"email": "porttitor.tellus@Sed.org",
    		"birthday": "2014-03-20",
    		"zip": "587048",
    		"salary": 255047,
    		"absence": 100,
    		"country": "Italy",
    		"city": "Aberystwyth",
    		"company": "Augue Eu Tempor Associates",
    		"type": 6
    	},
    	{
    		"name": "Nolan",
    		"phone": "694-889-2611",
    		"email": "Etiam.laoreet.libero@Aliquamadipiscing.ca",
    		"birthday": "2014-07-10",
    		"zip": "74-869",
    		"salary": 205358,
    		"absence": 30,
    		"country": "Gambia",
    		"city": "Coldstream",
    		"company": "Ac Fermentum Vel PC",
    		"type": 7
    	},
    	{
    		"name": "Vera",
    		"phone": "138-955-8109",
    		"email": "eu.odio@maurisblanditmattis.ca",
    		"birthday": "2015-07-18",
    		"zip": "467025",
    		"salary": 787197,
    		"absence": 6,
    		"country": "Bahamas",
    		"city": "Serrungarina",
    		"company": "Suspendisse Dui Fusce PC",
    		"type": 2
    	},
    	{
    		"name": "Autumn",
    		"phone": "369-405-2973",
    		"email": "Quisque@loremsemper.com",
    		"birthday": "2014-05-03",
    		"zip": "370659",
    		"salary": 168857,
    		"absence": 100,
    		"country": "Suriname",
    		"city": "Eigenbrakel",
    		"company": "Nibh Dolor Nonummy LLC",
    		"type": 9
    	},
    	{
    		"name": "Amy",
    		"phone": "693-6192",
    		"email": "sit@egetmagnaSuspendisse.ca",
    		"birthday": "2015-08-06",
    		"zip": "2794",
    		"salary": 235913,
    		"absence": 40,
    		"country": "Cocos (Keeling) Islands",
    		"city": "Chartres",
    		"company": "Tincidunt Consulting",
    		"type": 1
    	},
    	{
    		"name": "Thor",
    		"phone": "569-6512",
    		"email": "parturient.montes.nascetur@imperdietnon.edu",
    		"birthday": "2014-01-17",
    		"zip": "26962",
    		"salary": 853938,
    		"absence": 100,
    		"country": "Spain",
    		"city": "Beho",
    		"company": "Nulla LLC",
    		"type": 10
    	},
    	{
    		"name": "Dakota",
    		"phone": "270-477-0444",
    		"email": "sed.pede@tortordictumeu.edu",
    		"birthday": "2015-06-17",
    		"zip": "7374PU",
    		"salary": 575048,
    		"absence": 100,
    		"country": "Bonaire, Sint Eustatius and Saba",
    		"city": "Yahyalı",
    		"company": "Parturient Montes Nascetur Inc.",
    		"type": 1
    	},
    	{
    		"name": "Cooper",
    		"phone": "610-9420",
    		"email": "placerat.Cras.dictum@eratVivamus.net",
    		"birthday": "2015-07-20",
    		"zip": "73706",
    		"salary": 170683,
    		"absence": 10,
    		"country": "New Caledonia",
    		"city": "Deline",
    		"company": "Nulla Tincidunt Neque Ltd",
    		"type": 2
    	},
    	{
    		"name": "Bethany",
    		"phone": "949-378-7845",
    		"email": "erat@Morbiaccumsanlaoreet.edu",
    		"birthday": "2014-12-16",
    		"zip": "83245-257",
    		"salary": 998642,
    		"absence": 10,
    		"country": "Poland",
    		"city": "Milwaukee",
    		"company": "Vel Sapien Company",
    		"type": 1
    	},
    	{
    		"name": "Ronan",
    		"phone": "503-6165",
    		"email": "pellentesque@egestasDuisac.co.uk",
    		"birthday": "2015-03-23",
    		"zip": "1124",
    		"salary": 38416,
    		"absence": 80,
    		"country": "Aruba",
    		"city": "Calgary",
    		"company": "Donec PC",
    		"type": 7
    	},
    	{
    		"name": "Lamar",
    		"phone": "244-4542",
    		"email": "enim.sit@nonarcu.com",
    		"birthday": "2015-07-29",
    		"zip": "18214",
    		"salary": 106591,
    		"absence": 100,
    		"country": "Palau",
    		"city": "Portland",
    		"company": "Tristique Pharetra Quisque Corp.",
    		"type": 4
    	},
    	{
    		"name": "Gisela",
    		"phone": "203-196-7156",
    		"email": "porttitor.tellus@Sed.org",
    		"birthday": "2014-03-20",
    		"zip": "587048",
    		"salary": 255047,
    		"absence": 60,
    		"country": "Italy",
    		"city": "Aberystwyth",
    		"company": "Augue Eu Tempor Associates",
    		"type": 6
    	},
    	{
    		"name": "Nolan",
    		"phone": "694-889-2611",
    		"email": "Etiam.laoreet.libero@Aliquamadipiscing.ca",
    		"birthday": "2014-07-10",
    		"zip": "74-869",
    		"salary": 205358,
    		"absence": 40,
    		"country": "Gambia",
    		"city": "Coldstream",
    		"company": "Ac Fermentum Vel PC",
    		"type": 7
    	},
    	{
    		"name": "Vera",
    		"phone": "138-955-8109",
    		"email": "eu.odio@maurisblanditmattis.ca",
    		"birthday": "2015-07-18",
    		"zip": "467025",
    		"salary": 787197,
    		"absence": 50,
    		"country": "Bahamas",
    		"city": "Serrungarina",
    		"company": "Suspendisse Dui Fusce PC",
    		"type": 2
    	},
    	{
    		"name": "Autumn",
    		"phone": "369-405-2973",
    		"email": "Quisque@loremsemper.com",
    		"birthday": "2014-05-03",
    		"zip": "370659",
    		"salary": 168857,
    		"absence": 100,
    		"country": "Suriname",
    		"city": "Eigenbrakel",
    		"company": "Nibh Dolor Nonummy LLC",
    		"type": 9
    	},
    	{
    		"name": "Amy",
    		"phone": "693-6192",
    		"email": "sit@egetmagnaSuspendisse.ca",
    		"birthday": "2015-08-06",
    		"zip": "2794",
    		"salary": 235913,
    		"absence": 100,
    		"country": "Cocos (Keeling) Islands",
    		"city": "Chartres",
    		"company": "Tincidunt Consulting",
    		"type": 1
    	},
    	{
    		"name": "Thor",
    		"phone": "569-6512",
    		"email": "parturient.montes.nascetur@imperdietnon.edu",
    		"birthday": "2014-01-17",
    		"zip": "26962",
    		"salary": 853938,
    		"absence": 10,
    		"country": "Spain",
    		"city": "Beho",
    		"company": "Nulla LLC",
    		"type": 10
    	},
    	{
    		"name": "Dakota",
    		"phone": "270-477-0444",
    		"email": "sed.pede@tortordictumeu.edu",
    		"birthday": "2015-06-17",
    		"zip": "7374PU",
    		"salary": 575048,
    		"absence": 10,
    		"country": "Bonaire, Sint Eustatius and Saba",
    		"city": "Yahyalı",
    		"company": "Parturient Montes Nascetur Inc.",
    		"type": 1
    	},
    	{
    		"name": "Cooper",
    		"phone": "610-9420",
    		"email": "placerat.Cras.dictum@eratVivamus.net",
    		"birthday": "2015-07-20",
    		"zip": "73706",
    		"salary": 170683,
    		"absence": 100,
    		"country": "New Caledonia",
    		"city": "Deline",
    		"company": "Nulla Tincidunt Neque Ltd",
    		"type": 2
    	},
    	{
    		"name": "Bethany",
    		"phone": "949-378-7845",
    		"email": "erat@Morbiaccumsanlaoreet.edu",
    		"birthday": "2014-12-16",
    		"zip": "83245-257",
    		"salary": 998642,
    		"absence": 1,
    		"country": "Poland",
    		"city": "Milwaukee",
    		"company": "Vel Sapien Company",
    		"type": 1
    	},
    	{
    		"name": "Ronan",
    		"phone": "503-6165",
    		"email": "pellentesque@egestasDuisac.co.uk",
    		"birthday": "2015-03-23",
    		"zip": "1124",
    		"salary": 38416,
    		"absence": 8,
    		"country": "Aruba",
    		"city": "Calgary",
    		"company": "Donec PC",
    		"type": 7
    	},
    	{
    		"name": "Lamar",
    		"phone": "244-4542",
    		"email": "enim.sit@nonarcu.com",
    		"birthday": "2015-07-29",
    		"zip": "18214",
    		"salary": 106591,
    		"absence": 9,
    		"country": "Palau",
    		"city": "Portland",
    		"company": "Tristique Pharetra Quisque Corp.",
    		"type": 4
    	},
    	{
    		"name": "Gisela",
    		"phone": "203-196-7156",
    		"email": "porttitor.tellus@Sed.org",
    		"birthday": "2014-03-20",
    		"zip": "587048",
    		"salary": 255047,
    		"absence": 300,
    		"country": "Italy",
    		"city": "Aberystwyth",
    		"company": "Augue Eu Tempor Associates",
    		"type": 6
    	},
    	{
    		"name": "Nolan",
    		"phone": "694-889-2611",
    		"email": "Etiam.laoreet.libero@Aliquamadipiscing.ca",
    		"birthday": "2014-07-10",
    		"zip": "74-869",
    		"salary": 205358,
    		"absence": 10,
    		"country": "Gambia",
    		"city": "Coldstream",
    		"company": "Ac Fermentum Vel PC",
    		"type": 7
    	}
    ];
	
	var series = [
      	{
      		"name": "대리점1",
      		"data": [470, 130, 100, 150, 450, 150, 250, 350, 450, 250, 110, 210]
      	}, {
      		"name": "대리점2",
      		"data": [450, 125, 110, 250, 250, 350, 350, 350, 150, 350, 130, 205]
      	}, {
      		"name": "대리점3",
      		"data": [420, 115, 120, 350, 250, 450, 250, 450, 350, 250, 120, 215]
      	}, {
      		"name": "대리점4",
      		"data": [400, 105, 100, 250, 150, 550, 150, 250, 250, 450, 110, 200]
      }];

//	var chartData = [
//      	{
//      		"partnerName": "대리점1", "Jan": 470, "Feb": 130, "Mar": 100, "Apr": 150, "May": 450,  
//      		"Jun": 150, "Jul": 250, "Aug": 350, "Sep": 450, "Oct": 250, "Nov": 110, "Dec": 210
//      	}, {
//      		"partnerName": "대리점2", "Jan": 450, "Feb": 125, "Mar": 110, "Apr": 250, "May": 250, 
//      		"Jun": 350, "Jul": 350, "Aug": 350, "Sep": 150, "Oct": 350, "Nov": 130, "Dec": 205
//      	}, {
//      		"partnerName": "대리점3", "Jan": 420, "Feb": 115, "Mar": 120, "Apr": 350, "May": 250, 
//      		"Jun": 450, "Jul": 250, "Aug": 450, "Sep": 350, "Oct": 250, "Nov": 120, "Dec": 215
//      	}, {
//      		"partnerName": "대리점4", "Jan": 400, "Feb": 105, "Mar": 100, "Apr": 250, "May": 150, 
//      		"Jun": 550, "Jul": 150, "Aug": 250, "Sep": 250, "Oct": 450, "Nov": 110, "Dec": 200
//      	}
//      ];
	
	
	var chartData = [{
        "year": 1930,
        "italy": 100,
        "germany": 500,
        "uk": 300
    }, {
        "year": 1934,
        "italy": 100,
        "germany": 200,
        "uk": 600
    }, {
        "year": 1938,
        "italy": 200,
        "germany": 300,
        "uk": 100
    }, {
        "year": 1950,
        "italy": 300,
        "germany": 400,
        "uk": 100
    }, {
        "year": 1954,
        "italy": 500,
        "germany": 100,
        "uk": 200
    }, {
        "year": 1958,
        "italy": 300,
        "germany": 200,
        "uk": 100
    }, {
        "year": 1962,
        "italy": 100,
        "germany": 200,
        "uk": 300
    }, {
        "year": 1966,
        "italy": 200,
        "germany": 100,
        "uk": 500
    }, {
        "year": 1970,
        "italy": 300,
        "germany": 500,
        "uk": 200
    }, {
        "year": 1974,
        "italy": 400,
        "germany": 300,
        "uk": 600
    }, {
        "year": 1978,
        "italy": 100,
        "germany": 200,
        "uk": 400
    }];

	function getAccordionNode(){
		var fileName = $(location).attr('pathname');
    	var node = null;
    	if(fileName.indexOf('template/basic') !== -1){
    		node = 0;
    	}else if(fileName.indexOf('template/board') !== -1){
    		node = 1;
    	}else if(fileName.indexOf('template/table') !== -1){
    		node = 2;
    	}else if(fileName.indexOf('template/dialog') !== -1){
    		node = 3;
    	}else if(fileName.indexOf('template/popup') !== -1){
    		node = 3;
    	}else if(fileName.indexOf('template/contents') !== -1){
    		node = 4;
    	}
    	
    	return node;
	}
	
    // 초기화 함수
    this.init = function(id, param) {
    	
    	var node = getAccordionNode();
    	if(node !== null){
    		$(".Accordion").collapseAll();
    		$(".Accordion").expand(node);
    	}
    	
        gridInit();
    };
    
    function gridInit(){
    	$('#gr').alopexGrid({
    		pager: true,
    		paging: {
    			perPage: 10,
    			pagerCount: 5,
    			pagerTotal: true,
    			pagerSelect: true,
    		},
    		autoColumnIndex: true,
    		columnMapping : [
    			{
    				align : 'center',
    				key : 'check',
    				width : '30px',
    				selectorColumn : true
    			}, {
    				key : 'name',
    				title : 'name',
    				width : '100px'
    			}, {
    				key : 'phone',
    				title : 'phone',
    				width : '100px'
    			}, {
    				key : 'email',
    				title : 'email',
    				width : '250px'
    			}, {
    				align : 'center',
    				key : 'birthday',
    				title : 'birthday',
    				width : '100px'
    			}, {
    				align : 'center',
    				key : 'zip',
    				title : 'zip',
    				width : '100px'
    			}, {
    				align : 'right',
    				key : 'salary',
    				title : 'salary',
    				width : '100px'
    			}, {
    				key : 'country',
    				title : 'country',
    				width : '200px'
    			}, {
    				key : 'city',
    				title : 'city',
    				width : '150px'
    			}, {
    				key : 'company',
    				title : 'company',
    				width : '200px'
    			}, {
    				key : 'type',
    				align: 'center',
    				title : 'type',
    				width : '50px'
    			}
    		],
    		data: data
    	});
    	
    	$('#gr2').alopexGrid({
    		height: 200,
    		autoColumnIndex: true,
    		columnMapping : [
    			{
    				align : 'center',
    				width : 30,
    				numberingColumn : true
    			}, {
    				key : 'name',
    				title : 'name',
    				width : 100
    			}, {
    				key : 'phone',
    				title : 'phone',
    				width : 100
    			}, {
    				key : 'email',
    				title : 'email',
    				width : 250
    			}, {
    				align : 'center',
    				key : 'birthday',
    				title : 'birthday',
    				width : 100
    			}, {
    				align : 'center',
    				key : 'zip',
    				title : 'zip',
    				width : 100
    			}
    		],
    		data: data
    	});
    	$('#button-dialog').click(function() {
    		$('#div-dialog').open({
    			title : "일반 Dialog Template"
    		});
    	});
    	$('#button-dialog-custom').click(function() {
    		$('#div-dialog-custom').open({
    			title : "일반 Dialog 커스텀 버튼 Template"
    		});
    	});	
    	$('#button-dialog-contents').click(function() {
    		$('#div-dialog-contents').open({
    			title : "일반 Dialog 컨텐츠형 Template",
    			width : 860,
    			height : 600
    		});
    		$("#gr").alopexGrid( "viewUpdate" );
    	});
    	
    	$('#button-popup').click( function() {
    	     $a.popup({
    	    	  title: "일반 Popup"
    	    	 ,width: 300
    	    	 ,height: 200
    	         ,url: "./popup1_contents1.html" // 팝업에 표시될 HTML
    	         ,iframe: false
    	    });
    	 });
    	
       	$('#button-popup-contents').click( function() {
      	     $a.popup({
      	    	  title: "iframe Popup"
      	    	 ,url: "../main/ui-main-workspace.html" // 팝업에 표시될 HTML
      	         ,iframe: true
   	   	    });
   	   	 });
       	
    	$('#button-popup-window').click( function() {
   	     $a.popup({
   	          url: "../main/ui-main-workspace.html" // 팝업에 표시될 HTML
   	         ,windowpopup: true
   	         ,other: "top=100,left=100,scrollbars=yes"
	   	    });
	   	 });	
    	
    	$('#gr-chart').alopexGrid({
    		height: 400,
    		autoColumnIndex: true,
    		title: 'Grid',
    		defaultColumnMapping : {
    			resizing: true,
    			headerDragDrop: true,
    			width : '220',
    			align : 'center'
    		},
    		columnMapping : [
    			{
    				key : 'year',
    				title : 'Year'
    			},{
    				key : 'italy',
    				title : 'Italy'
    			},{
    				key : 'germany',
    				title : 'Germany'
    			},{
    				key : 'uk',
    				title : 'UK'
    			},
    		],
    		data: chartData
    	});
    	
        
//    	$('#gr-chart').alopexGrid({
//    		width : 900,
//    		rowClickSelect : false,
//    		cellInlineEdit : true,
//    		useDragDrop : true,
//    		enableTabFocus : true,
//    		enableKeyboardEdit : true,
//    		ellipsisText : true,
//    		autoColumnIndex: true,
//    		columnMapping : [
//    			{
//    				sorting : true, fixed : true, rowspan : true, align : 'center',
//    				key : 'partnerName', title : '파트너명', width : '90px'
//    			}, {
//    				sorting : true, editable : true, align : 'center',
//    				key : 'Jan', title : 'Jan', width : '70px',
//    				render : { 'type' : 'string', 'rule' : 'comma' }
//    			}, {
//    				sorting : true, editable : true, align : 'center',
//    				key : 'Feb', title : 'Feb', width : '70px',
//    				render :{ 'type' : 'string', 'rule' : 'comma' }
//    			}, {
//    				sorting : true, editable : true, align : 'center',
//    				key : 'Mar', title : 'Mar', width : '70px',
//    				render : { 'type' : 'string', 'rule' : 'comma' }
//    			}, {
//    				sorting : true, editable : true, align : 'center',
//    				key : 'Apr', title : 'Apr', width : '70px',
//    				render : { 'type' : 'string', 'rule' : 'comma' }
//    			}, {
//    				sorting : true, editable : true, align : 'center',
//    				key : 'May', title : 'May', width : '70px',
//    				render : { 'type' : 'string', 'rule' : 'comma' }
//    			}, {
//    				sorting : true, editable : true, align : 'center',
//    				key : 'Jun', title : 'Jun', width : '70px',
//    				render : { 'type' : 'string', 'rule' : 'comma' }
//    			}, {
//    				sorting : true, editable : true, align : 'center',
//    				key : 'Jul', title : 'Jul', width : '70px',
//    				render : { 'type' : 'string', 'rule' : 'comma' }
//    			}, {
//    				sorting : true, editable : true, align : 'center',
//    				key : 'Aug', title : 'Aug', width : '70px',
//    				render : { 'type' : 'string', 'rule' : 'comma' }
//    			}, {
//    				sorting : true, editable : true,align : 'center',
//    				key : 'Sep', title : 'Sep', width : '70px',
//    				render : { 'type' : 'string', 'rule' : 'comma' }
//    			}, {
//    				sorting : true, editable : true, align : 'center',
//    				key : 'Oct', title : 'Oct', width : '70px',
//    				render : { 'type' : 'string', 'rule' : 'comma' }
//    			}, {
//    				sorting : true, editable : true, align : 'center',
//    				key : 'Nov', title : 'Nov', width : '70px',
//    				render : { 'type' : 'string', 'rule' : 'comma' }
//    			}, {
//    				sorting : true, editable : true, align : 'center',
//    				key : 'Dec', title : 'Dec', width : '70px',
//    				render : { 'type' : 'string', 'rule' : 'comma' }
//    			}
//    		],
//    		data: chartData
//    	});
    	$("#chart01, #chart02, #chart03").css("height", "400px");
    	var chart01 = AmCharts.makeChart("chart01", {
    	    "type": "serial",
    	    "theme": "light",
    	    "titles": [
    	       		{
    	       			"text": "Traffic incidents per year",
    	       			"size": 24,
    	       			"bold": true
    	       		}
    	    ],
    	    "legend": {
    	        "useGraphSettings": true
    	    },
    	    "dataProvider": chartData,
    	    "valueAxes": [{
    	        "integersOnly": true,
    	        "maximum": 600,
    	        "minimum": 100,
    	        "reversed": true,
    	        "axisAlpha": 0,
    	        "dashLength": 5,
    	        "gridCount": 10,
    	        "position": "left",
    	        "title": "people"
    	    }],
    	    "startDuration": 0,
    	    "graphs": [{
    	        "balloonText": "Traffic incidents per year [[category]] : [[value]] people",
    	        "bullet": "round",
    	        //"hidden": true,
    	        "title": "Italy",
    	        "valueField": "italy",
    			"fillAlphas": 0
    	    }, {
    	    	"balloonText": "Traffic incidents per year [[category]] : [[value]] people",
    	        "bullet": "round",
    	        "title": "Germany",
    	        "valueField": "germany",
    			"fillAlphas": 0
    	    }, {
    	    	"balloonText": "Traffic incidents per year [[category]] : [[value]] people",
    	        "bullet": "round",
    	        "title": "United Kingdom",
    	        "valueField": "uk",
    			"fillAlphas": 0
    	    }],
    	    "chartCursor": {
    	        "cursorAlpha": 0,
    	        "zoomable": false
    	    },
    	    "categoryField": "year",
    	    "categoryAxis": {
    	        "gridPosition": "start",
    	        "axisAlpha": 0,
    	        "fillAlpha": 0.05,
    	        "fillColor": "#000000",
    	        "gridAlpha": 0,
    	        "position": "top"
    	    },
    	    "export": {
    	    	"enabled": true,
    	        "position": "bottom-right"
    	     }
    	});
    	
    	var chart02 = AmCharts.makeChart("chart02", {
    	    "type": "serial",
    		"theme": "light",
    		"titles": [
       	       		{
       	       			"text": "Traffic incidents per year",
       	       			"size": 24,
       	       			"bold": true
       	       		}
       	    ],
    	    "legend": {
    	        "horizontalGap": 10,
    	        "maxColumns": 1,
    	        "position": "right",
    			"useGraphSettings": true,
    			"markerSize": 10
    	    },
    	    "dataProvider": chartData,
    	    "valueAxes": [{
    	        "stackType": "regular",
    	        "axisAlpha": 0.3,
    	        "gridAlpha": 0,
    	        "title": "people"
    	    }],
    	    "graphs": [{
    	        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    	        "fillAlphas": 0.8,
    	        "labelText": "[[value]]",
    	        "lineAlpha": 0.3,
    	        "title": "Italy",
    	        "type": "column",
    			"color": "#000000",
    	        "valueField": "italy"
    	    }, {
    	        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    	        "fillAlphas": 0.8,
    	        "labelText": "[[value]]",
    	        "lineAlpha": 0.3,
    	        "title": "Germany",
    	        "type": "column",
    			"color": "#000000",
    	        "valueField": "germany"
    	    }, {
    	        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
    	        "fillAlphas": 0.8,
    	        "labelText": "[[value]]",
    	        "lineAlpha": 0.3,
    	        "title": "UK",
    	        "type": "column",
    			"color": "#000000",
    	        "valueField": "uk"
    	    }],
    	    "categoryField": "year",
    	    "categoryAxis": {
    	        "gridPosition": "start",
    	        "axisAlpha": 0,
    	        "gridAlpha": 0,
    	        "position": "left"
    	    },
    	    "export": {
    	    	"enabled": true
    	     }

    	});
    	
    	
    	var chart03 = AmCharts.makeChart("chart03", {
    	    "type": "serial",
    		"theme": "light",
    	    "titles": [{
    	        "text": "Traffic incidents per year",
    	        "size": 15
    	    }],
    	    "legend": {
    	        "align": "center",
    	        "equalWidths": false,
    	        "periodValueText": "total: [[value.sum]]",
    	        "valueAlign": "left",
    	        "valueText": "[[value]] ([[percents]]%)",
    	        "valueWidth": 100
    	    },
    	    "dataProvider": chartData,
    	    "valueAxes": [{
    	        "stackType": "100%",
    	        "gridAlpha": 0.07,
    	        "position": "left",
    	        "title": "people"
    	    }],
    	    "graphs": [{
    	        "balloonText": "<img src='http://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
    	        "fillAlphas": 0.5,
    	        "lineAlpha": 0.5,
    	        "title": "Italy",
    	        "valueField": "italy"
    	    }, {
    	        "balloonText": "<img src='http://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
    	        "fillAlphas": 0.5,
    	        "lineAlpha": 0.5,
    	        "title": "Germany",
    	        "valueField": "germany"
    	    }, {
    	        "balloonText": "<img src='http://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
    	        "fillAlphas": 0.5,
    	        "lineAlpha": 0.5,
    	        "title": "UK",
    	        "valueField": "uk"
    	    }],
    	    "plotAreaBorderAlpha": 0,
    	    "marginLeft": 0,
    	    "marginBottom": 0,
    	    "chartCursor": {
    	        "cursorAlpha": 0,
    	        "zoomable": false
    	    },
    	    "categoryField": "year",
    	    "categoryAxis": {
    	        "startOnAxis": true,
    	        "axisColor": "#DADADA",
    	        "gridAlpha": 0.07
    	    },
    	    "export": {
    	    	"enabled": true
    	     }
    	});
    	
    	$('#gr-chart').on('cellEditEnd', function(e){
    		var updatedRow = null;
    		var updatedData = [];
    		var dataPushFlag = false;
    		var data = AlopexGrid.parseEvent(e).data;
    		
    		for(var i=0; i<series.length; i++){
    			for(var key in data){
    				//차트의 데이터에서 grid의 편집한 data와 같은 row를 찾는다 
    				if(data[key]== series[i].name) { updatedRow = i;}
    								
    				//Jan-Dec 까지만 저장
    				if(key == 'Jan') { dataPushFlag = true; }
    								
    				if(dataPushFlag) { updatedData.push( parseInt(data[key]) );}
    									
    				if(key == 'Dec') { 
    					dataPushFlag = false; 
    					break;
    				}
    			}
    			if(updatedRow == null) 
    				updatedData = [];
    			else
    				break;
    		}
    		//grid의 편집한 데이터를 차트에 업데이트 함 
    		$('.chart01').highcharts().series[updatedRow].update({
    			data : updatedData
    		});

    	});
    }
});