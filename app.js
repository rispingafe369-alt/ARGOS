<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#111111">
<link rel="manifest" href="manifest.webmanifest">
<title>ARGOS</title>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<style>
:root{
--bg:#f3f4f7;--card:#fff;--card2:#f8f8fa;--text:#15151a;--muted:#747681;
--line:#e3e4e9;--accent:#81005E;--accent2:#A30078;--accentSoft:#F2E5EE;
--red:#e5484d;--green:#168a5b;--shadow:0 10px 30px rgba(26,20,35,.07)
}

*{box-sizing:border-box}

body{
margin:0;
background:var(--bg);
color:var(--text);
font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif
}

body.dark{
--bg:#0d0d10;--card:#17171b;--card2:#1d1d22;--text:#f6f6f8;--muted:#a7a7b0;
--line:#2b2b32;--accent:#B85A9E;--accent2:#D07AB8;--accentSoft:#33212F;
--shadow:0 12px 32px rgba(0,0,0,.28)
}

button,input,select,textarea{font:inherit}

button{
cursor:pointer;
border:0
}

.app{
max-width:720px;
margin:auto;
min-height:100vh;
background:var(--bg)
}

header{
position:sticky;
top:0;
z-index:10;
background:#82005E;
backdrop-filter:blur(16px);
border-bottom:0;
padding:13px 18px;
display:grid;
grid-template-columns:42px 1fr 42px;
align-items:center;
min-height:68px
}

body.dark header{
background:#82005E
}

.brand-wrap{
display:flex;
align-items:center;
justify-content:center;
gap:0;
grid-column:2
}

.argos-mark{
display:none
}

.brand{
font-size:0;
line-height:0;
width:126px;
height:48px;
background-image:url('https://commons.wikimedia.org/wiki/Special:Redirect/file/Logotipo_de_Renfe_Operadora.svg');
background-repeat:no-repeat;
background-position:center;
background-size:contain;
filter:brightness(0) invert(1)
}

.brand small{
display:none
}

.iconbtn{
width:42px;
height:42px;
border-radius:13px;
background:transparent;
color:#fff;
border:1px solid rgba(255,255,255,.35);
font-weight:900
}

.menu-wrap{
grid-column:1;
grid-row:1
}

header > .iconbtn{
grid-column:3;
grid-row:1
}

.menu-wrap{position:relative}
.menu-btn{font-size:24px;line-height:1}
.menu-panel{
position:absolute;
top:50px;
left:0;
width:230px;
background:var(--card);
border:1px solid var(--line);
border-radius:16px;
box-shadow:var(--shadow);
padding:7px;
z-index:30;
display:none
}
.menu-panel.show{display:block}
.menu-panel button{
width:100%;
background:none;
color:var(--text);
text-align:left;
padding:12px;
border-radius:11px;
font-weight:750
}
.menu-panel button:hover{background:var(--accentSoft)}
.menu-sep{height:1px;background:var(--line);margin:5px 4px}
.update-list{margin:12px 0 0;padding-left:20px}
.update-list li{margin:8px 0;color:var(--muted);line-height:1.4}
.version-box{background:var(--accentSoft);border-radius:14px;padding:14px;margin-top:12px}

/* =========================================================
   CABECERA RENFE
========================================================= */

header{
position:sticky;
top:0;
z-index:10;
background:#82005E;
backdrop-filter:blur(16px);
border-bottom:0;
padding:0 18px;
display:grid;
grid-template-columns:48px 1fr 48px;
align-items:center;
height:72px;
box-shadow:0 3px 12px rgba(0,0,0,.12)
}

body.dark header{
background:#82005E
}

.renfe-header{
background:#82005E
}

.renfe-header .menu-wrap{
position:relative;
z-index:20
}

.header-menu-btn,
.header-logout-btn{
width:44px;
height:44px;
border-radius:13px;
background:transparent;
color:#fff;
border:1px solid rgba(255,255,255,.38);
display:flex;
align-items:center;
justify-content:center;
padding:0
}

.header-menu-btn{
font-size:29px;
line-height:1
}

.header-logout-btn{
font-size:24px;
line-height:1
}

.renfe-logo-img{
grid-column:2;
justify-self:center;
display:block;
width:116px;
height:auto;
max-height:48px;
object-fit:contain
}

.renfe-header .menu-panel{
top:54px;
left:0;
background:var(--card);
border:1px solid var(--line);
border-radius:16px;
box-shadow:var(--shadow);
padding:7px;
z-index:30
}

main{
padding:18px 16px 18px
}

.screen{
display:none
}

.screen.active{
display:block
}

.hero{
background:linear-gradient(135deg,var(--card),var(--accentSoft));
border:1px solid var(--line);
border-radius:24px;
padding:22px;
margin-bottom:14px;
box-shadow:var(--shadow)
}

h1{
font-size:28px;
line-height:1.1;
margin:3px 0 7px
}

h2{
font-size:19px;
margin:0 0 12px
}

h3{
font-size:15px;
margin:0 0 7px
}

.muted{
color:var(--muted);
font-size:13px;
line-height:1.4
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:11px
}

.card{
background:var(--card);
border:1px solid var(--line);
border-radius:19px;
padding:16px;
margin-bottom:13px;
box-shadow:var(--shadow)
}

.action-card{
display:block;
width:100%;
text-align:left;
min-height:112px
}

.action-icon{
width:38px;
height:38px;
border-radius:12px;
display:grid;
place-items:center;
background:var(--accentSoft);
color:var(--accent);
font-size:19px;
margin-bottom:14px;
font-weight:900
}

.badge{
font-size:11px;
font-weight:800;
background:var(--accentSoft);
color:var(--accent);
padding:6px 9px;
border-radius:999px
}

label{
display:block;
font-size:12px;
font-weight:800;
margin:0 0 6px;
color:var(--muted)
}

input,select,textarea{
width:100%;
border:1px solid var(--line);
background:var(--card2);
color:var(--text);
border-radius:12px;
padding:12px;
outline:none
}

input:focus,select:focus,textarea:focus{
border-color:var(--accent)
}

textarea{
min-height:90px;
resize:vertical
}

.row{
display:flex;
gap:9px;
align-items:center
}

.row>*{
flex:1
}

.primary{
width:100%;
background:linear-gradient(135deg,var(--accent),var(--accent2));
color:white;
padding:13px;
border-radius:12px;
font-weight:850;
margin-top:10px
}

.secondary{
background:var(--card2);
color:var(--text);
border:1px solid var(--line);
padding:10px 12px;
border-radius:11px;
font-weight:750
}

.link{
background:none;
color:var(--accent);
padding:7px;
font-weight:700
}

.danger{
color:white;
background:var(--red)
}

