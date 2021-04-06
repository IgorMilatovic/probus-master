//SCROLL TO TOP
// scroll back to top button
let scrollTopButton = document.querySelector('.scroll-top-button');

// show / hide button
showHideButton = () => {
	window.pageYOffset < 150  ? (scrollTopButton.style.display = 'none') : 
						   	    (scrollTopButton.style.display = 'block');
}
document.addEventListener('scroll', showHideButton);

// scroll to top
window.addEventListener('load', function() {
	document.querySelector('.scroll-top-button').addEventListener('click', function(e) {
	e.preventDefault();
	document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
	});
});


// TRANSLATION
//define language reload anchors
var langLinks = document.querySelectorAll("[data-reload]");
var navLinks = document.querySelectorAll(".nav-link-lang");
var orderLinks = document.querySelectorAll(".porucite-link");

//languages translation
var language = {
	eng: {
		nav1: "About Us",
		nav2: "Wines",
		nav3: "Gallery",
		nav4: "Contact",
		nav5: "News",
		nav6: "Shop",
		o_nama1: "Probus Vineyards is a new modern family winery located on Šuljamačka glavica in Srem, Republic of Serbia. 16 ha of vineyards are surrounded by a national park Fruška gora on one side and an amazing view on the other side. The vines bath in everyday sun and the wind gently blows between rows of vines to indulge them.",
		o_nama2: '"The vineyard loves a lot of sun, but also the shade of a winegrower! A lot of work has been invested here, but I still enjoy it. What makes me really happy is the thought that there is someone who will continue my work."',
		o_nama_potpis: "Milorad Milošević, owner",
		o_nama3: "MARCUS Aurelius PROBUS",
		o_nama4: "This location has a powerful historical background. Marcus Aurelius Probus (232-282), the Roman Emperor born in Sremska Mitrovica (Sirmium), abolished the prohibition of planting grapevine in 280 and brought it to the territory of present day Šuljamačka glavica. Here we planted the grapevine in 2012, restored the vineyards and named our winery Probus Vineyards in honour of the Roman Emperor.",
		o_nama5: "OUR VINEYARDS AND WINE STYLE",
		o_nama6: "Our vineyards are located on Fruška gora, an ancient island of the Pannonian sea, at an altitude of 260 m. Soil is rich with various types of rocks, from magmatic to limestone pinnacles and phyllite. The southern position provides plenty of sunshine and a constant flow of fresh breeze during the whole year which reduces the number of sprays on our slopes to a minimum.",
		o_nama7: "Terroir, nature friendly production and processing the grapes as well as our aspiration towards natural balance reflects in incredible character and complexity of our wines.",
		o_nama8: "Our aim is to preserve the unique taste of the wine, a symbiosis of soil, microclimate, grape variety and of course the defining factor of the winemaker. Our wines are “created” by one of the top Slovenian oenologist Uroš Bolčina, who has more than 20 years of experience and our young, very talented and professional oenologist Ana Muzalevski.",
		vina1: "OUR WINES",
		vina2: "Through our wines we talk about life and about values we live by. Wine labels are carefully designed so you can feel the emotion.",
		magis1: "MAGIS 2017 (Cabernet Sauvignon & Merlot & Vranac)",
		magis2: "Bronze medal Decanter 2019",
		magis3: "Gold medal Asia Wine Trophy 2019",
		magis4: "Gold medal at BIWCF – Balkans International 2020",
		magis5: "Magis is a full bodied red wine with well balanced tannins and acidity, it has a long persistent finish driven by the higher level of alcohol. Magis is rich with aromas of black and red fruits infused with oak fragrances. Aromas in Magis wine are followed by a broad range of flavours, including blackcurrant, blackberry, plum and red berries, accompanied by cedar, tobacco and spice flavours contributed by oak. According to our strive for natural balance in Magis a spontaneous fermentation occurred, followed by addition of selected yeast. The Magis wine has aged for 18 months in used French Barrique barrels. A small quantity of sulphur has been added only during bottling. The wine was bottled without filtration.",
		magis6: "Alcohol: 14,96% vol, Total acidity: 5,93 g/l, Residual sugar: 2,0 g/l, Total SO2: 47,4 mg/l",
		magis7: "Label design: (NEW LABEL COMING SOON)",
		magis8: "Magis: The value of courage - No Risk No Magic",
		magis9: "They say that magic comes from breaking the mould, from daring to leap into the unknown and taking the risk. Taking the risk to do things differently. Risk and being brave is often where some of our greatest ideas come from, where our most interesting and memorable experiences are born.",
		magis10: "Order Magis",
		traminac1: "Gold medal at Berlin Wine Trophy 2019",
		traminac2: "Gold medal at BIWCF – Balkans International 2020",
		traminac3: "Bronze medal Decanter 2020",
		traminac4: "Our Traminac (Gewurztraminer) is a full bodied off dry white wine. It offers intense and complex aromas of exotic, tropical fruits, rose petal, ginger and a smoky aroma, Part of the wine aged in used whiskey and rum barrels resulting in exotic and extravagant notes of our Gewurztraminer. According to our strive for natural balance in Traminac (Gewurztraminer) a spontaneous fermentation occurred, followed by addition of selected yeast. The wine aged for six months on the yeast with no sulphur, which was added only during filtration before bottling.",
		traminac5: "Alcohol: 12,76% vol, Total acidity: 5,50 g/l, Residual sugar :13 g/l, Total SO2: 55,7 mg/l",
		traminac6: "Label design: (NEW LABEL COMING SOON)",
		traminac7: "TRAMINAC: The value of diversity - Different Is Beautiful",
		traminac8: "Diversity is colourful. What if everyone who surrounded you was exactly like you, in every way? Where is the fun in that. Together, our differences make a strong, beautiful world.",
		traminac9: "Order Traminac",
		belim1: "BeliM 2017 (Orange Wine – Riesling & Gewurztraminer) ",
		belim2: "Silver medal at BIWCF – Balkans International 2020",
		belim3: "BeliM is a full-bodied and complex orange wine, with stone fruit aromas. Earthy, spicy and smoky notes with well structured minerality. Part of the wine aged in used whiskey and rum barrels resulting in exotic and extravagant notes of our BeliM. According to our strive for natural balance in BeliM a spontaneous fermentation occurred, followed by addition of selected yeast. The wine has aged for 24 months on the yeast with no sulphur and malolactic fermentation was performed. A small quantity of sulphur has been added only during bottling. The wine was bottled without filtration.",
		belim4: "Alcohol: 14,40% vol, Total acidity: 6,03 g/l, Residual sugar: 1,00 g/l, Total SO2: 45,0 mg/l",
		belim5: "Label design:",
		belim6: "BeliM: The value of faith (in yourself) - Believe in yourself",
		belim7: "Believing in yourself means having faith in your own capabilities. A bird sitting on a tree is never afraid of the branch breaking, because her trust is not on the branch but on its own wings. »Always believe in yourself«",
		belim8: "Order BeliM",
		sauvignon1: "Silver medal at BIWCF – Balkans International 2020",
		sauvignon2: "Minerally nose with lovely fruit aromas (kiwi, lemon, guava) grassiness and herbal notes (basil, lemongrass) with a smoky scent. Fresh, delicate, attractive, yet rich and bold. The palate is balanced and complex. Part of the wine aged in used whiskey and rum barrels. According to our strive for natural balance in Sauvignon Blanc a spontaneous fermentation occurred, followed by addition of selected yeast. The wine has aged for six months on the yeast with no sulphur, which was added only during filtration before bottling.",
		sauvignon3: "Alcohol: 11,98% vol, Total acidity: 8,07 g/l, Residual sugar: 3,60 g/l, Total SO2: 56,0 mg/l",
		sauvignon4: "Label design:",
		sauvignon5: "Sauvignon Blanc: The Value of Persistence - Try again",
		sauvignon6: "The secret to succeeding at anything is the importance of persistence in life. You may have heard the expression »If at first you don't succeed try, try again«. And remember, success is the journey, not the destination. Persistence keeps you moving forward on that journey.",
		sauvignon7: "Order Sauvignon Blanc",
		chardonnay1: "Bronze medal at BIWCF – Balkans International 2020",
		chardonnay2: "Flavours of our chardonnay range from melon and citrus through to stone fruit, with flowing natural acidity. Our chardonnay is recognized for its elegance, length on palate and aftertaste. High intensity with generosity. Developing in complexity with time. Part of the wine aged in used whiskey and rum barrels. According to our strive for natural balance in Chardonnay a spontaneous fermentation occurred, followed by addition of selected yeast. The wine has aged for six months on the yeast with no sulphur, which was added only during filtration before bottling.",
		chardonnay3: "Alcohol: 13,65% vol, Total acidity: 6,47 g/l, Residual sugar: 1,00 g/l, Total SO2: 68,0 mg/l",
		chardonnay4: "Label design:",
		chardonnay5: "Chardonnay: The Value of love - Smells Like Love",
		chardonnay6: "When you value love deeply and try to show it in everything that you do, you make your world and the world of others a much better place. Love may come and it may go more than once in your lifetime. No two loves will ever be the same. But to know love you must experience both the pleasure and the pain. Still; love is a treasure — value it.",
		chardonnay7: "Order Chardonnay",
		petnat1: "Pét-nat or Pétillant naturel is a type of natural sparkling wine made by the “méthode ancestrale”, meaning the wine is bottled before primary fermentation is finished. Our funky Pet-Nat is full of tropical fruit aromas. Crispy and light with a refreshing acidity. According to our strive for natural balance in Pet-Nat a spontaneous fermentation occurred. Without adding any sulphur the primary fermentation is finished in the bottle.",
		petnat2: "Alcohol: 11,81% vol, Total acidity: 5,25 g/l, Residual sugar: 3,80g/l, Total SO2: 12,0 mg/l",
		petnat3: "Label design:",
		petnat4: "Pet-Nat: The value of creativity - Impossible is possible",
		petnat5: '“Believe and act as if it were impossible to fail."',
		petnat6: "Order Pet-Nat",
		galerija1: "Nectar for the eyes",
		galerija2: "Family is everything",
		galerija3: "The best team",
		galerija4: "The most beautiful place – The Vineyard",
		shop1: "For all information and wine orders please contact us by phone: ",
		shop2: "Or by email:"
	}
}

