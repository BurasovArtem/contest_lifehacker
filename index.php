<!DOCTYPE html>
<html>
	<head>
		<title>Тест</title>
		<meta charset="utf-8">

		<?php
			require_once "php/check_mobile.php";
			if ( check_mobile() ) {
				?>
					<link rel="stylesheet" type="text/css" href="styles/mobile/styles.css">
					<link rel="stylesheet" type="text/css" href="styles/mobile/main.css">
				<?php
			}
			else {
				?>
					<link rel="stylesheet" type="text/css" href="styles/styles.css">
					<link rel="stylesheet" type="text/css" href="styles/main.css">
				<?php
			}
		?>
		<script type="text/javascript" src="scripts/script.js"></script>
	</head>
	<body>
		<header>
			<img class="logo_lifehacker" src="images/logo_lifehacker.svg">
			<img class="logo_cordiant" src="images/logo_cordiant.svg">
		</header>
		<main>
			<div class="main_block">
				<div class="title">
					<p>Узнаете ли вы Росиию</p>
					<p>по дорогам?</p>
				</div>
				<div class="description">
					<p class="text">Мы составили этот тест вместе с производителем шин <a href="#">Cordiant</a>, чтобы вы проверили, сможете ли отличить российские дороги от остальных. Активируйте внутреннего Шерлока и вперёд! Пройдёте тест до конца — получите <a>скидку 15%</a> на зимнюю резину.</p>
					<button class="start_button" onclick="location.href = 'test.php'">Пройти тест!</button>
				</div>
			</div>
		</main>
		<footer>
			<div class="social">
				<a href="#" class="item"><img src="images/social/twitter.svg"></a>
				<a href="#" class="item"><img src="images/social/vk.svg"></a>
				<a href="#" class="item"><img src="images/social/facebook.svg"></a>
			</div>
			<div class="madeby">
				<p class="text"><a href="#">Лайфхакер</a> | <a href="#">Cordiant</a> © 2020</p>
			</div>
		</footer>
	</body>
</html>