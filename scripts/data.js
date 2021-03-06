const data = {
	1: {
		1: {
			question: '<p>В <span>Москве</span>! Коммунальные службы, как всегда, тормозят</p>',
			point: 0,
			result: 'Не в этот раз! На фото — Нью-Йорк'
		},
		2: {
			question: '<p>Судя по снегопаду, где-то в центре <span>Хельсинки</span></p>',
			point: 0,
			result: 'Хорошая попытка. Но нет, это заметает Нью-Йорк'
		},
		3: {
			question: '<p>Улицы зимнего <span>Нью-Йорка</span> я всегда узнаю</p>',
			point: 1,
			result: 'В яблочко!'
		}
	},
	2: {
		1: {
			question: '<p>Это же Русский мост во <span>Владивостоке</span>!</p>',
			point: 1,
			result: 'Дело говорите! Он и есть.'
		},
		2: {
			question: '<p>Знаю, это мост-переезд между <span>Данией</span> и <span>Швецией</span></p>',
			point: 0,
			result: 'Эх, не признали Владивосток!'
		},
		3: {
			question: '<p>Это мост через Иртыш в городе Семей. Фото сделано в <span>Казахстане</span>!</p>',
			point: 0,
			result: 'Похоже! Но нет — это Владивосток.'
		},
	},
	3: {
		1: {
			question: '<p>Типичная Сибирь. Дорога где-нибудь в <span>Алтайском</span> крае</p>',
			point: 1,
			result: 'Было сложно, но вы угадали!'
		},
		2: {
			question: '<p>Это итальянские <span>Апеннины</span> зимой</p>',
			point: 0,
			result: 'Далеко! На фото — Алтай.'
		},
		3: {
			question: '<p>Так выглядит ландшафт Аляски. Мой ответ — <span>США</span></p>',
			point: 0,
			result: 'Эх, не угадали. Это Алтай.'
		},
	},
	4: {
		1: {
			question: '<p>В Карачаево-Черкесии! Это точно зимний <span>Домбай</span></p>',
			point: 0,
			result: 'Домбай чудесен, но это Австрия.'
		},
		2: {
			question: '<p>Кажется, это панорамная дорога Гросглоккнер в <span>Австрии</span></p>',
			point: 1,
			result: 'Вы угадали.'
		},
		3: {
			question: '<p>В швейцарских Альпах! Это дорога из Сент-Морица в <span>Базель</span></p>',
			point: 0,
			result: 'Там тоже красиво, но это Австрия.'
		},
	},
	5: {
		1: {
			question: '<p>В Стране Великих озёр — <span>Канаде</span>. Фото явно сделано на водах Гурона</p>',
			point: 0,
			result: 'Мимо! Это воды Байкала.'
		},
		2: {
			question: '<p>Сердцем чувствую, что это <span>Байкал</span></p>',
			point: 1,
			result: 'Браво! Интуиция вас не подвела.'
		},
		3: {
			question: '<p>Нордический пейзаж подсказывает, что это река Гломма в <span>Норвегии</span></p>',
			point: 0,
			result: 'Промахнулись, это в России.'
		},
	},
	6: {
		1: {
			question: '<p>Да что дорога! Такое небо только в <span>Исландии</span></p>',
			point: 1,
			result: 'И добавить нечего! Да!'
		},
		2: {
			question: '<p>Это пустырь на окраинах <span>Костромы</span>… Романтика!</p>',
			point: 0,
			result: 'Романтика, но, увы, исландская.'
		},
		3: {
			question: '<p>Асфальт что надо! Это <span>Германия</span>, перед съездом на автобан</p>',
			point: 0,
			result: 'Да, он хорош! Но сделан в Исландии.'
		},
	}
}

