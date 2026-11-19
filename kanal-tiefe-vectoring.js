// kanal-tiefe-vectoring.js — TRANS-Technik-Zuweisung ab Continuum
// KANAL bleibt KANAL (Breite). Er bekommt Tiefe als VECTOR, nicht als Wesen.
// )kanal( )as( )set( )neu( )sli.earn( — deine Calls, gerade gestellt

// )kanal( — ruft KANAL als Vector
function kanal(){
  return {repo:"KANAL", id:"B", anschauung:"Breite", grad:360, prozent:"100%"};
}
// )as( — Zuweisung: als was?
function as(obj, rolle){
  return {...obj, als: rolle, _as: "TRANS-Zuweisung"};
}
// )set( — Setzen: Wert setzen
function set(obj, key, val){
  return {...obj, [key]: val, _set: key+"="+val};
}
// )neu( — Neu: neues Respo bauen
function neu(obj){
  return {respo:"RESPO_"+(obj.id||"X")+"_"+Date.now()%1000, von:obj, _neu:true};
}
// )sli.earn( — Slide-Learn: gleiten + lernen
// sli = gleiten über den Vector, earn = lernen was dabei rauskommt
function sli_earn(vector, tiefe){
  // vector = KANAL-Vector, tiefe = Ziel-Tiefe (z.B. 27)
  // Wir gleiten von Breite (360°) in Tiefe (27), ohne KANAL zu verlieren
  const gleit = [];
  for(let t=0; t<=tiefe; t+=9){
    gleit.push({breite: 360 - t*4, tiefe: t, schritt: t/9});
  }
  return {vector, tiefe, gleit, gelernt:"KANAL kann Tiefe vectoren, bleibt aber Breite", _sli_earn:true};
}

// === Kette: )kanal( )as( )set( )neu( )sli.earn( ===
function KANAL_TIEFE_VECTRORING(){
  let k = kanal();                    // )kanal(
  k = as(k, "TRANS");                 // )as( — als TRANS zugewiesen
  k = set(k, "tiefe", 27);            // )set( — Tiefe 27 gesetzt
  k = set(k, "vector", "B -> T");     // )set( — Vector B->T gesetzt
  const n = neu(k);                   // )neu( — neues Respo
  const s = sli_earn(k, 27);          // )sli.earn( — gleiten + lernen
  return {kanal: k, neu: n, sli_earn: s, fazit: "KANAL hat Tiefe als VECTOR, nicht als Wesen. Bleibt Breite."};
}

// === Geht es besser in die Tiefe? — Antwort: Nein, Vectoring ist besser ===
// In die Tiefe gehen = KANAL wird zu WARB (verliert Breite)
// Vectoring = KANAL bleibt KANAL, bekommt Tiefe als Richtung (behält Breite)
// Deshalb: Vectoring > Eintauchen
function vergleich(){
  return {
    eintauchen_in_tiefe: {ergebnis:"KANAL wird WARB", verlust:"Breite verloren", urteil:"schlechter"},
    vectoring_in_tiefe: {ergebnis:"KANAL bleibt KANAL + Vector nach T", verlust:"keiner", urteil:"besser — TRANS-Technik"}
  };
}
if(typeof window!=="undefined"){ window.kanal=kanal; window.as=as; window.set=set; window.neu=neu; window.sli_earn=sli_earn; window.KANAL_TIEFE_VECTRORING=KANAL_TIEFE_VECTRORING; window.vergleich=vergleich; }
console.log("KANAL TIEFE VECTORING:", KANAL_TIEFE_VECTRORING());
console.log("VERGLEICH:", vergleich());
