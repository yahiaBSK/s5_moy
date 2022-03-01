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

// module moy
let trans_moy_p = document.querySelector(".trans-moy")
let mach_moy_p = document.querySelector(".mach-moy")
let schema_moy_p = document.querySelector(".schema-moy")
let syst_moy_p = document.querySelector(".syst-moy")
let const_moy_p = document.querySelector(".const-moy")
let elect_moy_p = document.querySelector(".elect-moy")
let produc_moy_p = document.querySelector(".produc-moy")
let mater_moy_p = document.querySelector(".mater-moy")
let secur_moy_p = document.querySelector(".secur-moy")






function calcule(){
  
  // transfere moy
  let trans_moy = ((+trans_td.value*0.4)+(+trans_ex.value*0.6))
  if (trans_moy>=10) {
    var trans_credit = 4
    trans_moy_p.classList = "span-moy-good"
  }else{
    var trans_credit = 0
    trans_moy_p.classList = "span-moy-bad"
  }
  
  // machines moy
  let mach_moy = ((+mach_td.value*0.4)+(+mach_ex.value*0.6))
  if (mach_moy>=10) {
    var mach_credit = 4
    mach_moy_p.classList = "span-moy-good"
  }else{
    var mach_credit = 0
    mach_moy_p.classList = "span-moy-bad"
  }
  
  // schema moy
  let schema_moy = ((+schema_ex.value*0.6)+(+schema_tp.value*0.4))
  if (schema_moy>=10) {
    var schema_credit = 3
    schema_moy_p.classList = "span-moy-good"
  }else{
    var schema_credit = 0
    schema_moy_p.classList = "span-moy-bad"
  }
  
  // systeme moy
  let syst_moy = ((+syst_td.value*0.4)+(+syst_ex.value*0.6))
  if (syst_moy >= 10) {
    var syst_credit = 4
    syst_moy_p.classList = "span-moy-good"
  } else {
    var syst_credit = 0
    syst_moy_p.classList = "span-moy-bad"
  }
  
  // const moy
  let const_moy = (+const_ex.value)
  if (const_moy >= 10) {
    var const_credit = 2
    const_moy_p.classList = "span-moy-good"
  } else {
    var const_credit = 0
    const_moy_p.classList = "span-moy-bad"
  }
  
  // elect moy
  let elect_moy = ((+elect_td.value*0.4)+(+elect_ex.value*0.6))
  if (elect_moy >= 10) {
    var elect_credit = 4
    elect_moy_p.classList = "span-moy-good"
  } else {
    var elect_credit = 0
    elect_moy_p.classList = "span-moy-bad"
  }
  
  // production moy
  let produc_moy = (+produc_ex.value)
  if (produc_moy >= 10) {
    var produc_credit = 1
    produc_moy_p.classList = "span-moy-good"
  } else {
    var produc_credit = 0
    produc_moy_p.classList = "span-moy-bad"
  }
  
  // materiaux moy
  let mater_moy = (+mater_ex.value)
  if (mater_moy >= 10) {
    var mater_credit = 1
    mater_moy_p.classList = "span-moy-good"
  } else {
    var mater_credit = 0
    mater_moy_p.classList = "span-moy-bad"
  }
  
  // securiee moy
  let secur_moy = (+secur_ex.value)
  if (secur_moy >= 10) {
    var secur_credit = 1
    secur_moy_p.classList = "span-moy-good"
  } else {
    var secur_credit = 0
    secur_moy_p.classList = "span-moy-bad"
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
  let moy_uef = (elect_moy*2+mach_moy*2+const_moy*1)/5
  let moy_uef2 = (trans_moy*2+syst_moy*2)/4
  let moy_uem = (+elect_tp.value+ +mach_tp.value+ +syst_tp.value+schema_moy*2)/5
  let moy_ued = (produc_moy*1+mater_moy*1)/2
  let moy_uet = (secur_moy*1)/1
  
  
  
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
  
  // calcule modules moyenne
  mach_moy_p.innerHTML = mach_moy
  trans_moy_p.innerHTML = trans_moy
  schema_moy_p.innerHTML = schema_moy
  syst_moy_p.innerHTML = syst_moy
  const_moy_p.innerHTML = const_moy
  elect_moy_p.innerHTML = elect_moy
  produc_moy_p.innerHTML = produc_moy
  mater_moy_p.innerHTML = mater_moy
  secur_moy_p.innerHTML = secur_moy
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






