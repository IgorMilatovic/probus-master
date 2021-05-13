/*var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);*/

/*VINA ZA ODABIR*/
let vina = [...document.getElementsByClassName('odabrano-vino')];
/*DUGMICI ZA DODAVANJE VINA*/
let dodaj_vino_buttons = [...document.getElementsByClassName('shop-dodaj-vino-button')];
/*X-ići ZA UKLANJANJE VINA IZ ODABIRA*/
let ukloni_vino_buttons = [...document.getElementsByClassName('ukloni-vino')];
/*CENE VINA*/
let cene_vina = [...document.getElementsByClassName('cena-boce-vina')];
/*ZBIRNE CENE PO VINU*/
let inicijalna_cena_odabranog_vina = [...document.getElementsByClassName('inicijalna-cena-po-vinu')];
/*INPUTI ZA UNOS KOLICINE VINA*/
let kolicina_vina = [...document.getElementsByClassName('shop-input-kolicina')];
/*SPECIFIKACIJA LINKOVI*/
let specifikacija_linkovi = [...document.getElementsByClassName('specifikacija-link')];
/*SPECIFIKACIJE*/
let specifikacije = [...document.getElementsByClassName('specifikacije-wrapper')];
/*SPECIFIKACIJE vertikalna linije*/
let vr_line_specifikacije = [...$('.vr-line-specifikacije')];
/*X-ići za zatvaranje SPECIFIKACIJE*/
let zatvarac_specifikacije = [...document.getElementsByClassName('ukloni-specifikaciju')];


const poruka_prazna_korpa = document.getElementById('poruka-prazna-korpa');
let cena_porudzbe_holder = document.getElementById('cena-porudzbe-holder');
let cena_dostave_holder = document.getElementById('cena-dostave-holder');
let cena_porudzbe_iznos = document.getElementById('ukupna-cena-iznos');
let cena_dostave = document.getElementById('dostava-iznos');
let pdv_poruka = document.getElementById('pdv-poruka');

//USPESNA NEUSPESNA PORUDZBA - PORUKA
let uspesna_porudzba = document.getElementById('uspesna_porudzba');
let neuspesna_porudzba = document.getElementById('neuspesna_porudzba');
let ukloni_poruku_uspesna = document.getElementById('ukloni_poruku_uspesna');
let ukloni_poruku_neuspesna = document.getElementById('ukloni_poruku_neuspesna');


/*SPECIFIKACIJE*/
specifikacija_linkovi.forEach(function (link, i) {

  link.addEventListener('click', function () {
    specifikacije.forEach(function (spec, i) {
      spec.classList.add('d-none');
    })
    specifikacije[i].classList.remove('d-none');
    //vr
    let vr_helper_height = specifikacije[i].offsetHeight;
    vr_helper_height = Number(vr_helper_height) - 77;
    vr_line_specifikacije[i].style.width = vr_helper_height + 'px';
    let vr_margin_helper = Math.round(vr_helper_height / 2) + 25;
    vr_line_specifikacije[i].style.marginTop = vr_margin_helper + 'px';
    //hr
    let hr_helper_width = specifikacije[i].offsetWidth;
    hr_helper_width = Number(hr_helper_width) - 123;
    $('.hr-line-specifikacije').css({ 'width': hr_helper_width + 'px' });
    //zatvaranje specifikacije
    document.addEventListener('keydown', function (event) {
      if (event.key === "Escape") {
        specifikacije[i].classList.add('d-none');
      }
    });
    zatvarac_specifikacije[i].addEventListener('click', function () {
      specifikacije[i].classList.add('d-none');
    })
  })
})

/*KORPA - DODAVANJE I UKLANJANJE VINA*/
let broj_odabranih_vina = 0;

function ukloni_vino(i) {
  ukloni_vino_buttons[i].addEventListener('click', function () {

    vina[i].classList.add("d-none");
    inicijalna_cena_odabranog_vina[i].classList.remove('odabrano-vino-iznos');
    broj_odabranih_vina -= 1;
    zbirni_iznos_za_naplatu()
    cena_dostave_vina();
    if (broj_odabranih_vina === 0) {
      poruka_prazna_korpa.classList.remove('d-none');
      cena_porudzbe_holder.classList.add('d-none');
      cena_dostave_holder.classList.add('d-none');
      pdv_poruka.classList.add('d-none');
    }
  })
}

dodaj_vino_buttons.forEach(function (button, i) {
  button.addEventListener('click', function () {
    vina[i].classList.remove('d-none');

    if (!inicijalna_cena_odabranog_vina[i].classList.contains('odabrano-vino-iznos')) {
      inicijalna_cena_odabranog_vina[i].classList.add('odabrano-vino-iznos');
      kolicina_vina[i].value = 1;
      inicijalna_cena_odabranog_vina[i].innerHTML = cene_vina[i].innerHTML;
      let cenaVina = Number(cene_vina[i].innerHTML);
      let ukupnaCenaInicijalna = Number(cena_porudzbe_iznos.innerHTML);
      cena_porudzbe_iznos.innerHTML = ukupnaCenaInicijalna + cenaVina;
      broj_odabranih_vina += 1;
    }

    poruka_prazna_korpa.classList.add('d-none');
    cena_porudzbe_holder.classList.remove('d-none');
    cena_dostave_holder.classList.remove('d-none');
    pdv_poruka.classList.remove('d-none');
    cena_dostave_vina()
  })
  ukloni_vino(i);
})

/*PROMENA IZNOSA CENE NA UNOS KOLICINE VINA*/
function cena_na_unos_kolicine_vina(event) {

  kolicina_vina.forEach(function (input, i) {
    input.addEventListener(event, function () {
      input.nextElementSibling.innerHTML = input.value * cene_vina[i].innerHTML;

      zbirni_iznos_za_naplatu();
      cena_dostave_vina();
    })
  })
}

const events = ['change', 'keyup', 'touchstart'];
events.forEach(function (event) {
  cena_na_unos_kolicine_vina(event);
})

/*PROVERA ZBIRA KOLICINE VINA ZBOG IZNOSA CENE DOSTAVE*/
function cena_dostave_vina() {
  let kolicina_vina = 0;
  let input_value;

  inicijalna_cena_odabranog_vina.forEach(function (cena, i) {
    if (cena.classList.contains('odabrano-vino-iznos')) {
      input_value = Number(cena.previousElementSibling.value);
      kolicina_vina += input_value;
    }
  })

  if (kolicina_vina >= 6) {
    cena_dostave.innerHTML = 0;
  }
  else {
    cena_dostave.innerHTML = 410;
  }
}

/*UKUPAN IZNOS ZA NAPLATU*/
function zbirni_iznos_za_naplatu() {
  let cenaVina;
  cena_porudzbe_iznos.innerHTML = 0;

  inicijalna_cena_odabranog_vina.forEach(function (cena) {
    if (cena.classList.contains('odabrano-vino-iznos')) {
      cenaVina = Number(cena.innerHTML);
      ukupnaCena = Number(cena_porudzbe_iznos.innerHTML);
      cena_porudzbe_iznos.innerHTML = ukupnaCena + cenaVina;
    }
  })
}





