// transfert thermique
let trans_td = document.querySelector("#trans-td")
let trans_ex = document.querySelector("#trans-examen")

// machines
let mach_td = document.querySelector("#mach-td")
let mach_ex = document.querySelector("#mach-examen")
let mach_tp = document.querySelector("#mach-tp")

// shemas
let schema_ex = document.querySelector("#schema-examen")
let schema_tp = document.querySelector("#schema-tp")

// systeme
let syst_td = document.querySelector("#systeme-td")
let syst_ex = document.querySelector("#systeme-examen")
let syst_tp = document.querySelector("#systeme-tp")

// construction
let const_ex = document.querySelector("#const-examen")

// electronique
let elect_td = document.querySelector("#elect-td")
let elect_ex = document.querySelector("#elect-examen")
let elect_tp = document.querySelector("#elect-tp")

// production
let produc_ex = document.querySelector("#produc-examen")

// materiaux
let mater_ex = document.querySelector("#mater-examen")

// securite
let secur_ex = document.querySelector("#secur-examen")

// submit 
let submit = document.querySelector("#submit")

// degree 
let degree = document.querySelector(".degree")

// credit
let credit = document.querySelector(".credit")










function calcule(){
  
  // transfere moy
  let trans_moy = ((+trans_td.value*0.4)+(+trans_ex.value*0.6))*2
  if (trans_moy>=10) {
    var trans_credit = 4
  }else{
    var trans_credit = 0
  }
  
  // machines moy
  let mach_moy = ((+mach_td.value*0.4)+(+mach_ex.value*0.6))*2
  if (mach_moy>=10) {
    var mach_credit = 4
  }else{
    var mach_credit = 0
  }
  
  // shema moy
  let schema_moy = ((+schema_ex.value*0.6)+(+schema_tp.value*0.4))*2
  if (schema_moy>=10) {
    var schema_credit = 3
  }else{
    var schema_credit = 0
  }
  
  // systeme moy
  let syst_moy = ((+syst_td.value*0.4)+(+syst_ex.value*0.6))*2
  if (syst_moy >= 10) {
    var syst_credit = 4
  } else {
    var syst_credit = 0
  }
  
  // const moy
  let const_moy = (+const_ex.value)*1
  if (const_moy >= 10) {
    var const_credit = 2
  } else {
    var const_credit = 0
  }
  
  // elect moy
  let elect_moy = ((+elect_td.value*0.4)+(+elect_ex.value*0.6))*2
  if (elect_moy >= 10) {
    var elect_credit = 4
  } else {
    var elect_credit = 0
  }
  
  // production moy
  let produc_moy = (+produc_ex.value)*1
  if (produc_moy >= 10) {
    var produc_credit = 1
  } else {
    var produc_credit = 0
  }
  
  // materiaux moy
  let mater_moy = (+mater_ex.value)*1
  if (mater_moy >= 10) {
    var mater_credit = 1
  } else {
    var mater_credit = 0
  }
  
  // securiee moy
  let secur_moy = (+secur_ex.value)*1
  if (secur_moy >= 10) {
    var secur_credit = 1
  } else {
    var secur_credit = 0
  }
  
  
    // TP credit 
  // - TP electronique
  if (elect_tp.value>=10) {
    var elect_tp_credit = 2
  }else{
    var elect_tp_credit = 0
  }
  // - TP machines
  if (mach_tp.value >= 10) {
    var mach_tp_credit = 2
  } else {
    var mach_tp_credit = 0
  }
  // - TP systeme
  if (syst_tp.value >= 10) {
    var syst_tp_credit = 2
  } else {
    var syst_tp_credit = 0
  }

  
  // calcule moy uef-2-d-t
  let moy_uef = (elect_moy+mach_moy+const_moy)/5
  let moy_uef2 = (trans_moy+syst_moy)/4
  let moy_uem = (+elect_tp.value+ +mach_tp.value+ +syst_tp.value+schema_moy)/5
  let moy_ued = (produc_moy+mater_moy)/2
  let moy_uet = secur_moy/1
  
  
  
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
  let general_credit = ( +trans_credit+ +mach_credit+ +schema_credit+ +syst_credit+ +const_credit+ +elect_credit+produc_credit+ +mater_credit+ +secur_credit+ +elect_tp_credit+ +mach_tp_credit+ +syst_tp_credit )
  
  
  
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






