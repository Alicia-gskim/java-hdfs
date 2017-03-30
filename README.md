# Welcome !!! #
 This project is a sample project, using spring mvc4 and hadoop's hdfs function.

---
### functions ###
1. Hadoop directory structure can somthing..
	* base words are "You can ~~~".
	* see and move the hadoop inside directory.
	* create/delete directory want path.
	* see the file contents.

2. File upload & download.
	* upload => single / multi upload file.
	* download => single download file.

3. this project is upapplied css.
4. The contents related to the database connection are not developed yet.
	* Future development schedule

---
### Constructure & Settings
1. <h5>Project type</h5> 
	* DynamicWeb + maven
	* If use hdfs, must have adding configuration
	
			POM.xml
			I. common-configuration
			II. org.apache.hadoop :: 
				a. hadoop-common
				b. hadoop-core
				c. hadoop=hdfs
				d. jdk-tools.jar
		> Contents of POM.xml [ jdk-tools.jar - dependency ] <br/>
		`<dependency>`<br/>
		`<groupId>jdk.tools</groupId>`<br/>
		`<artifactId>jdk.tools</artifactId>`<br/>
		`<version>1.8</version>`<br/>
		`<scope>system</scope>`<br/>
		`<systemPath>${JAVA_HOME}/lib/tools.jar</systemPath>`<br/>
		`</dependency>`<br/>

2. <h5>Hadoop Server Settings</h5>
	* In case.. install Ubuntu Linux 16.04, hadoop settings.
3. <h5>Hadoop confguration</h5>
	* create file list

			capacity-scheduler.xml
			core-site.xml
			hdfs-site.xml
			mapred-site.xml
			yarn-site.xml
			hadoop-env.sh
			mapred-env.sh
			yarn-env.sh
	* hadoop server
		* Type: NameNode, DataNode, data01, data02, data03

---
### Building
1. <h5>CMD || Terminer Command</h5>
	* `mvn clean package`
2.  <h5>Install Hadoop</h5>
	* `wget http://mirrors.sonic.net/apache/hadoop/common/hadoop-2.7.3/hadoop-2.7.3.tar.gz`
	* `tar xvzf hadoop-2.7.3.tar.gz`
	* Install complete after setup configuration files
		* ~/.bashrc
		* ${HADOOP_HOME}/etc/hadoop/hadoop-env.sh
		* ${HADOOP_HOME}/etc/hadoop/core-site.xml
		* ${HADOOP_HOME}/etc/hadoop/mapred-site.xml.template
		* ${HADOOP_HOME}/etc/hadoop/hdfs-site.xml

### Confirm
1. <h5>install hadoop path..</h5>
	* Excute command.
	
			move - ${HADOOP_HOME}/bin
			excute - ./hadoop fs -ls  /
			
			
### Develop Plan
1. netty서버를 활용한 소켓통신 개발(서버, 클라이언트)
 - 통신간 발생하는 데이터 하둡에 저장, 관리
 - 저장된 데이터 엑셀파일로 익스포트
 - 로그인 이력에 대한 내용은 별도로 오라클 db에 저장

2. script 플러그인을 활용한 웹 페이지 ui 및 기능 구현
 - 기존, 신규 사이트에 대해서 테스크탑 및 모바일에서도 성능 및 최적화된 페이지를 만들기 위해 사용

3. 차트 기능 구현[사용율에 대한 시각화 페이지]
 - 하둡서버를 접속한 획수를 기준으로 시간대별 데이터
 - 소켓통신을 활용한 성별을 기준으로 시간대별 데이터
 - 차트 이미지 익스포트 기능
 
4. 리눅스 서버에 설치된 오라클을 활용한 웹 게시판 개발 
 - 이미지 파일 첨부 및 미리보기
 - 파일업로드(싱글/멀티), 다운로드(싱글:업로드한 확장자 파일 그대로, 멀티: 압축파일 zip)
 - jQuery ui 플러그인 적용시

`아마존 AWS를 활용한 서버 구축 진행
RedHat Linux CentOS 셋팅 및 Oracle Database, Hadoop 설치
AWS 가상 서버를 통한 웹 페이지 개발 & 서비스 계획
 ** 해당 웹 페이지는 상업정 마켓팅 목적이 아닌 지극히 개인적인 개발을 하기 위한 웹 페이지로 도메인 오픈할 생각 **`