//define lang via window hash
if (window.location.hash) {
	if (window.location.hash === "#en") {
		
		for (i = 0; i < navLinks.length; i++) {
			var navLink_href = navLinks[i].getAttribute("href");
			navLinks[i].setAttribute("href", navLink_href + "#en");
			
		}

		for (i = 0; i < orderLinks.length; i++) {
			var orderLink_href = orderLinks[i].getAttribute("href");
			orderLinks[i].setAttribute("href", orderLink_href + "#en");
			
		}

		//main nav
		nav_link1.textContent = language.eng.nav1;
		nav_link2.textContent = language.eng.nav2;
		nav_link3.textContent = language.eng.nav3;
		nav_link4.textContent = language.eng.nav4;
		nav_link5.textContent = language.eng.nav5;
		nav_link6.textContent = language.eng.nav6;

		//footer nav
		nav_link1_1.textContent = language.eng.nav1;
		nav_link2_2.textContent = language.eng.nav2;
		nav_link3_3.textContent = language.eng.nav3;
		nav_link4_4.textContent = language.eng.nav4;
		nav_link5_5.textContent = language.eng.nav5;
		nav_link6_6.textContent = language.eng.nav6;

		//o nama
		var body_o_nama = document.getElementById("body_o_nama");
		if (body_o_nama) {
			o_nama_txt_1.textContent = language.eng.o_nama1;
			o_nama_txt_2.textContent = language.eng.o_nama2;
			milorad_potpis.textContent = language.eng.o_nama_potpis;
			o_nama_txt_3.textContent = language.eng.o_nama3;
			o_nama_txt_4.textContent = language.eng.o_nama4;
			o_nama_txt_5.textContent = language.eng.o_nama5;
			o_nama_txt_6.textContent = language.eng.o_nama6;
			o_nama_txt_7.textContent = language.eng.o_nama7;
			o_nama_txt_8.textContent = language.eng.o_nama8;
		}
		
		//vina
		var body_vina = document.getElementById("body_vina");
		if (body_vina) {
			vina_txt1.textContent = language.eng.vina1;
			vina_txt2.textContent = language.eng.vina2;
			vina_magis1.textContent = language.eng.magis1;
			vina_magis2.textContent = language.eng.magis2;  
			vina_magis3.textContent = language.eng.magis3; 
			vina_magis4.textContent = language.eng.magis4;
			vina_magis5.textContent = language.eng.magis5;
			vina_magis6.textContent = language.eng.magis6;
			vina_magis7.textContent = language.eng.magis7;
			vina_magis8.textContent = language.eng.magis8;
			vina_magis9.textContent = language.eng.magis9;
			vina_magis10.textContent = language.eng.magis10;
			vina_traminac1.textContent = language.eng.traminac1;
			vina_traminac2.textContent = language.eng.traminac2;
			vina_traminac3.textContent = language.eng.traminac3;
			vina_traminac4.textContent = language.eng.traminac4;
			vina_traminac5.textContent = language.eng.traminac5;
			vina_traminac6.textContent = language.eng.traminac6;
			vina_traminac7.textContent = language.eng.traminac7;
			vina_traminac8.textContent = language.eng.traminac8;
			vina_traminac9.textContent = language.eng.traminac9;
			vina_belim1.textContent = language.eng.belim1;
			vina_belim2.textContent = language.eng.belim2;
			vina_belim3.textContent = language.eng.belim3;
			vina_belim4.textContent = language.eng.belim4;
			vina_belim5.textContent = language.eng.belim5;
			vina_belim6.textContent = language.eng.belim6;
			vina_belim7.textContent = language.eng.belim7;
			vina_belim8.textContent = language.eng.belim8;
			vina_sauvignon1.textContent = language.eng.sauvignon1;
			vina_sauvignon2.textContent = language.eng.sauvignon2;
			vina_sauvignon3.textContent = language.eng.sauvignon3;
			vina_sauvignon4.textContent = language.eng.sauvignon4;
			vina_sauvignon5.textContent = language.eng.sauvignon5;
			vina_sauvignon6.textContent = language.eng.sauvignon6;
			vina_sauvignon7.textContent = language.eng.sauvignon7;
			vina_chardonnay1.textContent = language.eng.chardonnay1;
			vina_chardonnay2.textContent = language.eng.chardonnay2;
			vina_chardonnay3.textContent = language.eng.chardonnay3;
			vina_chardonnay4.textContent = language.eng.chardonnay4;
			vina_chardonnay5.textContent = language.eng.chardonnay5;
			vina_chardonnay6.textContent = language.eng.chardonnay6;
			vina_chardonnay7.textContent = language.eng.chardonnay7;
			vina_petnat1.textContent = language.eng.petnat1;
			vina_petnat2.textContent = language.eng.petnat2;
			vina_petnat3.textContent = language.eng.petnat3;
			vina_petnat4.textContent = language.eng.petnat4;
			vina_petnat5.textContent = language.eng.petnat5;
			vina_petnat6.textContent = language.eng.petnat6;
		}

		//galerija
		var body_galerija = document.getElementById("body_galerija");
		if (body_galerija) {
			galerija_txt1.textContent = language.eng.galerija1;
			galerija_txt2.textContent = language.eng.galerija2;
			galerija_txt3.textContent = language.eng.galerija3;
			galerija_txt4.textContent = language.eng.galerija4;
		}

		//kontakt
		var body_shop = document.getElementById("body_shop");
		if (body_shop) {
			shop_txt1.textContent = language.eng.shop1;
			shop_txt2.textContent = language.eng.shop2;
		}
	}
}

//define language reload onclick
langLinks[0].addEventListener('click', function() {
	location.hash = "#en";
	window.location.reload();
})
langLinks[1].addEventListener('click', function() {
	location.hash = "#sr";
	window.location.reload();
})



//nav links language keep




	
	


