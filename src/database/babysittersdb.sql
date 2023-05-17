-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-05-2023 a las 03:03:37
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `babysittersdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aptitudes`
--

CREATE TABLE `aptitudes` (
  `id` int(11) NOT NULL,
  `aptitudes` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `aptitudes`
--

INSERT INTO `aptitudes` (`id`, `aptitudes`) VALUES
(1, 'Creativa'),
(2, 'Paciencia'),
(3, 'Responsable'),
(4, 'Comunicativa'),
(5, 'Divertida'),
(6, 'Organizada'),
(7, 'Atenta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `babysitters`
--

CREATE TABLE `babysitters` (
  `id` int(11) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `edad` tinyint(150) DEFAULT NULL,
  `paisDeResidencia` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `celular` int(11) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `frase` varchar(80) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `ciudad_de_residencias_id` int(11) DEFAULT NULL,
  `aptitudes_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `babysitters`
--

INSERT INTO `babysitters` (`id`, `img`, `nombre`, `apellido`, `email`, `username`, `password`, `edad`, `paisDeResidencia`, `direccion`, `celular`, `descripcion`, `frase`, `precio`, `ciudad_de_residencias_id`, `aptitudes_id`) VALUES
(1, '/images/ninera1.jpg', 'Camila', 'Walkers', 'camila.walkers@gmail.com', 'cami05', '$2a$10$OSoTVNzFhATB3SxnM6RkpuKVVdVBAoI//VSHEo.4dNQFkBq.nU4ie', 29, 'Argentina', 'Ayacucho # 1050 Buenos Aires, 1111 Argentina', 2147483647, 'Niñera con 3 años de experiencia en el cuidado de niños y bebés. Me caracterizo por organizar sesiones de lectura y juegos didácticos para fomentar el desarrollo intelectual de los niños. Eficaz en las tareas de alimentar, bañar, cambiar y lavar la ropa de niños y bebés.', '\"Los niños y niñas no juegan para aprender, pero aprenden porque juegan\" Jean Pi', 500, 6, 1),
(2, '/images/ninera2.jpg', 'Consuelo', 'Duval', 'consuelo.duval@hotmail.com', 'consuelo07', '$2a$10$nM1oRVvfzjM48d56L3EhzOHb5bmYFx2vC8HjH59y.uxOIVUHm0HNG', 32, 'Argentina', 'Ruta Panamericana Km 36, Tortuguitas, Pcia. d', 645285752, 'Niñera con amplia experiencia en el cuidado e instrucción de niños. Capaz de seguir instrucciones detalladas referentes a la alimentación, medicación, tareas y cuidados en general. Dispuesta a participar en la limpieza de los cuartos y el lavado de ropa de los niños.', '«El tipo de educación más eficaz es que un niño juegue entre cosas encantadoras»', 600, 6, 1),
(3, '/images/ninera4.jpg', 'Camila', 'Penagos', 'camila.penagos@gmail.com', 'cami05', '$2a$10$8EWwnljucr3IRUgrkdhCk.t/hVkMHEbGed55./EI3qKPbD/o/D1om', 28, 'Argentina', 'avenida chile', 2147483647, 'Niñera con amplia experiencia en el cuidado e instrucción de niños. Capaz de seguir instrucciones detalladas referentes a la alimentación, medicación, tareas y cuidados en general. Dispuesta a participar en la limpieza de los cuartos y el lavado de ropa de los niños.', 'La educación  es la preparación para la vida\', 5000, 6, 1),
(4, '/images/ninera5.jpg', 'Isabella', 'Mesas', 'isa.05@gmail.com', 'isa05', '$2a$10$aMMqh.65EdUVAjm21XtCDupY0F9XCTqMKwfWdHVKkU8RKMVXOyIcm', 23, 'Argentina', 'Av General Las Heras 340', 2147483647, 'Niñera experimentada y fiable con más de diez años de experiencia en el cuidado de niños y sus familias. Ofrezco cuidados óptimos a niños de incluso tan solo 8 semanas de edad. Aporto un historial probado de clientes satisfechos, altamente dispuestos a recomendar mis servicios.', 'Los niños tienen que jugar más con herramientas y juegos, dibujar y construir', 800, 2, 1),
(21, '/images/foto.png', 'Laura', 'Chaves', 'lau.chaves@gmail.com', 'lau07', '$2a$10$NbNPvn0T8zUW0InbJL7Q3.1lT65rJEc5ztxrrRwMSq1cp2/Iwfx8u', 28, 'Argentina', 'Avda. L. Peltier 351- 1er. Piso – 5500 – Mza.', 2147483647, 'Niñera carismática, paciente y divertida. Experiencia de más de 5 años con niños mayores y bebés. Capacidad de transportar a los niños a sus diferentes actividades. Mantengo una relación cercana con los papás para reportarles cualquier irregularidad.', ' \'Nunca es demasiado tarde para tener una infancia feliz\' (Tom Robbins).', 600, 4, 4),
(23, '/images/usuarios.jpg', 'Roberta', 'Mendez', 'rober@gmail.com', 'rober08', '$2a$10$fCykJjt5q6fbixOCb5GeNeB4Wkjv7MWvwSt9uYuVfO7L34anDaaGO', 25, 'Argentina', 'Buenos Aires 711 - 1º piso 2000 ', 2147483647, 'Niñera con formacion en educacion infantil. Solida experiencia trabajando con niños de edades comprendidas entre 1 y 6 anos. Acreditada por referencias no fumadora.', 'Una de las cosas más afortunadas que te pueden suceder en la vida es tener una i', 600, 3, 6),
(24, '/images/ninera3.jpg', 'Liliana', 'Rodriguez', 'liliana.rodriguez@gmail.com', 'lili08', '$2a$10$7FwwzMLhcYwCTWae8hNb9uwW9Lh91D3QQVSEPZpIV7noaxWpAedGm', 24, 'Argentina', 'Bulevar Oronio 1315', 2147483647, 'Estoy cursando 3º de Magisterio en la Universidad Complutense de Madrid. Tengo disponibilidad todas las tardes de lunes a viernes para cuidar niños (a partir de las 16:00). También estoy disponible los fines de semana. Puedo recogerles del colegio, llevarles al parque y  ayudarles a hacer los deberes. Hablo inglés con un nivel B2 y tengo referencias de otras familias.', '«Si he sido capaz de iluminar una sola infancia triste, estoy satisfecha.»(Astri', 1000, 3, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito_de_compras`
--

CREATE TABLE `carrito_de_compras` (
  `id` int(11) NOT NULL,
  `cantidad` tinyint(10) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `babysitters_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudad_de_residencias`
--

CREATE TABLE `ciudad_de_residencias` (
  `id` int(11) NOT NULL,
  `ciudad` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `ciudad_de_residencias`
--

INSERT INTO `ciudad_de_residencias` (`id`, `ciudad`) VALUES
(1, 'Buenos Aires'),
(2, 'Santa Fe'),
(3, 'Rosario'),
(4, 'Mendoza'),
(5, 'Mar de plata'),
(6, 'La plata');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencias`
--

CREATE TABLE `experiencias` (
  `id` int(11) NOT NULL,
  `experiencia` text DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `paisDeResidencia` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `movil` int(11) DEFAULT NULL,
  `pregunta` tinyint(4) DEFAULT NULL,
  `admin` tinyint(4) DEFAULT NULL,
  `ciudad_de_residencias_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `img`, `nombre`, `apellido`, `email`, `username`, `password`, `paisDeResidencia`, `direccion`, `movil`, `pregunta`, `admin`, `ciudad_de_residencias_id`) VALUES
(16, '/images/usuarios.jpg', 'Robero', 'Gomez', 'rober@gmail.com', 'rober07', '$2a$10$.To3t.sNmQaVTlswE55Lhek.jOIP7jehXL/BZQorYwIFYUHVYOtlG', 'Argentina', 'Buenos Aires 711 - 1º piso', 2535525, 0, NULL, 1),
(17, '/images/usuarios.jpg', 'Alejandra', 'Penagos', 'maria.aleja19@hotmail.com', 'maleja19', '$2a$10$m31IkhOgup57k6eHnKWpWecIP.Pd2B/1KwUldMvxJEzvyjZfHKZ6.', 'Argentina', 'Av. Leandro N. Alem 758', 2147483647, 0, NULL, 2),
(18, '/images/usuarios.jpg', 'Carlos', 'Ariza', 'carlos02134@gmail.com', 'carlos07', '$2a$10$sM5GW32BpQshKJ6H0XwtQ.thkPaLdI2ED1G2Q1TPep1EoyqIIAeKy', 'Argentina', 'Calle 12 e/51 y 53 1900', 123456789, 0, NULL, 6),
(19, '/images/usuarios.jpg', 'Franco', 'Spinelly', 'franco.spinelly@gmail.com', 'fran08', '$2a$10$LHO9ddTnf4rSsSIumR6wuumy0Cbs5GeYNjAYoKQZvGWkqCjlX0ZN2', 'Argentina', 'santafe 3000', 1129428575, 0, NULL, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aptitudes`
--
ALTER TABLE `aptitudes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `babysitters`
--
ALTER TABLE `babysitters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_babysitters_ciudad_de_residencias1_idx` (`ciudad_de_residencias_id`),
  ADD KEY `fk_babysitters_aptitudes1_idx` (`aptitudes_id`);

--
-- Indices de la tabla `carrito_de_compras`
--
ALTER TABLE `carrito_de_compras`
  ADD PRIMARY KEY (`id`,`babysitters_id`,`users_id`),
  ADD KEY `fk_carrito_de_compras_babysitters1_idx` (`babysitters_id`),
  ADD KEY `fk_carrito_de_compras_users1_idx` (`users_id`);

--
-- Indices de la tabla `ciudad_de_residencias`
--
ALTER TABLE `ciudad_de_residencias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `experiencias`
--
ALTER TABLE `experiencias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_experiencias_users1_idx` (`users_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_users_ciudad_de_residencias1_idx` (`ciudad_de_residencias_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aptitudes`
--
ALTER TABLE `aptitudes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `babysitters`
--
ALTER TABLE `babysitters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `ciudad_de_residencias`
--
ALTER TABLE `ciudad_de_residencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `experiencias`
--
ALTER TABLE `experiencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `babysitters`
--
ALTER TABLE `babysitters`
  ADD CONSTRAINT `fk_babysitters_aptitudes1` FOREIGN KEY (`aptitudes_id`) REFERENCES `aptitudes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_babysitters_ciudad_de_residencias1` FOREIGN KEY (`ciudad_de_residencias_id`) REFERENCES `ciudad_de_residencias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `carrito_de_compras`
--
ALTER TABLE `carrito_de_compras`
  ADD CONSTRAINT `fk_carrito_de_compras_babysitters1` FOREIGN KEY (`babysitters_id`) REFERENCES `babysitters` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_carrito_de_compras_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `experiencias`
--
ALTER TABLE `experiencias`
  ADD CONSTRAINT `fk_experiencias_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_ciudad_de_residencias1` FOREIGN KEY (`ciudad_de_residencias_id`) REFERENCES `ciudad_de_residencias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
