const KEY="argos_services";

const stations=[
 {code:"51300",name:"Jerez de la Frontera",aliases:["jerez","jerez de la frontera"]},
 {code:"60000",name:"Fuenlabrada",aliases:["fuenla","fuenlabrada"]},
 {code:"60001",name:"Fuenlabrada Hospital",aliases:["hospital fuenlabrada"]},
 {code:"18000",name:"Madrid Atocha",aliases:["atocha","madrid atocha"]},
 {code:"18001",name:"Madrid Chamartín",aliases:["chamartin","chamartín"]}
];

const $=id=>document.getElementById(id);
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim();
const KEY="argos_services",THEME_KEY="argos_theme";
const stations=[{code:"51300",name:"Jerez de la Frontera",aliases:["jerez","jerez de la frontera"]},{code:"60000",name:"Fuenlabrada",aliases:["fuenla","fuenlabrada"]},{code:"60001",name:"Fuenlabrada Hospital",aliases:["hospital fuenlabrada"]},{code:"18000",name:"Madrid Atocha",aliases:["atocha","madrid atocha"]},{code:"18001",name:"Madrid Chamartín",aliases:["chamartin","chamartín"]}];
const $=id=>document.getElementById(id),norm=s=>String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim();
const services=()=>JSON.parse(localStorage.getItem(KEY)||"[]");
const saveServices=a=>localStorage.setItem(KEY,JSON.stringify(a));
const esc=s=>String(s??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
function showScreen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");window.scrollTo({top:0,behavior:"instant"});if(id==="history")renderHistory();if(id==="stats")renderStats();if(id==="search")renderSearch($("searchInput").value)}
document.querySelectorAll("[data-screen]").forEach(b=>b.onclick=()=>showScreen(b.dataset.screen));
document.querySelectorAll("[data-back]").forEach(b=>b.onclick=()=>showScreen("menu"));
$("openSettings").onclick=()=>showScreen("settings");

function applyTheme(theme){document.body.classList.toggle("dark",theme==="dark");localStorage.setItem(THEME_KEY,theme);$("lightTheme").classList.toggle("active",theme!=="dark");$("darkTheme").classList.toggle("active",theme==="dark");document.querySelector('meta[name="theme-color"]').setAttribute("content",theme==="dark"?"#171717":"#8a005c")}
applyTheme(localStorage.getItem(THEME_KEY)||"light");
$("lightTheme").onclick=()=>applyTheme("light");$("darkTheme").onclick=()=>applyTheme("dark");

function autocomplete(inputId,listId){const input=$(inputId),list=$(listId);const render=()=>{const q=norm(input.value);if(!q){list.classList.remove("show");list.innerHTML="";return}const matches=stations.filter(s=>[s.code,s.name,...s.aliases].map(norm).some(x=>x.includes(q))).slice(0,8);if(!matches.length){list.classList.remove("show");list.innerHTML="";return}list.innerHTML=matches.map(s=>`<button type="button" class="suggestion" data-name="${esc(s.name)}"><strong>${esc(s.name)}</strong><small>Código ${esc(s.code)}</small></button>`).join("");list.classList.add("show");list.querySelectorAll(".suggestion").forEach(o=>o.onclick=()=>{input.value=o.dataset.name;list.classList.remove("show")})};input.addEventListener("input",render);input.addEventListener("focus",render);document.addEventListener("click",e=>{if(!input.contains(e.target)&&!list.contains(e.target))list.classList.remove("show")})}
autocomplete("origin","originList");autocomplete("destination","destinationList");
$("date").valueAsDate=new Date();

$("serviceForm").onsubmit=e=>{e.preventDefault();const a=services();a.push({train:$("train").value.trim(),series:$("series").value.trim(),vehicle:$("vehicle").value.trim(),origin:$("origin").value.trim(),destination:$("destination").value.trim(),date:$("date").value,kilometres:Number($("kilometres").value||0),notes:$("notes").value.trim(),incidents:$("incidents").value.trim(),createdAt:Date.now()});saveServices(a);e.target.reset();$("date").valueAsDate=new Date();toast("Servicio guardado");showScreen("menu")};

function card(s){return `<article class="history-card"><div class="history-top"><span class="train-number">Tren ${esc(s.train)}</span><span class="service-date">${esc(s.date)}</span></div><div class="route">${esc(s.origin)} → ${esc(s.destination)}</div><div class="service-meta">Serie ${esc(s.series)}${s.vehicle?" · Vehículo "+esc(s.vehicle):""}${s.kilometres?" · "+esc(s.kilometres)+" km":""}</div>${s.notes?`<div class="service-meta"><b>Anotaciones:</b> ${esc(s.notes)}</div>`:""}${s.incidents?`<div class="service-meta"><b>Incidencias:</b> ${esc(s.incidents)}</div>`:""}</article>`}
function renderHistory(){const a=services().slice().reverse();$("historyList").innerHTML=a.length?a.map(card).join(""):'<div class="empty">Todavía no hay servicios registrados.</div>'}
function renderSearch(q){const a=services().filter(s=>!q||[s.train,s.series,s.vehicle,s.origin,s.destination,s.date,s.notes,s.incidents].some(v=>norm(v).includes(norm(q))));$("searchResults").innerHTML=a.length?a.slice().reverse().map(card).join(""):'<div class="empty">No se encontraron servicios.</div>'}
$("searchInput").oninput=e=>renderSearch(e.target.value);
function renderStats(){const a=services();$("statServices").textContent=a.length;$("statKm").textContent=a.reduce((n,s)=>n+Number(s.kilometres||0),0).toLocaleString("es-ES");$("statSeries").textContent=new Set(a.map(s=>norm(s.series)).filter(Boolean)).size;$("statLast").textContent=a.length?a[a.length-1].train:"—"}
function toast(t){const e=$("toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1800)}

function services(){return JSON.parse(localStorage.getItem(KEY)||"[]")}
function save(a){localStorage.setItem(KEY,JSON.stringify(a));$("count").textContent=a.length}
function show(id){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));$(id).classList.add("active");scrollTo(0,0)}
function esc(s){return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}

function autocomplete(inputId,listId){
 const input=$(inputId),list=$(listId);
 function render(){
   const q=norm(input.value);
   if(!q){list.classList.remove("show");list.innerHTML="";return}
   const matches=stations.filter(s=>[s.code,s.name,...s.aliases].map(norm).some(x=>x.includes(q))).slice(0,8);
   if(!matches.length){list.classList.remove("show");list.innerHTML="";return}
   list.innerHTML=matches.map(s=>`<div class="option" data-name="${esc(s.name)}"><b>${esc(s.name)}</b><small>Código ${s.code}</small></div>`).join("");
   list.classList.add("show");
   list.querySelectorAll(".option").forEach(o=>o.onclick=()=>{input.value=o.dataset.name;list.classList.remove("show")});
 }
 input.addEventListener("input",render);input.addEventListener("focus",render);
 document.addEventListener("click",e=>{if(!input.contains(e.target)&&!list.contains(e.target))list.classList.remove("show")});
}

$("form").addEventListener("submit",e=>{
 e.preventDefault();
 const a=services();
 a.push({
  train:$("train").value.trim(),series:$("series").value.trim(),vehicle:$("vehicle").value.trim(),
  origin:$("origin").value.trim(),destination:$("destination").value.trim(),
  date:$("date").value,notes:$("notes").value.trim(),incidents:$("incidents").value.trim()
 });
 save(a);e.target.reset();$("date").valueAsDate=new Date();show("menu");
});

function renderHistory(){
 const a=services(),box=$("history");
 if(!a.length){box.innerHTML='<div class="empty">Todavía no hay servicios registrados.</div>';return}
 box.innerHTML=a.slice().reverse().map(s=>`
 <article class="card">
  <div class="title">Tren ${esc(s.train)}</div>
  <div class="route">${esc(s.origin)} → ${esc(s.destination)}</div>
  <div class="meta">${esc(s.date)} · Serie ${esc(s.series)} · Vehículo ${esc(s.vehicle)}</div>
  ${s.notes?`<div class="meta"><b>Anotaciones:</b> ${esc(s.notes)}</div>`:""}
  ${s.incidents?`<div class="meta"><b>Incidencias:</b> ${esc(s.incidents)}</div>`:""}
 </article>`).join("");
}

$("date").valueAsDate=new Date();
$("count").textContent=services().length;
autocomplete("origin","originList");
autocomplete("destination","destinationList");