const feedback = {
	1: "",
	2: "Безопасно ездить по зимним дорогам в городе помогут шины <span class='tires_name'>Cordiant</span> Winter <a target='blank' href='https://cordiant.ru/'>Drive 2</a>. Они идеальны, когда на поверхности улиц то снег, то каша, то мокрый лёд. Ловите шанс: сейчас эти шины можно купить со скидкой 15%. Ищите промокод в конце теста.",
	3: "Чтобы маневрировать по снежным заносам за городом, выбирайте резину <span class='tires_name'>Cordiant</span> Snow <a target='blank' href='https://cordiant.ru/'>Cross</a>. Эти шины легко выедут из утрамбованной колеи и подарят вам ощущение полного контроля.",
	4: "",
	5: "Чтобы чувствовать себя уверенно даже на голом льду, используйте шины <span class='tires_name'>Cordiant</span> Snow <a target='blank' href='https://cordiant.ru/'>Cross 2</a>. Благодаря COR-технологиям шипы проникают глубоко в лёд и увеличивают сцепление на 10%, а динамику разгона — на 20%!",
	6: ""
}

const result = [];

const output = {
	1: {
		title: "Я — географ-экстрасенс",
		description: "Узнать российские дороги? Несите задачку посложнее! Если нужно, я вам по фото и географические координаты назову.",
		promo: "<span class='tires_name'>Чтобы любая дорога была для вас безопасной</span> - следите за качеством резины и переобувайтесь вовремя. С зимними шинами <span class='>Cordiant</span> ваша машина будет уверенно выезжать из снежных заносов и стабильно вести себя на обледенелых трассах. Прямо сейчас комплект зимних шин <span class='tires_name'>Cordiant</span> можно купить со скидкой 15%! Просто введите промокод <span class='promo_code'>CORDIHACKER</span> в комментарии к заказу на <a target='blank' href='https://koleso.ru'>koleso.ru</a>. Оператор свяжется с вами по телефону для подтверждения заказа и расчёта скидки.",
		time: "Промокод действует до <span class='promo_date'>ХХ.ХХ.2020</span>."
	},
	2: {
		title: "Я — начинающий топограф",
		description: "Узнаю российские дороги без регистрации и СМС. Но иногда всё же путаюсь — эти зимние трассы так похожи.",
		promo: "<span class='tires_name'>Чтобы любая дорога была для вас безопасной</span> - следите за качеством резины и переобувайтесь вовремя. С зимними шинами <span class='tires_name'>Cordiant</span> ваша машина будет уверенно выезжать из снежных заносов и стабильно вести себя на обледенелых трассах. Прямо сейчас комплект зимних шин <span class='tires_name'>Cordiant</span> можно купить со скидкой 15%! Просто введите промокод <span class='promo_code'>CORDIHACKER</span> в комментарии к заказу на <a target='blank' href='https://koleso.ru'>koleso.ru</a>. Оператор свяжется с вами по телефону для подтверждения заказа и расчёта скидки.",
		time: "Промокод действует до <span class='promo_date'>ХХ.ХХ.2020</span>."
	},
	3: {
		title: "Я — дорожный романтик",
		description: "Да кто вообще смотрит под ноги! Я считаю звёзды и ловлю снежинки, а не изучаю асфальт. Ой, смотрите: облако похоже на слоника!",
		promo: "<span class='tires_name'>Чтобы любая дорога была для вас безопасной</span> - следите за качеством резины и переобувайтесь вовремя. С зимними шинами <span class='tires_name'>Cordiant</span> ваша машина будет уверенно выезжать из снежных заносов и стабильно вести себя на обледенелых трассах. Прямо сейчас комплект зимних шин <span class='tires_name'>Cordiant</span> можно купить со скидкой 15%! Просто оформите заказ на <a target='blank' href='https://koleso.ru'>koleso.ru</a>, а потом позвоните по телефону 8-800-100-68-78, назовите номер заказа и промокод <span class='promo_code'>CORDIHACKER</span>.",
		time: "Промокод действует до <span class='promo_date'>30.10.2020</span>."
	}
}