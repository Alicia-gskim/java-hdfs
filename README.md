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
