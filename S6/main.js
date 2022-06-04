window.addEventListener('load', ()=>{
	/* ====== SIDE COMPONENT ===== */
	
	$(document).ready(function() {
		$('.side_bar_component').load("../side_bar/index.html");
		
		
  /* ===== loading page ==== */
	/*	$('.loading_page').load("loading.html");*/
	})
	
})






// regulation 
let regul_td = document.querySelector("#regul-td")
let regul_ex = document.querySelector("#regul-examen")

// commande des entrainement
let comm_td = document.querySelector("#comm-td")
let comm_ex = document.querySelector("#comm-examen")
let comm_tp = document.querySelector("#comm-tp")

// capteur et conditioneurs
let capt_ex = document.querySelector("#capt-examen")
let capt_tp = document.querySelector("#capt-tp")

// automatismes
let auto_td = document.querySelector("#auto-td")
let auto_ex = document.querySelector("#auto-examen")

// turbomachines
let turbo_td = document.querySelector("#turbo-td")
let turbo_ex = document.querySelector("#turbo-examen")

// tp - rgulation & automatismes
let regul_auto_tp = document.querySelector("#regul-auto-tp")

// maint des syst
let maint_ex = document.querySelector("#maint-examen")

// introduction au moteur a combustion
let intro_ex = document.querySelector("#intro-examen")

// entreprise
let entre_ex = document.querySelector("#entre-examen")
 
// POSTER 
let poster_tp = document.querySelector("#poster-tp")

 
// submit 
let submit = document.querySelector("#submit")

// degree 
let degree = document.querySelector(".degree")

// credit
let credit = document.querySelector(".credit")

// module moy
let regul_moy_p = document.querySelector(".regul-moy")
let comm_moy_p = document.querySelector(".comm-moy")
let capt_moy_p = document.querySelector(".capt-moy")
let auto_moy_p = document.querySelector(".auto-moy")
let turbo_moy_p = document.querySelector(".turbo-moy")
let regul_auto_moy_p = document.querySelector(".regul-auto-moy")
let maint_moy_p = document.querySelector(".maint-moy")
let intro_moy_p = document.querySelector(".intro-moy")
let entre_moy_p = document.querySelector(".entre-moy")
let poster_moy_p = document.querySelector(".poster-moy")

let inputs = document.querySelectorAll("input")






