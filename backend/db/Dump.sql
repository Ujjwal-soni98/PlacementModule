-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: placement_module
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authority_table`
--

DROP TABLE IF EXISTS `authority_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authority_table` (
  `authority_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`authority_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authority_table`
--

LOCK TABLES `authority_table` WRITE;
/*!40000 ALTER TABLE `authority_table` DISABLE KEYS */;
INSERT INTO `authority_table` VALUES (1,'Anurag Mishra','admin','anurag.mishra@kiet.edu','$2b$10$SFtfdSjaUCb.Kz46amw9RuKD1Qah5QFSR0SCHFbFXv.A7cz2nzkha'),(2,'Accenture','company','accenture@yopmail.com','$2b$10$oN0oidydsrmwwpQT6sgDsOKJp9Wq9niXZ71qrNteq1FYACoC0RycO'),(3,'TCS','company','tcs@gmail.com','$2b$10$zw/t0EBcdyySI1TGc13ItOJFMzUQzOi2/.HU59o8fDyO5AteHuxRm');
/*!40000 ALTER TABLE `authority_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `c_id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `Description` varchar(1000) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Building No. 3 Infospace Plot No. 20 & 21, Seaview Developer, Sector 135, Noida, Uttar Pradesh 201301','Accnenture','campus.queries@accenture.com',' 0120 662 0000','https://www.accenture.com','Accenture plc is a US multinational professional services company headquartered in Dublin for tax reasons, specializing in information technology services and consulting. A Fortune Global 500 company, it reported revenues of $64.1 billion in 2023.','accenture#123'),(2,'model town','TCS','tcs@gmail.com','556658586565','tcs.com','Tata Consultancy Services Limited (TCS) is an Indian multinational information technology (IT) services and consulting company headquartered in Mumbai, Maharashtra, India. It is a subsidiary of the Tata Group and operates in 149 locations across 46 countries.','tcs@123');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `degree`
--

DROP TABLE IF EXISTS `degree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `degree` (
  `degree_id` int DEFAULT NULL,
  `degree_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `degree`
--

LOCK TABLES `degree` WRITE;
/*!40000 ALTER TABLE `degree` DISABLE KEYS */;
INSERT INTO `degree` VALUES (1,'High School'),(2,'Intermediate'),(3,'Diploma'),(4,'Institute'),(5,'Masters');
/*!40000 ALTER TABLE `degree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education_details`
--

DROP TABLE IF EXISTS `education_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `degree_id` int DEFAULT NULL,
  `s_id` int DEFAULT NULL,
  `field` varchar(255) DEFAULT NULL,
  `school` char(255) DEFAULT NULL,
  `year` char(255) DEFAULT NULL,
  `percentage` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `s_id` (`s_id`),
  CONSTRAINT `education_details_ibfk_1` FOREIGN KEY (`s_id`) REFERENCES `student` (`s_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education_details`
--

LOCK TABLES `education_details` WRITE;
/*!40000 ALTER TABLE `education_details` DISABLE KEYS */;
INSERT INTO `education_details` VALUES (1,1,1,'science','Radha Ballabh Public School','2021','93.35%'),(2,2,1,'PCM','Radha Ballabh Public School','2021','91'),(4,4,1,'Computer Science','aktu','2025','70.07');
/*!40000 ALTER TABLE `education_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hiring`
--

DROP TABLE IF EXISTS `hiring`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hiring` (
  `hiring_id` int NOT NULL AUTO_INCREMENT,
  `c_id` int NOT NULL,
  `job_id` int NOT NULL,
  `s_id` int NOT NULL,
  `status` varchar(45) DEFAULT 'Applied',
  PRIMARY KEY (`hiring_id`),
  KEY `c_id` (`c_id`),
  KEY `job_id` (`job_id`),
  KEY `s_id` (`s_id`),
  CONSTRAINT `hiring_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `company` (`c_id`),
  CONSTRAINT `hiring_ibfk_2` FOREIGN KEY (`job_id`) REFERENCES `job_opening` (`job_id`),
  CONSTRAINT `hiring_ibfk_3` FOREIGN KEY (`s_id`) REFERENCES `student` (`s_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hiring`
--

LOCK TABLES `hiring` WRITE;
/*!40000 ALTER TABLE `hiring` DISABLE KEYS */;
/*!40000 ALTER TABLE `hiring` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hod`
--

DROP TABLE IF EXISTS `hod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hod` (
  `h_id` int NOT NULL AUTO_INCREMENT,
  `department` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`h_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hod`
--

LOCK TABLES `hod` WRITE;
/*!40000 ALTER TABLE `hod` DISABLE KEYS */;
INSERT INTO `hod` VALUES (1,'CS','hod.cs@kiet.edu','Male','Ajay Srivastava','3878784575','muradnagar'),(2,'IT','hod.it@kiet.edu','Male','Adesh Pandey','8347476478','indirapuram');
/*!40000 ALTER TABLE `hod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_opening`
--

DROP TABLE IF EXISTS `job_opening`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_opening` (
  `job_id` int NOT NULL,
  `job_description` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `grad_gpa` varchar(45) DEFAULT NULL,
  `no_of_opening` varchar(45) DEFAULT NULL,
  `xii_percentage` varchar(45) DEFAULT NULL,
  `Salary` varchar(45) DEFAULT NULL,
  `c_id` int DEFAULT NULL,
  `Requirements` varchar(255) DEFAULT NULL,
  `x_percentage` varchar(10) DEFAULT NULL,
  `backlogs_allowed` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`job_id`),
  KEY `c_id` (`c_id`),
  CONSTRAINT `job_opening_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `company` (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_opening`
--

LOCK TABLES `job_opening` WRITE;
/*!40000 ALTER TABLE `job_opening` DISABLE KEYS */;
INSERT INTO `job_opening` VALUES (1,'a robust software engineer skilled in web technologies','full stack developer ','fresher','atleast 7','4','atleast 70','7 lpa',1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `job_opening` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `s_id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `branch` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `grad_gpa` decimal(3,2) DEFAULT NULL,
  `batch` year DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `student_name` varchar(255) DEFAULT NULL,
  `twelfth_percentage` decimal(5,2) DEFAULT NULL,
  `twelfth_year` year DEFAULT NULL,
  `tenth_percentage` decimal(5,2) DEFAULT NULL,
  `tenth_year` year DEFAULT NULL,
  `resume` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'Agra','cs','ujjwal.2125cs1121@kiet.edu','male',9.00,2025,'7055667011','232332','Ujjwal',89.00,2032,98.00,2023,'3232','$2b$10$8zFzF/BAVOYTZrjz0NAgmOGdaKVdDbjNtwzOhLdjPWvfzbJx0ElT6','placed'),(2,'Gorakhpur','cs','akash@gmail.com','male',8.00,2024,'9857859487','3489734','Akash',948.00,2025,49.00,2024,'dfhj','$2b$10$sk5B2eZrmxEWbhHD4lXA6e7iAJ8wEFekzNaImnZPG20jMo90GL9YK','unplaced');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-16 12:59:06
