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




function calcule(){
  
  // transfere moy
  let trans_moy = ((trans_td.value*0.4)+(trans_ex.value*0.6))*2
  
  // machines moy
  let mach_moy = ((mach_td.value*0.4)+(mach_ex.value*0.6))*2
  
  // shema moy
  let schema_moy = ((schema_ex.value*0.6)+(schema_tp.value*0.4))*2
  
  // systeme moy
  let syst_moy = ((syst_td.value*0.4)+(syst_ex.value*0.6))*2
  
  // const moy
  let const_moy = (const_ex.value)*1
  
  // elect moy
  let elect_moy = ((elect_td.value*0.4)+(elect_ex.value*0.6))*2
  
  // production moy
  let produc_moy = (produc_ex.value)*1
  
  // materiaux moy
  let mater_moy = (mater_ex.value)*1
  
  // securiee moy
  let secur_moy = (secur_ex.value)*1
  
  
  // calcule moy111
  let moy_uef = (elect_moy+mach_moy+const_moy)/5
  let moy_uef2 = (trans_moy+syst_moy)/4
  let moy_uem = (+elect_tp.value+ +mach_tp.value+ +syst_tp.value+schema_moy)/5
  let moy_ued = (produc_moy+mater_moy)/2
  let moy_uet = secur_moy/1
  
  
  // general moy
  let general_moy = ((moy_uef*5)+(moy_uef2*4)+(moy_uem*5)+(moy_ued*2)+(moy_uet*1))/17
  
  
  degree.innerHTML = general_moy
  if (general_moy<10) {
    degree.className = "degree-bad"
  }else{
    degree.className = "degree-good"
  }
}



submit.addEventListener("click", ()=>{
  calcule()
})
