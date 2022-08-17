CREATE TABLE `board_tbl` (
  `BOARD_NUM` int NOT NULL AUTO_INCREMENT,
  `BOARD_WRITER` varchar(20) DEFAULT NULL,
  `BOARD_TITLE` varchar(30) DEFAULT NULL,
  `BOARD_CONTENT` varchar(500) DEFAULT NULL,
  `BOARD_DATE` datetime DEFAULT CURRENT_TIMESTAMP,
  `BOARD_IMG` varchar(100),
  PRIMARY KEY (`BOARD_NUM`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

create table member (
	id varchar(20) primary key,
    pw varchar(20) not null,
    email varchar(50) not null
);