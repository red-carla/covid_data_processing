-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2023 at 04:20 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `covid_api_db`
--
CREATE DATABASE IF NOT EXISTS `covid_api_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `covid_api_db`;

-- --------------------------------------------------------

--
-- Table structure for table `covid_death`
--

CREATE TABLE IF NOT EXISTS `covid_death` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `cases` int(11) DEFAULT NULL,
  `deaths` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=238 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `covid_death`
--

INSERT INTO `covid_death` (`id`, `country_name`, `cases`, `deaths`) VALUES
(1, 'Afghanistan', 211630, 7884),
(2, 'Albania', 333897, 3604),
(3, 'Algeria', 271613, 6881),
(4, 'American Samoa', 8326, 34),
(5, 'Andorra', 47939, 159),
(6, 'Angola', 105353, 1934),
(7, 'Anguilla', 3904, 12),
(8, 'Antigua and Barbuda', 9106, 146),
(9, 'Argentina', 10044957, 130472),
(10, 'Armenia', 448707, 8743),
(11, 'Aruba', 44114, 287),
(12, 'Australia', 11153745, 19906),
(13, 'Austria', 6046956, 22183),
(14, 'Azerbaijan', 830367, 10197),
(15, 'Bahamas', 37491, 833),
(16, 'Bahrain', 696614, 1536),
(17, 'Bangladesh', 2038091, 29446),
(18, 'Barbados', 107332, 582),
(19, 'Belarus', 994037, 7118),
(20, 'Belgium', 4782863, 34115),
(21, 'Belize', 70782, 688),
(22, 'Benin', 28014, 163),
(23, 'Bermuda', 18860, 165),
(24, 'Bhutan', 62650, 21),
(25, 'Bolivia (Plurinational State of)', 1195880, 22374),
(26, 'Bonaire', 9855, 33),
(27, 'Bosnia and Herzegovina', 402636, 16328),
(28, 'Botswana', 329837, 2795),
(29, 'Brazil', 37319254, 700556),
(30, 'British Virgin Islands', 7305, 64),
(31, 'Brunei Darussalam', 284632, 153),
(32, 'Bulgaria', 1301475, 38282),
(33, 'Burkina Faso', 22056, 396),
(34, 'Burundi', 53719, 15),
(35, 'Cabo Verde', 63281, 413),
(36, 'Cambodia', 138726, 3056),
(37, 'Cameroon', 124834, 1970),
(38, 'Canada', 4634277, 52121),
(39, 'Cayman Islands', 31472, 37),
(40, 'Central African Republic', 15367, 113),
(41, 'Chad', 7696, 194),
(42, 'Chile', 5272767, 64497),
(43, 'China', 99239252, 120905),
(44, 'Colombia', 6363058, 142690),
(45, 'Comoros', 9093, 160),
(46, 'Congo', 25185, 389),
(47, 'Cook Islands', 7042, 2),
(48, 'Costa Rica', 1226315, 9326),
(49, 'Côte d’Ivoire', 88308, 834),
(50, 'Croatia', 1271276, 18091),
(51, 'Cuba', 1112853, 8530),
(52, 'Curaçao', 45798, 301),
(53, 'Cyprus', 655664, 1349),
(54, 'Czechia', 4636282, 42702),
(55, 'Democratic Peoples Republic of Korea', 0, 0),
(56, 'Democratic Republic of the Congo', 95944, 1464),
(57, 'Denmark', 3409630, 8420),
(58, 'Djibouti', 15690, 189),
(59, 'Dominica', 15760, 74),
(60, 'Dominican Republic', 660937, 4384),
(61, 'Ecuador', 1059529, 36017),
(62, 'Egypt', 515913, 24823),
(63, 'El Salvador', 201785, 4230),
(64, 'Equatorial Guinea', 17130, 183),
(65, 'Eritrea', 10189, 103),
(66, 'Estonia', 617247, 2979),
(67, 'Eswatini', 74520, 1425),
(68, 'Ethiopia', 500731, 7573),
(69, 'Falkland Islands (Malvinas)', 1923, 0),
(70, 'Faroe Islands', 34658, 28),
(71, 'Fiji', 68914, 883),
(72, 'Finland', 1468123, 9097),
(73, 'France', 38791479, 162176),
(74, 'French Guiana', 98041, 413),
(75, 'French Polynesia', 78219, 649),
(76, 'Gabon', 48981, 306),
(77, 'Gambia', 12622, 372),
(78, 'Georgia', 1836791, 17032),
(79, 'Germany', 38368891, 171411),
(80, 'Ghana', 171527, 1462),
(81, 'Gibraltar', 20550, 113),
(82, 'Greece', 5972760, 36629),
(83, 'Greenland', 11971, 21),
(84, 'Grenada', 19683, 238),
(85, 'Guadeloupe', 202163, 1012),
(86, 'Guam', 51017, 415),
(87, 'Guatemala', 1244812, 20187),
(88, 'Guernsey', 35235, 67),
(89, 'Guinea', 38280, 467),
(90, 'Guinea-Bissau', 9350, 176),
(91, 'Guyana', 73119, 1298),
(92, 'Haiti', 34202, 860),
(93, 'Holy See', 26, 0),
(94, 'Honduras', 472467, 11111),
(95, 'Hungary', 2199764, 48719),
(96, 'Iceland', 209191, 260),
(97, 'India', 44768172, 531000),
(98, 'Indonesia', 6752606, 161071),
(99, 'Iran (Islamic Republic of)', 7597982, 145571),
(100, 'Iraq', 2465545, 25375),
(101, 'Ireland', 1708435, 8782),
(102, 'Isle of Man', 38008, 116),
(103, 'Israel', 4817255, 12416),
(104, 'Italy', 25715384, 189262),
(105, 'Jamaica', 154602, 3529),
(106, 'Japan', 33523927, 74096),
(107, 'Jersey', 66391, 161),
(108, 'Jordan', 1746997, 14122),
(109, 'Kazakhstan', 1501450, 19072),
(110, 'Kenya', 342992, 5688),
(111, 'Kiribati', 5014, 18),
(112, 'Kosovo[1]', 273764, 3205),
(113, 'Kuwait', 665527, 2570),
(114, 'Kyrgyzstan', 206849, 2991),
(115, 'Lao Peoples Democratic Republic', 218037, 671),
(116, 'Latvia', 977172, 6319),
(117, 'Lebanon', 1235177, 10874),
(118, 'Lesotho', 34490, 706),
(119, 'Liberia', 8090, 294),
(120, 'Libya', 507229, 6437),
(121, 'Liechtenstein', 21460, 87),
(122, 'Lithuania', 1316086, 9647),
(123, 'Luxembourg', 319959, 1232),
(124, 'Madagascar', 68105, 1424),
(125, 'Malawi', 88620, 2686),
(126, 'Malaysia', 5052337, 36982),
(127, 'Maldives', 185894, 311),
(128, 'Mali', 33133, 743),
(129, 'Malta', 118214, 833),
(130, 'Marshall Islands', 16013, 17),
(131, 'Martinique', 229479, 1095),
(132, 'Mauritania', 63562, 997),
(133, 'Mauritius', 298099, 1044),
(134, 'Mayotte', 42008, 187),
(135, 'Mexico', 7553646, 333596),
(136, 'Micronesia (Federated States of)', 25703, 63),
(137, 'Monaco', 16178, 67),
(138, 'Mongolia', 1007943, 2136),
(139, 'Montenegro', 289292, 2808),
(140, 'Montserrat', 1403, 8),
(141, 'Morocco', 1272733, 16296),
(142, 'Mozambique', 233334, 2242),
(143, 'Myanmar', 634105, 19490),
(144, 'Namibia', 171222, 4090),
(145, 'Nauru', 5393, 1),
(146, 'Nepal', 1001951, 12021),
(147, 'Netherlands', 8610372, 22992),
(148, 'New Caledonia', 80052, 314),
(149, 'New Zealand', 2217047, 2687),
(150, 'Nicaragua', 15682, 245),
(151, 'Niger', 9513, 315),
(152, 'Nigeria', 266675, 3155),
(153, 'Niue', 747, 0),
(154, 'North Macedonia', 347672, 9667),
(155, 'Northern Mariana Islands (Commonwealth of the)', 13773, 41),
(156, 'Norway', 1481760, 5311),
(157, 'occupied Palestinian territory, including east Jerusalem', 703228, 5708),
(158, 'Oman', 399449, 4628),
(159, 'Other', 764, 13),
(160, 'Pakistan', 1580021, 30652),
(161, 'Palau', 5997, 9),
(162, 'Panama', 1033781, 8612),
(163, 'Papua New Guinea', 46837, 670),
(164, 'Paraguay', 735759, 19880),
(165, 'Peru', 4492891, 219866),
(166, 'Philippines', 4083678, 66420),
(167, 'Pitcairn Islands', 4, 0),
(168, 'Poland', 6504340, 119423),
(169, 'Portugal', 5577825, 26480),
(170, 'Puerto Rico', 1110017, 5867),
(171, 'Qatar', 502436, 688),
(172, 'Republic of Korea', 30918060, 34332),
(173, 'Republic of Moldova', 618741, 12086),
(174, 'Réunion', 494595, 921),
(175, 'Romania', 3380891, 67961),
(176, 'Russian Federation', 22727542, 397642),
(177, 'Rwanda', 133194, 1468),
(178, 'Saba', 813, 2),
(179, 'Saint Barthélemy', 5478, 5),
(180, 'Saint Helena, Ascension and Tristan da Cunha', 2166, 0),
(181, 'Saint Kitts and Nevis', 6598, 46),
(182, 'Saint Lucia', 30028, 409),
(183, 'Saint Martin', 12280, 46),
(184, 'Saint Pierre and Miquelon', 3426, 2),
(185, 'Saint Vincent and the Grenadines', 9601, 124),
(186, 'Samoa', 16675, 31),
(187, 'San Marino', 23873, 123),
(188, 'Sao Tome and Principe', 6542, 80),
(189, 'Saudi Arabia', 836442, 9635),
(190, 'Senegal', 88978, 1971),
(191, 'Serbia', 2524670, 17996),
(192, 'Seychelles', 50937, 172),
(193, 'Sierra Leone', 7762, 125),
(194, 'Singapore', 2298689, 1722),
(195, 'Sint Eustatius', 1217, 6),
(196, 'Sint Maarten', 11030, 92),
(197, 'Slovakia', 1865828, 21123),
(198, 'Slovenia', 1342156, 9230),
(199, 'Solomon Islands', 24575, 153),
(200, 'Somalia', 27334, 1361),
(201, 'South Africa', 4072533, 102595),
(202, 'South Sudan', 18368, 138),
(203, 'Spain', 13798747, 120426),
(204, 'Sri Lanka', 672092, 16835),
(205, 'Sudan', 63922, 5034),
(206, 'Suriname', 82495, 1404),
(207, 'Sweden', 2702703, 23897),
(208, 'Switzerland', 4399085, 13981),
(209, 'Syrian Arab Republic', 57423, 3163),
(210, 'Tajikistan', 17786, 125),
(211, 'Thailand', 4728967, 33940),
(212, 'The United Kingdom', 24330379, 212083),
(213, 'Timor-Leste', 23423, 138),
(214, 'Togo', 39469, 290),
(215, 'Tokelau', 5, 0),
(216, 'Tonga', 16814, 12),
(217, 'Trinidad and Tobago', 191007, 4372),
(218, 'Tunisia', 1152033, 29363),
(219, 'Türkiye', 17004677, 101419),
(220, 'Turkmenistan', 0, 0),
(221, 'Turks and Caicos Islands', 6565, 38),
(222, 'Tuvalu', 2779, 0),
(223, 'Uganda', 170515, 3632),
(224, 'Ukraine', 5484936, 111789),
(225, 'United Arab Emirates', 1058979, 2349),
(226, 'United Republic of Tanzania', 42973, 846),
(227, 'United States of America', 102873924, 1118800),
(228, 'United States Virgin Islands', 24886, 130),
(229, 'Uruguay', 1036159, 7621),
(230, 'Uzbekistan', 252265, 1637),
(231, 'Vanuatu', 12014, 14),
(232, 'Venezuela (Bolivarian Republic of)', 552398, 5854),
(233, 'Viet Nam', 11527745, 43186),
(234, 'Wallis and Futuna', 3427, 7),
(235, 'Yemen', 11945, 2159),
(236, 'Zambia', 343415, 4057),
(237, 'Zimbabwe', 264584, 5684);

-- --------------------------------------------------------

--
-- Table structure for table `health_expenditure`
--

CREATE TABLE IF NOT EXISTS `health_expenditure` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `health_expenditure` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=188 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `health_expenditure`
--

INSERT INTO `health_expenditure` (`id`, `country_name`, `health_expenditure`) VALUES
(1, 'Afghanistan', 15.5336),
(2, 'Algeria', 6.32118),
(3, 'Andorra', 9.05176),
(4, 'Angola', 2.91183),
(5, 'Antigua and Barbuda', 5.61473),
(6, 'Argentina', 9.98438),
(7, 'Armenia', 12.241),
(8, 'Australia', 10.649),
(9, 'Austria', 11.4743),
(10, 'Azerbaijan', 4.60677),
(11, 'Bahamas', 7.59363),
(12, 'Bahrain', 4.723),
(13, 'Bangladesh', 2.62801),
(14, 'Barbados', 7.20014),
(15, 'Belarus', 6.40607),
(16, 'Belgium', 11.0645),
(17, 'Belize', 6.92426),
(18, 'Benin', 2.58937),
(19, 'Bhutan', 4.37175),
(20, 'Bolivia Plurinational States of ', 7.85706),
(21, 'Bosnia and Herzegovina', 9.84113),
(22, 'Botswana', 6.18665),
(23, 'Brazil', 10.3129),
(24, 'Brunei Darussalam', 2.39378),
(25, 'Bulgaria', 8.52064),
(26, 'Burkina Faso', 6.71933),
(27, 'Burundi', 6.50142),
(28, 'Cabo Verde Republic of', 6.01976),
(29, 'Cambodia', 7.50527),
(30, 'Cameroon', 3.76583),
(31, 'Canada', 12.9397),
(32, 'Central African Republic', 9.40207),
(33, 'Chad', 5.40749),
(34, 'Chile', 9.75301),
(35, 'China', 5.5936),
(36, 'Colombia', 8.99294),
(37, 'Comoros', 5.34623),
(38, 'Congo', 4.46762),
(39, 'Cook Islands', 3.19344),
(40, 'Costa Rica', 7.85537),
(41, 'Côte dIvoire', 3.72246),
(42, 'Croatia', 7.76502),
(43, 'Cuba', 12.4864),
(44, 'Cyprus', 8.09348),
(45, 'Czech Republic', 9.24007),
(46, 'Democratic Republic of the Congo', 4.05093),
(47, 'Denmark', 10.5282),
(48, 'Djibouti', 2.00786),
(49, 'Dominica', 5.64583),
(50, 'Dominican Republic', 4.94),
(51, 'Ecuador', 8.47677),
(52, 'Egypt', 4.36498),
(53, 'El Salvador', 9.85178),
(54, 'Equatorial Guinea', 3.76834),
(55, 'Eritrea', 4.0936),
(56, 'Estonia', 7.75207),
(57, 'Eswatini', 6.51153),
(58, 'Ethiopia', 3.48096),
(59, 'Fiji', 3.74985),
(60, 'Finland', 9.6135),
(61, 'France', 12.205),
(62, 'Gabon', 3.42725),
(63, 'Gambia', 2.61294),
(64, 'Georgia', 7.60487),
(65, 'Germany', 12.8225),
(66, 'Ghana', 3.9903),
(67, 'Greece', 9.50821),
(68, 'Grenada', 5.82064),
(69, 'Guatemala', 6.46871),
(70, 'Guinea', 4.04451),
(71, 'Guinea-Bissau', 8.40979),
(72, 'Guyana', 5.50864),
(73, 'Haiti', 3.22171),
(74, 'Honduras', 9.0351),
(75, 'Hungary', 7.25031),
(76, 'Iceland', 9.55796),
(77, 'India', 2.95919),
(78, 'Indonesia', 3.41433),
(79, 'Iran', 5.3358),
(80, 'Iraq', 5.0849),
(81, 'Ireland', 7.10144),
(82, 'Israel', 8.3195),
(83, 'Italy', 9.63378),
(84, 'Jamaica', 6.61175),
(85, 'Japan', 10.9043),
(86, 'Jordan', 7.46914),
(87, 'Kazakhstan', 3.78894),
(88, 'Kenya', 4.29191),
(89, 'Kiribati', 11.6418),
(90, 'Kuwait', 6.30743),
(91, 'Kyrgyzstan', 5.25934),
(92, 'Lao Peoples Democratic Republic', 2.69476),
(93, 'Latvia', 7.44663),
(94, 'Lebanon', 7.95366),
(95, 'Lesotho', 11.7843),
(96, 'Liberia', 9.49941),
(97, 'Lithuania', 7.53844),
(98, 'Luxembourg', 5.76746),
(99, 'Madagascar', 3.87958),
(100, 'Malawi', 5.434),
(101, 'Malaysia', 4.12442),
(102, 'Maldives', 11.3472),
(103, 'Mali', 4.30812),
(104, 'Malta', 10.8352),
(105, 'Marshall Islands', 13.008),
(106, 'Mauritania', 3.35573),
(107, 'Mauritius', 6.65996),
(108, 'Mexico', 6.24215),
(109, 'Micronesia (Federated States of)', 11.56),
(110, 'Monaco', 1.67133),
(111, 'Mongolia', 4.94451),
(112, 'Montenegro', 11.4218),
(113, 'Morocco', 5.99316),
(114, 'Mozambique', 7.6194),
(115, 'Myanmar', 4.62412),
(116, 'Namibia', 8.89626),
(117, 'Nauru', 11.969),
(118, 'Nepal', 5.17352),
(119, 'Netherlands (Kingdom of the)', 11.1359),
(120, 'New Zealand', 10.0286),
(121, 'Nicaragua', 8.62855),
(122, 'Niger', 6.2007),
(123, 'Nigeria', 3.38063),
(124, 'Niue', 7.8394),
(125, 'Norway', 11.4176),
(126, 'Oman', 5.32572),
(127, 'Pakistan', 2.9539),
(128, 'Palau', 18.3906),
(129, 'Panama', 9.66292),
(130, 'Papua New Guinea', 2.52694),
(131, 'Paraguay', 7.57704),
(132, 'Peru', 6.30416),
(133, 'Philippines', 5.11274),
(134, 'Poland', 6.4931),
(135, 'Portugal', 10.5493),
(136, 'Qatar', 4.18304),
(137, 'Republic of Korea', 8.3641),
(138, 'Republic of Moldova', 6.77933),
(139, 'Romania', 6.27236),
(140, 'Russian Federation', 7.59624),
(141, 'Rwanda', 7.31562),
(142, 'Saint Kitts and Nevis', 5.36557),
(143, 'Saint Lucia', 6.73803),
(144, 'Saint Vincent and the Grenadines', 4.81775),
(145, 'Samoa', 5.32614),
(146, 'San Marino', 8.69089),
(147, 'Sao Tome and Principe', 4.90671),
(148, 'Senegal', 5.15119),
(149, 'Serbia', 8.73162),
(150, 'Seychelles', 6.38917),
(151, 'Sierra Leone', 8.75637),
(152, 'Singapore', 6.05388),
(153, 'Slovakia', 7.23213),
(154, 'Slovenia', 9.45358),
(155, 'Solomon Islands', 4.43218),
(156, 'South Africa', 8.5833),
(157, 'South Sudan', 5.25356),
(158, 'Spain', 10.7137),
(159, 'Sri Lanka', 4.06585),
(160, 'Sudan', 3.01748),
(161, 'Suriname', 6.77188),
(162, 'Sweden', 11.3799),
(163, 'Switzerland', 11.7964),
(164, 'Tajikistan', 8.17698),
(165, 'Thailand', 4.35931),
(166, 'The Republic of North Macedonia', 7.88948),
(167, 'Timor-Leste', 9.85141),
(168, 'Togo', 5.96301),
(169, 'Tonga', 5.31754),
(170, 'Trinidad and Tobago', 7.31458),
(171, 'Tunisia', 6.34365),
(172, 'Türkiye', 4.61794),
(173, 'Turkmenistan', 5.68487),
(174, 'Tuvalu', 21.5392),
(175, 'Uganda', 3.96207),
(176, 'Ukraine', 7.61658),
(177, 'United Arab Emirates', 5.67227),
(178, 'United Kingdom', 11.9776),
(179, 'United Republic of Tanzania', 3.7466),
(180, 'United States of America', 18.8158),
(181, 'Uruguay', 9.15207),
(182, 'Uzbekistan', 6.74741),
(183, 'Vanuatu', 3.96995),
(184, 'Venezuela (Bolivarian Republic of)', 3.81606),
(185, 'Viet Nam', 4.68067),
(186, 'Zambia', 5.61788),
(187, 'Zimbabwe', 3.42558);

-- --------------------------------------------------------

--
-- Table structure for table `world_happiness`
--

CREATE TABLE IF NOT EXISTS `world_happiness` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) NOT NULL,
  `happiness_rank` float DEFAULT NULL,
  `happiness_score` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `world_happiness`
--

INSERT INTO `world_happiness` (`id`, `country_name`, `happiness_rank`, `happiness_score`) VALUES
(1, 'Afghanistan', 137, 1.859),
(2, 'Albania', 83, 5.2773),
(3, 'Algeria', 81, 5.3291),
(4, 'Argentina', 52, 6.0237),
(5, 'Armenia', 79, 5.3417),
(6, 'Australia', 12, 7.0946),
(7, 'Austria', 11, 7.0973),
(8, 'Bahrain', 42, 6.1732),
(9, 'Bangladesh', 118, 4.2821),
(10, 'Belgium', 17, 6.8591),
(11, 'Benin', 116, 4.3737),
(12, 'Bolivia', 69, 5.6843),
(13, 'Bosnia and Herzegovina', 71, 5.6325),
(14, 'Botswana', 132, 3.4353),
(15, 'Brazil', 49, 6.1246),
(16, 'Bulgaria', 77, 5.4661),
(17, 'Burkina Faso', 104, 4.6376),
(18, 'Cambodia', 115, 4.3935),
(19, 'Cameroon', 96, 4.9732),
(20, 'Canada', 13, 6.9607),
(21, 'Chad', 114, 4.3966),
(22, 'Chile', 35, 6.3338),
(23, 'China', 64, 5.8179),
(24, 'Colombia', 72, 5.6304),
(25, 'Comoros', 130, 3.5452),
(26, 'Congo (Brazzaville)', 86, 5.2671),
(27, 'Congo (Kinshasa)', 133, 3.2072),
(28, 'Costa Rica', 23, 6.6085),
(29, 'Croatia', 48, 6.125),
(30, 'Cyprus', 46, 6.13),
(31, 'Czechia', 18, 6.8452),
(32, 'Denmark', 2, 7.5864),
(33, 'Dominican Republic', 73, 5.5689),
(34, 'Ecuador', 74, 5.5589),
(35, 'Egypt', 121, 4.1705),
(36, 'El Salvador', 50, 6.1216),
(37, 'Estonia', 31, 6.4552),
(38, 'Ethiopia', 124, 4.0906),
(39, 'Finland', 1, 7.8042),
(40, 'France', 21, 6.6613),
(41, 'Gabon', 94, 5.0347),
(42, 'Gambia', 119, 4.2794),
(43, 'Georgia', 90, 5.1091),
(44, 'Germany', 16, 6.8918),
(45, 'Ghana', 107, 4.605),
(46, 'Greece', 58, 5.9309),
(47, 'Guatemala', 43, 6.1503),
(48, 'Guinea', 91, 5.0717),
(49, 'Honduras', 53, 6.0225),
(50, 'Hong Kong S.A.R. of China', 82, 5.3085),
(51, 'Hungary', 51, 6.0412),
(52, 'Iceland', 3, 7.5296),
(53, 'India', 126, 4.0358),
(54, 'Indonesia', 84, 5.2769),
(55, 'Iran', 101, 4.8763),
(56, 'Iraq', 98, 4.9409),
(57, 'Ireland', 14, 6.9108),
(58, 'Israel', 4, 7.4729),
(59, 'Italy', 33, 6.4045),
(60, 'Ivory Coast', 93, 5.0527),
(61, 'Jamaica', 68, 5.7027),
(62, 'Japan', 47, 6.129),
(63, 'Jordan', 123, 4.1198),
(64, 'Kazakhstan', 44, 6.1439),
(65, 'Kenya', 111, 4.4866),
(66, 'Kosovo', 34, 6.3676),
(67, 'Kyrgyzstan', 62, 5.8253),
(68, 'Laos', 89, 5.1107),
(69, 'Latvia', 41, 6.2127),
(70, 'Lebanon', 136, 2.3922),
(71, 'Liberia', 125, 4.0423),
(72, 'Lithuania', 20, 6.763),
(73, 'Luxembourg', 9, 7.2279),
(74, 'Madagascar', 127, 4.0191),
(75, 'Malawi', 131, 3.4952),
(76, 'Malaysia', 55, 6.0123),
(77, 'Mali', 120, 4.1978),
(78, 'Malta', 37, 6.2999),
(79, 'Mauritania', 103, 4.7239),
(80, 'Mauritius', 59, 5.9023),
(81, 'Mexico', 36, 6.3295),
(82, 'Moldova', 63, 5.8192),
(83, 'Mongolia', 61, 5.8402),
(84, 'Montenegro', 67, 5.7222),
(85, 'Morocco', 100, 4.9028),
(86, 'Mozambique', 97, 4.954),
(87, 'Myanmar', 117, 4.3725),
(88, 'Namibia', 105, 4.6308),
(89, 'Nepal', 78, 5.3603),
(90, 'Netherlands', 5, 7.403),
(91, 'New Zealand', 10, 7.1229),
(92, 'Nicaragua', 40, 6.2588),
(93, 'Niger', 109, 4.5013),
(94, 'Nigeria', 95, 4.9806),
(95, 'North Macedonia', 87, 5.2536),
(96, 'Norway', 7, 7.3155),
(97, 'Pakistan', 108, 4.5554),
(98, 'Panama', 38, 6.2645),
(99, 'Paraguay', 66, 5.7378),
(100, 'Peru', 75, 5.5259),
(101, 'Philippines', 76, 5.5229),
(102, 'Poland', 39, 6.2597),
(103, 'Portugal', 56, 5.968),
(104, 'Romania', 24, 6.5891),
(105, 'Russia', 70, 5.6607),
(106, 'Saudi Arabia', 30, 6.4626),
(107, 'Senegal', 102, 4.8551),
(108, 'Serbia', 45, 6.1436),
(109, 'Sierra Leone', 135, 3.1376),
(110, 'Singapore', 25, 6.5867),
(111, 'Slovakia', 29, 6.4686),
(112, 'Slovenia', 22, 6.6499),
(113, 'South Africa', 85, 5.2746),
(114, 'South Korea', 57, 5.9511),
(115, 'Spain', 32, 6.4362),
(116, 'Sri Lanka', 112, 4.4416),
(117, 'State of Palestine', 99, 4.9078),
(118, 'Sweden', 6, 7.3952),
(119, 'Switzerland', 8, 7.2401),
(120, 'Taiwan Province of China', 27, 6.5354),
(121, 'Tajikistan', 80, 5.3298),
(122, 'Tanzania', 129, 3.6938),
(123, 'Thailand', 60, 5.843),
(124, 'Togo', 122, 4.1374),
(125, 'Tunisia', 110, 4.4967),
(126, 'Turkiye', 106, 4.6135),
(127, 'Uganda', 113, 4.4325),
(128, 'Ukraine', 92, 5.0714),
(129, 'United Arab Emirates', 26, 6.5712),
(130, 'United Kingdom', 19, 6.7956),
(131, 'United States', 15, 6.8937),
(132, 'Uruguay', 28, 6.4939),
(133, 'Uzbekistan', 54, 6.0143),
(134, 'Venezuela', 88, 5.2106),
(135, 'Vietnam', 65, 5.7633),
(136, 'Zambia', 128, 3.9822),
(137, 'Zimbabwe', 134, 3.2035);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
