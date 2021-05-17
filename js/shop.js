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

/* VINA */
let vinaArray = [
  {
    name: 'MAGIS 2017',
    cena: 1740,
    kolicina: 0
  },
  {
    name: 'TRAMINAC 2018',
    cena: 1380,
    kolicina: 0
  },
  {
    name: 'BeliM 2017',
    cena: 1740,
    kolicina: 0
  },
  {
    name: 'SAUVIGNON BLANC 2018',
    cena: 1380,
    kolicina: 0
  },
  {
    name: 'CHARDONNAY 2018',
    cena: 1380,
    kolicina: 0
  },
  {
    name: 'Pet-Nat 2020',
    cena: 1020,
    kolicina: 0
  }
]
let orderMaid = false;

//USPESNA NEUSPESNA PORUDZBA - PORUKA
let uspesna_porudzba = document.getElementById('uspesna_porudzba');
let neuspesna_porudzba = document.getElementById('neuspesna_porudzba');
let ukloni_poruku_uspesna = document.getElementById('ukloni_poruku_uspesna');
let ukloni_poruku_neuspesna = document.getElementById('ukloni_poruku_neuspesna');

//ZATVARANJE PORUKE USPESNA PORUDZBA
ukloni_poruku_uspesna.addEventListener('click', function () {
  uspesna_porudzba.classList.add('d-none');
  orderMaid = false;
})

ukloni_poruku_neuspesna.addEventListener('click', function () {
  neuspesna_porudzba.classList.add('d-none');
  orderMaid = false;
})

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
    vinaArray[i].kolicina = 0;
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
      if (vinaArray[i].kolicina === 0) {
        vinaArray[i].kolicina = 1;
      }
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
      vinaArray[i].kolicina = Number(input.value);
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

/* SEND MAIL */
function sendOrder() {
  if (!validateForm()) {
    return;
  }

  if (orderMaid === false) {
    orderMaid = true;
  } else {
    return;
  }
  let porudzbina = [], brojFlasa = 0, fulCena = 0;
  for (const vino of vinaArray) {
    if (vino.kolicina > 0) {
      porudzbina.push({
        name: vino.name,
        kolicina: vino.kolicina,
        cena: vino.cena * vino.kolicina
      });
      fulCena = fulCena + (vino.cena * vino.kolicina);
      brojFlasa = brojFlasa + vino.kolicina;
    }
  }
  const formData = exportDataFromForm();
  const requestData = {
    order: porudzbina,
    price: fulCena,
    deliveryCost: brojFlasa > 5 ? 0 : 410,
    quantity: brojFlasa,
    formData: formData
  }
  // console.log('REQUEST DATA: ', requestData);
  // console.log('FORM OBJECT: ', formData);
  sendDataToPhp(requestData);
}

function exportDataFromForm() {
  const form = document.getElementById("contact-form").elements;
  let data = {};
  for (let i = 0; i < form.length; i++) {
    const element = form[i];
    data[element.id] = element.value;
  }
  return data;
}

function sendDataToPhp(requestData) {
  // POST data to the php file
  $.ajax({
    url: './php/mail.php',
    data: requestData,
    type: 'POST',
    success: function (data) {
      // showMessage(data);
      var messageShowed = false;
      if (data) {
        if (data.error) {
          messageShowed = true;
          showMessage(false, null, data, null);
        }
        if (data.success) {
          messageShowed = true;
          showMessage(true, null, data, null);
        }
      }

      if (!messageShowed) {
        showMessage(false, null, data, null);
      }
    },
    error: function (request, error) {
      showMessage(false, request, null, error);
    }
  });
}

function showMessage(success, request, response, error) {
  console.log('REQUEST: ', request);
  console.log('RESPONSE: ', response);
  console.log('ERROR: ', error);
  var idName = "";
  if (success) {
    idName = "uspesna_porudzba";
    resetForm();
  } else {
    idName = "neuspesna_porudzba";
  }
  var poruka = document.getElementById(idName);
  poruka.classList.remove('d-none');
}

function resetForm() {
  // Reset vinaArray
  for (const vino of vinaArray) {
    vino.kolicina = 0;
  }

  // Reset forme
  document.getElementById("contact-form").reset();


  // Reset korpe
  vina.forEach(function (vino, i) {
    vino.classList.add("d-none");
    inicijalna_cena_odabranog_vina[i].innerHTML = vinaArray[i].cena;
    inicijalna_cena_odabranog_vina[i].classList.remove('odabrano-vino-iznos');
    kolicina_vina[i].value = 1;
  })

  cena_porudzbe_iznos = 0;
  cena_dostave = 410;

  poruka_prazna_korpa.classList.remove('d-none');
  cena_porudzbe_holder.classList.add('d-none');
  cena_dostave_holder.classList.add('d-none');
  pdv_poruka.classList.add('d-none');
}

// VALIDACIJA FORME
function validateForm() {
  let status = document.querySelector('.status');
  //IME i PREZIME
  let name = document.forms["forma"]["name"].value;
  if (name == null || name == "" || !/\S/.test(name)) {
    //alert("Ime i prezime su obavezni");
    status.innerHTML = "Ime i prezime su obavezni";
    return false;
  }
  let regName = /^([A-Z a-z ČčŠšĆćĐđŽž?!\-\s]*)$/;

  if (!regName.test(name)) {
    //alert('Unesite svoje puno ime i prezime');
    status.innerHTML = "Unesite svoje puno ime i prezime";
    return false;
  }
  else {
    status.innerHTML = "";
  }

  //EMAIL
  let mail = document.forms["forma"]["email"].value;
  let atpos = mail.indexOf("@");
  let dotposfirst = mail.indexOf(".");
  let atposlast = mail.lastIndexOf("@");
  let dotpos = mail.lastIndexOf(".");
  if (mail == null || mail == "" || !/\S/.test(mail)) {
    //alert("Email je obavezan");
    status.innerHTML = "Email je obavezan";
    return false;
  }
  if (atpos < 1 || atposlast + 2 >= mail.length || dotposfirst === atpos + 1 || dotpos + 2 >= mail.length || dotposfirst === 0) {
    //alert("E-mail adresa nije validna");
    status.innerHTML = "E-mail adresa nije validna";
    return false;
  }
  status.innerHTML = "";

  //TELEFON
  let telefon = document.forms["forma"]["telefon"].value;
  if (telefon == null || telefon == "" || !/\S/.test(telefon)) {
    //alert("Telefon je obavezan");
    status.innerHTML = "Telefon je obavezan";
    return false;
  }
  var regtelefon = /^[0-9\/\-\+\(\)\s]+$/;

  if (!regtelefon.test(telefon)) {
    //alert('Unesite ispravan broj telefona');
    status.innerHTML = "Unesite ispravan broj telefona";
    return false;
  }
  else {
    status.innerHTML = "";
  }

  //ADRESA i GRAD
  let adresa = document.forms["forma"]["adresa"].value;

  if (adresa == null || adresa == "" || !/\S/.test(adresa)) {
    //alert("Adresa je obavezna");
    status.innerHTML = "Adresa je obavezna";
    return false;
  }
  let regadresa = /^[A-Za-z0-9ČčŠšĆćĐđŽž ][A-Za-z0-9ČčŠšĆćĐđŽž\s\/]*(?:[A-Za-z0-9]+)*$/;

  if (!regadresa.test(adresa)) {
    //alert('Unesite ispravanu adresu');
    status.innerHTML = "Unesite ispravanu adresu";
    return false;
  }
  else {
    //alert('Adresa ok');
    status.innerHTML = "";
    return true;
  }
}