function calcule(){
  
  
  // regul moy
  var regul_moy = ((+regul_td.value * 0.4) + (+regul_ex.value * 0.6))
  if (regul_moy >= 10) {
    var regul_credit = 4
    regul_moy_p.classList = "span-moy-good"
  } else {
    var regul_credit = 0
    regul_moy_p.classList = "span-moy-bad"
  }
  
  // commande moy
  var comm_moy = ((+comm_td.value * 0.4) + (+comm_ex.value * 0.6))
  if (comm_moy >= 10) {
    var comm_credit = 4
    comm_moy_p.classList = "span-moy-good"
  } else {
    var comm_credit = 0
    comm_moy_p.classList = "span-moy-bad"
  }
  
  // capteur moy
  var capt_moy = (+capt_ex.value)
  if (capt_moy >= 10) {
    var capt_credit = 2
    capt_moy_p.classList = "span-moy-good"
  } else {
    var capt_credit = 0
    capt_moy_p.classList = "span-moy-bad"
  }
  
  // automatisme moy
  var auto_moy = ((+auto_td.value * 0.4) + (+auto_ex.value * 0.6))
  if (auto_moy >= 10) {
    var auto_credit = 4 
    auto_moy_p.classList = "span-moy-good"
  } else {
    var auto_credit = 0
    auto_moy_p.classList = "span-moy-bad"
  }
  
  // turbomachine moy
  var turbo_moy = ((+turbo_td.value * 0.4) + (+turbo_ex.value * 0.6))
  if (turbo_moy >= 10) {
    var turbo_credit = 4
    turbo_moy_p.classList = "span-moy-good"
  } else {
    var turbo_credit = 0
    turbo_moy_p.classList = "span-moy-bad"
  }
  
  // maint des syst
  var maint_moy = (+maint_ex.value)
  if (maint_moy >= 10) {
    var maint_credit = 1
    maint_moy_p.classList = "span-moy-good"
  } else {
    var maint_credit = 0
    maint_moy_p.classList = "span-moy-bad"
  }
  
  // introduction au moteur a combistion moy
  var intro_moy = (+intro_ex.value)
  if (intro_moy >= 10) {
    var intro_credit = 1
    intro_moy_p.classList = "span-moy-good"
  } else {
    var intro_credit = 0
    intro_moy_p.classList = "span-moy-bad"
  }
  
    // entreprise moy
  var entre_moy = (+entre_ex.value)
  if (entre_moy >= 10) {
    var entre_credit = 1
    entre_moy_p.classList = "span-moy-good"
  } else {
    var entre_credit = 0
    entre_moy_p.classList = "span-moy-bad"
  }
  
  // TP - REGUL & AUTO 
  var regul_auto_moy = (+regul_auto_tp.value)
  if (regul_auto_moy >= 10) {
  	var regul_auto_credit = 2
  	regul_auto_moy_p.classList = "span-moy-good"
  } else {
  	var regul_auto_credit = 0
  	regul_auto_moy_p.classList = "span-moy-bad"
  }
  
  
  // poster moy
  var poster_moy = ( +poster_tp.value )
  if (poster_moy >= 10) {
    var poster_credit = 4
    poster_moy_p.classList = "span-moy-good"
  } else {
    var poster_credit = 0
    poster_moy_p.classList = "span-moy-bad"
  }
  
  
  
  
 
    // TP credit 
  // - TP regulation & automatismes
  /*if (+regul_auto_tp.value>=10) {
    regul_auto_moy_p.classList = "span-moy-good"
  }else{
    regul_auto_moy_p.classList = "span-moy-bad"
  }*/
  // - TP commandes
  if (+comm_tp.value >= 10) {
    var comm_tp_credit = 2
  } else {
    var comm_tp_credit = 0
  }
  // - TP capteurs
  if (+capt_tp.value >= 10) {
    var capt_tp_credit = 1
  } else {
    var capt_tp_credit = 0
  }



  // calcule moy uef-2-d-t
  let moy_uef = (regul_moy*2 +comm_moy*2 +capt_moy*1)/5
  
  let moy_uef2 = (auto_moy*2 +turbo_moy*2)/4
  
  let moy_uem = (+poster_moy*2 +  +regul_auto_tp.value+ +comm_tp.value+ +capt_tp.value)/5
  
  let moy_ued = (maint_moy*1+intro_moy*1)/2
  
  let moy_uet = (entre_moy*1)/1
  
  
  
  // general moy
  let general_moy = ((moy_uef*5)+(moy_uef2*4)+(moy_uem*5)+(moy_ued*2)+(moy_uet*1))/17
  
  
  
  // print moy
  setTimeout(()=>{
    degree.innerHTML = general_moy
  },200)
  
  if (general_moy<10) {
    degree.className = "degree-bad"
    opacitys(degree)
  }else{
    degree.className = "degree-good"
    opacitys(degree)
  }
  
  // print credit
  let general_credit = ( +regul_credit+ +comm_credit+ +capt_credit+ +auto_credit+ +turbo_credit+ +maint_credit+ +intro_credit+ +entre_credit+ +poster_credit+ +comm_tp_credit+ +capt_tp_credit+ +regul_auto_credit )
  
  
  
  if (general_moy>=10) {
    credit.className = "credit-good"
    setTimeout(()=>{
      credit.innerHTML = 30
    },200)
    opacitys(credit)
  }else{
    credit.className = "credit-bad"
    setTimeout(() => {
      credit.innerHTML = general_credit
    }, 200)
    opacitys(credit)
  }
  
  // calcule modules moyenne
  regul_moy_p.innerHTML = regul_moy
  comm_moy_p.innerHTML = comm_moy
  capt_moy_p.innerHTML = capt_moy
  auto_moy_p.innerHTML = auto_moy
  turbo_moy_p.innerHTML = turbo_moy
  maint_moy_p.innerHTML = maint_moy
  intro_moy_p.innerHTML = intro_moy
  entre_moy_p.innerHTML = entre_moy
  poster_moy_p.innerHTML = poster_moy
  regul_auto_moy_p.innerHTML = regul_auto_moy

  
}



submit.addEventListener("click", ()=>{
  calcule()
})




  // opacity animation of moy & credit
  function opacitys(element){
    setTimeout(() => {
      element.style = "opacity: 1"
    }, 200)
  }
  
  

// checked animation
let checked = document.querySelector("#checked")

setInterval(()=>{
  checked.style = "animation: checked-animation 0.5s ease"
  setTimeout(() => {
    checked.style = "none"
  }, 1000)
},6000)





/* ==== ON INPUT INSIDE INPUTS === */
let input_s = document.querySelectorAll('input');
input_s.forEach(input_s=>{
	input_s.addEventListener('input',()=>{
		if (input_s.value.length!=0) {
			input_s.style="background-color: transparent; box-shadow: 0 0 0 1px white"
		}else{
			input_s.style="none"
		}
	})
})






/* === ANIMATIONS ON SCROLL === */
let moduls = document.querySelectorAll('.moduls')


moduls.forEach(modul=>{

	window.onload = function () {
		for (var i = 0; i < moduls.length; i++) {
			let modul_y = moduls[i].getBoundingClientRect().top
			if (modul_y < window.innerHeight) {
				moduls[i].style = "opacity: 1; transform: translateX(0)"
			}
		}
	}
	
		
	window.addEventListener('scroll',()=>{
		
		let modul_y = modul.getBoundingClientRect().top
		
		if (modul_y < (window.innerHeight /1.23)) {
			modul.style = "opacity: 1; transform: none"
		} else {
			modul.style = "none"
		} 
		
	})
})


