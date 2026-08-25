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
