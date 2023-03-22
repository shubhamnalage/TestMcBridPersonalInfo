-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2023 at 07:00 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `personal_info`
--

-- --------------------------------------------------------

--
-- Table structure for table `personal_details`
--

CREATE TABLE `personal_details` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `dob` varchar(100) NOT NULL,
  `Ip` varchar(100) NOT NULL,
  `device` varchar(100) NOT NULL,
  `browser` varchar(100) NOT NULL,
  `address` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `personal_details`
--

INSERT INTO `personal_details` (`id`, `firstName`, `lastName`, `phone`, `email`, `dob`, `Ip`, `device`, `browser`, `address`) VALUES
(15, 'Shubham', 'Nalage', '9325343400', 'shubham@gmail.com', '1995-12-16T16:43:02.831Z', '152.58.16.195', 'Other', 'Google Chrome', '[\"Kolhapur\",\"Maharastra\",\"India\"]'),
(16, 'Shubham', 'Nalage', '9325343400', 'shubhamnalage1612@gmail.com', '1995-12-16T17:14:04.610Z', '152.58.16.195', 'Other', 'Google Chrome', '[\"Kolhapur\",\"Maharastra\"]'),
(17, 'Sangram', 'Nalage', '7887545645', 'sangram2707.sn@gmail.com', '1995-12-16T17:16:34.314Z', '152.58.16.195', 'Other', 'Google Chrome', '[\"Jagrutinagar\",\"Kolhapur\"]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `personal_details`
--
ALTER TABLE `personal_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `personal_details`
--
ALTER TABLE `personal_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