.auth{
min-height:100vh;
display:flex;
align-items:center;
padding:22px;
background:radial-gradient(circle at 15% 10%,#efe8f6 0,#f3f4f7 35%,#f3f4f7 100%)
}

body.dark .auth{
background:radial-gradient(circle at 15% 10%,#24172e 0,#0d0d10 38%,#0d0d10 100%)
}

.auth .card{
width:100%;
max-width:430px;
margin:auto;
text-align:center;
padding:28px;
border-radius:26px
}

.auth-logo{
width:72px;
height:72px;
margin:0 auto 13px
}

.auth .logo{
font-size:34px;
font-weight:950;
letter-spacing:.18em;
margin:3px 0 6px
}

nav{
display:grid;
grid-template-columns:repeat(5,1fr);
gap:7px;
background:var(--card);
border:1px solid var(--line);
border-radius:18px;
padding:7px;
margin:0 16px 14px;
box-shadow:var(--shadow)
}

nav button{
background:none;
color:var(--muted);
padding:9px 3px;
border-radius:13px;
font-size:10px;
font-weight:650
}

nav button.active{
color:var(--accent);
font-weight:900;
background:var(--accentSoft)
}

.statgrid{
display:grid;
grid-template-columns:1fr 1fr;
gap:10px
}

.stat{
padding:15px;
background:var(--card);
border:1px solid var(--line);
border-radius:16px
}

.stat b{
font-size:25px;
display:block
}

.stat span{
font-size:12px;
color:var(--muted)
}

.service{
display:flex;
gap:12px;
align-items:flex-start
}

.service .grow{
flex:1
}

.service strong{
display:block;
font-size:15px;
line-height:1.35
}

.service small{
display:block;
color:var(--muted);
margin-top:4px
}

.actions{
display:flex;
gap:6px;
margin-top:9px
}

.search{
margin-bottom:10px
}

.empty{
text-align:center;
padding:32px;
color:var(--muted)
}

.toast{
position:fixed;
left:50%;
bottom:85px;
transform:translateX(-50%);
background:#16161a;
color:#fff;
padding:11px 15px;
border-radius:12px;
z-index:50;
display:none;
font-size:13px
}

.modal{
position:fixed;
inset:0;
background:rgba(0,0,0,.58);
display:none;
align-items:flex-end;
z-index:40
}

.modal.show{
display:flex
}

.sheet{
width:100%;
max-width:720px;
margin:auto auto 0;
background:var(--card);
border-radius:23px 23px 0 0;
padding:18px;
max-height:88vh;
overflow:auto
}

.checkbox{
display:flex;
align-items:center;
gap:8px;
font-size:13px
}

.checkbox input{
width:auto
}

.inc{
border:1px solid var(--line);
border-radius:12px;
padding:10px;
margin-top:8px
}

.kpi{
display:flex;
align-items:center;
justify-content:space-between;
padding:11px 0;
border-bottom:1px solid var(--line)
}

/* =========================================================
   AUTOCOMPLETADO DE ESTACIONES RENFE
========================================================= */

.station-field{
position:relative
}

.station-suggestions{
position:absolute;
left:0;
right:0;
top:calc(100% + 6px);
z-index:100;
background:var(--card);
border:1px solid var(--line);
border-radius:15px;
box-shadow:0 14px 35px rgba(0,0,0,.16);
overflow:hidden;
display:none;
max-height:290px;
overflow-y:auto
}

.station-suggestions.show{
display:block
}

.station-option{
width:100%;
text-align:left;
border:0;
background:transparent;
color:var(--text);
padding:12px 14px;
cursor:pointer;
display:flex;
align-items:center;
justify-content:space-between;
gap:12px;
font:inherit
}

.station-option:hover,.station-option:focus{
background:var(--accentSoft);
outline:none
}

.station-option-name{
font-weight:800;
font-size:14px;
line-height:1.2
}

.station-option-code{
flex:0 0 auto;
font-size:11px;
font-weight:850;
color:var(--accent);
background:var(--accentSoft);
padding:5px 8px;
border-radius:999px
}

.station-loading{
padding:13px 14px;
font-size:12px;
color:var(--muted)
}

.material-field{position:relative}
.material-help{font-size:11px;color:var(--muted);margin-top:5px}
.material-suggestions{position:absolute;left:0;right:0;top:calc(100% + 6px);z-index:120;background:var(--card);border:1px solid var(--line);border-radius:15px;box-shadow:0 14px 35px rgba(0,0,0,.16);overflow:hidden;display:none;max-height:280px;overflow-y:auto}
.material-suggestions.show{display:block}
.material-option{width:100%;text-align:left;border:0;background:transparent;color:var(--text);padding:12px 14px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;font:inherit}
.material-option:hover,.material-option:focus{background:var(--accentSoft);outline:none}
.material-option-name{font-weight:850;font-size:14px}
.material-option-code{font-size:11px;font-weight:850;color:var(--accent);background:var(--accentSoft);padding:5px 8px;border-radius:999px}
.branch-card{margin-top:9px;padding:11px 13px;border:1px solid var(--line);border-radius:13px;background:var(--card2);font-size:12px}
.branch-card strong{font-size:14px}
.branch-card.is-found{
background:linear-gradient(135deg,var(--accentSoft),var(--card));
border-color:#d99ac8;
}
.branch-card.is-found strong{
color:var(--accent);
font-size:16px;
}


body.dark .station-suggestions{
box-shadow:0 14px 35px rgba(0,0,0,.45)
}

body.dark .station-option:hover,body.dark .station-option:focus{
background:#32152b
}

.input-counter{
position:relative
}

.input-counter input{
padding-right:64px
}

.input-counter span{
position:absolute;
right:13px;
top:50%;
transform:translateY(-50%);
font-size:11px;
color:var(--muted);
font-weight:700
}

.incident-item{
display:flex;
align-items:flex-start;
gap:8px;
border:1px solid var(--line);
border-radius:11px;
padding:9px;
margin-top:8px;
background:var(--card2)
}

.incident-item span{
flex:1;
font-size:13px;
line-height:1.35
}

.incident-item button{
background:none;
color:var(--red);
font-weight:800;
padding:2px 5px
}

.composition-box{
border:1px solid #d99ac8;
background:linear-gradient(135deg,var(--accentSoft),var(--card));
border-radius:16px;
padding:14px;
display:flex;
flex-direction:column;
gap:13px
}

.composition-title{
font-weight:900;
color:var(--accent);
font-size:14px
}

.subcard{
margin:0;
padding:14px
}

.add-line{
width:100%;
text-align:center
}

@media(min-width:700px){
.app{
border-left:1px solid var(--line);
border-right:1px solid var(--line)
}
}

/* =========================================================
   HISTORIAL · REDISEÑO ARGOS / ESTILO RENFE
========================================================= */

.history-head{
  position:relative;
  overflow:hidden;
  background:linear-gradient(135deg,#82005E 0%,#9d0a72 58%,#b31b83 100%);
  color:#fff;
  border:0;
  border-radius:24px;
  padding:25px 22px 23px;
  margin-bottom:14px;
  box-shadow:0 14px 34px rgba(130,0,94,.20);
}

.history-head:after{
  content:"";
  position:absolute;
  width:170px;
  height:170px;
  right:-65px;
  top:-75px;
  border:34px solid rgba(255,255,255,.08);
  border-radius:50%;
}

.history-kicker{
  position:relative;
  z-index:1;
  display:flex;
  align-items:center;
  gap:8px;
  font-size:11px;
  font-weight:900;
  letter-spacing:.12em;
  text-transform:uppercase;
  opacity:.86;
  margin-bottom:10px;
}

.history-kicker:before{
  content:"";
  width:22px;
  height:3px;
  border-radius:4px;
  background:#fff;
}

.history-head h1{
  position:relative;
  z-index:1;
  font-size:34px;
  margin:0 0 7px;
  letter-spacing:-.03em;
}

.history-head .history-sub{
  position:relative;
  z-index:1;
  font-size:14px;
  opacity:.86;
}

.history-summary{
  position:relative;
  z-index:1;
  display:flex;
  gap:8px;
  margin-top:18px;
  flex-wrap:wrap;
}

.history-stat{
  background:rgba(255,255,255,.13);
  border:1px solid rgba(255,255,255,.16);
  border-radius:12px;
  padding:8px 11px;
  min-width:82px;
}

.history-stat b{
  display:block;
  font-size:18px;
  line-height:1;
}

.history-stat span{
  display:block;
  margin-top:4px;
  font-size:10px;
  opacity:.78;
  text-transform:uppercase;
  letter-spacing:.05em;
  font-weight:800;
}

.history-tools{
  background:var(--card);
  border:1px solid var(--line);
  border-radius:18px;
  padding:10px;
  margin-bottom:14px;
  box-shadow:0 6px 20px rgba(26,20,35,.045);
}

.history-search-wrap{
  position:relative;
}

.history-search-wrap:before{
  content:"⌕";
  position:absolute;
  left:14px;
  top:50%;
  transform:translateY(-53%);
  font-size:23px;
  color:var(--muted);
  z-index:1;
}

.history-search{
  margin:0;
  padding:13px 14px 13px 42px;
  border-radius:13px;
  background:var(--card2);
  border-color:transparent;
  font-size:14px;
}

.history-search:focus{
  border-color:var(--accent);
  background:var(--card);
}

.history-tool-row{
  display:grid;
  grid-template-columns:1fr auto;
  gap:8px;
  margin-top:9px;
}

.history-select{
  margin:0;
  min-height:42px;
  border-radius:12px;
  font-size:13px;
  font-weight:750;
  background:var(--card2);
}

.history-export{
  min-width:108px;
  min-height:42px;
  border-radius:12px;
  background:#82005E;
  color:#fff;
  border:0;
  font-weight:850;
}

.history-result-line{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  margin:15px 2px 9px;
}

.history-result-line strong{
  font-size:13px;
}

.history-result-line span{
  color:var(--muted);
  font-size:11px;
}

.history-list{
  display:flex;
  flex-direction:column;
  gap:10px;
}

.history-card{
  position:relative;
  overflow:hidden;
  background:var(--card);
  border:1px solid var(--line);
  border-radius:18px;
  margin:0;
  padding:0;
  box-shadow:0 7px 22px rgba(26,20,35,.055);
  transition:transform .16s ease,box-shadow .16s ease,border-color .16s ease;
}

.history-card:hover{
  transform:translateY(-1px);
  box-shadow:0 10px 26px rgba(26,20,35,.09);
}

.history-card-main{
  display:grid;
  grid-template-columns:6px 1fr;
}

.history-accent{
  background:linear-gradient(180deg,#82005E,#b21b83);
}

.history-card-content{
  padding:15px 16px 14px;
}

.history-top{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:12px;
}

.history-train{
  font-size:21px;
  line-height:1;
  font-weight:950;
  letter-spacing:-.025em;
}

.history-material{
  margin-top:5px;
  color:var(--muted);
  font-size:12px;
  font-weight:750;
}

.history-type{
  flex:0 0 auto;
  color:#82005E;
  background:#f4e4ef;
  border-radius:999px;
  padding:6px 9px;
  font-size:10px;
  line-height:1;
  font-weight:900;
  text-transform:uppercase;
}

.history-route{
  display:flex;
  align-items:center;
  gap:9px;
  margin-top:15px;
  font-size:14px;
  font-weight:850;
}

.history-station{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.history-arrow{
  color:#82005E;
  font-size:18px;
  font-weight:950;
}

.history-date{
  margin-top:5px;
  color:var(--muted);
  font-size:11px;
  font-weight:650;
}

.history-tags{
  display:flex;
  gap:6px;
  flex-wrap:wrap;
  margin-top:12px;
}

.history-tag{
  display:inline-flex;
  align-items:center;
  gap:5px;
  padding:6px 8px;
  border-radius:8px;
  background:var(--card2);
  border:1px solid var(--line);
  color:var(--muted);
  font-size:10px;
  line-height:1.2;
  font-weight:750;
}

.history-tag.note{
  color:#82005E;
  background:#f8edf4;
  border-color:#ecd5e3;
}

.history-tag.incident{
  color:#b3262f;
  background:#fff0f1;
  border-color:#f4d1d4;
}

.history-actions{
  display:flex;
  gap:7px;
  margin-top:13px;
}

.history-action{
  flex:1;
  min-height:38px;
  border-radius:10px;
  font-size:12px;
  font-weight:850;
}

.history-action.edit{
  background:var(--card2);
  color:var(--text);
  border:1px solid var(--line);
}

.history-action.delete{
  background:#fff1f2;
  color:#c42f36;
  border:1px solid #f3d3d6;
}

.history-expand{
  width:100%;
  border-top:1px solid var(--line);
  background:transparent;
  color:var(--accent);
  padding:9px 12px;
  font-size:11px;
  font-weight:850;
}

.history-details{
  display:none;
  border-top:1px solid var(--line);
  background:var(--card2);
  padding:13px 16px 15px;
}

.history-details.show{
  display:block;
}

.history-detail-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:9px;
}

.history-detail{
  background:var(--card);
  border:1px solid var(--line);
  border-radius:10px;
  padding:9px;
}

.history-detail label{
  margin:0 0 3px;
  font-size:9px;
  text-transform:uppercase;
  letter-spacing:.05em;
}

.history-detail b{
  display:block;
  font-size:12px;
}

.history-empty{
  text-align:center;
  padding:34px 18px;
  background:var(--card);
  border:1px dashed var(--line);
  border-radius:18px;
  color:var(--muted);
}

.history-empty-icon{
  width:44px;
  height:44px;
  margin:0 auto 10px;
  display:grid;
  place-items:center;
  border-radius:13px;
  background:var(--accentSoft);
  color:var(--accent);
  font-size:22px;
  font-weight:900;
}

@media(max-width:430px){
  .history-head{padding:22px 18px}
  .history-head h1{font-size:31px}
  .history-tool-row{grid-template-columns:1fr}
  .history-export{width:100%}
  .history-top{gap:8px}
  .history-train{font-size:19px}
  .history-route{font-size:13px}
}


/* =========================================================
   EXTRA · FICHA DE PRESENTACIÓN DEL MATERIAL
   AÑADIDO: no modifica la base existente.
========================================================= */
.material-first-card{
  padding:24px 20px 20px;
  text-align:center
}
.material-first-icon{
  width:58px;height:58px;border-radius:18px;
  margin:0 auto 14px;
  display:grid;place-items:center;
  background:var(--accentSoft);color:var(--accent);
  font-size:28px;font-weight:900
}
.material-first-card h2{margin:0 0 6px;font-size:22px}
.material-first-branch{color:var(--accent);font-size:21px;font-weight:950}
.material-first-sub{margin-top:7px;color:var(--muted);font-size:12px}
.material-first-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:20px}
.material-first-actions button{min-height:46px}
.material-ficha{padding:20px}
.material-ficha-head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:18px}
.material-ficha-title{font-size:24px;font-weight:950;line-height:1.1}
.material-ficha-sub{margin-top:5px;color:var(--muted);font-size:12px}
.material-ficha-badge{padding:7px 10px;border-radius:999px;background:var(--accentSoft);color:var(--accent);font-size:10px;font-weight:950;white-space:nowrap}
.material-ficha-section{margin-top:18px}
.material-ficha-section h3{margin:0 0 9px;font-size:13px}
.material-ficha-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.material-ficha-item{padding:11px 12px;border:1px solid var(--line);border-radius:12px;background:var(--card2)}
.material-ficha-label{color:var(--muted);font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:.05em}
.material-ficha-value{margin-top:3px;font-size:13px;font-weight:800;word-break:break-word}
.material-ficha-note{padding:11px 12px;border-left:3px solid var(--accent);border-radius:10px;background:var(--card2);margin-top:7px;font-size:12px;line-height:1.45}
.material-ficha-empty{padding:12px;border:1px dashed var(--line);border-radius:11px;color:var(--muted);font-size:12px}
@media(max-width:560px){.material-first-actions,.material-ficha-grid{grid-template-columns:1fr}}


.history-action.material{
  border-color:var(--accent);
  color:var(--accent);
}


/* =========================================================
   POKÉDEX FERROVIARIA · INTERFAZ APP
========================================================= */
.material-ficha{
  padding:0;
  background:var(--bg);
}
.pokedex-shell{
  max-height:78vh;
  overflow:auto;
  padding:4px;
  scrollbar-width:thin;
}
.pokedex-hero{
  position:relative;
  overflow:hidden;
  padding:24px;
  border:1px solid var(--line);
  border-radius:20px;
  background:
    radial-gradient(circle at 92% 8%,var(--accentSoft),transparent 32%),
    linear-gradient(145deg,var(--card),var(--card2));
  margin-bottom:14px;
}
.pokedex-hero-top{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}
.pokedex-kicker{font-size:9px;font-weight:950;letter-spacing:.14em;color:var(--accent);text-transform:uppercase}
.pokedex-title{font-size:32px;font-weight:950;line-height:1.05;margin-top:7px}
.pokedex-subtitle{font-size:14px;color:var(--muted);margin-top:7px}
.pokedex-subtitle b{color:var(--text)}
.pokedex-badges{display:flex;flex-wrap:wrap;gap:7px;margin-top:14px}
.pokedex-chip{padding:7px 10px;border-radius:999px;background:var(--accentSoft);color:var(--accent);font-size:10px;font-weight:950}
.pokedex-status{
  flex:0 0 auto;padding:8px 11px;border-radius:999px;background:rgba(16,185,129,.12);
  color:#10b981;font-size:10px;font-weight:950;border:1px solid rgba(16,185,129,.22)
}
.pokedex-statrow{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:17px}
.pokedex-stat{
  padding:12px 13px;border:1px solid var(--line);border-radius:13px;background:rgba(255,255,255,.025)
}
.pokedex-stat-label{font-size:9px;color:var(--muted);font-weight:900;text-transform:uppercase}
.pokedex-stat-value{font-size:14px;font-weight:900;margin-top:4px}
.pokedex-layout{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.pokedex-section{
  padding:17px;border:1px solid var(--line);border-radius:16px;background:var(--card2);
}
.pokedex-section.full{grid-column:1/-1}
.pokedex-section-title{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:950;margin-bottom:13px}
.pokedex-section-title .pd-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 4px var(--accentSoft)}
.pokedex-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.pokedex-card{
  padding:10px 11px;border-bottom:1px solid var(--line);min-width:0
}
.pokedex-label{font-size:8px;color:var(--muted);font-weight:900;text-transform:uppercase;letter-spacing:.055em}
.pokedex-value{font-size:12px;font-weight:800;margin-top:3px;word-break:break-word}
.pokedex-timeline{position:relative;padding-left:19px}
.pokedex-timeline:before{
  content:"";position:absolute;left:5px;top:6px;bottom:7px;width:2px;background:var(--line)
}
.pokedex-event{position:relative;padding:0 0 14px 9px}
.pokedex-event:before{
  content:"";position:absolute;left:-17px;top:3px;width:9px;height:9px;border-radius:50%;
  background:var(--accent);box-shadow:0 0 0 3px var(--accentSoft)
}
.pokedex-year{font-size:10px;font-weight:950;color:var(--accent)}
.pokedex-event-text{font-size:12px;line-height:1.45;margin-top:2px}
.pokedex-note{
  padding:12px 13px;border:1px solid var(--line);border-radius:12px;background:var(--card);
  font-size:12px;line-height:1.5;margin-bottom:8px
}
.pokedex-note strong{color:var(--accent)}
.pokedex-source{font-size:9px;color:var(--muted);margin-top:9px}
.pokedex-photo{
  padding:13px;border:1px dashed var(--line);border-radius:12px;color:var(--muted);font-size:10px;
  background:rgba(255,255,255,.015)
}
.pokedex-divider{height:1px;background:var(--line);margin:15px 0}
.pokedex-close{margin-top:14px}
@media(max-width:680px){
  .pokedex-layout{grid-template-columns:1fr}
  .pokedex-section.full{grid-column:auto}
  .pokedex-statrow{grid-template-columns:1fr}
  .pokedex-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:460px){
  .pokedex-hero{padding:18px}
  .pokedex-title{font-size:26px}
  .pokedex-grid{grid-template-columns:1fr}
}


</style>
</head>

<body>

<div id="auth" class="auth">
<div class="card">

<svg class="auth-logo" viewBox="0 0 64 64">
<defs>
<linearGradient id="ag2" x1="0" x2="1">
<stop stop-color="#81005E"/>
<stop offset="1" stop-color="#A30078"/>
</linearGradient>
</defs>

<rect x="2" y="2" width="60" height="60" rx="18" fill="url(#ag2)"/>

<path d="M17 45 28 17h8l11 28h-8l-2.3-6H27.3L25 45h-8Zm13.1-12h4.8l-2.4-7.1L30.1 33Z"
fill="#fff"/>

<path d="M20 50h24"
stroke="#fff"
stroke-width="3"
stroke-linecap="round"
opacity=".75"/>
</svg>

<div class="logo">ARGOS</div>

<div class="muted">
Aplicación de Registro y Gestión Operativa de Servicios
</div>

<div id="loginBox" style="margin-top:24px">

<h2>Ingresar</h2>

<label>Matrícula RENFE</label>

<input
id="loginUser"
placeholder="Ej.: 2345678"
inputmode="numeric"
maxlength="7"
autocomplete="username"
>

<label style="margin-top:12px">
Contraseña
</label>

<input
id="loginPass"
type="password"
placeholder="Contraseña"
autocomplete="current-password"
>

<button class="primary" onclick="login()">
Entrar
</button>

<button class="link" onclick="toggleAuth(false)">
¿No tienes cuenta? Crear usuario
</button>

</div>

<div id="registerBox" style="display:none;margin-top:24px">

<h2>Crear usuario</h2>

<label>Matrícula RENFE</label>

<input
id="regUser"
placeholder="Ej.: 2345678"
inputmode="numeric"
maxlength="7"
autocomplete="username"
>

<label style="margin-top:12px">
Contraseña
</label>

<input
id="regPass"
type="password"
placeholder="Mínimo 6 caracteres"
autocomplete="new-password"
>

<button class="primary" onclick="register()">
Crear cuenta
</button>

<button class="link" onclick="toggleAuth(true)">
¿Ya tienes cuenta? Entrar
</button>

</div>

</div>
</div>


<div id="app" class="app" style="display:none">

<header class="renfe-header">

<div class="menu-wrap">

<button class="header-menu-btn" aria-label="Abrir menú" onclick="toggleMenu()">
⋮
</button>

<div id="menuPanel" class="menu-panel">

<button onclick="menuGo('home')">⌂ &nbsp; Inicio</button>
<button onclick="menuGo('register')">＋ &nbsp; Registrar tren</button>
<button onclick="menuGo('history')">☷ &nbsp; Historial</button>
<button onclick="menuGo('stats')">◔ &nbsp; Estadísticas</button>
<button onclick="menuGo('settings')">⚙ &nbsp; Ajustes</button>

<div class="menu-sep"></div>

<button onclick="menuGo('updates')">↻ &nbsp; Actualizaciones</button>

</div>
</div>

<img class="renfe-logo-img" src="data:image/png;base64,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" alt="Renfe">

<button class="header-logout-btn" onclick="logout()" aria-label="Cerrar sesión">
↪
</button>

</header>


<main>

<section id="home" class="screen active">

<div class="hero">

<div class="badge" style="display:inline-block;margin-bottom:10px">
ARGOS · SERVICIOS
</div>

<h1 id="hello">Hola</h1>

<div class="muted">
Registra, consulta y controla tu actividad ferroviaria.
</div>

</div>


<div class="grid">

<button class="card action-card" onclick="show('register')">

<div class="action-icon">＋</div>

<h3>Registrar tren</h3>

<div class="muted">
Añade un nuevo servicio
</div>

</button>


<button class="card action-card" onclick="show('history')">

<div class="action-icon">☷</div>

<h3>Ver historial</h3>

<div class="muted">
Consulta tus registros
</div>

</button>


<button class="card action-card" onclick="show('stats')">

<div class="action-icon">◔</div>

<h3>Estadísticas</h3>

<div class="muted">
Resumen de tu actividad
</div>

</button>


<button class="card action-card" onclick="lastService()">

<div class="action-icon">↗</div>

<h3>Último servicio</h3>

<div class="muted" id="lastHome">
Sin registros
</div>

</button>

</div>


<div class="card">

<h2>Última vez</h2>

<div class="muted">
¿Cuándo hiciste un trayecto?
</div>

<select id="routeSelect" onchange="lastRoute()">

<option value="">
Selecciona un trayecto
</option>

</select>

<div id="routeResult" style="margin-top:10px"></div>

</div>

</section>


<section id="register" class="screen">

<div class="hero">

<div class="badge" style="display:inline-block;margin-bottom:10px">
NUEVO REGISTRO
</div>

<h1>Registrar tren</h1>

<div class="muted">
Introduce los datos del servicio realizado.
</div>

</div>


<form class="card" onsubmit="saveService(event)">

<label>Número de tren</label>

<div class="input-counter">

<input
id="trainNo"
maxlength="5"
inputmode="numeric"
placeholder="Ej.: 12345"
>

<span id="trainCounter">
0 / 5
</span>

</div>


<label class="checkbox" style="margin-top:10px">

<input type="checkbox" id="noNumber">

Sin número de tren

</label>


<label style="margin-top:15px">
Serie
</label>

<div class="material-field">
<div class="input-counter">
<input
id="series"
maxlength="3"
inputmode="numeric"
autocomplete="off"
placeholder="Ej.: 465"
required
>
<span id="seriesCounter">0 / 3</span>
</div>
<div id="seriesSuggestions" class="material-suggestions"></div>
</div>
<div class="material-help">Escribe la serie o selecciónala de la lista.</div>


<input type="hidden" id="branch" value="">

<label style="margin-top:15px">
Número de vehículo
</label>

<input
id="branchVehicle"
maxlength="3"
inputmode="numeric"
autocomplete="off"
inputmode="numeric"
placeholder="Ej.: 109"
>

<div class="material-help">
Introduce cualquier matrícula corta de la composición.
</div>

<div id="branchInfo" class="branch-card">
<strong>Rama</strong><br>
<span class="muted">Se determinará automáticamente al introducir el vehículo.</span>
</div>


<label style="margin-top:15px">
Fecha
</label>

<input
id="date"
type="date"
required
>


<label style="margin-top:15px">
Origen
</label>

<div class="muted" style="margin-top:5px;margin-bottom:7px">
Escribe el nombre o código de la estación
</div>

<div class="station-field">
<input
id="origin"
placeholder="Escribe estación o código…"
autocomplete="off"
required
>
<div id="originSuggestions" class="station-suggestions" role="listbox"></div>
</div>


<label style="margin-top:15px">
Destino
</label>

<div class="station-field">
<input
id="destination"
placeholder="Escribe estación o código…"
autocomplete="off"
required
>
<div id="destinationSuggestions" class="station-suggestions" role="listbox"></div>
</div>


<label style="margin-top:15px">
Tipo de servicio
</label>

<select id="type" required>

<option value="">
Seleccionar
</option>

<option>Cercanías</option>
<option>Cercanías AM</option>
<option>Media Distancia</option>
<option>Media Distancia AM</option>
<option>Avant</option>
<option>Alvia</option>
<option>Intercity</option>
<option>AVE</option>
<option>Trambahia</option>
<option>Euromed</option>
<option>Regional</option>
<option>Regional Exprés</option>
<option>Proximidad</option>
<option>Turístico</option>
<option>Rodalies</option>
<option>AVLO</option>
<option>Otro</option>

</select>


<label class="checkbox" style="margin-top:15px">

<input type="checkbox" id="double">

Añadir doble composición

</label>


<div id="doubleBox"
class="composition-box"
style="display:none">

<div class="composition-title">
Segunda composición
</div>

<label>
Serie
</label>

<div class="input-counter">

<input
id="series2"
maxlength="3"
inputmode="numeric"
>

<span id="series2Counter">
0 / 3
</span>

</div>


<label>
Rama
</label>

<div class="input-counter">

<input
id="branch2"
maxlength="3"
inputmode="numeric"
>

<span id="branch2Counter">
0 / 3
</span>

</div>

</div>


<div class="card subcard" style="margin-top:15px">

<h3>Incidencias y anotaciones</h3>

<label style="margin-top:8px">Anotaciones</label>
<textarea id="annotations" placeholder="Añade cualquier anotación sobre el servicio…"></textarea>

<label style="margin-top:12px">Incidencias</label>
<div class="row">
<input id="incidentInput" placeholder="Describe una incidencia…">
<button type="button" class="secondary" onclick="addIncident()">Añadir</button>
</div>
<div id="incidentList"></div>

</div>


<button class="primary">
Guardar registro
</button>

</form>

</section>


<section id="history" class="screen">

<div class="history-head">

<div class="history-kicker">
ARGOS · REGISTROS
</div>

<h1>Historial</h1>

<div class="history-sub" id="historySubtitle">
Tu actividad ferroviaria, siempre a mano.
</div>

<div class="history-summary">

<div class="history-stat">
<b id="historyTotal">0</b>
<span>Servicios</span>
</div>

<div class="history-stat">
<b id="historySeries">0</b>
<span>Series</span>
</div>

<div class="history-stat">
<b id="historyRoutes">0</b>
<span>Rutas</span>
</div>

</div>

</div>


<div class="history-tools">

<div class="history-search-wrap">

<input
class="history-search"
id="search"
oninput="renderHistory()"
placeholder="Buscar tren, serie, rama, origen o destino..."
autocomplete="off"
>

</div>

<div class="history-tool-row">

<select
class="history-select"
id="filterType"
onchange="renderHistory()"
>

<option value="">
Todos los tipos
</option>

</select>

<button
class="history-export"
type="button"
onclick="exportMenu()"
>
Exportar
</button>

</div>

</div>


<div class="history-result-line">
<strong id="count">0 registros</strong>
<span>Ordenado por fecha</span>
</div>


<div
id="historyList"
class="history-list"
></div>

</section>

<section id="stats" class="screen">

<div class="hero">

<div class="badge">
ANÁLISIS
</div>

<h1>
Estadísticas
</h1>

<div class="muted">
Resumen de tu actividad ferroviaria.
</div>

</div>


<div class="statgrid">

<div class="stat">
<b id="sTotal">0</b>
<span>Trenes totales</span>
</div>

<div class="stat">
<b id="sMonth">0</b>
<span>Este mes</span>
</div>

<div class="stat">
<b id="sRoutes">0</b>
<span>Rutas</span>
</div>

<div class="stat">
<b id="sSeries">0</b>
<span>Series distintas</span>
</div>

</div>


<div class="card" style="margin-top:14px">

<h2>
Tipos de servicio
</h2>

<div id="typeStats"></div>

</div>


<div class="card">

<h2>
Rutas realizadas
</h2>

<div id="routeStats"></div>

</div>


<div class="card">

<h2>
Actividad mensual
</h2>

<div class="muted">
Últimos 6 meses
</div>

<div
id="monthStats"
style="margin-top:10px"
></div>

</div>

</section>


<section id="updates" class="screen">

<div class="hero">

<div class="badge">
ARGOS · ACTUALIZACIONES
</div>

<h1>Actualizaciones</h1>

<div class="muted">
Consulta las novedades y cambios de cada versión de ARGOS.
</div>

</div>

<div class="card">

<h2>Versión actual</h2>

<div class="version-box">
<strong id="currentVersionLabel">ARGOS 1.2.0</strong>
<div class="muted" id="currentReleaseDate" style="margin-top:5px">Lanzada el 23/08/2026</div>
</div>

<ul class="update-list" id="changelogList"></ul>

</div>

</section>


<section id="settings" class="screen">

<div class="hero">

<div class="badge">
CONFIGURACIÓN
</div>

<h1>
Ajustes
</h1>

<div class="muted">
Personaliza tu perfil y la aplicación.
</div>

</div>


<form class="card" onsubmit="saveProfile(event)">

<h2>
Perfil de usuario
</h2>

<label>
Matrícula RENFE
</label>

<input id="profileUser" disabled>


<label style="margin-top:10px">
Nombre visible
</label>

<input
id="displayName"
placeholder="Ej.: Pablo"
>


<label style="margin-top:10px">
Puesto
</label>

<input
id="job"
placeholder="Ej.: Maquinista"
>


<label style="margin-top:10px">
Tipo de servicio
</label>

<input
id="serviceType"
placeholder="Ej.: Cercanías, Larga Distancia…"
>


<button class="primary">
Guardar cambios
</button>

</form>


<div class="card">

<h2>
Apariencia
</h2>

<label class="checkbox">

<input
id="dark"
type="checkbox"
onchange="toggleDark()"
>

Modo oscuro

</label>

</div>


<div class="card">

<h2>
Datos
</h2>

<button
class="secondary"
onclick="exportCSV()"
>
Exportar CSV
</button>

<button
class="secondary"
onclick="printHistory()"
>
PDF / Imprimir
</button>

</div>

</section>

</main>




</div>


<div id="toast" class="toast"></div>

<div id="modal" class="modal">

<div
class="sheet"
id="modalContent"
></div>

</div>


<script>
   /* =========================================================
   SERVICIOS
========================================================= */

async function loadServices(){

if(!currentUser){
services=[];
return;
}

const {data,error}=await db
.from('services')
.select('*')
.eq('user_id',currentUser.id)
.order('service_date',{ascending:false});

if(error){
console.error(error);
services=[];
alert('No se han podido cargar los servicios: '+error.message);
return;
}

services=(data||[]).map(normalizeService);

}


function normalizeService(s){

return {
id:s.id,
train:s.train_number||'',
noNumber:!!s.no_train_number,
series:s.series||'',
branch:s.branch||'',
date:s.service_date||'',
origin:s.origin||'',
destination:s.destination||'',
type:s.service_type||'',
double:s.double_composition||false,
secondSeries:s.second_series||'',
secondBranch:s.second_branch||'',
annotations:typeof s.annotations==='string'?s.annotations:'',
incidents:Array.isArray(s.incidents)?s.incidents:[]
};

}


/* =========================================================
   INCIDENCIAS / ANOTACIONES
========================================================= */

let draftIncidents=[];
let editIncidents=[];

function renderIncidentList(){

const box=document.getElementById('incidentList');
if(!box)return;

box.innerHTML=draftIncidents.map((item,i)=>`
<div class="incident-item">
<span>${escapeHtml(item)}</span>
<button type="button" onclick="removeIncident(${i})">×</button>
</div>
`).join('');
}

function addIncident(){
const input=document.getElementById('incidentInput');
if(!input)return;

const value=input.value.trim();
if(!value)return;

draftIncidents.push(value);
input.value='';
renderIncidentList();
input.focus();
}

function removeIncident(index){
draftIncidents.splice(index,1);
renderIncidentList();
}

function renderEditIncidents(){
const box=document.getElementById('editIncidentList');
if(!box)return;

box.innerHTML=editIncidents.map((item,i)=>`
<div class="incident-item">
<span>${escapeHtml(item)}</span>
<button type="button" onclick="removeEditIncident(${i})">×</button>
</div>
`).join('');
}

function addEditIncident(){
const input=document.getElementById('e_incidentInput');
if(!input)return;

const value=input.value.trim();
if(!value)return;

editIncidents.push(value);
input.value='';
renderEditIncidents();
input.focus();
}

function removeEditIncident(index){
editIncidents.splice(index,1);
renderEditIncidents();
}


/* =========================================================
   MATERIAL MOTOR · ARGOS 2.0.2
   Rama automática a partir de serie + número de vehículo.
========================================================= */

/*
La estructura es:
serie -> vehículo -> rama

El usuario NO introduce la rama.
Puede introducir el número corto de cualquier vehículo de la
composición. La base se irá ampliando con datos contrastados.
*/
let ARGOS_MATERIAL_DATA={
'100':{
label:'S-100',
vehicles:{
'109':{branch:'9',type:'motor'},
'112':{branch:'12',type:'motor'},
'119':{branch:'19',type:'motor'}
}
},
'101':{
label:'S-101',
vehicles:{
'101':{branch:'1',type:'motor'},
'201':{branch:'2',type:'motor'},
'301':{branch:'3',type:'motor'},
'401':{branch:'4',type:'motor'},
'501':{branch:'5',type:'motor'},
'601':{branch:'6',type:'motor'},
'701':{branch:'7',type:'motor'},
'801':{branch:'8',type:'motor'}
}
},
'450':{
label:'S-450',
vehicles:{
'007':{branch:'7',type:'motor'},
'059':{branch:'59',type:'motor'}
}
},
'451':{label:'S-451',vehicles:{}},
'462':{label:'Civia S-462',vehicles:{}},
'463':{label:'Civia S-463',vehicles:{
'001':{branch:'1',type:'Coche motor extremo',uic:'9-463-001-8',lote:'Primer lote · CAF',constructor:'CAF',aliases:["001","463-001","9-463-001-8","6-463-001-8"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio en Asturias desde 10/03/04. En Sevilla desde 10/02/08. Santander desde 10/09; Llanera desde 11/10. En reparación desde 08/22 hasta 13/02/23."],ramaComposicion:'9-463-001-8 + 6-463-001-8 + 9-463-501-7'},
'R001':{branch:'1',type:'Remolque intermedio',uic:'6-463-001-8',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R001","463-R001","6-463-001-8","9-463-001-8"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio en Asturias desde 10/03/04. En Sevilla desde 10/02/08. Santander desde 10/09; Llanera desde 11/10. En reparación desde 08/22 hasta 13/02/23."],ramaComposicion:'9-463-001-8 + 6-463-001-8 + 9-463-501-7'},
'501':{branch:'1',type:'Coche motor extremo',uic:'9-463-501-7',lote:'Primer lote · CAF',constructor:'CAF',aliases:["501","463-501","9-463-501-7","9-463-001-8"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio en Asturias desde 10/03/04. En Sevilla desde 10/02/08. Santander desde 10/09; Llanera desde 11/10. En reparación desde 08/22 hasta 13/02/23."],ramaComposicion:'9-463-001-8 + 6-463-001-8 + 9-463-501-7'},
'002':{branch:'2',type:'Coche motor extremo',uic:'9-463-002-6',lote:'Primer lote · CAF',constructor:'CAF',aliases:["002","463-002","9-463-002-6","6-463-002-6"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio en Asturias desde 19/03/04. Sevilla desde 10/02/08. Irún desde 13/03/09. Santander desde 10/09; Asturias desde 12/09; Santander 01/10; Asturias 10/10. Logos 75 años Renfe."],ramaComposicion:'9-463-002-6 + 6-463-002-6 + 9-463-502-5'},
'R002':{branch:'2',type:'Remolque intermedio',uic:'6-463-002-6',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R002","463-R002","6-463-002-6","9-463-002-6"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio en Asturias desde 19/03/04. Sevilla desde 10/02/08. Irún desde 13/03/09. Santander desde 10/09; Asturias desde 12/09; Santander 01/10; Asturias 10/10. Logos 75 años Renfe."],ramaComposicion:'9-463-002-6 + 6-463-002-6 + 9-463-502-5'},
'502':{branch:'2',type:'Coche motor extremo',uic:'9-463-502-5',lote:'Primer lote · CAF',constructor:'CAF',aliases:["502","463-502","9-463-502-5","9-463-002-6"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio en Asturias desde 19/03/04. Sevilla desde 10/02/08. Irún desde 13/03/09. Santander desde 10/09; Asturias desde 12/09; Santander 01/10; Asturias 10/10. Logos 75 años Renfe."],ramaComposicion:'9-463-002-6 + 6-463-002-6 + 9-463-502-5'},
'003':{branch:'3',type:'Coche motor extremo',uic:'9-463-003-4',lote:'Primer lote · CAF',constructor:'CAF',aliases:["003","463-003","9-463-003-4","6-463-003-4"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio en Asturias desde 03/04. Sevilla desde 10/02/08. Asturias 11/09. Vinilo 102 desde 02/16. Descarrilo por argayo en túnel de Olloniego 22/01/26."],ramaComposicion:'9-463-003-4 + 6-463-003-4 + 9-463-503-3'},
'R003':{branch:'3',type:'Remolque intermedio',uic:'6-463-003-4',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R003","463-R003","6-463-003-4","9-463-003-4"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio en Asturias desde 03/04. Sevilla desde 10/02/08. Asturias 11/09. Vinilo 102 desde 02/16. Descarrilo por argayo en túnel de Olloniego 22/01/26."],ramaComposicion:'9-463-003-4 + 6-463-003-4 + 9-463-503-3'},
'503':{branch:'3',type:'Coche motor extremo',uic:'9-463-503-3',lote:'Primer lote · CAF',constructor:'CAF',aliases:["503","463-503","9-463-503-3","9-463-003-4"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio en Asturias desde 03/04. Sevilla desde 10/02/08. Asturias 11/09. Vinilo 102 desde 02/16. Descarrilo por argayo en túnel de Olloniego 22/01/26."],ramaComposicion:'9-463-003-4 + 6-463-003-4 + 9-463-503-3'},
'004':{branch:'4',type:'Coche motor extremo',uic:'9-463-004-0',lote:'Primer lote · CAF',constructor:'CAF',aliases:["004","463-004","9-463-004-0","6-463-004-0"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Ex-462-001. En servicio desde 31/10/06. Ex-Sevilla; Asturias desde 11/09. Colores Renfe Operadora. Logos 75 años Renfe."],ramaComposicion:'9-463-004-0 + 6-463-004-0 + 9-463-504-9'},
'R004':{branch:'4',type:'Remolque intermedio',uic:'6-463-004-0',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R004","463-R004","6-463-004-0","9-463-004-0"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Ex-462-001. En servicio desde 31/10/06. Ex-Sevilla; Asturias desde 11/09. Colores Renfe Operadora. Logos 75 años Renfe."],ramaComposicion:'9-463-004-0 + 6-463-004-0 + 9-463-504-9'},
'504':{branch:'4',type:'Coche motor extremo',uic:'9-463-504-9',lote:'Primer lote · CAF',constructor:'CAF',aliases:["504","463-504","9-463-504-9","9-463-004-0"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Ex-462-001. En servicio desde 31/10/06. Ex-Sevilla; Asturias desde 11/09. Colores Renfe Operadora. Logos 75 años Renfe."],ramaComposicion:'9-463-004-0 + 6-463-004-0 + 9-463-504-9'},
'005':{branch:'5',type:'Coche motor extremo',uic:'9-463-005-9',lote:'Primer lote · CAF',constructor:'CAF',aliases:["005","463-005","9-463-005-9","6-463-005-9"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Ex-462-002. Colores Renfe Operadora. Asturias desde 10/02/08."],ramaComposicion:'9-463-005-9 + 6-463-005-9 + 9-463-505-8'},
'R005':{branch:'5',type:'Remolque intermedio',uic:'6-463-005-9',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R005","463-R005","6-463-005-9","9-463-005-9"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Ex-462-002. Colores Renfe Operadora. Asturias desde 10/02/08."],ramaComposicion:'9-463-005-9 + 6-463-005-9 + 9-463-505-8'},
'505':{branch:'5',type:'Coche motor extremo',uic:'9-463-505-8',lote:'Primer lote · CAF',constructor:'CAF',aliases:["505","463-505","9-463-505-8","9-463-005-9"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Ex-462-002. Colores Renfe Operadora. Asturias desde 10/02/08."],ramaComposicion:'9-463-005-9 + 6-463-005-9 + 9-463-505-8'},
'006':{branch:'6',type:'Coche motor extremo',uic:'9-463-006-7',lote:'Primer lote · CAF',constructor:'CAF',aliases:["006","463-006","9-463-006-7","6-463-006-7"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Ex-462-003. Colores Renfe Operadora. Asturias desde 10/02/08."],ramaComposicion:'9-463-006-7 + 6-463-006-7 + 9-463-506-6'},
'R006':{branch:'6',type:'Remolque intermedio',uic:'6-463-006-7',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R006","463-R006","6-463-006-7","9-463-006-7"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Ex-462-003. Colores Renfe Operadora. Asturias desde 10/02/08."],ramaComposicion:'9-463-006-7 + 6-463-006-7 + 9-463-506-6'},
'506':{branch:'6',type:'Coche motor extremo',uic:'9-463-506-6',lote:'Primer lote · CAF',constructor:'CAF',aliases:["506","463-506","9-463-506-6","9-463-006-7"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Ex-462-003. Colores Renfe Operadora. Asturias desde 10/02/08."],ramaComposicion:'9-463-006-7 + 6-463-006-7 + 9-463-506-6'},
'007':{branch:'7',type:'Coche motor extremo',uic:'9-463-007-5',lote:'Primer lote · CAF',constructor:'CAF',aliases:["007","463-007","9-463-007-5","6-463-007-5"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Colores Renfe Operadora. Testero carenado. Primer Civia fabricado en CAF-Santana."],ramaComposicion:'9-463-007-5 + 6-463-007-5 + 9-463-507-4'},
'R007':{branch:'7',type:'Remolque intermedio',uic:'6-463-007-5',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R007","463-R007","6-463-007-5","9-463-007-5"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Colores Renfe Operadora. Testero carenado. Primer Civia fabricado en CAF-Santana."],ramaComposicion:'9-463-007-5 + 6-463-007-5 + 9-463-507-4'},
'507':{branch:'7',type:'Coche motor extremo',uic:'9-463-507-4',lote:'Primer lote · CAF',constructor:'CAF',aliases:["507","463-507","9-463-507-4","9-463-007-5"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Colores Renfe Operadora. Testero carenado. Primer Civia fabricado en CAF-Santana."],ramaComposicion:'9-463-007-5 + 6-463-007-5 + 9-463-507-4'},
'008':{branch:'8',type:'Coche motor extremo',uic:'9-463-008-3',lote:'Primer lote · CAF',constructor:'CAF',aliases:["008","463-008","9-463-008-3","6-463-008-3"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["CAF-Santana. En Asturias desde 30/11/07. Vinilo 103 desde 02/16."],ramaComposicion:'9-463-008-3 + 6-463-008-3 + 9-463-508-2'},
'R008':{branch:'8',type:'Remolque intermedio',uic:'6-463-008-3',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R008","463-R008","6-463-008-3","9-463-008-3"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["CAF-Santana. En Asturias desde 30/11/07. Vinilo 103 desde 02/16."],ramaComposicion:'9-463-008-3 + 6-463-008-3 + 9-463-508-2'},
'508':{branch:'8',type:'Coche motor extremo',uic:'9-463-508-2',lote:'Primer lote · CAF',constructor:'CAF',aliases:["508","463-508","9-463-508-2","9-463-008-3"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["CAF-Santana. En Asturias desde 30/11/07. Vinilo 103 desde 02/16."],ramaComposicion:'9-463-008-3 + 6-463-008-3 + 9-463-508-2'},
'009':{branch:'9',type:'Coche motor extremo',uic:'9-463-009-1',lote:'Primer lote · CAF',constructor:'CAF',aliases:["009","463-009","9-463-009-1","6-463-009-1"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["CAF-Santana. En Asturias desde 03/01/08. Ex-Llanera. Descarrilo en Pola de Lena. Apartada en Puigverd de Lleida. Reparada y trasladada a Asturias 02/07/13. Modificado carenado Scharfenberg."],ramaComposicion:'9-463-009-1 + 6-463-009-1 + 9-463-509-0'},
'R009':{branch:'9',type:'Remolque intermedio',uic:'6-463-009-1',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R009","463-R009","6-463-009-1","9-463-009-1"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["CAF-Santana. En Asturias desde 03/01/08. Ex-Llanera. Descarrilo en Pola de Lena. Apartada en Puigverd de Lleida. Reparada y trasladada a Asturias 02/07/13. Modificado carenado Scharfenberg."],ramaComposicion:'9-463-009-1 + 6-463-009-1 + 9-463-509-0'},
'509':{branch:'9',type:'Coche motor extremo',uic:'9-463-509-0',lote:'Primer lote · CAF',constructor:'CAF',aliases:["509","463-509","9-463-509-0","9-463-009-1"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["CAF-Santana. En Asturias desde 03/01/08. Ex-Llanera. Descarrilo en Pola de Lena. Apartada en Puigverd de Lleida. Reparada y trasladada a Asturias 02/07/13. Modificado carenado Scharfenberg."],ramaComposicion:'9-463-009-1 + 6-463-009-1 + 9-463-509-0'},
'010':{branch:'10',type:'Coche motor extremo',uic:'9-463-010-9',lote:'Primer lote · CAF',constructor:'CAF',aliases:["010","463-010","9-463-010-9","6-463-010-9"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio 02/08. Colores Renfe Operadora. CAF-Santana. Descarrilo por desprendimiento en Pola de Lena en 03/13."],ramaComposicion:'9-463-010-9 + 6-463-010-9 + 9-463-510-8'},
'R010':{branch:'10',type:'Remolque intermedio',uic:'6-463-010-9',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R010","463-R010","6-463-010-9","9-463-010-9"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio 02/08. Colores Renfe Operadora. CAF-Santana. Descarrilo por desprendimiento en Pola de Lena en 03/13."],ramaComposicion:'9-463-010-9 + 6-463-010-9 + 9-463-510-8'},
'510':{branch:'10',type:'Coche motor extremo',uic:'9-463-510-8',lote:'Primer lote · CAF',constructor:'CAF',aliases:["510","463-510","9-463-510-8","9-463-010-9"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio 02/08. Colores Renfe Operadora. CAF-Santana. Descarrilo por desprendimiento en Pola de Lena en 03/13."],ramaComposicion:'9-463-010-9 + 6-463-010-9 + 9-463-510-8'},
'011':{branch:'11',type:'Coche motor extremo',uic:'9-463-011-7',lote:'Primer lote · CAF',constructor:'CAF',aliases:["011","463-011","9-463-011-7","6-463-011-7"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio desde 02/08. Descarrilo en Soto del Rey 23/01/25."],ramaComposicion:'9-463-011-7 + 6-463-011-7 + 9-463-511-6'},
'R011':{branch:'11',type:'Remolque intermedio',uic:'6-463-011-7',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R011","463-R011","6-463-011-7","9-463-011-7"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio desde 02/08. Descarrilo en Soto del Rey 23/01/25."],ramaComposicion:'9-463-011-7 + 6-463-011-7 + 9-463-511-6'},
'511':{branch:'11',type:'Coche motor extremo',uic:'9-463-511-6',lote:'Primer lote · CAF',constructor:'CAF',aliases:["511","463-511","9-463-511-6","9-463-011-7"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio desde 02/08. Descarrilo en Soto del Rey 23/01/25."],ramaComposicion:'9-463-011-7 + 6-463-011-7 + 9-463-511-6'},
'012':{branch:'12',type:'Coche motor extremo',uic:'9-463-012-5',lote:'Primer lote · CAF',constructor:'CAF',aliases:["012","463-012","9-463-012-5","6-463-012-5"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio desde 02/08."],ramaComposicion:'9-463-012-5 + 6-463-012-5 + 9-463-512-4'},
'R012':{branch:'12',type:'Remolque intermedio',uic:'6-463-012-5',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R012","463-R012","6-463-012-5","9-463-012-5"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio desde 02/08."],ramaComposicion:'9-463-012-5 + 6-463-012-5 + 9-463-512-4'},
'512':{branch:'12',type:'Coche motor extremo',uic:'9-463-512-4',lote:'Primer lote · CAF',constructor:'CAF',aliases:["512","463-512","9-463-512-4","9-463-012-5"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["En servicio desde 02/08."],ramaComposicion:'9-463-012-5 + 6-463-012-5 + 9-463-512-4'},
'013':{branch:'13',type:'Coche motor extremo',uic:'9-463-013-3',lote:'Primer lote · CAF',constructor:'CAF',aliases:["013","463-013","9-463-013-3","6-463-013-3"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Ex-Asturias desde 14/02/08. Zaragoza desde 06/08. Llanera 10/10. Llegó a tener la M en color amarillo. Descarrilo por argayo 29/12/17."],ramaComposicion:'9-463-013-3 + 6-463-013-3 + 9-463-513-2'},
'R013':{branch:'13',type:'Remolque intermedio',uic:'6-463-013-3',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R013","463-R013","6-463-013-3","9-463-013-3"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Ex-Asturias desde 14/02/08. Zaragoza desde 06/08. Llanera 10/10. Llegó a tener la M en color amarillo. Descarrilo por argayo 29/12/17."],ramaComposicion:'9-463-013-3 + 6-463-013-3 + 9-463-513-2'},
'513':{branch:'13',type:'Coche motor extremo',uic:'9-463-513-2',lote:'Primer lote · CAF',constructor:'CAF',aliases:["513","463-513","9-463-513-2","9-463-013-3"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Ex-Asturias desde 14/02/08. Zaragoza desde 06/08. Llanera 10/10. Llegó a tener la M en color amarillo. Descarrilo por argayo 29/12/17."],ramaComposicion:'9-463-013-3 + 6-463-013-3 + 9-463-513-2'},
'014':{branch:'14',type:'Coche motor extremo',uic:'9-463-014-1',lote:'Primer lote · CAF',constructor:'CAF',aliases:["014","463-014","9-463-014-1","6-463-014-1"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Entregado 03/08."],ramaComposicion:'9-463-014-1 + 6-463-014-1 + 9-463-514-0'},
'R014':{branch:'14',type:'Remolque intermedio',uic:'6-463-014-1',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R014","463-R014","6-463-014-1","9-463-014-1"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Entregado 03/08."],ramaComposicion:'9-463-014-1 + 6-463-014-1 + 9-463-514-0'},
'514':{branch:'14',type:'Coche motor extremo',uic:'9-463-514-0',lote:'Primer lote · CAF',constructor:'CAF',aliases:["514","463-514","9-463-514-0","9-463-014-1"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Entregado 03/08."],ramaComposicion:'9-463-014-1 + 6-463-014-1 + 9-463-514-0'},
'015':{branch:'15',type:'Coche motor extremo',uic:'9-463-015-8',lote:'Primer lote · CAF',constructor:'CAF',aliases:["015","463-015","9-463-015-8","6-463-015-8"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["CAF-Irún. Entregado 03/08. Asturias; Zaragoza desde 06/08; Llanera 10/10. Colisión con tronco en Serín 14/06/12. De nuevo en servicio 06/13."],ramaComposicion:'9-463-015-8 + 6-463-015-8 + 9-463-515-7'},
'R015':{branch:'15',type:'Remolque intermedio',uic:'6-463-015-8',lote:'Primer lote · CAF',constructor:'CAF',aliases:["R015","463-R015","6-463-015-8","9-463-015-8"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["CAF-Irún. Entregado 03/08. Asturias; Zaragoza desde 06/08; Llanera 10/10. Colisión con tronco en Serín 14/06/12. De nuevo en servicio 06/13."],ramaComposicion:'9-463-015-8 + 6-463-015-8 + 9-463-515-7'},
'515':{branch:'15',type:'Coche motor extremo',uic:'9-463-515-7',lote:'Primer lote · CAF',constructor:'CAF',aliases:["515","463-515","9-463-515-7","9-463-015-8"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["CAF-Irún. Entregado 03/08. Asturias; Zaragoza desde 06/08; Llanera 10/10. Colisión con tronco en Serín 14/06/12. De nuevo en servicio 06/13."],ramaComposicion:'9-463-015-8 + 6-463-015-8 + 9-463-515-7'},
'199':{branch:'199',type:'Coche motor prototipo',uic:'9-463-199-0',lote:'Prototipo CAF · 199',constructor:'CAF',aliases:["199","463-199","9-463-199-0","7-463-199-0"],deposito:'Zaragoza',red:'Zaragoza',color:'Cercanías',notes:["Ex 462-004/504 (no circuló con esa numeración) → 462-099/599 «CAF Investigación». Ampliado a 463 en 2009. Autorizada su circulación comercial 09/03/10. Ex-Zaragoza; Asturias desde 09/10; Zaragoza desde 09/21. Cedida a CAF para investigación de hidrógeno 11/21, color azul. Devuelta a Renfe Operadora; decoración Cercanías con puertas PMR rojas 09/25."],ramaComposicion:'9-463-199-0 + 7-463-199-0 + 9-463-699-9'},
'R199':{branch:'199',type:'Remolque intermedio prototipo',uic:'7-463-199-0',lote:'Prototipo CAF · 199',constructor:'CAF',aliases:["R199","463-R199","7-463-199-0","9-463-199-0"],deposito:'Zaragoza',red:'Zaragoza',color:'Cercanías',notes:["Mismo conjunto prototipo 199."],ramaComposicion:'9-463-199-0 + 7-463-199-0 + 9-463-699-9'},
'699':{branch:'199',type:'Coche motor prototipo',uic:'9-463-699-9',lote:'Prototipo CAF · 199',constructor:'CAF',aliases:["699","463-699","9-463-699-9","9-463-199-0"],deposito:'Zaragoza',red:'Zaragoza',color:'Cercanías',notes:["Mismo conjunto prototipo 199."],ramaComposicion:'9-463-199-0 + 7-463-199-0 + 9-463-699-9'},
'201':{branch:'1',type:'Coche motor extremo',uic:'9-463-201-4',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["201","463-201","9-463-201-4","6-463-201-4"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Colores Renfe Operadora. En servicio desde 01/07. Barcelona hasta 11/10; Zaragoza. Logos 75 años Renfe. Refuerzo Fallas 2017 y 2018. Pruebas en Bilbao (2018)."],ramaComposicion:'9-463-201-4 + 6-463-201-4 + 9-463-701-3'},
'R201':{branch:'1',type:'Remolque intermedio',uic:'6-463-201-4',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R201","463-R201","6-463-201-4","9-463-201-4"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Colores Renfe Operadora. En servicio desde 01/07. Barcelona hasta 11/10; Zaragoza. Logos 75 años Renfe. Refuerzo Fallas 2017 y 2018. Pruebas en Bilbao (2018)."],ramaComposicion:'9-463-201-4 + 6-463-201-4 + 9-463-701-3'},
'701':{branch:'1',type:'Coche motor extremo',uic:'9-463-701-3',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["701","463-701","9-463-701-3","9-463-201-4"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Colores Renfe Operadora. En servicio desde 01/07. Barcelona hasta 11/10; Zaragoza. Logos 75 años Renfe. Refuerzo Fallas 2017 y 2018. Pruebas en Bilbao (2018)."],ramaComposicion:'9-463-201-4 + 6-463-201-4 + 9-463-701-3'},
'202':{branch:'2',type:'Coche motor extremo',uic:'9-463-202-2',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["202","463-202","9-463-202-2","6-463-202-2"],color:'Cercanías',notes:["Colores Renfe Operadora. En servicio desde 01/07. Barcelona hasta 11/10; Zaragoza; Valencia 15/03/16–20/03/16 para refuerzos Fallas; Barcelona. Baja 12/16 para reforma a 464-230."],transformadaA:'464-230',situacionActual:'Actualmente serie 464, unidad 464-230',ramaComposicion:'9-463-202-2 + 6-463-202-2 + 9-463-702-1'},
'R202':{branch:'2',type:'Remolque intermedio',uic:'6-463-202-2',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R202","463-R202","6-463-202-2","9-463-202-2"],color:'Cercanías',notes:["Colores Renfe Operadora. En servicio desde 01/07. Barcelona hasta 11/10; Zaragoza; Valencia 15/03/16–20/03/16 para refuerzos Fallas; Barcelona. Baja 12/16 para reforma a 464-230."],transformadaA:'464-230',situacionActual:'Actualmente serie 464, unidad 464-230',ramaComposicion:'9-463-202-2 + 6-463-202-2 + 9-463-702-1'},
'702':{branch:'2',type:'Coche motor extremo',uic:'9-463-702-1',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["702","463-702","9-463-702-1","9-463-202-2"],color:'Cercanías',notes:["Colores Renfe Operadora. En servicio desde 01/07. Barcelona hasta 11/10; Zaragoza; Valencia 15/03/16–20/03/16 para refuerzos Fallas; Barcelona. Baja 12/16 para reforma a 464-230."],transformadaA:'464-230',situacionActual:'Actualmente serie 464, unidad 464-230',ramaComposicion:'9-463-202-2 + 6-463-202-2 + 9-463-702-1'},
'203':{branch:'3',type:'Coche motor extremo',uic:'9-463-203-0',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["203","463-203","9-463-203-0","7-463-203-0"],color:'Cercanías',notes:["Colores Renfe Operadora. Reforma a 464-229 entre 09 y 12/16. Ex-Cercanías Barcelona (Vilanova). Ex-Zaragoza; en Valencia desde 03/18. Baja 22/01/17 por transformación a 464-229."],transformadaA:'464-229',situacionActual:'Actualmente serie 464, unidad 464-229',ramaComposicion:'9-463-203-0 + 7-463-203-0 + 9-463-703-9'},
'R203':{branch:'3',type:'Remolque intermedio',uic:'7-463-203-0',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R203","463-R203","7-463-203-0","9-463-203-0"],color:'Cercanías',notes:["Colores Renfe Operadora. Reforma a 464-229 entre 09 y 12/16. Ex-Cercanías Barcelona (Vilanova). Ex-Zaragoza; en Valencia desde 03/18. Baja 22/01/17 por transformación a 464-229."],transformadaA:'464-229',situacionActual:'Actualmente serie 464, unidad 464-229',ramaComposicion:'9-463-203-0 + 7-463-203-0 + 9-463-703-9'},
'703':{branch:'3',type:'Coche motor extremo',uic:'9-463-703-9',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["703","463-703","9-463-703-9","9-463-203-0"],color:'Cercanías',notes:["Colores Renfe Operadora. Reforma a 464-229 entre 09 y 12/16. Ex-Cercanías Barcelona (Vilanova). Ex-Zaragoza; en Valencia desde 03/18. Baja 22/01/17 por transformación a 464-229."],transformadaA:'464-229',situacionActual:'Actualmente serie 464, unidad 464-229',ramaComposicion:'9-463-203-0 + 7-463-203-0 + 9-463-703-9'},
'204':{branch:'4',type:'Coche motor extremo',uic:'9-463-204-8',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["204","463-204","9-463-204-8","6-463-204-8"],color:'Cercanías',notes:["Colores Renfe Operadora. Ex-Valencia hasta 14/01/08; Sevilla/Cádiz hasta 10/10; Zaragoza hasta 11/10; Barcelona (Vilanova). Reforma para 464-228 desde 10/15."],transformadaA:'464-228',situacionActual:'Actualmente serie 464, unidad 464-228',ramaComposicion:'9-463-204-8 + 6-463-204-8 + 9-463-704-7'},
'R204':{branch:'4',type:'Remolque intermedio',uic:'6-463-204-8',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R204","463-R204","6-463-204-8","9-463-204-8"],color:'Cercanías',notes:["Colores Renfe Operadora. Ex-Valencia hasta 14/01/08; Sevilla/Cádiz hasta 10/10; Zaragoza hasta 11/10; Barcelona (Vilanova). Reforma para 464-228 desde 10/15."],transformadaA:'464-228',situacionActual:'Actualmente serie 464, unidad 464-228',ramaComposicion:'9-463-204-8 + 6-463-204-8 + 9-463-704-7'},
'704':{branch:'4',type:'Coche motor extremo',uic:'9-463-704-7',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["704","463-704","9-463-704-7","9-463-204-8"],color:'Cercanías',notes:["Colores Renfe Operadora. Ex-Valencia hasta 14/01/08; Sevilla/Cádiz hasta 10/10; Zaragoza hasta 11/10; Barcelona (Vilanova). Reforma para 464-228 desde 10/15."],transformadaA:'464-228',situacionActual:'Actualmente serie 464, unidad 464-228',ramaComposicion:'9-463-204-8 + 6-463-204-8 + 9-463-704-7'},
'205':{branch:'5',type:'Coche motor extremo',uic:'9-463-205-5',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["205","463-205","9-463-205-5","7-463-205-5"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Colores Renfe Operadora. Ex-Barcelona; Santander; Llanera desde 02/10; Vilanova (BCN); Llanera desde 09/21."],ramaComposicion:'9-463-205-5 + 7-463-205-5 + 9-463-705-4'},
'R205':{branch:'5',type:'Remolque intermedio',uic:'7-463-205-5',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R205","463-R205","7-463-205-5","9-463-205-5"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Colores Renfe Operadora. Ex-Barcelona; Santander; Llanera desde 02/10; Vilanova (BCN); Llanera desde 09/21."],ramaComposicion:'9-463-205-5 + 7-463-205-5 + 9-463-705-4'},
'705':{branch:'5',type:'Coche motor extremo',uic:'9-463-705-4',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["705","463-705","9-463-705-4","9-463-205-5"],deposito:'Llanera',red:'Asturias',color:'Cercanías',notes:["Colores Renfe Operadora. Ex-Barcelona; Santander; Llanera desde 02/10; Vilanova (BCN); Llanera desde 09/21."],ramaComposicion:'9-463-205-5 + 7-463-205-5 + 9-463-705-4'},
'206':{branch:'6',type:'Coche motor extremo',uic:'9-463-206-3',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["206","463-206","9-463-206-3","6-463-206-3"],color:'Cercanías',notes:["Colores Renfe Operadora. Barcelona; Santander; Sevilla; Zaragoza 06/12; Cádiz desde 09/12; Barcelona desde 04/14. Reformada a 464-226."],transformadaA:'464-226',situacionActual:'Actualmente serie 464, unidad 464-226',ramaComposicion:'9-463-206-3 + 6-463-206-3 + 9-463-706-2'},
'R206':{branch:'6',type:'Remolque intermedio',uic:'6-463-206-3',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R206","463-R206","6-463-206-3","9-463-206-3"],color:'Cercanías',notes:["Colores Renfe Operadora. Barcelona; Santander; Sevilla; Zaragoza 06/12; Cádiz desde 09/12; Barcelona desde 04/14. Reformada a 464-226."],transformadaA:'464-226',situacionActual:'Actualmente serie 464, unidad 464-226',ramaComposicion:'9-463-206-3 + 6-463-206-3 + 9-463-706-2'},
'706':{branch:'6',type:'Coche motor extremo',uic:'9-463-706-2',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["706","463-706","9-463-706-2","9-463-206-3"],color:'Cercanías',notes:["Colores Renfe Operadora. Barcelona; Santander; Sevilla; Zaragoza 06/12; Cádiz desde 09/12; Barcelona desde 04/14. Reformada a 464-226."],transformadaA:'464-226',situacionActual:'Actualmente serie 464, unidad 464-226',ramaComposicion:'9-463-206-3 + 6-463-206-3 + 9-463-706-2'},
'207':{branch:'7',type:'Coche motor extremo',uic:'9-463-207-1',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["207","463-207","9-463-207-1","6-463-207-1"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. Valencia hasta 14/01/08; Sevilla/Cádiz hasta 10/10; Zaragoza hasta 11/10; Barcelona. 1ª unidad en colores Rodalies 03/22."],ramaComposicion:'9-463-207-1 + 6-463-207-1 + 9-463-707-0'},
'R207':{branch:'7',type:'Remolque intermedio',uic:'6-463-207-1',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R207","463-R207","6-463-207-1","9-463-207-1"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. Valencia hasta 14/01/08; Sevilla/Cádiz hasta 10/10; Zaragoza hasta 11/10; Barcelona. 1ª unidad en colores Rodalies 03/22."],ramaComposicion:'9-463-207-1 + 6-463-207-1 + 9-463-707-0'},
'707':{branch:'7',type:'Coche motor extremo',uic:'9-463-707-0',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["707","463-707","9-463-707-0","9-463-207-1"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. Valencia hasta 14/01/08; Sevilla/Cádiz hasta 10/10; Zaragoza hasta 11/10; Barcelona. 1ª unidad en colores Rodalies 03/22."],ramaComposicion:'9-463-207-1 + 6-463-207-1 + 9-463-707-0'},
'208':{branch:'8',type:'Coche motor extremo',uic:'9-463-208-1',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["208","463-208","9-463-208-1","7-463-208-9"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. 2ª unidad en colores Rodalies 07/22."],ramaComposicion:'9-463-208-1 + 7-463-208-9 + 9-463-708-8'},
'R208':{branch:'8',type:'Remolque intermedio',uic:'7-463-208-9',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R208","463-R208","7-463-208-9","9-463-208-1"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. 2ª unidad en colores Rodalies 07/22."],ramaComposicion:'9-463-208-1 + 7-463-208-9 + 9-463-708-8'},
'708':{branch:'8',type:'Coche motor extremo',uic:'9-463-708-8',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["708","463-708","9-463-708-8","9-463-208-1"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. 2ª unidad en colores Rodalies 07/22."],ramaComposicion:'9-463-208-1 + 7-463-208-9 + 9-463-708-8'},
'209':{branch:'9',type:'Coche motor extremo',uic:'9-463-209-7',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["209","463-209","9-463-209-7","7-463-209-7"],color:'Cercanías',notes:["Entra en servicio 09/07. Ex-Cercanías Barcelona. Reformada a 464-231 desde 06/18."],transformadaA:'464-231',situacionActual:'Actualmente serie 464, unidad 464-231',ramaComposicion:'9-463-209-7 + 7-463-209-7 + 9-463-709-6'},
'R209':{branch:'9',type:'Remolque intermedio',uic:'7-463-209-7',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R209","463-R209","7-463-209-7","9-463-209-7"],color:'Cercanías',notes:["Entra en servicio 09/07. Ex-Cercanías Barcelona. Reformada a 464-231 desde 06/18."],transformadaA:'464-231',situacionActual:'Actualmente serie 464, unidad 464-231',ramaComposicion:'9-463-209-7 + 7-463-209-7 + 9-463-709-6'},
'709':{branch:'9',type:'Coche motor extremo',uic:'9-463-709-6',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["709","463-709","9-463-709-6","9-463-209-7"],color:'Cercanías',notes:["Entra en servicio 09/07. Ex-Cercanías Barcelona. Reformada a 464-231 desde 06/18."],transformadaA:'464-231',situacionActual:'Actualmente serie 464, unidad 464-231',ramaComposicion:'9-463-209-7 + 7-463-209-7 + 9-463-709-6'},
'210':{branch:'10',type:'Coche motor extremo',uic:'9-463-210-5',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["210","463-210","9-463-210-5","6-463-210-5"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. Ex-Barcelona; Sevilla 02/11; Barcelona."],ramaComposicion:'9-463-210-5 + 6-463-210-5 + 9-463-710-4'},
'R210':{branch:'10',type:'Remolque intermedio',uic:'6-463-210-5',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R210","463-R210","6-463-210-5","9-463-210-5"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. Ex-Barcelona; Sevilla 02/11; Barcelona."],ramaComposicion:'9-463-210-5 + 6-463-210-5 + 9-463-710-4'},
'710':{branch:'10',type:'Coche motor extremo',uic:'9-463-710-4',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["710","463-710","9-463-710-4","9-463-210-5"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. Ex-Barcelona; Sevilla 02/11; Barcelona."],ramaComposicion:'9-463-210-5 + 6-463-210-5 + 9-463-710-4'},
'211':{branch:'11',type:'Coche motor extremo',uic:'9-463-211-3',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["211","463-211","9-463-211-3","7-463-211-3"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. Entregado 10/07. Colores Rodalies 2022. Vinilos Turisme Barcelona 04/23."],ramaComposicion:'9-463-211-3 + 7-463-211-3 + 9-463-711-2'},
'R211':{branch:'11',type:'Remolque intermedio',uic:'7-463-211-3',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R211","463-R211","7-463-211-3","9-463-211-3"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. Entregado 10/07. Colores Rodalies 2022. Vinilos Turisme Barcelona 04/23."],ramaComposicion:'9-463-211-3 + 7-463-211-3 + 9-463-711-2'},
'711':{branch:'11',type:'Coche motor extremo',uic:'9-463-711-2',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["711","463-711","9-463-711-2","9-463-211-3"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. Entregado 10/07. Colores Rodalies 2022. Vinilos Turisme Barcelona 04/23."],ramaComposicion:'9-463-211-3 + 7-463-211-3 + 9-463-711-2'},
'212':{branch:'12',type:'Coche motor extremo',uic:'9-463-212-1',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["212","463-212","9-463-212-1","7-463-212-1"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. Colores Rodalies desde 02/23."],ramaComposicion:'9-463-212-1 + 7-463-212-1 + 9-463-712-0'},
'R212':{branch:'12',type:'Remolque intermedio',uic:'7-463-212-1',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R212","463-R212","7-463-212-1","9-463-212-1"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. Colores Rodalies desde 02/23."],ramaComposicion:'9-463-212-1 + 7-463-212-1 + 9-463-712-0'},
'712':{branch:'12',type:'Coche motor extremo',uic:'9-463-712-0',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["712","463-712","9-463-712-0","9-463-212-1"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. Colores Rodalies desde 02/23."],ramaComposicion:'9-463-212-1 + 7-463-212-1 + 9-463-712-0'},
'213':{branch:'13',type:'Coche motor extremo',uic:'9-463-213-9',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["213","463-213","9-463-213-9","7-463-213-9"],deposito:'Zaragoza',red:'Zaragoza',color:'Rojo/Blanco',notes:["Colores Renfe Operadora. En pruebas 11/07. Colores Rodalies desde 28/09/23. Asturias 10/10/23; vinilado colores Cercanías 13/10/23; Zaragoza 06/24. Pruebas en Bilbao al trasladarse a Zaragoza 06/24."],ramaComposicion:'9-463-213-9 + 7-463-213-9 + 9-463-713-8'},
'R213':{branch:'13',type:'Remolque intermedio',uic:'7-463-213-9',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R213","463-R213","7-463-213-9","9-463-213-9"],deposito:'Zaragoza',red:'Zaragoza',color:'Rojo/Blanco',notes:["Colores Renfe Operadora. En pruebas 11/07. Colores Rodalies desde 28/09/23. Asturias 10/10/23; vinilado colores Cercanías 13/10/23; Zaragoza 06/24. Pruebas en Bilbao al trasladarse a Zaragoza 06/24."],ramaComposicion:'9-463-213-9 + 7-463-213-9 + 9-463-713-8'},
'713':{branch:'13',type:'Coche motor extremo',uic:'9-463-713-8',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["713","463-713","9-463-713-8","9-463-213-9"],deposito:'Zaragoza',red:'Zaragoza',color:'Rojo/Blanco',notes:["Colores Renfe Operadora. En pruebas 11/07. Colores Rodalies desde 28/09/23. Asturias 10/10/23; vinilado colores Cercanías 13/10/23; Zaragoza 06/24. Pruebas en Bilbao al trasladarse a Zaragoza 06/24."],ramaComposicion:'9-463-213-9 + 7-463-213-9 + 9-463-713-8'},
'214':{branch:'14',type:'Coche motor extremo',uic:'9-463-214-7',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["214","463-214","9-463-214-7","7-463-214-7"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. En pruebas 11/07. Colores Rodalies 02/24."],ramaComposicion:'9-463-214-7 + 7-463-214-7 + 9-463-714-6'},
'R214':{branch:'14',type:'Remolque intermedio',uic:'7-463-214-7',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R214","463-R214","7-463-214-7","9-463-214-7"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. En pruebas 11/07. Colores Rodalies 02/24."],ramaComposicion:'9-463-214-7 + 7-463-214-7 + 9-463-714-6'},
'714':{branch:'14',type:'Coche motor extremo',uic:'9-463-714-6',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["714","463-714","9-463-714-6","9-463-214-7"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. En pruebas 11/07. Colores Rodalies 02/24."],ramaComposicion:'9-463-214-7 + 7-463-214-7 + 9-463-714-6'},
'215':{branch:'15',type:'Coche motor extremo',uic:'9-463-215-4',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["215","463-215","9-463-215-4","6-463-215-4"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. En pruebas 12/07. Ex-Sevilla; Vilanova. Colores Rodalies 01/24."],ramaComposicion:'9-463-215-4 + 6-463-215-4 + 9-463-715-3'},
'R215':{branch:'15',type:'Remolque intermedio',uic:'6-463-215-4',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R215","463-R215","6-463-215-4","9-463-215-4"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. En pruebas 12/07. Ex-Sevilla; Vilanova. Colores Rodalies 01/24."],ramaComposicion:'9-463-215-4 + 6-463-215-4 + 9-463-715-3'},
'715':{branch:'15',type:'Coche motor extremo',uic:'9-463-715-3',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["715","463-715","9-463-715-3","9-463-215-4"],deposito:'Vilanova',red:'Barcelona',color:'Blanco/Naranja',notes:["Colores Renfe Operadora. En pruebas 12/07. Ex-Sevilla; Vilanova. Colores Rodalies 01/24."],ramaComposicion:'9-463-215-4 + 6-463-215-4 + 9-463-715-3'},
'216':{branch:'16',type:'Coche motor extremo',uic:'9-463-216-2',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["216","463-216","9-463-216-2","6-463-216-2"],color:'Cercanías',notes:["Entregado 13/02/08. En servicio Sevilla. Transformado a 465-267 desde 27/11/11."],transformadaA:'465-267',situacionActual:'Actualmente serie 465, unidad 465-267',ramaComposicion:'9-463-216-2 + 6-463-216-2 + 9-463-716-1'},
'R216':{branch:'16',type:'Remolque intermedio',uic:'6-463-216-2',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R216","463-R216","6-463-216-2","9-463-216-2"],color:'Cercanías',notes:["Entregado 13/02/08. En servicio Sevilla. Transformado a 465-267 desde 27/11/11."],transformadaA:'465-267',situacionActual:'Actualmente serie 465, unidad 465-267',ramaComposicion:'9-463-216-2 + 6-463-216-2 + 9-463-716-1'},
'716':{branch:'16',type:'Coche motor extremo',uic:'9-463-716-1',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["716","463-716","9-463-716-1","9-463-216-2"],color:'Cercanías',notes:["Entregado 13/02/08. En servicio Sevilla. Transformado a 465-267 desde 27/11/11."],transformadaA:'465-267',situacionActual:'Actualmente serie 465, unidad 465-267',ramaComposicion:'9-463-216-2 + 6-463-216-2 + 9-463-716-1'},
'217':{branch:'17',type:'Coche motor extremo',uic:'9-463-217-0',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["217","463-217","9-463-217-0","6-463-217-0"],color:'Cercanías',notes:["Colores Renfe Operadora. Ex-Cádiz. Reformado a 464-227 en Vilanova 02/16."],transformadaA:'464-227',situacionActual:'Actualmente serie 464, unidad 464-227',ramaComposicion:'9-463-217-0 + 6-463-217-0 + 9-463-717-9'},
'R217':{branch:'17',type:'Remolque intermedio',uic:'6-463-217-0',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R217","463-R217","6-463-217-0","9-463-217-0"],color:'Cercanías',notes:["Colores Renfe Operadora. Ex-Cádiz. Reformado a 464-227 en Vilanova 02/16."],transformadaA:'464-227',situacionActual:'Actualmente serie 464, unidad 464-227',ramaComposicion:'9-463-217-0 + 6-463-217-0 + 9-463-717-9'},
'717':{branch:'17',type:'Coche motor extremo',uic:'9-463-717-9',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["717","463-717","9-463-717-9","9-463-217-0"],color:'Cercanías',notes:["Colores Renfe Operadora. Ex-Cádiz. Reformado a 464-227 en Vilanova 02/16."],transformadaA:'464-227',situacionActual:'Actualmente serie 464, unidad 464-227',ramaComposicion:'9-463-217-0 + 6-463-217-0 + 9-463-717-9'},
'218':{branch:'18',type:'Coche motor extremo',uic:'9-463-218-8',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["218","463-218","9-463-218-8","6-463-218-8"],deposito:'Zaragoza',red:'Zaragoza',color:'Cercanías',notes:["Colores Renfe Operadora. Jerez de la Frontera (Sevilla/Cádiz); Zaragoza. Refuerzo Fallas 2017 y 2018; Llanera 12/18; Zaragoza 04/24. Accidente en Cortes de Navarra 22/05/25."],ramaComposicion:'9-463-218-8 + 6-463-218-8 + 9-463-718-7'},
'R218':{branch:'18',type:'Remolque intermedio',uic:'6-463-218-8',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R218","463-R218","6-463-218-8","9-463-218-8"],deposito:'Zaragoza',red:'Zaragoza',color:'Cercanías',notes:["Colores Renfe Operadora. Jerez de la Frontera (Sevilla/Cádiz); Zaragoza. Refuerzo Fallas 2017 y 2018; Llanera 12/18; Zaragoza 04/24. Accidente en Cortes de Navarra 22/05/25."],ramaComposicion:'9-463-218-8 + 6-463-218-8 + 9-463-718-7'},
'718':{branch:'18',type:'Coche motor extremo',uic:'9-463-718-7',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["718","463-718","9-463-718-7","9-463-218-8"],deposito:'Zaragoza',red:'Zaragoza',color:'Cercanías',notes:["Colores Renfe Operadora. Jerez de la Frontera (Sevilla/Cádiz); Zaragoza. Refuerzo Fallas 2017 y 2018; Llanera 12/18; Zaragoza 04/24. Accidente en Cortes de Navarra 22/05/25."],ramaComposicion:'9-463-218-8 + 6-463-218-8 + 9-463-718-7'},
'219':{branch:'19',type:'Coche motor extremo',uic:'9-463-219-6',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["219","463-219","9-463-219-6","6-463-219-6"],color:'Cercanías',notes:["Jerez de la Frontera (Sevilla/Cádiz); 03/13 Barcelona. Reformada a 464-225."],transformadaA:'464-225',situacionActual:'Actualmente serie 464, unidad 464-225',ramaComposicion:'9-463-219-6 + 6-463-219-6 + 9-463-719-5'},
'R219':{branch:'19',type:'Remolque intermedio',uic:'6-463-219-6',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R219","463-R219","6-463-219-6","9-463-219-6"],color:'Cercanías',notes:["Jerez de la Frontera (Sevilla/Cádiz); 03/13 Barcelona. Reformada a 464-225."],transformadaA:'464-225',situacionActual:'Actualmente serie 464, unidad 464-225',ramaComposicion:'9-463-219-6 + 6-463-219-6 + 9-463-719-5'},
'719':{branch:'19',type:'Coche motor extremo',uic:'9-463-719-5',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["719","463-719","9-463-719-5","9-463-219-6"],color:'Cercanías',notes:["Jerez de la Frontera (Sevilla/Cádiz); 03/13 Barcelona. Reformada a 464-225."],transformadaA:'464-225',situacionActual:'Actualmente serie 464, unidad 464-225',ramaComposicion:'9-463-219-6 + 6-463-219-6 + 9-463-719-5'},
'220':{branch:'20',type:'Coche motor extremo',uic:'9-463-220-4',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["220","463-220","9-463-220-4","6-463-220-4"],color:'Cercanías',notes:["Ex-Sevilla; Barcelona. Circuló con 4 coches por Barcelona 03/13. Renumerado a 464-224."],transformadaA:'464-224',situacionActual:'Actualmente serie 464, unidad 464-224',ramaComposicion:'9-463-220-4 + 6-463-220-4 + 9-463-720-3'},
'R220':{branch:'20',type:'Remolque intermedio',uic:'6-463-220-4',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["R220","463-R220","6-463-220-4","9-463-220-4"],color:'Cercanías',notes:["Ex-Sevilla; Barcelona. Circuló con 4 coches por Barcelona 03/13. Renumerado a 464-224."],transformadaA:'464-224',situacionActual:'Actualmente serie 464, unidad 464-224',ramaComposicion:'9-463-220-4 + 6-463-220-4 + 9-463-720-3'},
'720':{branch:'20',type:'Coche motor extremo',uic:'9-463-720-3',lote:'Segundo lote · Alstom',constructor:'Alstom',aliases:["720","463-720","9-463-720-3","9-463-220-4"],color:'Cercanías',notes:["Ex-Sevilla; Barcelona. Circuló con 4 coches por Barcelona 03/13. Renumerado a 464-224."],transformadaA:'464-224',situacionActual:'Actualmente serie 464, unidad 464-224',ramaComposicion:'9-463-220-4 + 6-463-220-4 + 9-463-720-3'}
}},
'464':{label:'Civia S-464',vehicles:{}},
'465':{label:'Civia S-465',vehicles:{}},
'102':{
label:'AVE S-102',
vehicles:{
'001':{branch:'1',type:'motor',uic:'9-102-001-5',renfe_number:'102-001',side:'motor impar'},
'002':{branch:'1',type:'motor',uic:'9-102-002-3',renfe_number:'102-002',side:'motor par'},
'003':{branch:'2',type:'motor',uic:'9-102-003-1',renfe_number:'102-003',side:'motor impar'},
'004':{branch:'2',type:'motor',uic:'9-102-004-9',renfe_number:'102-004',side:'motor par'},
'005':{branch:'3',type:'motor',uic:'9-102-005-6',renfe_number:'102-005',side:'motor impar'},
'006':{branch:'3',type:'motor',uic:'9-102-006-4',renfe_number:'102-006',side:'motor par'},
'007':{branch:'4',type:'motor',uic:'9-102-007-2',renfe_number:'102-007',side:'motor impar'},
'008':{branch:'4',type:'motor',uic:'9-102-008-0',renfe_number:'102-008',side:'motor par'},
'009':{branch:'5',type:'motor',uic:'9-102-009-8',renfe_number:'102-009',side:'motor impar'},
'010':{branch:'5',type:'motor',uic:'9-102-010-6',renfe_number:'102-010',side:'motor par'},
'011':{branch:'6',type:'motor',uic:'9-102-011-4',renfe_number:'102-011',side:'motor impar'},
'012':{branch:'6',type:'motor',uic:'9-102-012-2',renfe_number:'102-012',side:'motor par'},
'013':{branch:'7',type:'motor',uic:'9-102-013-0',renfe_number:'102-013',side:'motor impar'},
'014':{branch:'7',type:'motor',uic:'9-102-014-8',renfe_number:'102-014',side:'motor par'},
'015':{branch:'8',type:'motor',uic:'9-102-015-5',renfe_number:'102-015',side:'motor impar'},
'016':{branch:'8',type:'motor',uic:'9-102-016-3',renfe_number:'102-016',side:'motor par'},
'017':{branch:'9',type:'motor',uic:'9-102-017-1',renfe_number:'102-017',side:'motor impar'},
'018':{branch:'9',type:'motor',uic:'9-102-018-9',renfe_number:'102-018',side:'motor par'},
'019':{branch:'10',type:'motor',uic:'9-102-019-7',renfe_number:'102-019',side:'motor impar'},
'020':{branch:'10',type:'motor',uic:'9-102-020-5',renfe_number:'102-020',side:'motor par'},
'021':{branch:'11',type:'motor',uic:'9-102-021-3',renfe_number:'102-021',side:'motor impar'},
'022':{branch:'11',type:'motor',uic:'9-102-022-1',renfe_number:'102-022',side:'motor par'},
'023':{branch:'12',type:'motor',uic:'9-102-023-9',renfe_number:'102-023',side:'motor impar'},
'024':{branch:'12',type:'motor',uic:'9-102-024-7',renfe_number:'102-024',side:'motor par'},
'025':{branch:'13',type:'motor',uic:'9-102-025-4',renfe_number:'102-025',side:'motor impar'},
'026':{branch:'13',type:'motor',uic:'9-102-026-2',renfe_number:'102-026',side:'motor par'},
'027':{branch:'14',type:'motor',uic:'9-102-027-0',renfe_number:'102-027',side:'motor impar'},
'028':{branch:'14',type:'motor',uic:'9-102-028-8',renfe_number:'102-028',side:'motor par'},
'029':{branch:'15',type:'motor',uic:'9-102-029-6',renfe_number:'102-029',side:'motor impar'},
'030':{branch:'15',type:'motor',uic:'9-102-030-4',renfe_number:'102-030',side:'motor par'},
'031':{branch:'16',type:'motor',uic:'9-102-031-2',renfe_number:'102-031',side:'motor impar'},
'032':{branch:'16',type:'motor',uic:'9-102-032-0',renfe_number:'102-032',side:'motor par'}
}
}
};

/*
  Base completa externa.
  ARGOS intenta primero /data/material.json (la carpeta que has
  añadido al repositorio) y mantiene esta pequeña base como respaldo.
*/
async function loadMaterialData(){
  const urls=[
    './material.json?v=2.0',
    './data/material.json?v=2.0',
    './material/material.json?v=2.0',
    './material_rico.json?v=2.0',
    './data/material_rico.json?v=2.0'
  ];

  function mergePlain(base,incoming){
    const out={...(base||{})};
    for(const [key,value] of Object.entries(incoming||{})){
      if(value===null||value===undefined)continue;
      if(
        value &&
        typeof value==='object' &&
        !Array.isArray(value) &&
        out[key] &&
        typeof out[key]==='object' &&
        !Array.isArray(out[key])
      ){
        out[key]=mergePlain(out[key],value);
      }else{
        out[key]=value;
      }
    }
    return out;
  }

  for(const url of urls){
    try{
      const response=await fetch(url,{cache:'no-store'});
      if(!response.ok)continue;

      const raw=await response.json();
      const normalized=normalizeMaterialData(raw);

      if(normalized&&Object.keys(normalized).length){
        const merged=JSON.parse(JSON.stringify(ARGOS_MATERIAL_DATA||{}));

        for(const [seriesKey,seriesData] of Object.entries(normalized)){
          const current=merged[seriesKey]||{};
          merged[seriesKey]=mergePlain(current,seriesData);

          merged[seriesKey].label=
            seriesData.label ||
            current.label ||
            merged[seriesKey].name ||
            `Serie ${seriesKey}`;

          merged[seriesKey].vehicles={
            ...(current.vehicles||{}),
            ...(seriesData.vehicles||{})
          };
        }

        ARGOS_MATERIAL_DATA=merged;

        console.info(
          'ARGOS: base de material cargada desde',
          url,
          '· series externas:',
          Object.keys(normalized).length,
          '· series finales:',
          Object.keys(merged).length,
          '· vehículos finales:',
          Object.values(merged).reduce(
            (total,item)=>total+Object.keys(item?.vehicles||{}).length,
            0
          )
        );

        return true;
      }
    }catch(error){
      console.warn('ARGOS: no se pudo cargar',url,error);
    }
  }

  console.warn('ARGOS: se utilizará la base local de respaldo.');
  return false;
}

function normalizeMaterialData(raw){
  if(!raw)return null;

  let source=raw;

  if(raw.series&&typeof raw.series==='object'){
    source=raw.series;
  }

  const result={};

  const addSeries=(seriesValue,seriesData)=>{
    if(!seriesData||typeof seriesData!=='object')return;

    const series=String(
      seriesData.series ??
      seriesData.serie ??
      seriesValue ??
      ''
    ).replace(/\D/g,'').slice(0,3);

    if(!series)return;

    const current=result[series]||{};

    const base={
      ...current,
      ...seriesData,
      label:
        seriesData.label ??
        seriesData.name ??
        current.label ??
        `Serie ${series}`
    };

    const vehiclesSource=
      seriesData.vehicles ??
      seriesData.vehiculos ??
      seriesData.materials ??
      seriesData.materiales ??
      {};

    const vehicles={...(current.vehicles||{})};

    const putVehicle=(vehicleKey,item)=>{
      if(!item||typeof item!=='object')return;

      const vehicle=String(
        item.vehicle ??
        item.vehiculo ??
        item.numero ??
        item.number ??
        item.material ??
        item.matricula ??
        vehicleKey ??
        ''
      ).replace(/\D/g,'').padStart(3,'0');

      if(!vehicle)return;

      const branch=String(
        item.branch ??
        item.rama ??
        item.ramaNo ??
        item.rama_numero ??
        ''
      ).replace(/\D/g,'');

      vehicles[vehicle]={
        ...item,
        branch,
        type:item.type ?? item.tipo ?? ''
      };
    };

    if(Array.isArray(vehiclesSource)){
      vehiclesSource.forEach((item,index)=>putVehicle(index,item));
    }else if(vehiclesSource&&typeof vehiclesSource==='object'){
      Object.entries(vehiclesSource).forEach(([key,item])=>{
        putVehicle(key,item);
      });
    }

    base.vehicles=vehicles;
    result[series]=base;
  };

  if(Array.isArray(source)){
    source.forEach((item,index)=>{
      if(item&&typeof item==='object'){
        addSeries(
          item.series ??
          item.serie ??
          item.serieUic ??
          index,
          {
            ...item,
            vehicles:[item]
          }
        );
      }
    });
  }else if(source&&typeof source==='object'){
    Object.entries(source).forEach(([seriesKey,seriesData])=>{
      addSeries(seriesKey,seriesData);
    });
  }

  return Object.keys(result).length?result:null;
}

function materialSearchText(value){
return String(value||'')
.normalize('NFD')
.replace(/[\u0300-\u036f]/g,'')
.toUpperCase()
.replace(/[^A-Z0-9]+/g,' ')
.trim();
}

function getMaterialEntries(){
return Object.entries(ARGOS_MATERIAL_DATA)
.map(([series,data])=>({series,label:data.label}));
}

function findMaterialByInput(value){
const q=materialSearchText(value);
if(!q)return null;

return getMaterialEntries().find(e=>
materialSearchText(e.series)===q ||
materialSearchText(e.label)===q
)||null;
}

function lookupMaterialVehicle(series,vehicle){
const data=ARGOS_MATERIAL_DATA[series];
if(!data)return null;

const q=String(vehicle||'')
.replace(/\D/g,'')
.padStart(3,'0');

let found=data.vehicles[q];
let resolvedVehicle=q;

if(!found){
for(const [key,item] of Object.entries(data.vehicles||{})){
const aliases=Array.isArray(item?.aliases) ? item.aliases.map(v=>String(v).replace(/\D/g,'').padStart(3,'0')) : [];
if(aliases.includes(q)){
found=item;
resolvedVehicle=key;
break;
}
}
}

return found ? {
series,
vehicle:resolvedVehicle,
inputVehicle:q,
...found
}:null;
}

function renderMaterialSuggestions(){
const input=document.getElementById('series');
const box=document.getElementById('seriesSuggestions');

if(!input||!box)return;

const q=materialSearchText(input.value);

if(!q){
box.classList.remove('show');
box.innerHTML='';
return;
}

const matches=getMaterialEntries().filter(e=>
materialSearchText(e.series).includes(q) ||
materialSearchText(e.label).includes(q)
);

if(!matches.length){
box.classList.remove('show');
box.innerHTML='';
return;
}

box.innerHTML=matches.map((e,i)=>`
<button type="button"
class="material-option"
data-index="${i}">
<span class="material-option-name">${escapeHtml(e.label)}</span>
<span class="material-option-code">${escapeHtml(e.series)}</span>
</button>
`).join('');

box.classList.add('show');

box.querySelectorAll('.material-option').forEach((button,index)=>{
button.addEventListener('mousedown',event=>{
event.preventDefault();
selectMaterialSeries(matches[index].series);
});
});
}

function renderBranchInfo(){
const series=findMaterialByInput(
document.getElementById('series')?.value
);

const vehicle=document.getElementById('branchVehicle')?.value;
const branch=document.getElementById('branch');
const info=document.getElementById('branchInfo');

if(!branch||!info)return;

branch.value='';
info.classList.remove('is-found');

if(!series){
info.innerHTML=`
<strong>Rama</strong><br>
<span class="muted">Introduce primero la serie.</span>
`;
return;
}

if(!vehicle){
info.innerHTML=`
<strong>${escapeHtml(series.label)}</strong><br>
<span class="muted">Introduce el número del vehículo para determinar la rama.</span>
`;
return;
}

const found=lookupMaterialVehicle(series.series,vehicle);

if(!found){
info.innerHTML=`
<strong>Vehículo no encontrado</strong><br>
<span class="muted">
No existe ${escapeHtml(String(vehicle).padStart(3,'0'))} en la base de datos de ${escapeHtml(series.label)}.
</span>
`;
return;
}

branch.value=found.branch || '';
info.classList.add('is-found');

const typeLabels={
motor:'Motor',
cabina:'Remolque con cabina',
intermedio:'Remolque intermedio',
remolque:'Remolque'
};

info.innerHTML=`
<strong>${found.branch ? `Rama ${escapeHtml(found.branch)}` : 'Vehículo identificado'}</strong><br>
<span class="muted">
${escapeHtml(series.label)} · vehículo ${escapeHtml(found.vehicle)}
${found.inputVehicle && found.inputVehicle!==found.vehicle ? ` · entrada ${escapeHtml(found.inputVehicle)}` : ''}
${found.type ? ' · '+escapeHtml(typeLabels[found.type]||found.type) : ''}
</span>
`;
}

function selectMaterialSeries(series){
const input=document.getElementById('series');

if(!input)return;

input.value=series;

document.getElementById('seriesSuggestions')
?.classList.remove('show');

renderBranchInfo();
updateCounters();
}

function initMaterialSelector(){
const series=document.getElementById('series');
const vehicle=document.getElementById('branchVehicle');

if(series){
series.addEventListener('input',()=>{
renderMaterialSuggestions();
renderBranchInfo();
});

series.addEventListener('focus',renderMaterialSuggestions);

series.addEventListener('blur',()=>{
setTimeout(()=>{
document.getElementById('seriesSuggestions')
?.classList.remove('show');
},180);
});
}

if(vehicle){
vehicle.addEventListener('input',()=>{
renderBranchInfo();
updateCounters();
});

vehicle.addEventListener('change',()=>{
renderBranchInfo();
updateCounters();
});
}
}

/* =========================================================
   ESTACIONES RENFE · AUTOCOMPLETADO
========================================================= */

const RENFE_STATIONS_API=
'https://data.renfe.com/es/api/3/action/datastore_search';

const RENFE_STATIONS_RESOURCE=
'783e0626-6fa8-4ac7-a880-fa53144654ff';

const RENFE_STATIONS_CACHE_KEY=
'argos_renfe_stations_v6';

const RENFE_STATIONS_CACHE_TTL=
7*24*60*60*1000;

/*
FUENTE DE RESPALDO
Copia normalizada del listado completo de estaciones Renfe.
Se utiliza como respaldo cuando el recurso oficial de Renfe está
incompleto, no responde o devuelve un catálogo antiguo.
*/
const RENFE_FALLBACK_CSV_URL=
'https://gist.githubusercontent.com/Codelaby/f4ba468d63cd7037b038006727b37fbf/raw/listado-estaciones-completo-normalizado.csv';

/*
Estaciones que deben estar disponibles siempre en ARGOS.
Códigos contrastados con Renfe/Adif.
*/
const ARGOS_CRITICAL_STATIONS=[
{code:'17001',name:'FUENCARRAL',population:'MADRID'},
{code:'17005',name:'COLMENAR VIEJO',population:'COLMENAR VIEJO'},
{code:'35010',name:'LA SERNA-FUENLABRADA',population:'FUENLABRADA'},
{code:'35001',name:'LEGANÉS',population:'LEGANÉS'},
{code:'35002',name:'FUENLABRADA',population:'FUENLABRADA'},
{code:'35009',name:'ZARZAQUEMADA',population:'LEGANÉS'},
{code:'35011',name:'PARQUE POLVORANCA',population:'LEGANÉS'},
{code:'35012',name:'HUMANES',population:'HUMANES DE MADRID'},
{code:'35600',name:'ALUCHE',population:'MADRID'},
{code:'35601',name:'FANJUL',population:'MADRID'},
{code:'35602',name:'LAS ÁGUILAS',population:'MADRID'},
{code:'35603',name:'CUATRO VIENTOS',population:'MADRID'},
{code:'35604',name:'SAN JOSÉ DE VALDERAS',population:'ALCORCÓN'},
{code:'35605',name:'ALCORCÓN',population:'ALCORCÓN'},
{code:'35606',name:'MÓSTOLES',population:'MÓSTOLES'},
{code:'35607',name:'MÓSTOLES-EL SOTO',population:'MÓSTOLES'},
{code:'35608',name:'LAGUNA',population:'MADRID'},
{code:'35609',name:'EMBAJADORES',population:'MADRID'},
{code:'35610',name:'LAS RETAMAS',population:'ALCORCÓN'},
{code:'35701',name:'MÉNDEZ ÁLVARO',population:'MADRID'},
{code:'35702',name:'DOCE DE OCTUBRE',population:'MADRID'},
{code:'35703',name:'ORCASITAS',population:'MADRID'},
{code:'35704',name:'PUENTE ALCOCER',population:'MADRID'},
{code:'37001',name:'VILLAVERDE ALTO',population:'MADRID'},
{code:'37002',name:'GETAFE-CENTRO',population:'GETAFE'},
{code:'37010',name:'LAS MARGARITAS',population:'GETAFE'},
{code:'37011',name:'GETAFE-SECTOR 3',population:'GETAFE'},
{code:'37012',name:'PARLA',population:'PARLA'},
{code:'60100',name:'VILLAVERDE BAJO',population:'MADRID'},
{code:'60101',name:'SAN CRISTÓBAL INDUSTRIAL',population:'MADRID'},
{code:'60102',name:'GETAFE-INDUSTRIAL',population:'GETAFE'},
{code:'60103',name:'PINTO',population:'PINTO'},
{code:'60104',name:'VALDEMORO',population:'VALDEMORO'},
{code:'60105',name:'CIEMPOZUELOS',population:'CIEMPOZUELOS'},
{code:'60107',name:'SAN CRISTÓBAL DE LOS ÁNGELES',population:'MADRID'},
{code:'60109',name:'EL CASAR',population:'GETAFE'},
{code:'60200',name:'ARANJUEZ',population:'ARANJUEZ'},
{code:'97100',name:'PITIS',population:'MADRID'},
{code:'97200',name:'MIRASIERRA-PACO DE LUCÍA',population:'MADRID'},
{code:'97201',name:'RAMÓN Y CAJAL',population:'MADRID'},
{code:'98003',name:'FUENTE DE LA MORA',population:'MADRID'},
{code:'98304',name:'VALDEBEBAS',population:'MADRID'},
{code:'98305',name:'AEROPUERTO T-4',population:'MADRID'}
];

let renfeStations=[];
let stationCatalogReady=false;
let stationCatalogPromise=null;

/*
CATALOGO COMPLEMENTARIO ARGOS
Mantiene entradas que pueden no aparecer en el listado general de Renfe
pero que son útiles para el registro operativo.
*/
const ARGOS_SUPPLEMENTAL_STATIONS=[  {code:'51419',name:'RÍO ARILLO',population:'SAN FERNANDO'},
  {code:'51450',name:'PELAGATOS',population:'CHICLANA DE LA FRONTERA'},
  {code:'51451',name:'LA HOYA',population:'CHICLANA DE LA FRONTERA'},
  {code:'51452',name:'REYES CATÓLICOS',population:'CHICLANA DE LA FRONTERA'}
];

function mergeSupplementalStations(){
const extras=[
...ARGOS_SUPPLEMENTAL_STATIONS,
...ARGOS_CRITICAL_STATIONS
];

const existing=new Set(
renfeStations.map(s=>s.code+'|'+normalizeStationText(s.name))
);

extras.forEach(s=>{
const normalized=stationRecord(s);
if(!normalized || !normalized.code || !normalized.name)return;
const key=normalized.code+'|'+normalizeStationText(normalized.name);
if(!existing.has(key)){
renfeStations.push(normalized);
existing.add(key);
}
});

try{
localStorage.setItem(
RENFE_STATIONS_CACHE_KEY,
JSON.stringify({updated:Date.now(),stations:renfeStations})
);
}catch(e){
console.warn('No se pudo actualizar la caché complementaria:',e);
}
}

function normalizeStationText(value){
return String(value||'')
.normalize('NFD')
.replace(/[\u0300-\u036f]/g,'')
.toUpperCase()
.replace(/[^A-Z0-9]+/g,' ')
.trim();
}

function stationRecord(record){
if(!record)return null;

const code=String(
record.CODIGO ??
record.codigo ??
record.code ??
record.station_code ??
record.stop_id ??
''
).trim().replace(/\.0$/,'').padStart(5,'0');

const name=String(
record.DESCRIPCION ??
record.descripcion ??
record.name ??
record.nombre ??
record.stopName ??
record.stopname ??
record.station_name ??
record.label ??
''
).trim();

const population=String(
record.POBLACION ??
record.poblacion ??
record.population ??
''
).trim();

return {
code,
name,
population,
search:normalizeStationText(name+' '+population)
};
}

function setStationCatalog(records){
const seen=new Set();

renfeStations=records
.map(stationRecord)
.filter(s=>s.code && s.name)
.filter(s=>{
const key=s.code+'|'+normalizeStationText(s.name);
if(seen.has(key))return false;
seen.add(key);
return true;
});

stationCatalogReady=true;

try{
localStorage.setItem(
RENFE_STATIONS_CACHE_KEY,
JSON.stringify({
updated:Date.now(),
stations:renfeStations
})
);
}catch(e){
console.warn('No se pudo guardar la caché de estaciones:',e);
}
}

function loadStationsFromCache(){
try{
const raw=localStorage.getItem(RENFE_STATIONS_CACHE_KEY);
if(!raw)return false;

const cached=JSON.parse(raw);

if(!cached?.stations?.length)return false;

if(Date.now()-Number(cached.updated||0)>RENFE_STATIONS_CACHE_TTL){
return false;
}

const normalized=cached.stations
.map(stationRecord)
.filter(s=>s && s.code && s.name);

if(!normalized.length)return false;

const hasCore=normalized.some(s=>s.code==='17001') && normalized.some(s=>s.code==='17005') && normalized.some(s=>s.code==='35010');
if(!hasCore)return false;

renfeStations=normalized;
mergeSupplementalStations();
stationCatalogReady=true;
return true;
}catch(e){
console.warn('No se pudo leer la caché de estaciones:',e);
return false;
}
}

function parseRenfeFallbackCSV(text){
const lines=text.split(/\r?\n/).filter(Boolean);
if(!lines.length)return[];

const records=[];
for(let i=1;i<lines.length;i++){
const line=lines[i].trim();
if(!line)continue;

/*
El formato del respaldo es:
code;stopName;latitud;longitude;address;postalCode;city;...
*/
const parts=line.split(';');
if(parts.length<2)continue;

const code=String(parts[0]||'').trim();
const name=String(parts[1]||'').trim();

if(!code || !name)continue;

records.push({
code,
name,
population:String(parts[6]||'').trim()
});
}

return records;
}

async function loadRenfeFallback(){
const response=await fetch(RENFE_FALLBACK_CSV_URL,{
method:'GET',
cache:'no-store',
headers:{Accept:'text/csv'}
});

if(!response.ok)throw new Error('HTTP '+response.status);

const csv=await response.text();
const records=parseRenfeFallbackCSV(csv);

if(!records.length)throw new Error('El respaldo no contiene estaciones');

return records;
}

function loadRenfeStations(){
if(stationCatalogReady)return Promise.resolve(renfeStations);
if(stationCatalogPromise)return stationCatalogPromise;

stationCatalogPromise=(async()=>{
let officialRecords=[];

try{
const params=new URLSearchParams({
resource_id:RENFE_STATIONS_RESOURCE,
limit:'5000'
});

const response=await fetch(
RENFE_STATIONS_API+'?'+params.toString(),
{
method:'GET',
cache:'no-store',
headers:{Accept:'application/json'}
}
);

if(response.ok){
const payload=await response.json();

if(payload?.success && Array.isArray(payload?.result?.records)){
officialRecords=payload.result.records;
}
}
}catch(error){
console.warn('No se pudo cargar el catálogo oficial de Renfe:',error);
}

/*
No confiamos ciegamente en el recurso oficial: comprobamos que
contenga estaciones que sabemos que deben existir.
Si faltan, añadimos el respaldo completo.
*/
setStationCatalog(officialRecords);

const requiredCodes=['17001','17005','35010'];

const officialHasRequired=requiredCodes.every(code=>
renfeStations.some(s=>s.code===code)
);

if(!officialHasRequired || renfeStations.length<1200){
try{
const fallbackRecords=await loadRenfeFallback();

const byKey=new Map(
renfeStations.map(s=>[
s.code+'|'+normalizeStationText(s.name),
s
])
);

fallbackRecords
.map(stationRecord)
.filter(s=>s && s.code && s.name)
.forEach(s=>{
const key=s.code+'|'+normalizeStationText(s.name);
if(!byKey.has(key)){
renfeStations.push(s);
byKey.set(key,s);
}
});
}catch(error){
console.warn('No se pudo cargar el catálogo de respaldo:',error);
}
}

mergeSupplementalStations();

stationCatalogReady=true;

try{
localStorage.setItem(
RENFE_STATIONS_CACHE_KEY,
JSON.stringify({
updated:Date.now(),
stations:renfeStations
})
);
}catch(e){}

return renfeStations;
})();

return stationCatalogPromise.finally(()=>{
stationCatalogPromise=null;
});
}

function stationMatches(query){
const q=normalizeStationText(query);
if(!q)return[];

const numeric=/^\d+$/.test(q.replace(/\s/g,''));

return renfeStations
.map(station=>{
const code=station.code;
const name=station.search;
let score=999;

if(code===q)score=0;
else if(code.startsWith(q))score=1;
else if(name.startsWith(q))score=2;
else if(name.split(' ').some(word=>word.startsWith(q)))score=3;
else if(name.includes(q))score=4;
else if(!numeric && code.includes(q))score=5;

return {station,score};
})
.filter(x=>x.score<999)
.sort((a,b)=>a.score-b.score || a.station.name.localeCompare(b.station.name,'es'))
.slice(0,8)
.map(x=>x.station);
}

function renderStationSuggestions(inputId){
const input=document.getElementById(inputId);
if(!input)return;

const box=document.getElementById(
inputId==='origin'?'originSuggestions':'destinationSuggestions'
);
if(!box)return;

const value=input.value.trim();

if(!value){
box.classList.remove('show');
box.innerHTML='';
return;
}

if(!stationCatalogReady){
box.innerHTML='<div class="station-loading">Cargando estaciones Renfe…</div>';
box.classList.add('show');
loadRenfeStations()
.then(()=>renderStationSuggestions(inputId))
.catch(()=>{
box.innerHTML='<div class="station-loading">No se ha podido cargar el listado. Puedes escribir la estación manualmente.</div>';
box.classList.add('show');
});
return;
}

const matches=stationMatches(value);

if(!matches.length){
box.innerHTML='<div class="station-loading">No se encontraron estaciones.</div>';
box.classList.add('show');
return;
}

box.innerHTML=matches.map((station,index)=>`
<button
 type="button"
 class="station-option"
 role="option"
 data-index="${index}"
>
<span class="station-option-name">${escapeHtml(station.name || station.nombre || station.label || ('ESTACIÓN '+station.code))}</span>
<span class="station-option-code">${escapeHtml(station.code)}${station.population && normalizeStationText(station.population)!==normalizeStationText(station.name) ? ' · '+escapeHtml(station.population) : ''}</span>
</button>
`).join('');

box.classList.add('show');

box.querySelectorAll('.station-option').forEach((button,index)=>{
button.addEventListener('mousedown',event=>{
event.preventDefault();
selectStation(inputId,matches[index]);
});
});
}

function selectStation(inputId,station){
const input=document.getElementById(inputId);
const box=document.getElementById(
inputId==='origin'?'originSuggestions':'destinationSuggestions'
);

if(!input)return;

input.value=station.name;
input.dataset.stationCode=station.code;

if(box){
box.classList.remove('show');
box.innerHTML='';
}
}

function initStationAutocomplete(inputId){
const input=document.getElementById(inputId);
if(!input)return;

input.addEventListener('input',()=>{
delete input.dataset.stationCode;
renderStationSuggestions(inputId);
});

input.addEventListener('focus',()=>{
if(input.value.trim())renderStationSuggestions(inputId);
});

input.addEventListener('keydown',event=>{
if(event.key==='Escape'){
const box=document.getElementById(
inputId==='origin'?'originSuggestions':'destinationSuggestions'
);
if(box)box.classList.remove('show');
}
});
}

document.addEventListener('click',event=>{
['origin','destination'].forEach(inputId=>{
const input=document.getElementById(inputId);
const box=document.getElementById(
inputId==='origin'?'originSuggestions':'destinationSuggestions'
);
if(input && box && !input.contains(event.target) && !box.contains(event.target)){
box.classList.remove('show');
}
});
});

initStationAutocomplete('origin');
initStationAutocomplete('destination');

/* =========================================================
   GUARDAR SERVICIO
========================================================= */

async function saveService(e){

e.preventDefault();

if(!currentUser){
alert('No hay ningún usuario conectado');
return;
}

const train=document.getElementById('trainNo').value.trim();
const noNumber=document.getElementById('noNumber').checked;
const series=document.getElementById('series').value.trim();
const branchInput=document.getElementById('branch');
const date=document.getElementById('date').value;
const origin=document.getElementById('origin').value.trim();
const destination=document.getElementById('destination').value.trim();
const type=document.getElementById('type').value;
const doubleComposition=document.getElementById('double').checked;

const secondSeries=document.getElementById('series2').value.trim();
const secondBranch=document.getElementById('branch2').value.trim();
const annotations=document.getElementById('annotations').value.trim();
const incidents=[...draftIncidents];


if(!noNumber && !/^\d{1,5}$/.test(train)){
alert('Introduce un número de tren válido');
return;
}

if(!/^\d{3}$/.test(series)){
alert('La serie debe tener 3 números');
return;
}

const vehicle=document.getElementById('branchVehicle').value.trim();

if(!/^\d{1,3}$/.test(vehicle)){
alert('Introduce un número de vehículo válido');
return;
}

const materialMatch=lookupMaterialVehicle(series,vehicle);

if(!materialMatch){
alert('No se ha encontrado ese vehículo en la base de datos para la serie '+series);
return;
}

const branch=materialMatch.branch;
branchInput.value=branch;

if(!date){
alert('Selecciona una fecha');
return;
}

if(!origin || !destination){
alert('Introduce origen y destino');
return;
}

if(!type){
alert('Selecciona el tipo de servicio');
return;
}

if(doubleComposition){

if(!/^\d{3}$/.test(secondSeries)){
alert('Introduce la serie de la segunda composición');
return;
}

if(!/^\d{3}$/.test(secondBranch)){
alert('Introduce la rama de la segunda composición');
return;
}

}


/*
   Las columnas annotations e incidents ya existen en Supabase.
   Las guardamos junto al resto del servicio.
*/

const payload={

user_id:currentUser.id,

train_number:noNumber ? null : train,

no_train_number:noNumber,

series:series,

branch:branch,

service_date:date,

origin:origin,

destination:destination,

service_type:type,

double_composition:doubleComposition,

second_series:doubleComposition ? secondSeries : null,

second_branch:doubleComposition ? secondBranch : null,

annotations:annotations,

incidents:incidents

};


const firstTimeBranch=!services.some(s=>
String(s.series||'')===String(series) &&
String(s.branch||'')===String(branch)
);

const {data,error}=await db
.from('services')
.insert(payload)
.select()
.single();


if(error){

console.error('ERROR GUARDANDO SERVICIO:',error);

alert(
'No se pudo guardar el servicio:\n\n'+
error.message
);

return;

}


services.unshift(normalizeService(data));

renderAll();

resetServiceForm();

show('history');

toast('Servicio guardado correctamente');

if(firstTimeBranch){
  const ficha=argosMaterialFichaData(series,vehicle,branch);
  setTimeout(()=>argosMostrarPrimeraVezMaterial(ficha),250);
}

}


/* =========================================================
   RESET FORMULARIO
========================================================= */

function resetServiceForm(){

document.getElementById('trainNo').value='';

document.getElementById('noNumber').checked=false;

document.getElementById('series').value='';

document.getElementById('branch').value='';
document.getElementById('branchVehicle').value='';
document.getElementById('branchInfo').innerHTML=`
<strong>Rama</strong><br>
<span class="muted">Se determinará automáticamente al introducir el vehículo.</span>
`;

document.getElementById('origin').value='';

document.getElementById('destination').value='';

document.getElementById('type').value='';

document.getElementById('double').checked=false;

document.getElementById('doubleBox').style.display='none';

document.getElementById('series2').value='';

document.getElementById('branch2').value='';
document.getElementById('annotations').value='';
draftIncidents=[];
renderIncidentList();

setToday();

updateCounters();

}


/* =========================================================
   EDITAR SERVICIO
========================================================= */

function openEdit(id){

const s=services.find(x=>x.id===id);

if(!s)return;

editIncidents=Array.isArray(s.incidents)?[...s.incidents]:[];

document.getElementById('modalContent').innerHTML=`

<h2>Editar servicio</h2>

<label>Número de tren</label>

<input
id="e_train"
value="${escapeHtml(s.train)}"
${s.noNumber?'disabled':''}
>

<label class="checkbox" style="margin-top:9px">

<input
id="e_noNumber"
type="checkbox"
${s.noNumber?'checked':''}
>

Sin número de tren

</label>


<label style="margin-top:12px">
Serie
</label>

<input
id="e_series"
maxlength="3"
value="${escapeHtml(s.series)}"
>


<label style="margin-top:12px">
Rama
</label>

<input
id="e_branch"
maxlength="3"
value="${escapeHtml(s.branch)}"
>


<label style="margin-top:12px">
Fecha
</label>

<input
id="e_date"
type="date"
value="${escapeHtml(s.date)}"
>


<label style="margin-top:12px">
Origen
</label>

<input
id="e_origin"
value="${escapeHtml(s.origin)}"
>


<label style="margin-top:12px">
Destino
</label>

<input
id="e_destination"
value="${escapeHtml(s.destination)}"
>


<label style="margin-top:12px">
Tipo de servicio
</label>

<input
id="e_type"
value="${escapeHtml(s.type)}"
>


<label class="checkbox" style="margin-top:12px">

<input
id="e_double"
type="checkbox"
${s.double?'checked':''}
>

Doble composición

</label>


<div
class="composition-box"
style="margin-top:12px"
>

<label>
Serie segunda composición
</label>

<input
id="e_series2"
maxlength="3"
value="${escapeHtml(s.secondSeries)}"
>


<label style="margin-top:10px">
Rama segunda composición
</label>

<input
id="e_branch2"
maxlength="3"
value="${escapeHtml(s.secondBranch)}"
>

</div>


<div class="card" style="margin-top:10px">

<h3>Incidencias y anotaciones</h3>

<label>Anotaciones</label>
<textarea id="e_annotations" placeholder="Añade cualquier anotación…">${escapeHtml(s.annotations)}</textarea>

<label style="margin-top:10px">Incidencias</label>
<div class="row">
<input id="e_incidentInput" placeholder="Describe una incidencia…">
<button type="button" class="secondary" onclick="addEditIncident()">Añadir</button>
</div>
<div id="editIncidentList"></div>

</div>


<div class="row" style="margin-top:12px">

<button
class="secondary"
onclick="closeModal()"
>
Cancelar
</button>

<button
class="primary"
style="margin-top:0"
onclick="updateService('${id}')"
>
Guardar
</button>

</div>

`;

document.getElementById('modal').classList.add('show');
renderEditIncidents();

}


/* =========================================================
   ACTUALIZAR SERVICIO
========================================================= */

async function updateService(id){

const s=services.find(x=>x.id===id);

if(!s)return;


const noNumber=document.getElementById('e_noNumber').checked;

const train=document.getElementById('e_train').value.trim();

const series=document.getElementById('e_series').value.trim();

const branch=document.getElementById('e_branch').value.trim();

const date=document.getElementById('e_date').value;

const origin=document.getElementById('e_origin').value.trim();

const destination=document.getElementById('e_destination').value.trim();

const type=document.getElementById('e_type').value.trim();

const doubleComposition=document.getElementById('e_double').checked;

const secondSeries=document.getElementById('e_series2').value.trim();

const secondBranch=document.getElementById('e_branch2').value.trim();

const annotations=document.getElementById('e_annotations').value.trim();
const incidents=[...editIncidents];


if(!noNumber && !/^\d{1,5}$/.test(train)){
alert('Número de tren no válido');
return;
}

if(!/^\d{3}$/.test(series)){
alert('La serie debe tener 3 números');
return;
}

if(!/^\d{3}$/.test(branch)){
alert('La rama debe tener 3 números');
return;
}

if(!date){
alert('Selecciona una fecha');
return;
}

if(!origin || !destination){
alert('Origen y destino son obligatorios');
return;
}

if(!type){
alert('El tipo de servicio es obligatorio');
return;
}

if(doubleComposition){

if(!/^\d{3}$/.test(secondSeries)){
alert('Serie de segunda composición no válida');
return;
}

if(!/^\d{3}$/.test(secondBranch)){
alert('Rama de segunda composición no válida');
return;
}

}


const updateData={

train_number:noNumber ? null : train,

no_train_number:noNumber,

series:series,

branch:branch,

service_date:date,

origin:origin,

destination:destination,

service_type:type,

double_composition:doubleComposition,

second_series:doubleComposition ? secondSeries : null,

second_branch:doubleComposition ? secondBranch : null,

annotations:annotations,

incidents:incidents

};


const {data,error}=await db
.from('services')
.update(updateData)
.eq('id',id)
.eq('user_id',currentUser.id)
.select()
.single();


if(error){

console.error(error);

alert(
'No se pudo actualizar el registro:\n\n'+
error.message
);

return;

}


const index=services.findIndex(x=>x.id===id);

if(index!==-1){

services[index]=normalizeService(data);

}


closeModal();

await loadServices();

renderAll();

toast('Registro actualizado');

}


/* =========================================================
   BORRAR SERVICIO
========================================================= */

async function deleteService(id){

if(!confirm('¿Borrar este registro?'))return;


const {error}=await db
.from('services')
.delete()
.eq('id',id)
.eq('user_id',currentUser.id);


if(error){

alert(error.message);

return;

}


services=services.filter(x=>x.id!==id);

renderAll();

toast('Registro borrado');

}


/* =========================================================
   HISTORIAL
========================================================= */

function myServices(){

return services;

}


function updateTypeFilter(all){

const sel=document.getElementById('filterType');

if(!sel)return;

const current=sel.value;

const types=[
...new Set(
all
.map(s=>s.type)
.filter(Boolean)
)
].sort(
(a,b)=>a.localeCompare(b,'es')
);


sel.innerHTML=
'<option value="">Todos los tipos</option>'+
types
.map(
t=>
`<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`
)
.join('');


if(types.includes(current)){

sel.value=current;

}

}


function renderHistory(){

const all=myServices();

updateTypeFilter(all);

const q=(
document.getElementById('search')?.value||''
).toLowerCase().trim();

const t=
document.getElementById('filterType')?.value||'';

const arr=all.filter(s=>{

if(t && s.type!==t)return false;

if(!q)return true;

const text=(
(s.train||'')+' '+
(s.series||'')+' '+
(s.branch||'')+' '+
(s.origin||'')+' '+
(s.destination||'')+' '+
(s.type||'')+' '+
(s.date||'')
).toLowerCase();

return text.includes(q);

});


const total=document.getElementById('historyTotal');
const series=document.getElementById('historySeries');
const routes=document.getElementById('historyRoutes');

if(total)total.textContent=all.length;

if(series){
series.textContent=
new Set(
all.map(s=>(s.series||'').trim()).filter(Boolean)
).size;
}

if(routes){
routes.textContent=
new Set(
all.map(s=>
`${s.origin||''}→${s.destination||''}`
).filter(x=>x!=='→')
).size;
}


document.getElementById('count').textContent=
arr.length+
(arr.length===1?' registro':' registros');


const box=document.getElementById('historyList');


if(!arr.length){

box.innerHTML=`
<div class="history-empty">

<div class="history-empty-icon">⌕</div>

<strong>No hay registros que coincidan</strong>

<div class="muted" style="margin-top:5px">
Prueba con otro tren, serie, ruta o tipo de servicio.
</div>

</div>
`;

return;

}


box.innerHTML=arr.map(s=>{

const train=s.noNumber
?'Sin número'
:(s.train||'—');

const material=
`${s.series||''}${s.branch||''}`;

const double=s.double
?`
<div class="history-tag">
⇄ Doble composición:
${escapeHtml(s.secondSeries||'')}
${escapeHtml(s.secondBranch||'')}
</div>
`
:'';

const annotation=s.annotations
?`
<div class="history-tag note">
✎ ${escapeHtml(s.annotations)}
</div>
`
:'';

const incidentCount=
Array.isArray(s.incidents)
?s.incidents.length
:0;

const incidents=incidentCount
?`
<div class="history-tag incident">
⚠ ${incidentCount}
${incidentCount===1?'incidencia':'incidencias'}
</div>
`
:'';

const detailIncidents=incidentCount
?s.incidents.map(x=>`<div style="margin-top:5px">• ${escapeHtml(x)}</div>`).join('')
:'Sin incidencias';

return `

<article class="history-card" id="history-${escapeHtml(s.id)}">

<div class="history-card-main">

<div class="history-accent"></div>

<div class="history-card-content">

<div class="history-top">

<div>

<div class="history-train">
${escapeHtml(train)}
</div>

<div class="history-material">
Material · ${escapeHtml(material||'Sin material')}
</div>

</div>

<div class="history-type">
${escapeHtml(s.type||'Servicio')}
</div>

</div>


<div class="history-route">

<span class="history-station">
${escapeHtml(s.origin||'—')}
</span>

<span class="history-arrow">→</span>

<span class="history-station">
${escapeHtml(s.destination||'—')}
</span>

</div>


<div class="history-date">
${escapeHtml(formatDate(s.date))}
</div>


<div class="history-tags">
${double}
${annotation}
${incidents}
</div>


<div class="history-actions">

<button
class="history-action edit"
type="button"
onclick="openEdit('${s.id}')"
>
Editar
</button>

<button
class="history-action material"
type="button"
onclick="argosAbrirFichaDesdeHistorial('${s.series}','${s.branch}')"
>
Ficha material
</button>

<button
class="history-action delete"
type="button"
onclick="deleteService('${s.id}')"
>
Borrar
</button>

</div>

</div>

</div>


<button
class="history-expand"
type="button"
onclick="toggleHistoryDetails('${s.id}')"
id="history-toggle-${escapeHtml(s.id)}"
>
Ver detalles del servicio ＋
</button>


<div
class="history-details"
id="history-details-${escapeHtml(s.id)}"
>

<div class="history-detail-grid">

<div class="history-detail">
<label>Nº de tren</label>
<b>${escapeHtml(train)}</b>
</div>

<div class="history-detail">
<label>Serie</label>
<b>${escapeHtml(s.series||'—')}</b>
</div>

<div class="history-detail">
<label>Rama</label>
<b>${escapeHtml(s.branch||'—')}</b>
</div>

<div class="history-detail">
<label>Tipo</label>
<b>${escapeHtml(s.type||'—')}</b>
</div>

<div class="history-detail">
<label>Origen</label>
<b>${escapeHtml(s.origin||'—')}</b>
</div>

<div class="history-detail">
<label>Destino</label>
<b>${escapeHtml(s.destination||'—')}</b>
</div>

<div class="history-detail">
<label>Fecha</label>
<b>${escapeHtml(formatDate(s.date))}</b>
</div>

<div class="history-detail">
<label>Doble composición</label>
<b>${s.double?'Sí':'No'}</b>
</div>

</div>


<div style="margin-top:10px">

<div class="history-detail">

<label>Anotaciones</label>

<b>
${s.annotations
?escapeHtml(s.annotations)
:'Sin anotaciones'}
</b>

</div>

</div>


<div style="margin-top:10px">

<div class="history-detail">

<label>Incidencias</label>

<b>
${detailIncidents}
</b>

</div>

</div>

</div>

</article>

`;

}).join('');

}


function toggleHistoryDetails(id){

const details=
document.getElementById(
'history-details-'+id
);

const button=
document.getElementById(
'history-toggle-'+id
);

if(!details)return;

const open=
details.classList.toggle('show');

if(button){

button.textContent=
open
?'Ocultar detalles −'
:'Ver detalles del servicio ＋';

}

}

function renderStats(){

const a=myServices();

const now=new Date();

const month=
now.getFullYear()+
'-'+
String(now.getMonth()+1).padStart(2,'0');


const routes=new Set(
a.map(s=>s.origin+' → '+s.destination)
);


const series=new Set(
a.map(s=>s.series)
);


document.getElementById('sTotal').textContent=
a.length;


document.getElementById('sMonth').textContent=
a.filter(
s=>s.date.startsWith(month)
).length;


document.getElementById('sRoutes').textContent=
routes.size;


document.getElementById('sSeries').textContent=
series.size;


/* TIPOS */

const types={};

a.forEach(s=>{

const type=s.type||'Sin tipo';

types[type]=(types[type]||0)+1;

});


document.getElementById('typeStats').innerHTML=

Object.entries(types)

.sort(
(a,b)=>b[1]-a[1]
)

.map(x=>`

<div
class="row"
style="margin:7px 0"
>

<span>
${escapeHtml(x[0])}
</span>

<b>
${x[1]}
</b>

</div>

`)

.join('')

||

'<div class="empty">Sin datos</div>';


/* RUTAS */

const routeCounts={};

a.forEach(s=>{

const route=
(s.origin||'')+
' → '+
(s.destination||'');

routeCounts[route]=
(routeCounts[route]||0)+1;

});


document.getElementById('routeStats').innerHTML=

Object.entries(routeCounts)

.sort(
(a,b)=>b[1]-a[1]
)

.slice(0,10)

.map(x=>`

<div
class="row"
style="margin:7px 0"
>

<span>
${escapeHtml(x[0])}
</span>

<b>
${x[1]}
</b>

</div>

`)

.join('')

||

'<div class="empty">Sin datos</div>';


/* ACTIVIDAD MENSUAL */

const months=[];

for(let i=5;i>=0;i--){

const d=new Date();

d.setDate(1);

d.setMonth(d.getMonth()-i);

const key=
d.getFullYear()+
'-'+
String(d.getMonth()+1).padStart(2,'0');


months.push([
key,
a.filter(
s=>s.date.startsWith(key)
).length
]);

}


document.getElementById('monthStats').innerHTML=

months.map(x=>`

<div
class="row"
style="margin:7px 0"
>

<span>
${escapeHtml(x[0])}
</span>

<b>
${x[1]}
</b>

</div>

`)

.join('');

}


/* =========================================================
   RUTAS
========================================================= */

function renderRoutes(){

const a=myServices();

const sel=
document.getElementById('routeSelect');

if(!sel)return;

const current=sel.value;


const routes=[
...new Set(
a
.map(
s=>
(s.origin||'')+
'|||'+
(s.destination||'')
)
)
];


sel.innerHTML=
'<option value="">Selecciona un trayecto</option>'+
routes
.map(r=>{

const parts=r.split('|||');

const origin=parts[0]||'';

const destination=parts[1]||'';

return `

<option value="${escapeHtml(r)}">

${escapeHtml(origin)}
 →
${escapeHtml(destination)}

</option>

`;

})
.join('');


if(
routes.includes(current)
){

sel.value=current;

}

}


/* =========================================================
   ÚLTIMO SERVICIO DE UNA RUTA
========================================================= */

function lastRoute(){

const v=
document.getElementById('routeSelect').value;


if(!v){

document.getElementById(
'routeResult'
).innerHTML='';

return;

}


const parts=v.split('|||');

const origin=parts[0];

const destination=parts[1];


const a=myServices()

.filter(
s=>
s.origin===origin &&
s.destination===destination
)

.sort(
(x,y)=>
y.date.localeCompare(x.date)
);


document.getElementById(
'routeResult'
).innerHTML=

a.length

?

`

<b>
${escapeHtml(formatDate(a[0].date))}
</b>

<div class="muted">

${escapeHtml(a[0].series)}

 · Rama
${escapeHtml(a[0].branch)}

 ·
${escapeHtml(a[0].train||'Sin Nº')}

</div>

`

:

'Sin datos';

}


/* =========================================================
   ÚLTIMO SERVICIO
========================================================= */

function lastService(){

if(!services.length){

alert('Sin registros');

return;

}


const s=services[0];


alert(

`Último servicio

${s.noNumber?'Sin número':(s.train||'Sin Nº')}
 · ${s.series}${s.branch}

${s.origin} → ${s.destination}

${formatDate(s.date)}`

);

}


/* =========================================================
   INTERFAZ GENERAL
========================================================= */

function renderAll(){

renderHistory();

renderStats();

renderRoutes();
renderUpdates();


const a=myServices();

document.getElementById(
'lastHome'
).textContent=

a.length

?

`${a[0].series}${a[0].branch} · ${a[0].origin} → ${a[0].destination}`

:

'Sin registros';

}


const ARGOS_VERSION='2.0.1';
const ARGOS_RELEASE_DATE='23/08/2026';
const ARGOS_CHANGELOG=[
'Nuevo menú principal en la parte superior.',
'Se elimina la barra de navegación inferior.',
'Nuevo apartado de Actualizaciones con historial de cambios.',
'La aplicación avisa cuando se instala una nueva versión.',
'Historial rediseñado con estilo ARGOS / Renfe.',
'Logo Renfe oficial integrado en la cabecera.',
'El nombre y datos de perfil se guardan localmente sin depender de columnas inexistentes en Supabase.',
'Autocompletado de estaciones Renfe por nombre o código.',
'El listado oficial incluye las estaciones donde opera Renfe y se actualiza automáticamente.',
'Catálogo de estaciones Renfe actualizado desde el listado oficial (1072 registros) y complementos Trambahía.',
'Nuevo selector preliminar de series, ramas y vehículos.',
];

function toggleMenu(){
const panel=document.getElementById('menuPanel');
if(panel)panel.classList.toggle('show');
}

function closeMenu(){
const panel=document.getElementById('menuPanel');
if(panel)panel.classList.remove('show');
}

function menuGo(id){
closeMenu();
show(id);
}

function renderUpdates(){
const v=document.getElementById('currentVersionLabel');
const d=document.getElementById('currentReleaseDate');
const list=document.getElementById('changelogList');
if(v)v.textContent='ARGOS '+ARGOS_VERSION;
if(d)d.textContent='Lanzada el '+ARGOS_RELEASE_DATE;
if(list)list.innerHTML=ARGOS_CHANGELOG.map(x=>`<li>${x}</li>`).join('');
}

function checkForUpdateNotice(){
const key='argos_seen_version';
const previous=localStorage.getItem(key);

if(!previous){
localStorage.setItem(key,ARGOS_VERSION);
return;
}

if(previous!==ARGOS_VERSION){
localStorage.setItem(key,ARGOS_VERSION);

setTimeout(()=>{
openModal();
document.getElementById('modalContent').innerHTML=`
<div class="badge">ARGOS · ACTUALIZADO</div>
<h2 style="margin-top:10px">ARGOS se ha actualizado</h2>
<div class="muted">Ahora estás usando la versión <strong>${ARGOS_VERSION}</strong>.</div>
<div class="version-box">
<strong>Novedades</strong>
<ul class="update-list">
${ARGOS_CHANGELOG.map(x=>`<li>${x}</li>`).join('')}
</ul>
</div>
<button class="primary" onclick="closeModal()">Entendido</button>
`;
},350);
}
}

/* =========================================================
   NAVEGACIÓN
========================================================= */

function show(id){

document.querySelectorAll(
'.screen'
)
.forEach(
x=>x.classList.remove('active')
);


const screen=
document.getElementById(id);

if(!screen)return;

screen.classList.add('active');


document.querySelectorAll(
'[data-nav]'
)
.forEach(
x=>
x.classList.toggle(
'active',
x.dataset.nav===id
)
);


renderAll();

window.scrollTo(
{
top:0,
behavior:'smooth'
}
);

}


/* =========================================================
   APARIENCIA
========================================================= */

function toggleDark(){

const enabled=
document.getElementById('dark').checked;


document.body.classList.toggle(
'dark',
enabled
);


localStorage.setItem(
'argos_dark',
enabled?'1':'0'
);

}


/* =========================================================
   EXPORTAR CSV
========================================================= */

function exportCSV(){

const a=myServices();


const rows=[

[
'Fecha',
'Nº Tren',
'Serie',
'Rama',
'2ª Serie',
'2ª Rama',
'Origen',
'Destino',
'Tipo',
'Anotaciones',
'Incidencias'
],


...a.map(
s=>[

s.date,

s.noNumber
?''
:(s.train||''),

s.series,

s.branch,

s.secondSeries||'',

s.secondBranch||'',

s.origin,

s.destination,

s.type,

s.annotations||'',

(Array.isArray(s.incidents)?s.incidents:[]).join(' | ')

]
)

];


const csv=
rows

.map(
r=>
r
.map(
v=>
`"${String(v??'').replaceAll('"','""')}"`
)
.join(';')
)

.join('\n');


const blob=
new Blob(
[
'\ufeff'+csv
],
{
type:'text/csv;charset=utf-8'
}
);


download(
blob,
'argos_historial.csv'
);

}


/* =========================================================
   MENÚ EXPORTAR
========================================================= */

function exportMenu(){

document.getElementById(
'modalContent'
).innerHTML=`

<h2>
Exportar historial
</h2>

<p class="muted">
Elige el formato
</p>

<div class="row">

<button
class="secondary"
onclick="exportCSV();closeModal()"
>
CSV
</button>

<button
class="secondary"
onclick="printHistory();closeModal()"
>
PDF
</button>

</div>

`;


openModal();

}


/* =========================================================
   IMPRIMIR / PDF
========================================================= */

function printHistory(){

const a=myServices();


const w=
window.open(
'',
'_blank'
);


if(!w){

alert(
'El navegador ha bloqueado la ventana de impresión.'
);

return;

}


w.document.write(`

<html>

<head>

<title>
ARGOS - Historial
</title>

<style>

body{
font-family:Arial,sans-serif;
padding:25px;
color:#111;
}

table{
border-collapse:collapse;
width:100%;
}

td,th{
border:1px solid #ccc;
padding:6px;
font-size:11px;
}

th{
background:#eee;
}


</style>

</head>

<body>

<h1>
ARGOS
</h1>

<p>
Historial de servicios
</p>

<table>

<tr>

<th>Fecha</th>
<th>Nº</th>
<th>Serie</th>
<th>Rama</th>
<th>Origen</th>
<th>Destino</th>
<th>Tipo</th>
<th>Anotaciones</th>
<th>Incidencias</th>

</tr>


${a.map(s=>`

<tr>

<td>
${escapeHtml(s.date)}
</td>

<td>
${escapeHtml(
s.noNumber?'':(s.train||'')
)}
</td>

<td>
${escapeHtml(s.series)}
</td>

<td>
${escapeHtml(s.branch)}
</td>

<td>
${escapeHtml(s.origin)}
</td>

<td>
${escapeHtml(s.destination)}
</td>

<td>
${escapeHtml(s.type)}
</td>

<td>
${escapeHtml(s.annotations||'')}
</td>

<td>
${escapeHtml((Array.isArray(s.incidents)?s.incidents:[]).join(' | '))}
</td>

</tr>

`).join('')}


</table>

<script>

window.onload=function(){
window.print();
};

<\/script>

</body>

</html>

`);


w.document.close();

}


/* =========================================================
   DESCARGAS
========================================================= */

function download(blob,name){

const a=
document.createElement('a');


a.href=
URL.createObjectURL(blob);


a.download=name;


document.body.appendChild(a);

a.click();

a.remove();


setTimeout(
()=>{
URL.revokeObjectURL(a.href);
},
1000
);

}


/* =========================================================
   UTILIDADES
========================================================= */

function formatDate(d){

if(!d)return'';


const parts=d.split('-');

if(parts.length!==3)return d;


return parts[2]+
'/'+
parts[1]+
'/'+
parts[0];

}


function escapeHtml(v){

return String(v??'')

.replaceAll(
'&',
'&amp;'
)

.replaceAll(
'<',
'&lt;'
)

.replaceAll(
'>',
'&gt;'
)

.replaceAll(
'"',
'&quot;'
)

.replaceAll(
"'",
'&#039;'
);

}


/* =========================================================
   CONTADORES
========================================================= */

function updateCounters(){

const fields=[

['trainNo','trainCounter'],

['series','seriesCounter'],

['branch','branchCounter'],

['series2','series2Counter'],

['branch2','branch2Counter']

];


fields.forEach(
([id,counter])=>{

const el=
document.getElementById(id);

const c=
document.getElementById(counter);


if(!el||!c)return;


c.textContent=
el.value.length+
' / '+
el.maxLength;

}
);

}


function addCounter(id,counter){

const el=
document.getElementById(id);

const c=
document.getElementById(counter);


if(!el||!c)return;


el.addEventListener(
'input',
updateCounters
);

}


[
'trainNo',
'series',
'branch',
'series2',
'branch2'
]
.forEach(
id=>
addCounter(
id,
id+'Counter'
)
);


/* =========================================================
   DOBLE COMPOSICIÓN
========================================================= */

document.getElementById(
'double'
).addEventListener(
'change',
e=>{

document.getElementById(
'doubleBox'
).style.display=
e.target.checked
?'flex'
:'none';

}
);


/* =========================================================
   FECHA ACTUAL
========================================================= */

function setToday(){

const el=
document.getElementById('date');

if(!el)return;


const d=
new Date();


const local=
new Date(
d.getTime()-
d.getTimezoneOffset()*60000
);


el.value=
local
.toISOString()
.slice(0,10);

}


/* =========================================================
   MODALES
========================================================= */

function openModal(){

document.getElementById(
'modal'
)
.classList.add('show');

}


function closeModal(){

document.getElementById(
'modal'
)
.classList.remove('show');

}

/* =========================================================
   EXTRA · FICHA DE PRESENTACIÓN DEL MATERIAL
   Este módulo es independiente de login, Supabase y material.json.
========================================================= */
function argosMaterialFichaData(series, vehicle, branch){
  const data=(typeof ARGOS_MATERIAL_DATA!=='undefined' && ARGOS_MATERIAL_DATA)
    ? ARGOS_MATERIAL_DATA[String(series)] : null;
  const vehicles=data && data.vehicles ? data.vehicles : {};
  const record=vehicles[String(vehicle)] || vehicles[String(vehicle).padStart(3,'0')] || null;
  return {data:data, record:record, series:String(series||''), vehicle:String(vehicle||''), branch:String(branch||'')};
}

function argosMaterialFieldLabel(key){
  const labels={
    uic:'Matrícula UIC', renfe_number:'Número Renfe', number:'Número',
    type:'Tipo de vehículo', branch:'Rama', year:'Año', depot:'Depósito',
    manufacturer:'Fabricante', fabricante:'Fabricante', color:'Color',
    width:'Ancho de vía (mm)', ancho_via:'Ancho de vía (mm)',
    source:'Fuente', source_note:'Notas de fuente', side:'Lado / motor',
    position:'Posición', notes:'Notas', observations:'Observaciones',
    lote:'Lote', constructor:'Constructor', deposito:'Depósito', red:'Red',
    ramaComposicion:'Composición de la rama', transformadaA:'Transformada a',
    situacionActual:'Situación actual'
  };
  return labels[key] || String(key).replaceAll('_',' ');
}

function argosMaterialFieldValue(value){
  if(value===null || value===undefined || value==='') return '—';
  if(Array.isArray(value)) return value.join(', ');
  if(typeof value==='object') return JSON.stringify(value);
  return String(value);
}

function argosMaterialFichaAnnotations(series, branch){
  if(typeof services==='undefined' || !Array.isArray(services)) return [];
  return services
    .filter(s=>String(s.series||'')===String(series||'') && String(s.branch||'')===String(branch||''))
    .flatMap(s=>{
      const result=[];
      if(String(s.annotations||'').trim()) result.push({date:s.date||'', text:String(s.annotations).trim()});
      if(Array.isArray(s.incidents)) s.incidents.forEach(x=>{
        if(String(x||'').trim()) result.push({date:s.date||'', text:String(x).trim()});
      });
      return result;
    })
    .sort((a,b)=>String(b.date).localeCompare(String(a.date)));
}


function argosPokedexData(series,branch,vehicle){
  const base={
    category:'',
    nickname:'',
    manufacturer:'',
    seriesYear:'',
    maxSpeed:'',
    formation:'',
    track:'',
    description:'',
    events:[],
    notes:[]
  };

  const map={
    '100':{
      category:'Alta Velocidad · AVE',
      nickname:'AVE S-100',
      manufacturer:'Alstom',
      seriesYear:'1992–1997',
      maxSpeed:'300 km/h',
      formation:'2 cabezas tractoras + 8 coches de viajeros',
      track:'1435 mm',
      description:'Primera serie de alta velocidad de Renfe. Derivada del TGV Atlántico y adaptada a las condiciones españolas.',
      events:[
        {year:'1992',text:'Comienzan los servicios comerciales de la serie 100.'},
        {year:'2009',text:'Finaliza la remodernización técnica y estética de la serie.'}
      ],
      notes:[
        {title:'Origen',text:'La serie 100 fue una evolución del TGV Atlántico con modificaciones para su explotación en España.'},
        {title:'Una rama con historia',text:'La rama 12 (9-100-119-7) procede de la antigua serie 101 y sus motrices fueron intercambiadas con las originales de la rama 19.'}
      ]
    },
    '463':{
      category:'Cercanías · Civia',
      nickname:'Civia',
      manufacturer:'CAF (primer lote) / Alstom (segundo lote)',
      seriesYear:'2004–2010',
      maxSpeed:'120 km/h',
      formation:'2 coches motores extremos + 1 remolque intermedio (M-R-M)',
      track:'1668 mm',
      description:'Tren eléctrico Civia de tres coches. El primer lote comprende las ramas 001–015 y está construido por CAF; el segundo lote comprende las ramas 201–220 y está construido por Alstom. La ficha distingue expresamente ambos lotes. Algunas unidades del segundo lote fueron transformadas a la serie 464 y otras a la 465, quedando identificada en la ficha su numeración posterior.',
      events:[
        {year:'2004',text:'Entrada en servicio de las primeras unidades Civia de tres coches.'},
        {year:'2007–2010',text:'Entrada progresiva de las unidades del segundo lote Alstom.'}
      ],
      notes:[
        {title:'Primer lote · CAF',text:'Ramas 001–015. Composición de tres coches: coche motor + remolque intermedio + coche motor.'},
        {title:'Segundo lote · Alstom',text:'Ramas 201–220. La numeración 201–220 corresponde al segundo lote y no debe confundirse con las ramas 001–015 del primer lote.'},
        {title:'Transformaciones',text:'Las unidades 202, 203, 204, 206, 209, 216, 217, 219 y 220 registran transformaciones posteriores a otras series Civia; la ficha de cada rama identifica expresamente su nueva numeración.'}
      ]
    },
    '102':{
      category:'Alta Velocidad · AVE',
      nickname:'Pato · Talgo 350',
      manufacturer:'Talgo / Bombardier',
      seriesYear:'2004–2007',
      maxSpeed:'330 km/h en explotación comercial',
      formation:'2 cabezas tractoras + 12 coches Talgo',
      track:'1435 mm',
      description:'Talgo 350 de Renfe, desarrollado por Talgo con tecnología de tracción de Bombardier.',
      events:[
        {year:'2002',text:'Renfe adjudica a Talgo el suministro de las primeras unidades.'},
        {year:'2004',text:'Comienzan las entregas de las primeras ramas.'},
        {year:'2005',text:'La serie 102 inicia sus servicios comerciales.'}
      ],
      notes:[
        {title:'El Pato',text:'Su característico frontal aerodinámico dio lugar al apodo popular “Pato”.'},
        {title:'Récord de pruebas',text:'El Talgo 350 alcanzó velocidades superiores a 350 km/h durante las pruebas.'}
      ]
    }
  };

  const out=map[String(series)]||base;
  return Object.assign({},base,out);
}

function argosMaterialFichaHTML(ctx){
  const title=(ctx.data && (ctx.data.label || ctx.data.name)) || ('Serie '+ctx.series);
  const entries=[];
  const record=ctx.record || {};
  const pd=argosPokedexData(ctx.series,ctx.branch,ctx.vehicle);

  Object.entries(record).forEach(([key,value])=>{
    if(['branch'].includes(key) || value===null || value===undefined || value==='') return;
    entries.push(`<div class="pokedex-card"><div class="pokedex-label">${escapeHtml(argosMaterialFieldLabel(key))}</div><div class="pokedex-value">${escapeHtml(argosMaterialFieldValue(value))}</div></div>`);
  });

  if(pd.manufacturer) entries.unshift(`<div class="pokedex-card"><div class="pokedex-label">Fabricante</div><div class="pokedex-value">${escapeHtml(pd.manufacturer)}</div></div>`);
  if(pd.seriesYear) entries.push(`<div class="pokedex-card"><div class="pokedex-label">Periodo de fabricación</div><div class="pokedex-value">${escapeHtml(pd.seriesYear)}</div></div>`);
  if(pd.maxSpeed) entries.push(`<div class="pokedex-card"><div class="pokedex-label">Velocidad máxima</div><div class="pokedex-value">${escapeHtml(pd.maxSpeed)}</div></div>`);
  if(pd.formation) entries.push(`<div class="pokedex-card"><div class="pokedex-label">Composición</div><div class="pokedex-value">${escapeHtml(pd.formation)}</div></div>`);
  if(pd.track) entries.push(`<div class="pokedex-card"><div class="pokedex-label">Ancho de vía</div><div class="pokedex-value">${escapeHtml(pd.track)}</div></div>`);

  const timeline=(pd.events||[]).map(item=>
    `<div class="pokedex-event"><div class="pokedex-year">${escapeHtml(item.year)}</div><div class="pokedex-event-text">${escapeHtml(item.text)}</div></div>`
  ).join('');

  const selectedNotes=(pd.notes||[]).map(item=>
    `<div class="pokedex-note"><strong>${escapeHtml(item.title)}</strong><br>${escapeHtml(item.text)}</div>`
  ).join('');

  const userNotes=argosMaterialFichaAnnotations(ctx.series,ctx.branch).map(item=>
    `<div class="pokedex-note"><strong>${escapeHtml(item.date || 'Anotación personal')}</strong><br>${escapeHtml(item.text)}</div>`
  ).join('');

  return `<div class="material-ficha">
    <div class="pokedex-shell">
      <div class="pokedex-hero">
        <div class="pokedex-hero-top">
          <div>
            <div class="pokedex-kicker">ARGOS · FICHA DE MATERIAL</div>
            <div class="pokedex-title">${escapeHtml(title)}</div>
            <div class="pokedex-subtitle">Rama <b>${escapeHtml(ctx.branch||'—')}</b>${ctx.record?.lote?` · <b>${escapeHtml(String(ctx.record.lote))}</b>`:''} · vehículo <b>${escapeHtml(ctx.vehicle||'—')}</b></div>
          </div>
          <div class="pokedex-status">● EN REGISTRO</div>
        </div>

        <div class="pokedex-badges">
          ${pd.nickname ? `<span class="pokedex-chip">${escapeHtml(pd.nickname)}</span>` : ''}
          ${pd.category ? `<span class="pokedex-chip">${escapeHtml(pd.category)}</span>` : ''}
          ${record.type ? `<span class="pokedex-chip">${escapeHtml(record.type)}</span>` : ''}
        </div>

        <div class="pokedex-statrow">
          <div class="pokedex-stat"><div class="pokedex-stat-label">Serie</div><div class="pokedex-stat-value">${escapeHtml(ctx.series)}</div></div>
          <div class="pokedex-stat"><div class="pokedex-stat-label">Vehículo</div><div class="pokedex-stat-value">${escapeHtml(ctx.vehicle||'—')}</div></div>
          <div class="pokedex-stat"><div class="pokedex-stat-label">Rama</div><div class="pokedex-stat-value">${escapeHtml(ctx.branch||'—')}</div></div>
        </div>
      </div>

      <div class="pokedex-layout">
        <section class="pokedex-section">
          <div class="pokedex-section-title"><span class="pd-dot"></span>Identificación</div>
          <div class="pokedex-grid">${entries.join('')}</div>
        </section>

        ${pd.description ? `<section class="pokedex-section"><div class="pokedex-section-title"><span class="pd-dot"></span>Sobre esta serie</div><div class="pokedex-note">${escapeHtml(pd.description)}</div></section>` : ''}

        ${timeline ? `<section class="pokedex-section"><div class="pokedex-section-title"><span class="pd-dot"></span>Historia del material</div><div class="pokedex-timeline">${timeline}</div></section>` : ''}

        ${selectedNotes ? `<section class="pokedex-section"><div class="pokedex-section-title"><span class="pd-dot"></span>⭐ Curiosidades</div>${selectedNotes}<div class="pokedex-source">Selección de hechos relevantes de las fichas y notas de Listadotren.</div></section>` : ''}

        <section class="pokedex-section full">
          <div class="pokedex-section-title"><span class="pd-dot"></span>📝 Tus anotaciones e incidencias</div>
          ${userNotes || '<div class="pokedex-note">Todavía no hay anotaciones personales para esta rama.</div>'}
        </section>
      </div>

      <div class="pokedex-divider"></div>
      <div class="pokedex-photo">📷 Galería de fotos · preparada para añadir fotografías del vehículo y material histórico.</div>
      <div class="row pokedex-close"><button type="button" class="secondary" onclick="closeModal()">Cerrar ficha</button></div>
    </div>
  </div>`;
}

function argosAbrirFichaDesdeHistorial(series, branch){
  const s=String(series||'');
  const b=String(branch||'');
  if(!s || !b){
    alert('Este servicio no tiene una serie o rama asociada.');
    return;
  }

  const data=(typeof ARGOS_MATERIAL_DATA!=='undefined' && ARGOS_MATERIAL_DATA)
    ? ARGOS_MATERIAL_DATA[s] : null;

  if(!data){
    alert('No hay una ficha de material cargada para la serie '+s+'.');
    return;
  }

  const vehicles=data.vehicles||{};
  let vehicle='';
  let record=null;

  for(const [number,item] of Object.entries(vehicles)){
    if(String(item?.branch||'')===b){
      vehicle=String(number);
      record=item;
      break;
    }
  }

  argosMostrarFichaMaterial({
    data:data,
    record:record,
    series:s,
    vehicle:vehicle,
    branch:b
  });
}

function argosMostrarFichaMaterial(ctx){
  document.getElementById('modalContent').innerHTML=argosMaterialFichaHTML(ctx);
  openModal();
}

function argosMostrarPrimeraVezMaterial(ctx){
  const title=(ctx.data && (ctx.data.label || ctx.data.name)) || ('Serie '+ctx.series);
  document.getElementById('modalContent').innerHTML=`<div class="material-first-card">
    <div class="material-first-icon">🚆</div>
    <div class="muted" style="font-size:11px;font-weight:900;letter-spacing:.05em">NUEVO MATERIAL EN TU HISTORIAL</div>
    <h2>Primera vez que subes en la</h2>
    <div class="material-first-branch">Rama ${escapeHtml(ctx.branch)}</div>
    <div class="material-first-sub">${escapeHtml(title)} · vehículo ${escapeHtml(ctx.vehicle)}</div>
    <div class="material-first-actions">
      <button type="button" class="secondary" onclick="closeModal()">Aceptar</button>
      <button type="button" onclick='argosMostrarFichaMaterial(${JSON.stringify(ctx).replace(/</g,'\\u003c')})'>Ver ficha completa</button>
    </div>
  </div>`;
  openModal();
}



/* =========================================================
   TOAST
========================================================= */

function toast(message){

const el=
document.getElementById('toast');


el.textContent=
message;


el.style.display=
'block';


setTimeout(
()=>{
el.style.display='none';
},
2200
);

}
   /* =========================================================
   SUPABASE
========================================================= */

const SUPABASE_URL =
'https://dngzwdhcdwqujdwjmqsx.supabase.co';

const SUPABASE_KEY =
'sb_publishable_m2t3iB8nN0c5dJC6-HMbhA_yE7kNKTj';

const db=
window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);


let currentUser=null;

let currentProfile=null;

let services=[];


/* =========================================================
   AUTENTICACIÓN
========================================================= */

function usernameEmail(username){

return username
.toLowerCase()
.replace(/\s+/g,'')
+'@argos-app.local';

}


function toggleAuth(login){

document.getElementById(
'loginBox'
).style.display=
login
?'block'
:'none';


document.getElementById(
'registerBox'
).style.display=
login
?'none'
:'block';

}


/* =========================================================
   REGISTRO
========================================================= */

async function register(){

const username=
document
.getElementById('regUser')
.value
.trim();

const password=
document
.getElementById('regPass')
.value;


if(!/^\d{7}$/.test(username)){

alert(
'La matrícula RENFE debe tener exactamente 7 números'
);

return;

}


if(password.length<6){

alert(
'La contraseña debe tener al menos 6 caracteres'
);

return;

}


const email=
usernameEmail(username);


const {data,error}=
await db.auth.signUp({

email:email,

password:password,

options:{
data:{
username:username
}
}

});


if(error){

console.error(error);

alert(
'No se pudo crear la cuenta:\n\n'+
error.message
);

return;

}


if(!data.user){

alert(
'No se pudo crear el usuario.'
);

return;

}


/*
   Si Supabase tiene confirmación de email activada,
   no habrá sesión todavía.
*/

if(!data.session){

alert(
'Cuenta creada correctamente.\n\n'+
'Ya puedes iniciar sesión con tu matrícula y contraseña.'
);

toggleAuth(true);

return;

}


currentUser=data.user;

await loadProfile();

await boot();

}


/* =========================================================
   LOGIN
========================================================= */

async function login(){

const username=
document
.getElementById('loginUser')
.value
.trim();

const password=
document
.getElementById('loginPass')
.value;


if(!/^\d{7}$/.test(username)){

alert(
'Introduce una matrícula RENFE válida de 7 números'
);

return;

}


if(!password){

alert(
'Introduce tu contraseña'
);

return;

}


const {data,error}=
await db.auth.signInWithPassword({

email:usernameEmail(username),

password:password

});


if(error){

console.error(error);

alert(
'Matrícula o contraseña incorrectas'
);

return;

}


currentUser=data.user;

await loadProfile();

await boot();

}


/* =========================================================
   LOGOUT
========================================================= */

async function logout(){

await db.auth.signOut();

currentUser=null;

currentProfile=null;

services=[];


document.getElementById(
'app'
).style.display='none';


document.getElementById(
'auth'
).style.display='flex';


toggleAuth(true);

}


/* =========================================================
   PERFIL
========================================================= */

async function loadProfile(){

if(!currentUser)return;


const {data,error}=
await db

.from('profiles')

.select('*')

.eq(
'id',
currentUser.id
)

.maybeSingle();


if(error){

console.error(
'Error cargando perfil:',
error
);

return;

}


currentProfile=data;


if(!data){

const username=
currentUser
.user_metadata
?.username||'';


const {
data:newProfile,
error:createError
}=
await db

.from('profiles')

.insert({

id:currentUser.id,

username:username

})

.select()

.single();


if(createError){

console.error(
'Error creando perfil:',
createError
);

return;

}


currentProfile=
newProfile;

}


/*
   Recuperamos los datos de perfil guardados localmente.
   Esto evita depender de columnas que no existen en
   la tabla profiles actual.
*/
const profileKey='argos_profile_'+currentUser.id;
const savedProfile=
localStorage.getItem(profileKey);

if(savedProfile){

try{

const localProfile=
JSON.parse(savedProfile);

currentProfile={
...(currentProfile||{}),
...localProfile
};

}catch(e){

console.warn(
'No se pudieron leer los datos locales del perfil:',
e
);

}

}

}


/* =========================================================
   GUARDAR PERFIL
========================================================= */

async function saveProfile(e){

e.preventDefault();

if(!currentUser)return;

const name=
document
.getElementById('displayName')
.value
.trim();

const job=
document
.getElementById('job')
.value
.trim();

const serviceType=
document
.getElementById('serviceType')
.value
.trim();

/*
   Estos campos NO se guardan en Supabase porque la tabla
   profiles actual no tiene las columnas display_name, job
   ni service_type. Se guardan localmente en este dispositivo.
*/
const profileKey='argos_profile_'+currentUser.id;

localStorage.setItem(
profileKey,
JSON.stringify({
display_name:name,
job:job,
service_type:serviceType
})
);

currentProfile={
...(currentProfile||{}),
display_name:name,
job:job,
service_type:serviceType
};

document.getElementById(
'hello'
).textContent=
'Hola '+(name||currentProfile?.username||'Usuario');

toast(
'Cambios guardados'
);

}



document.addEventListener('click',e=>{
const wrap=document.querySelector('.menu-wrap');
if(wrap && !wrap.contains(e.target))closeMenu();
});

/* =========================================================
   ARRANQUE DE LA APLICACIÓN
========================================================= */

async function boot(){

document.getElementById(
'auth'
).style.display='none';


document.getElementById(
'app'
).style.display='block';


await loadServices();


const username=
currentProfile?.username||

currentUser
?.user_metadata
?.username||

'Usuario';


document.getElementById(
'profileUser'
).value=
username;


document.getElementById(
'displayName'
).value=
currentProfile
?.display_name||'';


document.getElementById(
'job'
).value=
currentProfile
?.job||'';


document.getElementById(
'serviceType'
).value=
currentProfile
?.service_type||'';


document.getElementById(
'hello'
).textContent=
'Hola '+
(
currentProfile
?.display_name||
username
);


setToday();

draftIncidents=[];
renderIncidentList();

updateCounters();

await loadMaterialData();
initMaterialSelector();

renderAll();
checkForUpdateNotice();

}


/* =========================================================
   INICIALIZACIÓN DEL MODO OSCURO
========================================================= */

const savedDark=
localStorage.getItem(
'argos_dark'
)==='1';


document.body.classList.toggle(
'dark',
savedDark
);


document.getElementById(
'dark'
).checked=
savedDark;


/* =========================================================
   COMPROBAR SESIÓN EXISTENTE
========================================================= */

db.auth
.getSession()
.then(
async({data})=>{

if(data?.session){

currentUser=
data.session.user;

await loadProfile();

await boot();

}

}
);


/* =========================================================
   CAMBIOS DE SESIÓN
========================================================= */

db.auth.onAuthStateChange(
async(event,session)=>{

if(
event==='SIGNED_IN' &&
session
){

currentUser=
session.user;

await loadProfile();

await boot();

}

if(
event==='SIGNED_OUT'
){

currentUser=null;

currentProfile=null;

services=[];

}

}
);


/* =========================================================
   SERVICE WORKER
========================================================= */

/*
   Mantenemos el Service Worker existente.
   Importante: después de desplegar esta versión,
   si el navegador muestra código antiguo, habrá que
   actualizar/desregistrar el SW antiguo una sola vez.
*/

if(
'serviceWorker'
in navigator
){

window.addEventListener(
'load',
()=>{

navigator.serviceWorker

.register('sw.js?v=15')

.catch(
error=>
console.error(
'Service Worker:',
error
)
);

}
);

}


/* =========================================================
   EXTRA · SUPER FICHA MULTIVEHÍCULO POR RAMA · ARGOS
   ---------------------------------------------------------
   Esta ampliación NO modifica ni elimina ninguna función
   existente. Añade una ruta específica para las fichas
   abiertas desde el historial cuando una rama contiene
   varios vehículos (ej. S-102: 001 + 002).
========================================================= */

function argosObtenerVehiculosDeRama(series, branch){
  const data=(typeof ARGOS_MATERIAL_DATA!=='undefined' && ARGOS_MATERIAL_DATA)
    ? ARGOS_MATERIAL_DATA[String(series)] : null;

  if(!data || !data.vehicles) return [];

  const target=String(branch||'').replace(/\D/g,'');

  return Object.entries(data.vehicles)
    .filter(([number,item])=>String(item?.branch||'').replace(/\D/g,'')===target)
    .map(([number,item])=>({
      number:String(number),
      record:item||{}
    }));
}

function argosMaterialRamaHTML(series, branch, vehicles){
  const data=ARGOS_MATERIAL_DATA[String(series)]||{};
  const pd=argosPokedexData(String(series),String(branch),'');
  const title=data.label || data.name || ('Serie '+series);

  const vehicleCards=vehicles.map(({number,record})=>{
    const fields=[];

    Object.entries(record||{}).forEach(([key,value])=>{
      if(['branch'].includes(key) || value===null || value===undefined || value==='') return;
      fields.push(`
        <div class="pokedex-card">
          <div class="pokedex-label">${escapeHtml(argosMaterialFieldLabel(key))}</div>
          <div class="pokedex-value">${escapeHtml(argosMaterialFieldValue(value))}</div>
        </div>`);
    });

    return `
      <div class="pokedex-vehicle-block">
        <div class="pokedex-vehicle-head">
          <div>
            <div class="pokedex-kicker">VEHÍCULO</div>
            <div class="pokedex-vehicle-title">${escapeHtml(number)}</div>
          </div>
          ${record.side ? `<div class="pokedex-chip">${escapeHtml(record.side)}</div>` : ''}
        </div>
        <div class="pokedex-grid">${fields.join('') || '<div class="pokedex-note">Sin datos adicionales del vehículo.</div>'}</div>
      </div>`;
  }).join('');

  const timeline=(pd.events||[]).map(item=>
    `<div class="pokedex-event"><div class="pokedex-year">${escapeHtml(item.year)}</div><div class="pokedex-event-text">${escapeHtml(item.text)}</div></div>`
  ).join('');

  const selectedNotes=(pd.notes||[]).map(item=>
    `<div class="pokedex-note"><strong>${escapeHtml(item.title)}</strong><br>${escapeHtml(item.text)}</div>`
  ).join('');

  const userNotes=argosMaterialFichaAnnotations(String(series),String(branch)).map(item=>
    `<div class="pokedex-note"><strong>${escapeHtml(item.date || 'Anotación personal')}</strong><br>${escapeHtml(item.text)}</div>`
  ).join('');

  return `<div class="material-ficha">
    <div class="pokedex-shell">
      <div class="pokedex-hero">
        <div class="pokedex-hero-top">
          <div>
            <div class="pokedex-kicker">ARGOS · FICHA DE MATERIAL</div>
            <div class="pokedex-title">${escapeHtml(title)}</div>
            <div class="pokedex-subtitle">Rama <b>${escapeHtml(branch||'—')}</b> · <b>${vehicles.length}</b> vehículo${vehicles.length===1?'':'s'} registrado${vehicles.length===1?'':'s'}</div>
          </div>
          <div class="pokedex-status">● EN REGISTRO</div>
        </div>

        <div class="pokedex-badges">
          ${pd.nickname ? `<span class="pokedex-chip">${escapeHtml(pd.nickname)}</span>` : ''}
          ${pd.category ? `<span class="pokedex-chip">${escapeHtml(pd.category)}</span>` : ''}
          ${pd.manufacturer ? `<span class="pokedex-chip">${escapeHtml(pd.manufacturer)}</span>` : ''}
        </div>

        <div class="pokedex-statrow">
          <div class="pokedex-stat"><div class="pokedex-stat-label">Serie</div><div class="pokedex-stat-value">${escapeHtml(series)}</div></div>
          <div class="pokedex-stat"><div class="pokedex-stat-label">Rama</div><div class="pokedex-stat-value">${escapeHtml(branch||'—')}</div></div>
          <div class="pokedex-stat"><div class="pokedex-stat-label">Vehículos</div><div class="pokedex-stat-value">${escapeHtml(String(vehicles.length))}</div></div>
        </div>
      </div>

      <div class="pokedex-layout">
        ${pd.description ? `<section class="pokedex-section"><div class="pokedex-section-title"><span class="pd-dot"></span>Sobre esta serie</div><div class="pokedex-note">${escapeHtml(pd.description)}</div></section>` : ''}

        ${(pd.seriesYear||pd.maxSpeed||pd.formation||pd.track) ? `
        <section class="pokedex-section">
          <div class="pokedex-section-title"><span class="pd-dot"></span>Datos de la serie</div>
          <div class="pokedex-grid">
            ${pd.seriesYear ? `<div class="pokedex-card"><div class="pokedex-label">Periodo de fabricación</div><div class="pokedex-value">${escapeHtml(pd.seriesYear)}</div></div>` : ''}
            ${pd.maxSpeed ? `<div class="pokedex-card"><div class="pokedex-label">Velocidad máxima</div><div class="pokedex-value">${escapeHtml(pd.maxSpeed)}</div></div>` : ''}
            ${pd.formation ? `<div class="pokedex-card"><div class="pokedex-label">Composición</div><div class="pokedex-value">${escapeHtml(pd.formation)}</div></div>` : ''}
            ${pd.track ? `<div class="pokedex-card"><div class="pokedex-label">Ancho de vía</div><div class="pokedex-value">${escapeHtml(pd.track)}</div></div>` : ''}
          </div>
        </section>` : ''}

        <section class="pokedex-section full">
          <div class="pokedex-section-title"><span class="pd-dot"></span>Vehículos de la rama</div>
          ${vehicleCards || '<div class="pokedex-note">No hay vehículos registrados para esta rama.</div>'}
        </section>

        ${timeline ? `<section class="pokedex-section"><div class="pokedex-section-title"><span class="pd-dot"></span>Historia del material</div><div class="pokedex-timeline">${timeline}</div></section>` : ''}

        ${selectedNotes ? `<section class="pokedex-section"><div class="pokedex-section-title"><span class="pd-dot"></span>⭐ Curiosidades</div>${selectedNotes}<div class="pokedex-source">Selección de hechos relevantes de las fichas y notas de Listadotren.</div></section>` : ''}

        <section class="pokedex-section full">
          <div class="pokedex-section-title"><span class="pd-dot"></span>📝 Tus anotaciones e incidencias</div>
          ${userNotes || '<div class="pokedex-note">Todavía no hay anotaciones personales para esta rama.</div>'}
        </section>
      </div>

      <div class="pokedex-divider"></div>
      <div class="pokedex-photo">📷 Galería de fotos · preparada para añadir fotografías del vehículo y material histórico.</div>
      <div class="row pokedex-close"><button type="button" class="secondary" onclick="closeModal()">Cerrar ficha</button></div>
    </div>
  </div>`;
}

function argosMostrarFichaRamaMaterial(series, branch){
  const vehicles=argosObtenerVehiculosDeRama(series,branch);
  const data=(typeof ARGOS_MATERIAL_DATA!=='undefined' && ARGOS_MATERIAL_DATA)
    ? ARGOS_MATERIAL_DATA[String(series)] : null;

  if(!data){
    alert('No hay una ficha de material cargada para la serie '+String(series||'')+'.');
    return;
  }

  document.getElementById('modalContent').innerHTML=
    argosMaterialRamaHTML(String(series),String(branch),vehicles);
  openModal();
}

/*
   Nueva entrada para el historial.
   Se instala al final para conservar intacta la función
   original y sustituir únicamente el comportamiento público
   cuando el usuario pulsa una ficha desde el historial.
*/
window.argosAbrirFichaDesdeHistorial=function(series,branch){
  const s=String(series||'');
  const b=String(branch||'');

  if(!s || !b){
    alert('Este servicio no tiene una serie o rama asociada.');
    return;
  }

  const data=(typeof ARGOS_MATERIAL_DATA!=='undefined' && ARGOS_MATERIAL_DATA)
    ? ARGOS_MATERIAL_DATA[s] : null;

  if(!data){
    alert('No hay una ficha de material cargada para la serie '+s+'.');
    return;
  }

  argosMostrarFichaRamaMaterial(s,b);
};

/* =========================================================
   FIN EXTRA · SUPER FICHA MULTIVEHÍCULO POR RAMA
========================================================= */

</script>

</body>

</html>
<!-- =========================================================
     ARGOS · POKÉDEX FERROVIARIA · AMPLIACIÓN DE INFORMACIÓN
     AÑADIDO: no elimina ni sustituye la base maestra.
     Lee información enriquecida desde material.json.
     Si un dato no existe, no se muestra.
========================================================= -->
<style>
.argos-rich-wrap{padding:0 0 4px}
.argos-rich-section{margin-top:16px}
.argos-rich-section-title{display:flex;align-items:center;gap:8px;margin:0 0 9px;font-size:13px;font-weight:950}
.argos-rich-section-title .pd-dot{width:7px;height:7px;border-radius:50%;background:var(--accent);display:inline-block}
.argos-rich-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.argos-rich-card{padding:11px 12px;border:1px solid var(--line);border-radius:12px;background:var(--card2)}
.argos-rich-label{color:var(--muted);font-size:9px;font-weight:900;text-transform:uppercase;letter-spacing:.05em}
.argos-rich-value{margin-top:4px;font-size:13px;font-weight:800;line-height:1.35;word-break:break-word}
.argos-rich-text{padding:12px;border:1px solid var(--line);border-radius:12px;background:var(--card2);font-size:12px;line-height:1.55;white-space:pre-wrap}
.argos-rich-timeline{display:grid;gap:8px}
.argos-rich-event{display:grid;grid-template-columns:62px 1fr;gap:9px;align-items:start;padding:10px 12px;border:1px solid var(--line);border-radius:12px;background:var(--card2)}
.argos-rich-year{font-weight:950;color:var(--accent)}
.argos-rich-vehicle{border:1px solid var(--line);border-radius:13px;background:var(--card2);padding:12px;margin-top:8px}
.argos-rich-vehicle-head{display:flex;justify-content:space-between;gap:10px;align-items:flex-start;margin-bottom:9px}
.argos-rich-vehicle-title{font-weight:950;font-size:14px}
.argos-rich-chip{display:inline-flex;align-items:center;padding:5px 8px;border-radius:999px;background:var(--accentSoft);color:var(--accent);font-size:9px;font-weight:950}
.argos-rich-source{margin-top:12px;color:var(--muted);font-size:10px;line-height:1.4}
@media(max-width:560px){.argos-rich-grid{grid-template-columns:1fr}.argos-rich-event{grid-template-columns:1fr}}
</style>
<script>
(function(){
'use strict';

function argosRichValue(v){
  if(v===null||v===undefined||v==='')return '';
  if(Array.isArray(v))return v.map(argosRichValue).filter(Boolean).join(', ');
  if(typeof v==='object')return Object.entries(v).map(([k,x])=>`${k}: ${argosRichValue(x)}`).filter(Boolean).join(' · ');
  return String(v);
}

function argosRichLabel(key){
  const labels={
    name:'Denominación',label:'Denominación',nickname:'Apodo',category:'Categoría',
    manufacturer:'Constructor / fabricante',constructors:'Constructores',
    units:'Unidades construidas',units_built:'Unidades construidas',
    construction_years:'Años de construcción',year:'Año',in_service:'Entrada en servicio',
    status:'Estado',composition:'Composición',traction:'Tracción',voltage:'Tensión',
    gauge:'Ancho de vía',track:'Ancho de vía',power:'Potencia',max_speed:'Velocidad máxima',
    effort:'Esfuerzo de tracción',motors:'Motores',bogies:'Bogies',
    wheel_diameter:'Diámetro de ruedas',length:'Longitud',width:'Anchura',height:'Altura',
    weight:'Peso',axle_load:'Peso por eje',brakes:'Frenos',multiple_control:'Mando múltiple',
    coupling:'Enganche',signalling:'Señalización',equipment:'Equipamiento',comfort:'Confort',
    passengers:'Plazas',description:'Descripción',historical_review:'Reseña histórica',
    history:'Historia',notes:'Notas',observations:'Observaciones',source:'Fuente',
    source_note:'Notas de fuente',state:'Estado',depot:'Depósito',color:'Color',
    constructor:'Constructor',construction_number:'Nº de construcción',uic:'Matrícula UIC',
    renfe_number:'Número Renfe',branch:'Rama',type:'Tipo',side:'Lado / motor',
    position:'Posición',vehicle:'Vehículo'
  };
  return labels[key]||String(key).replaceAll('_',' ');
}

function argosRichObjectCards(obj,excluded){
  if(!obj||typeof obj!=='object'||Array.isArray(obj))return '';
  const skip=new Set(excluded||[]);
  return Object.entries(obj).filter(([k,v])=>!skip.has(k)&&v!==null&&v!==undefined&&v!==''&&typeof v!=='object'&&!Array.isArray(v))
    .map(([k,v])=>`<div class="argos-rich-card"><div class="argos-rich-label">${escapeHtml(argosRichLabel(k))}</div><div class="argos-rich-value">${escapeHtml(argosRichValue(v))}</div></div>`).join('');
}

function argosRichArrayText(arr){
  if(!Array.isArray(arr)||!arr.length)return '';
  return arr.map(item=>{
    if(typeof item==='string'||typeof item==='number')return `<div class="argos-rich-text">${escapeHtml(String(item))}</div>`;
    if(item&&typeof item==='object'){
      const title=item.title||item.name||item.year||'';
      const text=item.text||item.description||item.note||'';
      return `<div class="argos-rich-text">${title?`<b>${escapeHtml(String(title))}</b>`:''}${text?`<br>${escapeHtml(String(text))}`:''}</div>`;
    }
    return '';
  }).join('');
}

function argosRichTimeline(arr){
  if(!Array.isArray(arr)||!arr.length)return '';
  const rows=arr.map(item=>{
    if(!item||typeof item!=='object')return '';
    const year=item.year||item.date||'';
    const text=item.text||item.description||item.event||item.note||'';
    if(!year&&!text)return '';
    return `<div class="argos-rich-event"><div class="argos-rich-year">${escapeHtml(String(year))}</div><div>${escapeHtml(String(text))}</div></div>`;
  }).join('');
  return rows?`<div class="argos-rich-timeline">${rows}</div>`:'';
}

function argosRichSection(title,body){
  if(!body)return '';
  return `<section class="argos-rich-section"><div class="argos-rich-section-title"><span class="pd-dot"></span>${escapeHtml(title)}</div>${body}</section>`;
}

function argosRichVehicles(data,branch){
  const vehicles=(data&&data.vehicles)||{};
  const list=Object.entries(vehicles).filter(([n,v])=>String(v?.branch||'')===String(branch||''));
  if(!list.length)return '';
  return list.map(([number,record])=>{
    const cards=argosRichObjectCards(record,['branch','events','history','notes','description','series_info','branch_info']);
    const events=argosRichTimeline(record.events);
    const notes=argosRichArrayText(record.notes);
    return `<div class="argos-rich-vehicle">
      <div class="argos-rich-vehicle-head">
        <div><div class="argos-rich-vehicle-title">Vehículo ${escapeHtml(String(number))}</div>${record.renfe_number?`<div class="argos-rich-label">${escapeHtml(String(record.renfe_number))}</div>`:''}</div>
        ${record.side?`<span class="argos-rich-chip">${escapeHtml(String(record.side))}</span>`:''}
      </div>
      ${cards?`<div class="argos-rich-grid">${cards}</div>`:''}
      ${events?argosRichSection('Historia del vehículo',events):''}
      ${notes?argosRichSection('Notas del vehículo',notes):''}
    </div>`;
  }).join('');
}

function argosRichFichaHTML(ctx){
  const data=ctx.data||{};
  const rich=data.series_info||data.info||data.general||{};
  const branchInfo=(data.branches&&data.branches[String(ctx.branch)])||(data.branch_info&&data.branch_info[String(ctx.branch)])||{};
  const title=data.label||data.name||`Serie ${ctx.series}`;
  const vehicles=data.vehicles||{};
  const branchVehicles=Object.entries(vehicles).filter(([n,v])=>String(v?.branch||'')===String(ctx.branch||''));

  const generalCards=argosRichObjectCards(rich,['description','historical_review','history','events','notes','technical','technical_data','source','source_note']);
  const technical=rich.technical||rich.technical_data||{};
  const technicalCards=argosRichObjectCards(technical,[]);
  const generalHistory=rich.historical_review||rich.history||rich.description||'';
  const generalEvents=argosRichTimeline(rich.events);
  const generalNotes=argosRichArrayText(rich.notes);

  const branchCards=argosRichObjectCards(branchInfo,['description','history','events','notes','vehicles','source','source_note']);
  const branchHistory=branchInfo.history||branchInfo.description||'';
  const branchEvents=argosRichTimeline(branchInfo.events);
  const branchNotes=argosRichArrayText(branchInfo.notes);

  return `<div class="material-ficha"><div class="pokedex-shell">
    <div class="pokedex-hero">
      <div class="pokedex-hero-top"><div>
        <div class="pokedex-kicker">ARGOS · FICHA DE MATERIAL</div>
        <div class="pokedex-title">${escapeHtml(title)}</div>
        <div class="pokedex-subtitle">Rama <b>${escapeHtml(ctx.branch||'—')}</b>${branchVehicles.length?` · ${branchVehicles.length} vehículo${branchVehicles.length===1?'':'s'} identificado${branchVehicles.length===1?'':'s'}`:''}</div>
      </div><div class="pokedex-status">● EN REGISTRO</div></div>
      <div class="pokedex-badges">
        ${rich.nickname?`<span class="pokedex-chip">${escapeHtml(String(rich.nickname))}</span>`:''}
        ${rich.category?`<span class="pokedex-chip">${escapeHtml(String(rich.category))}</span>`:''}
      </div>
      <div class="pokedex-statrow">
        <div class="pokedex-stat"><div class="pokedex-stat-label">Serie</div><div class="pokedex-stat-value">${escapeHtml(ctx.series)}</div></div>
        <div class="pokedex-stat"><div class="pokedex-stat-label">Rama</div><div class="pokedex-stat-value">${escapeHtml(ctx.branch||'—')}</div></div>
        <div class="pokedex-stat"><div class="pokedex-stat-label">Vehículos</div><div class="pokedex-stat-value">${branchVehicles.length||1}</div></div>
      </div>
    </div>
    <div class="pokedex-layout argos-rich-wrap">
      ${argosRichSection('Información general',generalCards?`<div class="argos-rich-grid">${generalCards}</div>`:'')}
      ${argosRichSection('Historia de la serie',generalHistory?`<div class="argos-rich-text">${escapeHtml(String(generalHistory))}</div>`:'')}
      ${argosRichSection('Características técnicas',technicalCards?`<div class="argos-rich-grid">${technicalCards}</div>`:'')}
      ${argosRichSection('Eventos de la serie',generalEvents)}
      ${argosRichSection('Curiosidades y notas',generalNotes)}
      ${argosRichSection(`Rama ${ctx.branch||'—'} · información específica`,branchCards?`<div class="argos-rich-grid">${branchCards}</div>`:'')}
      ${argosRichSection(`Historia de la rama ${ctx.branch||'—'}`,branchHistory?`<div class="argos-rich-text">${escapeHtml(String(branchHistory))}</div>`:'')}
      ${argosRichSection(`Eventos de la rama ${ctx.branch||'—'}`,branchEvents)}
      ${argosRichSection(`Notas de la rama ${ctx.branch||'—'}`,branchNotes)}
      ${branchVehicles.length?`<section class="argos-rich-section"><div class="argos-rich-section-title"><span class="pd-dot"></span>Vehículos de la rama</div>${argosRichVehicles(data,ctx.branch)}</section>`:''}
      <section class="pokedex-section full">
        <div class="pokedex-section-title"><span class="pd-dot"></span>📝 Tus anotaciones e incidencias</div>
        ${argosMaterialFichaAnnotations(ctx.series,ctx.branch).map(item=>`<div class="pokedex-note"><strong>${escapeHtml(item.date||'Anotación personal')}</strong><br>${escapeHtml(item.text)}</div>`).join('')||'<div class="pokedex-note">Todavía no hay anotaciones personales para esta rama.</div>'}
      </section>
      ${rich.source?`<div class="argos-rich-source">Fuente: ${escapeHtml(String(rich.source))}${rich.last_checked?` · comprobado: ${escapeHtml(String(rich.last_checked))}`:''}</div>`:''}
    </div>
    <div class="pokedex-divider"></div>
    <div class="row pokedex-close"><button type="button" class="secondary" onclick="closeModal()">Cerrar ficha</button></div>
  </div></div>`;
}

window.argosMostrarFichaMaterial=function(ctx){
  document.getElementById('modalContent').innerHTML=argosRichFichaHTML(ctx);
  openModal();
};

window.argosAbrirFichaDesdeHistorial=function(series,branch){
  const s=String(series||''),b=String(branch||'');
  if(!s||!b){alert('Este servicio no tiene una serie o rama asociada.');return;}
  const data=(typeof ARGOS_MATERIAL_DATA!=='undefined'&&ARGOS_MATERIAL_DATA)?ARGOS_MATERIAL_DATA[s]:null;
  if(!data){alert('No hay una ficha de material cargada para la serie '+s+'.');return;}
  const matches=Object.entries(data.vehicles||{}).filter(([number,item])=>String(item?.branch||'')===b);
  const first=matches[0]||['',null];
  window.argosMostrarFichaMaterial({data,record:first[1],series:s,vehicle:first[0],branch:b,branchVehicles:matches.map(([number,record])=>({number,record}))});
};
})();
</script>

<!-- =========================================================
     ARGOS · POKÉDEX · PATCH V2
     Recupera la información técnica/histórica que ya existía
     en argosPokedexData() y la integra con la nueva ficha.
========================================================= -->
<script>
(function(){
'use strict';

const _argosFichaBase = window.argosMostrarFichaMaterial;

function argosPokedexRichFichaHTML(ctx){
  const data=ctx.data||{};
  const record=ctx.record||{};
  const pd=(typeof argosPokedexData==='function')
    ? argosPokedexData(ctx.series,ctx.branch,ctx.vehicle)
    : {};

  const title=data.label||data.name||`Serie ${ctx.series}`;

  const entries=[];
  Object.entries(record).forEach(([key,value])=>{
    if(['branch','events','history','notes','description'].includes(key)) return;
    if(value===null||value===undefined||value==='') return;
    entries.push(`<div class="pokedex-card">
      <div class="pokedex-label">${escapeHtml(argosMaterialFieldLabel(key))}</div>
      <div class="pokedex-value">${escapeHtml(argosMaterialFieldValue(value))}</div>
    </div>`);
  });

  const pdFields=[
    ['Fabricante',pd.manufacturer],
    ['Periodo de fabricación',pd.seriesYear],
    ['Velocidad máxima',pd.maxSpeed],
    ['Composición',pd.formation],
    ['Ancho de vía',pd.track]
  ];
  pdFields.forEach(([label,value])=>{
    if(value) entries.push(`<div class="pokedex-card">
      <div class="pokedex-label">${escapeHtml(label)}</div>
      <div class="pokedex-value">${escapeHtml(String(value))}</div>
    </div>`);
  });

  const description=pd.description||'';
  const events=(pd.events||[]).map(item=>`
    <div class="pokedex-event">
      <div class="pokedex-year">${escapeHtml(String(item.year||''))}</div>
      <div class="pokedex-event-text">${escapeHtml(String(item.text||''))}</div>
    </div>`).join('');

  const notes=(pd.notes||[]).map(item=>`
    <div class="pokedex-note">
      ${item.title?`<strong>${escapeHtml(String(item.title))}</strong><br>`:''}
      ${escapeHtml(String(item.text||''))}
    </div>`).join('');

  const branchInfo=(data.branches&&data.branches[String(ctx.branch)])||{};
  const branchEvents=(branchInfo.events||[]).map(item=>`
    <div class="pokedex-event">
      <div class="pokedex-year">${escapeHtml(String(item.year||''))}</div>
      <div class="pokedex-event-text">${escapeHtml(String(item.text||''))}</div>
    </div>`).join('');

  const vehicles=Object.entries(data.vehicles||{})
    .filter(([n,v])=>String(v?.branch||'')===String(ctx.branch||''));

  const vehicleCards=vehicles.map(([number,v])=>`
    <div class="argos-rich-vehicle">
      <div class="argos-rich-vehicle-head">
        <div>
          <div class="argos-rich-vehicle-title">Vehículo ${escapeHtml(number)}</div>
          ${v.renfe_number?`<div class="argos-rich-label">${escapeHtml(v.renfe_number)}</div>`:''}
        </div>
        ${v.side?`<span class="argos-rich-chip">${escapeHtml(v.side)}</span>`:''}
      </div>
      <div class="argos-rich-grid">
        ${argosRichObjectCards(v,['branch','events','history','notes'])}
      </div>
    </div>`).join('');

  return `<div class="material-ficha"><div class="pokedex-shell">
    <div class="pokedex-hero">
      <div class="pokedex-hero-top">
        <div>
          <div class="pokedex-kicker">ARGOS · FICHA DE MATERIAL</div>
          <div class="pokedex-title">${escapeHtml(title)}</div>
          <div class="pokedex-subtitle">Rama <b>${escapeHtml(ctx.branch||'—')}</b> · ${vehicles.length||1} vehículo${(vehicles.length||1)===1?'':'s'} identificado${(vehicles.length||1)===1?'':'s'}</div>
        </div>
        <div class="pokedex-status">● EN REGISTRO</div>
      </div>
      <div class="pokedex-badges">
        ${pd.category?`<span class="pokedex-chip">${escapeHtml(pd.category)}</span>`:''}
        ${pd.nickname?`<span class="pokedex-chip">${escapeHtml(pd.nickname)}</span>`:''}
      </div>
      <div class="pokedex-statrow">
        <div class="pokedex-stat"><div class="pokedex-stat-label">Serie</div><div class="pokedex-stat-value">${escapeHtml(ctx.series)}</div></div>
        <div class="pokedex-stat"><div class="pokedex-stat-label">Rama</div><div class="pokedex-stat-value">${escapeHtml(ctx.branch||'—')}</div></div>
        <div class="pokedex-stat"><div class="pokedex-stat-label">Vehículos</div><div class="pokedex-stat-value">${vehicles.length||1}</div></div>
      </div>
    </div>

    <div class="pokedex-layout argos-rich-wrap">

      ${entries.length?`
      <section class="pokedex-section full">
        <div class="pokedex-section-title"><span class="pd-dot"></span>Identificación y características</div>
        <div class="pokedex-grid">${entries.join('')}</div>
      </section>`:''}

      ${description?`
      <section class="pokedex-section full">
        <div class="pokedex-section-title"><span class="pd-dot"></span>Sobre la serie</div>
        <div class="pokedex-note">${escapeHtml(description)}</div>
      </section>`:''}

      ${events?`
      <section class="pokedex-section full">
        <div class="pokedex-section-title"><span class="pd-dot"></span>Historia</div>
        <div class="pokedex-timeline">${events}</div>
      </section>`:''}

      ${branchEvents?`
      <section class="pokedex-section full">
        <div class="pokedex-section-title"><span class="pd-dot"></span>Historia de la rama ${escapeHtml(ctx.branch||'')}</div>
        <div class="pokedex-timeline">${branchEvents}</div>
      </section>`:''}

      ${notes?`
      <section class="pokedex-section full">
        <div class="pokedex-section-title"><span class="pd-dot"></span>⭐ Curiosidades y notas</div>
        ${notes}
      </section>`:''}

      ${vehicleCards?`
      <section class="pokedex-section full">
        <div class="pokedex-section-title"><span class="pd-dot"></span>Vehículos de la rama</div>
        ${vehicleCards}
      </section>`:''}

      <section class="pokedex-section full">
        <div class="pokedex-section-title"><span class="pd-dot"></span>📝 Tus anotaciones e incidencias</div>
        ${argosMaterialFichaAnnotations(ctx.series,ctx.branch).map(item=>
          `<div class="pokedex-note"><strong>${escapeHtml(item.date||'Anotación personal')}</strong><br>${escapeHtml(item.text)}</div>`
        ).join('')||'<div class="pokedex-note">Todavía no hay anotaciones personales para esta rama.</div>'}
      </section>

      <div class="argos-rich-source">
        Información técnica e histórica integrada desde la base de ARGOS. Los datos de material identificados proceden del JSON de material; la información de serie procede de la base Pokédex ya existente en el proyecto.
      </div>
    </div>

    <div class="pokedex-divider"></div>
    <div class="row pokedex-close">
      <button type="button" class="secondary" onclick="closeModal()">Cerrar ficha</button>
    </div>
  </div></div>`;
}

window.argosMostrarFichaMaterial=function(ctx){
  document.getElementById('modalContent').innerHTML=argosPokedexRichFichaHTML(ctx);
  openModal();
};
})();
</script>

<style>
.argos-pd-v3 .pokedex-layout{display:block}
.argos-pd-v3 .pokedex-section.full{width:100%}
.argos-pd-v3 .pokedex-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.argos-pd-v3 .pd-empty{padding:14px 16px;border:1px dashed var(--line);border-radius:14px;color:var(--muted);font-size:12px;line-height:1.45;background:var(--card2)}
.argos-pd-v3 .pd-hero-note{margin-top:12px;padding:11px 13px;border-radius:12px;background:var(--accentSoft);font-size:11px;line-height:1.45}
.argos-pd-v3 .pd-vehicle-list{display:grid;grid-template-columns:1fr;gap:10px}
.argos-pd-v3 .argos-rich-vehicle{width:100%;box-sizing:border-box}
@media(max-width:700px){.argos-pd-v3 .pokedex-grid,.argos-pd-v3 .argos-rich-grid{grid-template-columns:1fr}}
</style>
<script>
(function(){
'use strict';
function argosPDV3SeriesData(series){
  const s=String(series||'');
  let data=null;
  if(typeof ARGOS_MATERIAL_DATA!=='undefined'&&ARGOS_MATERIAL_DATA)data=ARGOS_MATERIAL_DATA[s]||ARGOS_MATERIAL_DATA[s.replace(/^0+/,'')];
  if(!data)data={label:`Serie ${s}`,vehicles:{}};
  if(!data.label&&!data.name)data.label=`Serie ${s}`;
  if(!data.vehicles)data.vehicles={};
  return data;
}
function argosPDV3Vehicles(data,branch){
  if(!branch)return [];
  return Object.entries(data.vehicles||{}).filter(([n,v])=>String(v?.branch??'')===String(branch));
}
function argosPDV3Ficha(ctx){
  const series=String(ctx?.series||''),branch=String(ctx?.branch||''),vehicle=String(ctx?.vehicle||'');
  const data=argosPDV3SeriesData(series),record=ctx?.record||{};
  const pd=(typeof argosPokedexData==='function')?argosPokedexData(series,branch,vehicle):{};
  const branchVehicles=argosPDV3Vehicles(data,branch);
  const title=data.label||data.name||`Serie ${series}`;
  const entries=[];
  Object.entries(record).forEach(([key,value])=>{
    if(['branch','events','history','notes','description'].includes(key)||value===null||value===undefined||value==='')return;
    entries.push(`<div class="pokedex-card"><div class="pokedex-label">${escapeHtml(argosMaterialFieldLabel(key))}</div><div class="pokedex-value">${escapeHtml(argosMaterialFieldValue(value))}</div></div>`);
  });
  [['Fabricante',pd.manufacturer],['Periodo de fabricación',pd.seriesYear],['Velocidad máxima',pd.maxSpeed],['Composición',pd.formation],['Ancho de vía',pd.track]].forEach(([label,value])=>{
    if(value)entries.push(`<div class="pokedex-card"><div class="pokedex-label">${escapeHtml(label)}</div><div class="pokedex-value">${escapeHtml(String(value))}</div></div>`);
  });
  const seriesEvents=Array.isArray(pd.events)?pd.events.map(item=>`<div class="pokedex-event"><div class="pokedex-year">${escapeHtml(String(item?.year||''))}</div><div class="pokedex-event-text">${escapeHtml(String(item?.text||''))}</div></div>`).join(''):'';
  const notes=Array.isArray(pd.notes)?pd.notes.map(item=>`<div class="pokedex-note">${item?.title?`<strong>${escapeHtml(String(item.title))}</strong><br>`:''}${escapeHtml(String(item?.text||''))}</div>`).join(''):'';
  const branchInfo=(data.branches&&data.branches[String(branch)])||{};
  const branchEvents=Array.isArray(branchInfo.events)?branchInfo.events.map(item=>`<div class="pokedex-event"><div class="pokedex-year">${escapeHtml(String(item?.year||''))}</div><div class="pokedex-event-text">${escapeHtml(String(item?.text||''))}</div></div>`).join(''):'';
  const vehiclesHTML=branchVehicles.map(([number,v])=>{
    const cards=argosRichObjectCards(v,['branch','events','history','notes','description']);
    const events=argosRichTimeline(v.events),notesV=argosRichArrayText(v.notes);
    return `<article class="argos-rich-vehicle"><div class="argos-rich-vehicle-head"><div><div class="argos-rich-vehicle-title">Vehículo ${escapeHtml(String(number))}</div>${v.renfe_number?`<div class="argos-rich-label">${escapeHtml(String(v.renfe_number))}</div>`:''}</div>${v.side?`<span class="argos-rich-chip">${escapeHtml(String(v.side))}</span>`:''}</div>${cards?`<div class="argos-rich-grid">${cards}</div>`:''}${events?`<div class="argos-rich-section"><div class="argos-rich-section-title"><span class="pd-dot"></span>Historia del vehículo</div>${events}</div>`:''}${notesV?`<div class="argos-rich-section"><div class="argos-rich-section-title"><span class="pd-dot"></span>Notas</div>${notesV}</div>`:''}</article>`;
  }).join('');
  const userNotes=argosMaterialFichaAnnotations(series,branch).map(item=>`<div class="pokedex-note"><strong>${escapeHtml(item.date||'Anotación personal')}</strong><br>${escapeHtml(item.text)}</div>`).join('');
  return `<div class="material-ficha argos-pd-v3"><div class="pokedex-shell">
    <div class="pokedex-hero"><div class="pokedex-hero-top"><div><div class="pokedex-kicker">ARGOS · FICHA DE MATERIAL</div><div class="pokedex-title">${escapeHtml(title)}</div><div class="pokedex-subtitle">${escapeHtml(branch||'Sin rama asociada')}${branchVehicles.length?` · ${branchVehicles.length} vehículo${branchVehicles.length===1?'':'s'} identificado${branchVehicles.length===1?'':'s'}`:''}</div></div><div class="pokedex-status">● EN REGISTRO</div></div>
      <div class="pokedex-badges">${pd.category?`<span class="pokedex-chip">${escapeHtml(String(pd.category))}</span>`:''}${pd.nickname?`<span class="pokedex-chip">${escapeHtml(String(pd.nickname))}</span>`:''}${record.type?`<span class="pokedex-chip">${escapeHtml(String(record.type))}</span>`:''}</div>
      <div class="pokedex-statrow"><div class="pokedex-stat"><div class="pokedex-stat-label">Serie</div><div class="pokedex-stat-value">${escapeHtml(series||'—')}</div></div><div class="pokedex-stat"><div class="pokedex-stat-label">Rama</div><div class="pokedex-stat-value">${escapeHtml(branch||'—')}</div></div><div class="pokedex-stat"><div class="pokedex-stat-label">Vehículos</div><div class="pokedex-stat-value">${branchVehicles.length}</div></div></div>
      ${!branch?`<div class="pd-hero-note">Esta entrada no tiene una rama asociada. Se muestra la información disponible de la serie.</div>`:''}
    </div>
    <div class="pokedex-layout">
      ${entries.length?`<section class="pokedex-section full"><div class="pokedex-section-title"><span class="pd-dot"></span>Identificación y datos del material</div><div class="pokedex-grid">${entries.join('')}</div></section>`:''}
      ${pd.description?`<section class="pokedex-section full"><div class="pokedex-section-title"><span class="pd-dot"></span>Información general de la serie</div><div class="pokedex-note">${escapeHtml(String(pd.description))}</div></section>`:''}
      ${seriesEvents?`<section class="pokedex-section full"><div class="pokedex-section-title"><span class="pd-dot"></span>Historia de la serie</div><div class="pokedex-timeline">${seriesEvents}</div></section>`:''}
      ${notes?`<section class="pokedex-section full"><div class="pokedex-section-title"><span class="pd-dot"></span>⭐ Curiosidades</div>${notes}</section>`:''}
      ${branch?`<section class="pokedex-section full"><div class="pokedex-section-title"><span class="pd-dot"></span>Rama ${escapeHtml(branch)}</div>${branchInfo.description?`<div class="pokedex-note">${escapeHtml(String(branchInfo.description))}</div>`:''}${branchEvents?`<div class="pokedex-timeline">${branchEvents}</div>`:''}${!branchInfo.description&&!branchEvents?'<div class="pd-empty">No hay información específica de esta rama en la base actual.</div>':''}</section>`:''}
      ${branch&&!branchVehicles.length?`<section class="pokedex-section full"><div class="pd-empty">La serie está registrada, pero no hay vehículos asociados a la rama ${escapeHtml(branch)} en la base actual. La ficha de la serie sigue disponible.</div></section>`:''}
      ${vehiclesHTML?`<section class="pokedex-section full"><div class="pokedex-section-title"><span class="pd-dot"></span>Vehículos de la rama</div><div class="pd-vehicle-list">${vehiclesHTML}</div></section>`:''}
      <section class="pokedex-section full"><div class="pokedex-section-title"><span class="pd-dot"></span>📝 Tus anotaciones e incidencias</div>${userNotes||'<div class="pd-empty">Todavía no hay anotaciones personales para esta rama.</div>'}</section>
      ${!entries.length&&!pd.description&&!seriesEvents&&!notes&&!branchEvents&&!vehiclesHTML?`<section class="pokedex-section full"><div class="pd-empty">La serie existe en ARGOS, pero todavía no tiene información técnica cargada en la Pokédex.</div></section>`:''}
    </div>
    <div class="pokedex-divider"></div><div class="row pokedex-close"><button type="button" class="secondary" onclick="closeModal()">Cerrar ficha</button></div>
  </div></div>`;
}
window.argosAbrirFichaDesdeHistorial=function(series,branch){
  const s=String(series||'').trim(),b=String(branch||'').trim();
  if(!s){alert('Este servicio no tiene una serie de material asociada.');return;}
  const data=argosPDV3SeriesData(s);
  const matches=argosPDV3Vehicles(data,b);
  let record=null,vehicle='';
  if(matches.length){vehicle=String(matches[0][0]);record=matches[0][1];}
  else if(b&&data.vehicles){
    const first=Object.entries(data.vehicles)[0];
    if(first){vehicle=String(first[0]);record=first[1];}
  }
  try{
    document.getElementById('modalContent').innerHTML=argosPDV3Ficha({data,record:record||{},series:s,vehicle,branch:b});
    openModal();
  }catch(error){
    console.error('ARGOS · error de ficha:',error);
    document.getElementById('modalContent').innerHTML=`<div class="material-ficha"><div class="pokedex-shell"><div class="pokedex-title">${escapeHtml(data.label||data.name||('Serie '+s))}</div><div class="pd-empty">La ficha no ha podido cargarse completa. El historial sigue intacto.</div><div class="row pokedex-close"><button type="button" class="secondary" onclick="closeModal()">Cerrar</button></div></div></div>`;
    openModal();
  }
};
})();
</script>

<!-- =========================================================
     ARGOS · FICHA MATERIAL · V4
     Corrección definitiva de apertura.

     La V3 introducía una segunda plantilla que podía fallar
     por dependencias entre módulos. V4 vuelve a utilizar la
     plantilla maestra argosMaterialFichaHTML(), que ya existe
     en la base y funciona, y solo corrige la selección del
     material desde el historial.
========================================================= -->
<style>
/* Ficha material: presentación más limpia sin cambiar la base */
.material-ficha .pokedex-shell{
  width:100%;
  max-width:1100px;
  margin:0 auto;
}
.material-ficha .pokedex-layout{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:14px;
  padding:18px;
}
.material-ficha .pokedex-section{
  min-width:0;
  border:1px solid var(--line);
  border-radius:16px;
  background:var(--card2);
  padding:15px;
}
.material-ficha .pokedex-section.full{
  grid-column:1 / -1;
}
.material-ficha .pokedex-section-title{
  margin-bottom:12px;
}
.material-ficha .pokedex-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:9px;
}
.material-ficha .pokedex-card{
  min-width:0;
  border:1px solid var(--line);
  border-radius:12px;
  padding:11px 12px;
  background:var(--card);
}
.material-ficha .pokedex-value{
  overflow-wrap:anywhere;
}
.material-ficha .pokedex-note{
  line-height:1.55;
}
.material-ficha .pokedex-timeline{
  display:grid;
  gap:8px;
}
.material-ficha .pokedex-event{
  border:1px solid var(--line);
  border-radius:12px;
  padding:11px 12px;
  background:var(--card);
}
.material-ficha .pokedex-close{
  padding:0 18px 18px;
}
.material-ficha .pokedex-photo{
  display:none !important;
}
/* Si una ficha no tiene datos específicos, sigue teniendo aspecto
   de ficha y no de error. */
.material-ficha .pokedex-grid:empty::after{
  content:'Información específica del vehículo no disponible';
  display:block;
  grid-column:1/-1;
  padding:12px;
  border:1px dashed var(--line);
  border-radius:12px;
  color:var(--muted);
  font-size:12px;
}
@media(max-width:760px){
  .material-ficha .pokedex-layout{
    grid-template-columns:1fr;
    padding:12px;
  }
  .material-ficha .pokedex-section.full{
    grid-column:auto;
  }
  .material-ficha .pokedex-grid{
    grid-template-columns:1fr;
  }
}
</style>

<script>
(function(){
'use strict';

/*
 * V4 NO sustituye la plantilla maestra.
 * Solo hace robusta la búsqueda desde el historial.
 */

function argosFichaV4Data(series){
  const s=String(series||'').trim();

  if(typeof ARGOS_MATERIAL_DATA!=='undefined' && ARGOS_MATERIAL_DATA){
    return ARGOS_MATERIAL_DATA[s]
      || ARGOS_MATERIAL_DATA[s.replace(/^0+/,'')]
      || {label:'Serie '+s,vehicles:{}};
  }

  return {label:'Serie '+s,vehicles:{}};
}

function argosFichaV4FindVehicle(data,branch){
  const vehicles=(data && data.vehicles) ? data.vehicles : {};
  const wanted=String(branch||'').trim();

  /* Primero: vehículo que pertenece exactamente a la rama. */
  if(wanted){
    for(const [number,item] of Object.entries(vehicles)){
      if(String(item?.branch||'').trim()===wanted){
        return {
          vehicle:String(number),
          record:item
        };
      }
    }
  }

  /* Segundo: si no hay rama coincidente, no inventamos una.
     Dejamos la ficha general de la serie. */
  return {
    vehicle:'',
    record:null
  };
}

/*
 * Esta es la función que usa el botón "Ficha material".
 * No depende de la nueva plantilla V3.
 */
window.argosMostrarFichaMaterial=function(ctx){
  const safeCtx=ctx||{};
  const series=String(safeCtx.series||'').trim();
  const branch=String(safeCtx.branch||'').trim();
  const data=safeCtx.data || argosFichaV4Data(series);

  const finalCtx={
    data:data,
    record:safeCtx.record||null,
    series:series,
    vehicle:String(safeCtx.vehicle||''),
    branch:branch
  };

  /*
   * La plantilla original ya forma parte de la base maestra.
   * Si existe, es la que renderizamos.
   */
  try{
    document.getElementById('modalContent').innerHTML=
      argosMaterialFichaHTML(finalCtx);

    openModal();
    return;
  }catch(error){
    console.error('ARGOS · Ficha material V4 · error de plantilla:',error);
  }

  /*
   * Fallback muy sencillo: incluso si hubiera un problema en
   * la plantilla, nunca dejamos la ventana vacía.
   */
  const title=(data && (data.label||data.name))
    ||('Serie '+series);

  document.getElementById('modalContent').innerHTML=`
    <div class="material-ficha">
      <div class="pokedex-shell">
        <div class="pokedex-hero">
          <div class="pokedex-kicker">ARGOS · FICHA DE MATERIAL</div>
          <div class="pokedex-title">${escapeHtml(title)}</div>
          <div class="pokedex-subtitle">
            ${branch?'Rama '+escapeHtml(branch):'Información general de la serie'}
          </div>
        </div>

        <div class="pokedex-layout">
          <section class="pokedex-section full">
            <div class="pokedex-section-title">
              <span class="pd-dot"></span>Información del material
            </div>
            <div class="pokedex-note">
              La serie está registrada en ARGOS.
              ${branch?'No hay datos específicos cargados para esta rama.':''}
            </div>
          </section>

          <section class="pokedex-section full">
            <div class="pokedex-section-title">
              <span class="pd-dot"></span>Identificación
            </div>
            <div class="pokedex-grid">
              <div class="pokedex-card">
                <div class="pokedex-label">Serie</div>
                <div class="pokedex-value">${escapeHtml(series||'—')}</div>
              </div>
              <div class="pokedex-card">
                <div class="pokedex-label">Rama</div>
                <div class="pokedex-value">${escapeHtml(branch||'—')}</div>
              </div>
            </div>
          </section>
        </div>

        <div class="pokedex-divider"></div>
        <div class="row pokedex-close">
          <button type="button" class="secondary" onclick="closeModal()">Cerrar ficha</button>
        </div>
      </div>
    </div>`;

  openModal();
};

/*
 * Apertura desde el historial:
 * - ya NO exige rama
 * - busca el vehículo correcto si existe
 * - si no lo encuentra, abre la ficha general de la serie
 * - nunca hace alert simplemente porque falte una rama
 */
window.argosAbrirFichaDesdeHistorial=function(series,branch){
  const s=String(series||'').trim();
  const b=String(branch||'').trim();

  if(!s){
    alert('Este servicio no tiene una serie de material asociada.');
    return;
  }

  const data=argosFichaV4Data(s);
  const found=argosFichaV4FindVehicle(data,b);

  argosMostrarFichaMaterial({
    data:data,
    record:found.record,
    series:s,
    vehicle:found.vehicle,
    branch:b
  });
};

})();
</script>

<!-- =========================================================
     ARGOS · POKÉDEX · V5
     Corrección histórica S-100 / S-101.

     Regla:
     - La información general de una serie NO se aplica
       automáticamente a todas sus ramas.
     - La procedencia histórica se resuelve por rama.
     - Se elimina la nota genérica errónea sobre la rama 12.
========================================================= -->
<script>
(function(){
'use strict';

const argosPokedexDataBase = window.argosPokedexData;

window.argosPokedexData = function(series, branch, vehicle){
  const s=String(series||'');
  const b=String(branch||'');

  const base=typeof argosPokedexDataBase==='function'
    ?argosPokedexDataBase(s,b,vehicle)
    :{
      category:'',
      nickname:'',
      manufacturer:'',
      seriesYear:'',
      maxSpeed:'',
      formation:'',
      track:'',
      description:'',
      events:[],
      notes:[]
    };

  const result={
    ...base,
    events:Array.isArray(base.events)?[...base.events]:[],
    notes:Array.isArray(base.notes)?[...base.notes]:[]
  };

  /*
   * La nota antigua decía:
   * "La rama 12 procede de la antigua serie 101..."
   *
   * Eso era demasiado genérico y provocaba que ARGOS pudiera
   * mostrarlo en cualquier rama de la S-100.
   */
  if(s==='100'){
    result.notes=result.notes.filter(item=>{
      const text=String(item?.text||'').toLowerCase();
      return !text.includes('rama 12')
        && !text.includes('antigua serie 101')
        && !text.includes('antigua s-101');
    });

    /*
     * Las seis ramas de la antigua S-101 se reformaron y
     * pasaron a la S-100 como 100.019 a 100.024.
     * Por tanto, la rama 6 no debe aparecer como procedente
     * de la S-101.
     */
    const former101={
      '19':'101.101 → S-100 100.019',
      '20':'101.102 → S-100 100.020',
      '21':'101.103 → S-100 100.021',
      '22':'101.104 → S-100 100.022',
      '23':'101.105 → S-100 100.023',
      '24':'101.106 → S-100 100.024'
    };

    if(former101[b]){
      result.notes.unshift({
        title:'Procedencia histórica',
        text:`Esta rama procede de la antigua S-101: ${former101[b]}.`
      });
    }

    /*
     * Rama 12: el dato correcto es más concreto.
     * El vehículo 9-100-119-7 figura en Listadotren como
     * antiguo 101.101, pero la propia ficha explica que en
     * 2011 las motrices 119 y 219, originales de la rama 19,
     * fueron instaladas en la rama 12.
     *
     * No afirmamos que "la rama 12 completa" sea una antigua
     * rama S-101.
     */
    if(b==='12'){
      result.notes.unshift({
        title:'Historia de la rama 12',
        text:'La rama 12 no debe considerarse sin más una antigua rama S-101. La ficha de Listadotren del 9-100-119-7 indica que esta motriz fue originalmente de la rama 19 y que en 2011 las motrices 9-100-119-7 y 9-100-219-5, originales de la rama 19, fueron instaladas en la rama 12.'
      });
    }
  }

  return result;
};

})();
</script>

<!-- =========================================================
 ARGOS · PECULIARIDADES POR RAMA · V6

 La ficha ya tenía información general de serie. Esta capa añade
 información HISTÓRICA/OPERATIVA específica de cada rama.

 Importante:
 - Una peculiaridad de una rama nunca se muestra en otra.
 - Solo se introducen hechos que podemos respaldar.
 - La estructura queda preparada para seguir ampliando todas
   las series sin tocar la plantilla ni el historial.
========================================================= -->
<script>
(function(){
'use strict';

const argosPokedexAnterior = window.argosPokedexData;

const ARGOS_BRANCH_PECULIARITIES = {
  '100': {
    '1': [
      {
        title:'Primera rama de la serie',
        text:'La rama 01 fue una de las primeras unidades construidas y estuvo a cargo del segundo servicio del primer día de explotación comercial del AVE Madrid-Sevilla, el 21 de abril de 1992.'
      }
    ],
    '2': [
      {
        title:'Pruebas de velocidad',
        text:'La rama 02 alcanzó casi 330 km/h durante las pruebas realizadas en la nueva línea de alta velocidad española en enero de 1992.'
      }
    ],
    '12': [
      {
        title:'Intercambio de cabezas tractoras',
        text:'Esta rama tiene una historia especialmente singular: sus cabezas tractoras fueron intercambiadas con las de la rama 19. La 9-100-119-7 procede originalmente de la antigua S-101.101 y en 2011 las motrices 9-100-119-7 y 9-100-219-5, originales de la rama 19, fueron instaladas en la rama 12.'
      }
    ],
    '13': [
      {
        title:'Juan Sebastián Elcano',
        text:'La unidad 100.013 fue bautizada «Juan Sebastián Elcano» con motivo de la inauguración del AVE Madrid-Castellón el 22 de enero de 2018. Fue la unidad utilizada para realizar el primer recorrido inaugural de este servicio.'
      }
    ],
    '15': [
      {
        title:'Récord de velocidad',
        text:'La rama 15 alcanzó 357 km/h durante las pruebas realizadas en la LAV Madrid-Sevilla el 23 de abril de 1993, uno de los hitos de velocidad más destacados de la serie 100.'
      },
      {
        title:'Subserie 100F',
        text:'La rama 15 forma parte de las ramas 15 a 24 adaptadas para circular por la red francesa, conocidas como subserie 100F.'
      }
    ],
    '16': [
      {
        title:'Subserie 100F',
        text:'La rama 16 pertenece al grupo de ramas 15 a 24 adaptadas para la explotación internacional con Francia.'
      }
    ],
    '17': [
      {
        title:'Origen del pedido original',
        text:'La rama 17 pertenece a las dos unidades que completaron posteriormente el parque de S-100 original junto con la rama 18, dentro del pedido inicial de 24 trenes.'
      },
      {
        title:'Subserie 100F',
        text:'La rama 17 fue incluida posteriormente entre las ramas adaptadas para circulación por Francia.'
      }
    ],
    '18': [
      {
        title:'Origen del pedido original',
        text:'La rama 18 fue una de las dos unidades que se incorporaron al parque S-100 después de las primeras 16 ramas.'
      },
      {
        title:'Subserie 100F',
        text:'La rama 18 fue incluida posteriormente entre las ramas adaptadas para circulación por Francia.'
      }
    ],
    '19': [
      {
        title:'Procedencia de la antigua S-101',
        text:'La rama 19 procede de la antigua S-101.101 (GL01), transformada a ancho internacional e integrada de nuevo en la serie 100.'
      },
      {
        title:'Subserie 100F',
        text:'La rama 19 forma parte de las ramas 15 a 24 adaptadas para circular por Francia.'
      }
    ],
    '20': [
      {
        title:'Procedencia de la antigua S-101',
        text:'La rama 20 procede de la antigua S-101.102 (GL02), posteriormente reformada a S-100.020.'
      },
      {
        title:'Subserie 100F',
        text:'La rama 20 forma parte de las ramas adaptadas para circulación por Francia.'
      }
    ],
    '21': [
      {
        title:'Procedencia de la antigua S-101',
        text:'La rama 21 procede de la antigua S-101.103 (GL03), posteriormente reformada a S-100.021.'
      },
      {
        title:'Subserie 100F',
        text:'La rama 21 forma parte de las ramas adaptadas para circulación por Francia.'
      }
    ],
    '22': [
      {
        title:'Procedencia de la antigua S-101',
        text:'La rama 22 procede de la antigua S-101.104 (GL04), posteriormente reformada a S-100.022.'
      },
      {
        title:'Subserie 100F',
        text:'La rama 22 forma parte de las ramas adaptadas para circulación por Francia.'
      }
    ],
    '23': [
      {
        title:'Procedencia de la antigua S-101',
        text:'La rama 23 procede de la antigua S-101.105 (GL05), posteriormente reformada a S-100.023.'
      },
      {
        title:'Subserie 100F',
        text:'La rama 23 forma parte de las ramas adaptadas para circulación por Francia y llegó a realizar viajes de pruebas hasta Lyon.'
      }
    ],
    '24': [
      {
        title:'Procedencia de la antigua S-101',
        text:'La rama 24 procede de la antigua S-101.106 (GL06), posteriormente reformada a S-100.024.'
      },
      {
        title:'Subserie 100F',
        text:'La rama 24 forma parte de las ramas adaptadas para circulación por Francia.'
      }
    ]
  }
};

function argosBranchKey(value){
  return String(value||'').replace(/^0+/,'') || '0';
}

window.argosPokedexData=function(series,branch,vehicle){
  const base=typeof argosPokedexAnterior==='function'
    ?argosPokedexAnterior(series,branch,vehicle)
    :{events:[],notes:[]};

  const result={
    ...base,
    events:Array.isArray(base.events)?[...base.events]:[],
    notes:Array.isArray(base.notes)?[...base.notes]:[]
  };

  const serie=String(series||'');
  const rama=argosBranchKey(branch);
  const extras=(ARGOS_BRANCH_PECULIARITIES[serie]||{})[rama]||[];

  /* Evita duplicar la información histórica que ya añadimos en V5. */
  const existing=result.notes.map(x=>String(x?.text||'').toLowerCase());

  extras.forEach(item=>{
    const text=String(item.text||'');
    if(!existing.includes(text.toLowerCase())){
      result.notes.unshift({
        title:item.title,
        text
      });
    }
  });

  return result;
};

window.ARGOS_BRANCH_PECULIARITIES=ARGOS_BRANCH_PECULIARITIES;

})();
</script>

<!-- =========================================================
 ARGOS · PECULIARIDADES AUTOMÁTICAS DESDE MATERIAL.JSON · V7

 Además de las peculiaridades históricas verificadas que ARGOS
 lleva incorporadas por rama, esta capa recoge automáticamente
 cualquier nota/observación específica que venga en material.json.
 Así no hay que programar manualmente cada vehículo si la fuente
 ya contiene la información.
========================================================= -->
<script>
(function(){
'use strict';

const argosPokedexV6=window.argosPokedexData;

function argosFindRecordForPokedex(series,branch,vehicle){
  const data=(typeof ARGOS_MATERIAL_DATA!=='undefined')
    ?ARGOS_MATERIAL_DATA?.[String(series)]
    :null;

  if(!data || !data.vehicles)return null;

  const wantedVehicle=String(vehicle||'').replace(/\D/g,'').padStart(3,'0');
  let record=data.vehicles[wantedVehicle]||null;

  if(!record && branch){
    const wantedBranch=String(branch||'').replace(/\D/g,'');
    for(const item of Object.values(data.vehicles)){
      if(String(item?.branch||'').replace(/\D/g,'')===wantedBranch){
        record=item;
        break;
      }
    }
  }
  return record;
}

function argosPeculiarityText(value){
  if(value===null || value===undefined || value==='')return '';
  if(Array.isArray(value))return value.filter(Boolean).map(String).join(' · ');
  if(typeof value==='object'){
    if(value.text)return String(value.text);
    return Object.values(value).filter(Boolean).map(String).join(' · ');
  }
  return String(value);
}

window.argosPokedexData=function(series,branch,vehicle){
  const base=typeof argosPokedexV6==='function'
    ?argosPokedexV6(series,branch,vehicle)
    :{notes:[],events:[]};

  const result={
    ...base,
    notes:Array.isArray(base.notes)?[...base.notes]:[],
    events:Array.isArray(base.events)?[...base.events]:[]
  };

  const record=argosFindRecordForPokedex(series,branch,vehicle);
  if(!record)return result;

  const additions=[];
  if(record.notes){
    const text=argosPeculiarityText(record.notes);
    if(text)additions.push({
      title:'Peculiaridad de esta rama',
      text
    });
  }

  if(record.observations){
    const text=argosPeculiarityText(record.observations);
    if(text)additions.push({
      title:'Observaciones del vehículo',
      text
    });
  }

  if(record.source_note){
    const text=argosPeculiarityText(record.source_note);
    if(text)additions.push({
      title:'Nota de la fuente',
      text
    });
  }

  const existing=result.notes.map(x=>String(x?.text||'').trim().toLowerCase());

  additions.reverse().forEach(item=>{
    if(!existing.includes(item.text.trim().toLowerCase())){
      result.notes.unshift(item);
    }
  });

  return result;
};

})();
</script>

<!-- =========================================================
     ARGOS · FICHA UNIVERSAL · FINAL
     Una sola ficha para cualquier serie/rama/vehículo.
     No inventa datos: muestra lo que exista en ARGOS/material.json
     y mantiene las peculiaridades históricas de la Pokédex.
========================================================= -->
<style>
.argos-universal-ficha .pokedex-layout{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:14px;
  padding:18px;
}
.argos-universal-ficha .pokedex-section{
  min-width:0;
  border:1px solid var(--line);
  border-radius:16px;
  background:var(--card2);
  padding:15px;
}
.argos-universal-ficha .pokedex-section.full{grid-column:1/-1}
.argos-universal-ficha .pokedex-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:9px;
}
.argos-universal-ficha .pokedex-card{
  min-width:0;
  border:1px solid var(--line);
  border-radius:12px;
  padding:11px 12px;
  background:var(--card);
}
.argos-universal-ficha .pokedex-value{
  overflow-wrap:anywhere;
  line-height:1.35;
}
.argos-universal-ficha .pokedex-note{line-height:1.55}
.argos-universal-ficha .pokedex-timeline{display:grid;gap:8px}
.argos-universal-ficha .pokedex-event{
  border:1px solid var(--line);
  border-radius:12px;
  padding:11px 12px;
  background:var(--card);
}
.argos-universal-ficha .pd-empty{
  padding:14px 16px;
  border:1px dashed var(--line);
  border-radius:14px;
  color:var(--muted);
  font-size:12px;
  line-height:1.5;
  background:var(--card);
}
.argos-universal-ficha .argos-rich-vehicle{
  width:100%;
  box-sizing:border-box;
  margin-top:10px;
}
.argos-universal-ficha .argos-rich-vehicle:first-child{margin-top:0}
@media(max-width:760px){
  .argos-universal-ficha .pokedex-layout{
    grid-template-columns:1fr;
    padding:12px;
  }
  .argos-universal-ficha .pokedex-section.full{grid-column:auto}
  .argos-universal-ficha .pokedex-grid{grid-template-columns:1fr}
}
</style>

<script>
(function(){
'use strict';

function argosUniversalDigits(value){
  return String(value??'').replace(/\D/g,'');
}

function argosUniversalSeriesKey(value){
  const digits=argosUniversalDigits(value);
  return digits ? digits.slice(0,3) : '';
}

function argosUniversalBranchKey(value){
  const digits=argosUniversalDigits(value);
  return digits.replace(/^0+/,'') || (digits ? '0' : '');
}

function argosUniversalData(series){
  const key=argosUniversalSeriesKey(series);

  if(typeof ARGOS_MATERIAL_DATA!=='undefined'&&ARGOS_MATERIAL_DATA){
    return ARGOS_MATERIAL_DATA[key] ||
      ARGOS_MATERIAL_DATA[String(series||'').trim()] ||
      {label:key?`Serie ${key}`:`Serie ${series||'—'}`,vehicles:{}};
  }

  return {
    label:key?`Serie ${key}`:`Serie ${series||'—'}`,
    vehicles:{}
  };
}

function argosUniversalBranchInfo(data,branch){
  if(!data||!branch)return {};

  const target=argosUniversalBranchKey(branch);
  const branches=data.branches||data.ramas||{};

  for(const [key,value] of Object.entries(branches)){
    if(argosUniversalBranchKey(key)===target){
      return value&&typeof value==='object'?value:{};
    }
  }

  return {};
}

function argosUniversalVehicles(data,branch){
  const vehicles=data&&data.vehicles?data.vehicles:{};

  if(!branch){
    return Object.entries(vehicles).map(([number,record])=>({
      number:String(number),
      record:record||{}
    }));
  }

  const target=argosUniversalBranchKey(branch);

  return Object.entries(vehicles)
    .filter(([number,record])=>{
      return argosUniversalBranchKey(record?.branch)===target;
    })
    .map(([number,record])=>({
      number:String(number),
      record:record||{}
    }));
}

function argosUniversalScalarCards(obj,excluded){
  if(!obj||typeof obj!=='object'||Array.isArray(obj))return '';

  const skip=new Set(excluded||[]);

  return Object.entries(obj)
    .filter(([key,value])=>{
      if(skip.has(key))return false;
      if(value===null||value===undefined||value==='')return false;
      return typeof value!=='object'&&!Array.isArray(value);
    })
    .map(([key,value])=>`
      <div class="pokedex-card">
        <div class="pokedex-label">${escapeHtml(argosMaterialFieldLabel(key))}</div>
        <div class="pokedex-value">${escapeHtml(argosMaterialFieldValue(value))}</div>
      </div>
    `)
    .join('');
}

function argosUniversalTimeline(items){
  if(!Array.isArray(items)||!items.length)return '';

  return items.map(item=>{
    if(!item||typeof item!=='object')return '';

    const year=item.year||item.date||'';
    const text=item.text||item.description||item.event||item.note||'';

    if(!year&&!text)return '';

    return `
      <div class="pokedex-event">
        <div class="pokedex-year">${escapeHtml(String(year))}</div>
        <div class="pokedex-event-text">${escapeHtml(String(text))}</div>
      </div>
    `;
  }).join('');
}

function argosUniversalNotes(items){
  if(!Array.isArray(items)||!items.length)return '';

  return items.map(item=>{
    if(typeof item==='string'||typeof item==='number'){
      return `<div class="pokedex-note">${escapeHtml(String(item))}</div>`;
    }

    if(!item||typeof item!=='object')return '';

    const title=item.title||item.name||'';
    const text=item.text||item.description||item.note||'';

    return `
      <div class="pokedex-note">
        ${title?`<strong>${escapeHtml(String(title))}</strong><br>`:''}
        ${escapeHtml(String(text))}
      </div>
    `;
  }).join('');
}

function argosUniversalRender(ctx){
  const series=String(ctx?.series||'').trim();
  const branch=String(ctx?.branch||'').trim();

  const data=ctx?.data||argosUniversalData(series);
  const vehicles=argosUniversalVehicles(data,branch);
  const branchInfo=argosUniversalBranchInfo(data,branch);

  let pd={};
  try{
    if(typeof argosPokedexData==='function'){
      pd=argosPokedexData(series,branch,ctx?.vehicle||'')||{};
    }
  }catch(error){
    console.warn('ARGOS: no se pudo ampliar la Pokédex',error);
  }

  const rich=
    data.series_info||
    data.info||
    data.general||
    {};

  const technical=
    rich.technical||
    rich.technical_data||
    data.technical||
    data.technical_data||
    {};

  const title=
    data.label||
    data.name||
    rich.name||
    `Serie ${series||'—'}`;

  const category=
    rich.category||
    data.category||
    pd.category||
    '';

  const nickname=
    rich.nickname||
    data.nickname||
    pd.nickname||
    '';

  const generalCards=argosUniversalScalarCards(
    rich,
    [
      'name',
      'category',
      'nickname',
      'description',
      'historical_review',
      'history',
      'events',
      'notes',
      'technical',
      'technical_data',
      'source',
      'source_note'
    ]
  );

  const technicalCards=argosUniversalScalarCards(technical,[]);

  const fallbackSeriesCards=argosUniversalScalarCards(
    data,
    [
      'label',
      'name',
      'vehicles',
      'vehiculos',
      'materials',
      'materiales',
      'branches',
      'ramas',
      'series_info',
      'info',
      'general',
      'technical',
      'technical_data'
    ]
  );

  const description=
    rich.historical_review||
    rich.history||
    rich.description||
    data.description||
    pd.description||
    '';

  const generalEvents=argosUniversalTimeline(
    rich.events||
    data.events||
    pd.events||
    []
  );

  const generalNotes=argosUniversalNotes(
    rich.notes||
    data.notes||
    pd.notes||
    []
  );

  const branchDescription=
    branchInfo.description||
    branchInfo.history||
    branchInfo.notes||
    '';

  const branchEvents=argosUniversalTimeline(branchInfo.events||[]);
  const branchNotes=argosUniversalNotes(branchInfo.notes||[]);

  const vehicleBlocks=vehicles.map(({number,record})=>{
    const cards=argosUniversalScalarCards(
      record,
      [
        'branch',
        'events',
        'history',
        'notes',
        'description'
      ]
    );

    const events=argosUniversalTimeline(record.events);
    const notes=argosUniversalNotes(record.notes);

    return `
      <article class="argos-rich-vehicle">
        <div class="argos-rich-vehicle-head">
          <div>
            <div class="argos-rich-vehicle-title">
              Vehículo ${escapeHtml(number)}
            </div>
            ${record.renfe_number?
              `<div class="argos-rich-label">${escapeHtml(String(record.renfe_number))}</div>`
              :''
            }
          </div>

          ${record.side?
            `<span class="argos-rich-chip">${escapeHtml(String(record.side))}</span>`
            :''
          }
        </div>

        ${cards?
          `<div class="argos-rich-grid">${cards}</div>`
          :''
        }

        ${events?
          `<div class="argos-rich-section">
             <div class="argos-rich-section-title">
               <span class="pd-dot"></span>Historia del vehículo
             </div>
             ${events}
           </div>`
          :''
        }

        ${notes?
          `<div class="argos-rich-section">
             <div class="argos-rich-section-title">
               <span class="pd-dot"></span>Notas del vehículo
             </div>
             ${notes}
           </div>`
          :''
        }

        ${!cards&&!events&&!notes?
          `<div class="pd-empty">No hay más datos registrados para este vehículo.</div>`
          :''
        }
      </article>
    `;
  }).join('');

  const userNotes=argosMaterialFichaAnnotations(series,branch)
    .map(item=>`
      <div class="pokedex-note">
        <strong>${escapeHtml(item.date||'Anotación personal')}</strong><br>
        ${escapeHtml(item.text)}
      </div>
    `)
    .join('');

  return `
    <div class="material-ficha argos-universal-ficha">
      <div class="pokedex-shell">

        <div class="pokedex-hero">
          <div class="pokedex-hero-top">
            <div>
              <div class="pokedex-kicker">ARGOS · FICHA DE MATERIAL</div>
              <div class="pokedex-title">${escapeHtml(title)}</div>
              <div class="pokedex-subtitle">
                ${branch
                  ? `Rama <b>${escapeHtml(branch)}</b>`
                  : 'Información general de la serie'
                }
                ${vehicles.length
                  ? ` · ${vehicles.length} vehículo${vehicles.length===1?'':'s'} identificado${vehicles.length===1?'':'s'}`
                  : ''
                }
              </div>
            </div>

            <div class="pokedex-status">● EN REGISTRO</div>
          </div>

          <div class="pokedex-badges">
            ${nickname?
              `<span class="pokedex-chip">${escapeHtml(String(nickname))}</span>`
              :''
            }
            ${category?
              `<span class="pokedex-chip">${escapeHtml(String(category))}</span>`
              :''
            }
          </div>

          <div class="pokedex-statrow">
            <div class="pokedex-stat">
              <div class="pokedex-stat-label">Serie</div>
              <div class="pokedex-stat-value">${escapeHtml(series||'—')}</div>
            </div>

            <div class="pokedex-stat">
              <div class="pokedex-stat-label">Rama</div>
              <div class="pokedex-stat-value">${escapeHtml(branch||'—')}</div>
            </div>

            <div class="pokedex-stat">
              <div class="pokedex-stat-label">Vehículos</div>
              <div class="pokedex-stat-value">${vehicles.length}</div>
            </div>
          </div>

          ${!branch?
            `<div class="pd-hero-note">
              Esta entrada no tiene una rama asociada.
              Se muestra toda la información disponible de la serie.
            </div>`
            :''
          }
        </div>

        <div class="pokedex-layout">

          ${generalCards?
            `<section class="pokedex-section">
              <div class="pokedex-section-title">
                <span class="pd-dot"></span>Información general
              </div>
              <div class="pokedex-grid">${generalCards}</div>
            </section>`
            :''
          }

          ${technicalCards?
            `<section class="pokedex-section">
              <div class="pokedex-section-title">
                <span class="pd-dot"></span>Características técnicas
              </div>
              <div class="pokedex-grid">${technicalCards}</div>
            </section>`
            :''
          }

          ${fallbackSeriesCards?
            `<section class="pokedex-section full">
              <div class="pokedex-section-title">
                <span class="pd-dot"></span>Datos de la serie
              </div>
              <div class="pokedex-grid">${fallbackSeriesCards}</div>
            </section>`
            :''
          }

          ${description?
            `<section class="pokedex-section full">
              <div class="pokedex-section-title">
                <span class="pd-dot"></span>Sobre esta serie
              </div>
              <div class="pokedex-note">${escapeHtml(String(description))}</div>
            </section>`
            :''
          }

          ${generalEvents?
            `<section class="pokedex-section full">
              <div class="pokedex-section-title">
                <span class="pd-dot"></span>Historia de la serie
              </div>
              <div class="pokedex-timeline">${generalEvents}</div>
            </section>`
            :''
          }

          ${generalNotes?
            `<section class="pokedex-section full">
              <div class="pokedex-section-title">
                <span class="pd-dot"></span>⭐ Curiosidades y notas
              </div>
              ${generalNotes}
            </section>`
            :''
          }

          ${branch?
            `<section class="pokedex-section full">
              <div class="pokedex-section-title">
                <span class="pd-dot"></span>Rama ${escapeHtml(branch)}
              </div>

              ${branchInfo.name?
                `<div class="pokedex-note"><strong>${escapeHtml(String(branchInfo.name))}</strong></div>`
                :''
              }

              ${branchDescription?
                `<div class="pokedex-note">${escapeHtml(String(branchDescription))}</div>`
                :''
              }

              ${branchEvents?
                `<div class="pokedex-timeline">${branchEvents}</div>`
                :''
              }

              ${branchNotes?
                `<div>${branchNotes}</div>`
                :''
              }

              ${!branchInfo.name&&!branchDescription&&!branchEvents&&!branchNotes?
                `<div class="pd-empty">
                  No hay información específica de esta rama en la base actual.
                  La información general de la serie sigue disponible.
                </div>`
                :''
              }
            </section>`
            :''
          }

          ${vehicleBlocks?
            `<section class="pokedex-section full">
              <div class="pokedex-section-title">
                <span class="pd-dot"></span>Vehículos de la rama
              </div>
              <div class="pd-vehicle-list">${vehicleBlocks}</div>
            </section>`
            :''
          }

          ${branch&&!vehicleBlocks?
            `<section class="pokedex-section full">
              <div class="pd-empty">
                La serie está registrada, pero no hay vehículos asociados a
                la rama ${escapeHtml(branch)} en la base actual.
                No se inventan datos.
              </div>
            </section>`
            :''
          }

          <section class="pokedex-section full">
            <div class="pokedex-section-title">
              <span class="pd-dot"></span>📝 Tus anotaciones e incidencias
            </div>

            ${userNotes||
              '<div class="pd-empty">Todavía no hay anotaciones personales para esta rama.</div>'
            }
          </section>

          ${!generalCards&&!technicalCards&&!fallbackSeriesCards&&!description&&!generalEvents&&!generalNotes&&!branchInfo.name&&!branchDescription&&!branchEvents&&!branchNotes&&!vehicleBlocks?
            `<section class="pokedex-section full">
              <div class="pd-empty">
                La serie ${escapeHtml(series||'')} está registrada en ARGOS,
                pero todavía no tiene información técnica cargada.
              </div>
            </section>`
            :''
          }

        </div>

        <div class="pokedex-divider"></div>

        <div class="row pokedex-close">
          <button type="button" class="secondary" onclick="closeModal()">
            Cerrar ficha
          </button>
        </div>

      </div>
    </div>
  `;
}

window.argosMostrarFichaMaterial=function(ctx){
  const safeCtx=ctx||{};
  const series=String(safeCtx.series||'').trim();
  const branch=String(safeCtx.branch||'').trim();
  const data=safeCtx.data||argosUniversalData(series);

  try{
    document.getElementById('modalContent').innerHTML=
      argosUniversalRender({
        ...safeCtx,
        data,
        series,
        branch
      });

    openModal();
  }catch(error){
    console.error('ARGOS · ficha universal · error:',error);

    const title=data?.label||data?.name||`Serie ${series||'—'}`;

    document.getElementById('modalContent').innerHTML=`
      <div class="material-ficha argos-universal-ficha">
        <div class="pokedex-shell">
          <div class="pokedex-hero">
            <div class="pokedex-kicker">ARGOS · FICHA DE MATERIAL</div>
            <div class="pokedex-title">${escapeHtml(String(title))}</div>
            <div class="pokedex-subtitle">
              ${branch?`Rama ${escapeHtml(branch)}`:'Información general de la serie'}
            </div>
          </div>

          <div class="pokedex-layout">
            <section class="pokedex-section full">
              <div class="pd-empty">
                No se ha podido cargar la ficha completa, pero la entrada
                del material sigue disponible.
              </div>
            </section>
          </div>

          <div class="row pokedex-close">
            <button type="button" class="secondary" onclick="closeModal()">Cerrar</button>
          </div>
        </div>
      </div>
    `;

    openModal();
  }
};

window.argosAbrirFichaDesdeHistorial=function(series,branch){
  const s=String(series||'').trim();
  const b=String(branch||'').trim();

  if(!s){
    alert('Este servicio no tiene una serie de material asociada.');
    return;
  }

  const data=argosUniversalData(s);

  const vehicles=argosUniversalVehicles(data,b);

  const first=vehicles[0]||{
    number:'',
    record:null
  };

  window.argosMostrarFichaMaterial({
    data,
    record:first.record,
    series:argosUniversalSeriesKey(s)||s,
    vehicle:first.number,
    branch:b,
    branchVehicles:vehicles
  });
};

})();
</script>

