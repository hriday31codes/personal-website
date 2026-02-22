const SAMPLE_JD=`Job Title: Senior Product Manager - AI/ML Products
Department: Product | Location: Remote (India or US) | Seniority: Senior (5+ years)

We are looking for a Senior PM to lead our AI-powered recruitment platform working with engineering, data science, and design teams.

Key Responsibilities:
- Define and own the product roadmap for AI/ML features
- Conduct user research and write detailed PRDs
- Analyze product metrics and drive data-informed decisions
- Manage stakeholder expectations and communicate product vision

Required Skills:
- 5+ years product management, preferably B2B SaaS
- Experience with AI/ML products or data-heavy applications
- Strong SQL and analytics skills, excellent communication
- Agile development experience

Nice to Have: HR Tech / ATS experience, MBA, Mixpanel, Amplitude, Jira, Figma`;

const SAMPLE_RESUMES=[
  {id:1,name:"Priya Sharma",raw:"Senior PM at Razorpay (2021-now): Led AI fraud detection 0-to-1 for 2M merchants, 50+ user interviews, ML accuracy +34%, managed 12-person cross-functional team. PM at Freshworks (2019-2021): CRM analytics for 10k+ businesses, 8 features shipped, NPS 32 to 51, heavy SQL. Associate PM at Zoho (2018-2019). MBA IIM Bangalore 2018, B.Tech CS NIT Trichy 2016. Skills: PRD writing, SQL, Mixpanel, Amplitude, Figma, Jira, A/B testing, AI/ML products."},
  {id:2,name:"Rohan Mehta",raw:"PM at Swiggy (2022-now): Food delivery for 5M DAU, checkout redesign reduced dropoff 12%, agile sprints. Junior PM at Byjus (2020-2022): Edtech K-12, user stories, backlog. B.Com Delhi University 2019. Skills: Product thinking, wireframing, Jira, communication."},
  {id:3,name:"Aisha Patel",raw:"Head of Product at Darwinbox (2020-now) HR Tech SaaS: Built AI-powered ATS from scratch, 3 product lines $12M ARR, led NLP resume parsing with data science, managed 4 PMs, enterprise clients 40 to 200+. Senior PM at Microsoft India (2017-2020): Azure ML Studio, 12 features, activation +28%, SQL Tableau. PM at InMobi (2015-2017): ML ad-targeting. B.Tech IIT Bombay 2015. Skills: AI/ML, HR Tech, ATS, SQL, Tableau, Amplitude, Figma, B2B SaaS, PRD writing."},
  {id:4,name:"Dev Kapoor",raw:"Product Analyst at Paytm (2021-2023): Data analysis, Excel PowerBI dashboards. Marketing Executive at agency (2019-2021). BBA Symbiosis 2019. Skills: Excel, PowerPoint, basic SQL, communication."},
  {id:5,name:"Neha Joshi",raw:"PM at PhonePe (2020-now): UPI features for 400M+ users, A/B tests via Mixpanel/Amplitude, detailed PRDs, Jira sprints, adjacent ML fraud work. PM at Ola (2019-2020): Driver app, ride acceptance +8%. MBA ISB Hyderabad 2019, B.Tech BITS Pilani 2017. Skills: PRD writing, A/B testing, SQL, Mixpanel, Amplitude, Jira, Figma."},
  {id:6,name:"Arjun Nair",raw:"Senior PM at Leadsquared (2019-now): AI lead scoring with data science team, pipeline +22%, wrote ML feature specs, 5+ enterprise integrations, advanced SQL. PM at Chargebee (2017-2019): Subscription analytics, NPS +18. B.Tech VIT 2017. Skills: B2B SaaS, AI/ML, SQL advanced, Amplitude, Mixpanel, Jira, Figma, PRD writing."},
  {id:7,name:"Sara Iyer",raw:"Recent Graduate. MBA Christ University 2024 Marketing, B.Sc Psychology Bangalore University 2022. Projects: mock food delivery app, product hackathon top 20/200. BD intern fintech startup 3 months 2023. Skills: PowerPoint, Canva, basic agile."},
  {id:8,name:"Vikram Singh",raw:"Senior PM at Clevertap (2021-now) B2B SaaS: Mobile analytics and AI campaign automation, churn prediction with data science churn -15%, 3000+ B2B clients, 80+ customer calls, heavy SQL, Jira, Figma. PM at MoEngage (2018-2021): push messaging, NPS 40 to 58. B.Tech NSIT Delhi 2018. Skills: B2B SaaS, AI/ML, SQL advanced, Amplitude, Jira, Figma, user research."},
  {id:9,name:"Meera Krishnan",raw:"Senior PM at Zepto (2022-now): Quick commerce checkout and search, conversion +18%, led ML personalization squad, 6-person team. PM at Nykaa (2020-2022): beauty ecommerce recommendations, A/B testing, revenue +22%. B.Tech BITS Goa 2020. Skills: SQL, Mixpanel, Figma, A/B testing, product analytics, agile."},
  {id:10,name:"Karan Bhatia",raw:"Director of Product at Groww (2021-now): Wealth-tech platform, mutual funds and stocks for 40M users, led 3 PMs, regulatory compliance features, data-driven roadmap. PM at Zerodha (2019-2021): trading platform UX, brokerage analytics. MBA IIM Ahmedabad 2019, B.Tech IIT Delhi 2017. Skills: fintech, SQL, PRD writing, stakeholder management, Amplitude, Jira."},
  {id:11,name:"Divya Menon",raw:"PM at Byju's (2021-now): live tutoring product for K-12, retention +14% via ML-based nudges, collaborated with data science on churn model. Associate PM at Unacademy (2019-2021): content discovery, search ranking. B.Tech NIT Calicut 2019. Skills: edtech, SQL, Mixpanel, user research, Figma, agile sprints."},
  {id:12,name:"Rahul Gupta",raw:"Product Lead at Meesho (2020-now): social commerce seller tools, GMV +40%, built ML pricing recommendation with data team, managed 5 PMs. PM at Flipkart (2018-2020): catalog quality, NLP tagging pipeline. MBA ISB 2018, B.Tech IIT Roorkee 2016. Skills: B2C, SQL advanced, AI/ML, PRD writing, Amplitude, Jira, Figma, stakeholder management."},
  {id:13,name:"Ananya Singh",raw:"PM at Cred (2022-now): rewards and offers personalization, ML ranking model with data science, DAU +25%, A/B test framework owner. PM at Paytm (2020-2022): payments checkout, UPI success rate +9%. B.Tech NSIT 2020. Skills: fintech, SQL, Mixpanel, Amplitude, A/B testing, Figma, Jira, product analytics."},
  {id:14,name:"Nikhil Rao",raw:"Freelance PM consultant (2021-now): 4 B2B SaaS clients, AI workflow automation, wrote PRDs and GTM docs. PM at Freshdesk (2019-2021): customer support AI, ticket deflection +30%, NLP integrations. B.Tech PESIT Bangalore 2019. Skills: B2B SaaS, AI/ML, PRD writing, SQL, Jira, communication, stakeholder management."},
  {id:15,name:"Pooja Desai",raw:"Senior PM at Navi (2021-now): lending and insurance products, ML credit scoring integration, 2M+ loan disbursals, regulatory PRDs. PM at BankBazaar (2019-2021): loans marketplace, conversion funnel +15%, SQL dashboards. MBA XLRI 2019, B.Com Mumbai University 2017. Skills: fintech, SQL, PRD writing, Amplitude, Jira, stakeholder management, agile."},
];

let apiKey="",mode="sample",sampleCount=15,pdfCount=5,pdfSlots=[],results=[],selectedId=null;
let weights={skills:35,experience:35,education:15,communication:15};

window.onload=function(){
  try{apiKey=localStorage.getItem("ts_key")||"";}catch(e){}
  document.getElementById("api-key-input").value=apiKey;
  document.getElementById("jd-input").value=SAMPLE_JD;
  const ss=document.getElementById("sample-count-select");
  for(let i=1;i<=15;i++){const o=document.createElement("option");o.value=i;o.textContent=i+" Sample Resume"+(i>1?"s":"");if(i===15)o.selected=true;ss.appendChild(o);}
  const ps=document.getElementById("pdf-count-select");
  for(let i=1;i<=30;i++){const o=document.createElement("option");o.value=i;o.textContent=i+" PDF Resume"+(i>1?"s":"");if(i===5)o.selected=true;ps.appendChild(o);}
  buildPdfSlots(5);updateAnalyzeBtn();
};

function saveKey(){apiKey=document.getElementById("api-key-input").value.trim();try{localStorage.setItem("ts_key",apiKey);}catch(e){}}

function switchMode(m){
  mode=m;
  document.getElementById("sample-mode").style.display=m==="sample"?"block":"none";
  document.getElementById("pdf-mode").style.display=m==="pdf"?"block":"none";
  document.getElementById("btn-sample").classList.toggle("active",m==="sample");
  document.getElementById("btn-pdf").classList.toggle("active",m==="pdf");
  updateAnalyzeBtn();
}

function onSampleCountChange(){sampleCount=parseInt(document.getElementById("sample-count-select").value);updateAnalyzeBtn();}
function onPdfCountChange(){pdfCount=parseInt(document.getElementById("pdf-count-select").value);buildPdfSlots(pdfCount);updateAnalyzeBtn();}

function buildPdfSlots(n){
  while(pdfSlots.length<n)pdfSlots.push({id:"p"+Date.now()+pdfSlots.length,name:"",file:null,pdfText:"",fileName:""});
  pdfSlots=pdfSlots.slice(0,n);renderPdfGrid();
}

function renderPdfGrid(){
  document.getElementById("pdf-upload-label-text").textContent="UPLOAD "+pdfCount+" PDF RESUME"+(pdfCount>1?"S":"");
  const grid=document.getElementById("pdf-grid");grid.innerHTML="";
  pdfSlots.forEach(function(slot,i){
    const div=document.createElement("div");div.className="pdf-slot"+(slot.file?" filled":"");
    if(slot.file){
      div.innerHTML=`<div class="pdf-slot-num">RESUME #${i+1}</div><div class="pdf-filled-name">✓ ${slot.fileName}</div><input type="text" placeholder="Candidate name" value="${slot.name}" oninput="updateSlotName('${slot.id}',this.value)" style="font-size:11px;padding:5px 8px;margin-bottom:6px;"/><button onclick="removePdf('${slot.id}')" class="btn-ghost" style="font-size:10px;padding:3px 8px;color:#FF4F4F;border-color:rgba(255,79,79,.25);width:100%;">✕ Remove</button>`;
    }else{
      div.innerHTML=`<div class="pdf-slot-num">RESUME #${i+1}</div><label class="pdf-upload-label"><span style="font-size:24px;">📄</span><span>Click to upload PDF</span><input type="file" accept=".pdf" style="display:none;" onchange="handlePdfUpload('${slot.id}',this.files[0])"/></label>`;
    }
    grid.appendChild(div);
  });
  updatePdfStatus();
}

function updateSlotName(id,val){const s=pdfSlots.find(x=>x.id===id);if(s)s.name=val;}
function removePdf(id){const s=pdfSlots.find(x=>x.id===id);if(s){s.file=null;s.fileName="";s.pdfText="";s.name="";}renderPdfGrid();updateAnalyzeBtn();}

async function handlePdfUpload(id,file){
  if(!file||file.type!=="application/pdf"){alert("Please select a PDF file.");return;}
  const slot=pdfSlots.find(s=>s.id===id);if(!slot)return;
  slot.file=file;slot.fileName=file.name;
  slot.name=slot.name||file.name.replace(/\.pdf$/i,"").replace(/[-_]/g," ");
  slot.pdfText=await extractPdfText(file);
  renderPdfGrid();updateAnalyzeBtn();
}

function extractPdfText(file){
  return new Promise(function(resolve){
    const reader=new FileReader();
    reader.onload=function(){
      try{
        const bytes=new Uint8Array(reader.result);let text="";
        for(let i=0;i<bytes.length;i++){if(bytes[i]>=32&&bytes[i]<127)text+=String.fromCharCode(bytes[i]);else if(bytes[i]===10||bytes[i]===13)text+=" ";}
        const words=text.match(/[A-Za-z][A-Za-z0-9\s\.\,\-\+\@\:]{3,}/g)||[];
        resolve(words.join(" ").replace(/\s+/g," ").slice(0,3000));
      }catch(e){resolve("PDF: "+file.name);}
    };
    reader.readAsArrayBuffer(file);
  });
}

function updatePdfStatus(){
  const filled=pdfSlots.filter(s=>s.file&&s.name.trim()).length;
  const el=document.getElementById("pdf-status");
  el.style.color=filled===pdfCount?"#00E676":"#6B8CAE";
  el.textContent=filled===pdfCount?"✓ All "+pdfCount+" resumes ready to analyze":filled+" of "+pdfCount+" PDFs uploaded";
}

function updateAnalyzeBtn(){
  const count=mode==="sample"?sampleCount:(pdfSlots.filter(s=>s.file&&s.name.trim()).length||pdfCount);
  document.getElementById("analyze-btn").textContent="Analyze "+count+" Candidate"+(count>1?"s":"")+" →";
}

function showPage(id){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));document.getElementById(id).classList.add("active");}
function resetToSetup(){results=[];selectedId=null;showPage("page-setup");}
function showError(msg){const e=document.getElementById("setup-error");e.textContent=msg;e.classList.add("active");}
function clearError(){document.getElementById("setup-error").classList.remove("active");}

async function callAI(messages,maxTokens){
  const referer=window.location.href.split("?")[0]||"https://localhost";
  const res=await fetch("https://openrouter.ai/api/v1/chat/completions",{
    method:"POST",
    headers:{"Content-Type":"application/json","Authorization":"Bearer "+apiKey,"HTTP-Referer":referer,"X-Title":"AI Candidate Intelligence"},
    body:JSON.stringify({model:"google/gemini-flash-1.5",max_tokens:maxTokens||1000,temperature:0.1,messages})
  });
  if(!res.ok){
    let errMsg="HTTP "+res.status;
    try{const e=await res.json();errMsg=e.error?.message||errMsg;}catch(ex){}
    throw new Error(errMsg);
  }
  const data=await res.json();
  return(data.choices?.[0]?.message?.content||"").trim();
}

async function analyzeResume(jd,resume){
  const resumeText=resume.pdfText||resume.raw||"";
  const raw=await callAI([
    {role:"system",content:"You are a recruiter AI. Respond ONLY with a valid JSON object. No markdown, no code fences. Raw JSON only."},
    {role:"user",content:`Analyze this resume against the job description.\n\nJOB DESCRIPTION:\n${jd}\n\nCANDIDATE: ${resume.name}\nRESUME: ${resumeText}\n\nReturn exactly this JSON:\n{"name":"${resume.name}","headline":"3-word role summary","yearsExp":5,"skills":["s1","s2","s3","s4","s5"],"scores":{"skills":80,"experience":75,"education":65,"communication":70},"strengths":["strength 1","strength 2","strength 3"],"gaps":["gap 1","gap 2"],"summary":"Two honest sentences on fit.","interviewQuestions":["behavioral Q","technical Q","gap-probing Q"],"biasFlags":[],"recommendation":"YES"}\nrecommendation must be one of: STRONG_YES YES MAYBE NO`}
  ],1000);
  const clean=raw.replace(/^```json\s*/i,"").replace(/^```/,"").replace(/```\s*$/,"").trim();
  return JSON.parse(clean);
}

async function startAnalysis(){
  clearError();
  apiKey=document.getElementById("api-key-input").value.trim();
  if(!apiKey){showError("Please enter your API key.");return;}
  const jd=document.getElementById("jd-input").value.trim();
  if(!jd){showError("Please enter a job description.");return;}
  let resumeList=mode==="sample"?SAMPLE_RESUMES.slice(0,sampleCount):pdfSlots.filter(s=>s.file&&s.name.trim());
  if(resumeList.length===0){showError("Please upload at least one PDF resume.");return;}
  results=[];selectedId=null;showPage("page-analyzing");
  const total=resumeList.length;let done=0;
  for(let i=0;i<resumeList.length;i++){
    const resume=resumeList[i];
    document.getElementById("analyzing-name").textContent="Processing "+resume.name+"…";
    document.getElementById("analyzing-count").textContent=done+" of "+total+" candidates done";
    let success=false,tries=0;
    while(!success&&tries<2){
      try{
        const result=await analyzeResume(jd,resume);
        result._id=resume.id||i;results.push(result);success=true;
      }catch(e){
        tries++;
        console.error("Attempt "+tries+" failed:",e.message);
        if(tries>=2){showPage("page-setup");showError("Failed on "+resume.name+": "+e.message+" — Check your API key and network.");return;}
        await sleep(2000);
      }
    }
    done++;
    document.getElementById("analyzing-count").textContent=done+" of "+total+" candidates done";
    await sleep(1200);
  }
  renderResults();showPage("page-results");
}

function weightedScore(c){
  const t=weights.skills+weights.experience+weights.education+weights.communication;
  if(!t||!c||!c.scores)return 0;
  return Math.round((c.scores.skills*weights.skills+c.scores.experience*weights.experience+c.scores.education*weights.education+c.scores.communication*weights.communication)/t);
}

function scoreColor(s){return s>=75?"#00E676":s>=50?"#FFB74D":"#FF4F4F";}

function renderResults(){
  document.getElementById("results-count-tag").textContent=results.length+" CANDIDATES ANALYZED";
  document.getElementById("stats-row").innerHTML=[
    {label:"ANALYZED",val:results.length,color:"#00D4FF"},
    {label:"YES",val:results.filter(r=>r.recommendation==="STRONG_YES"||r.recommendation==="YES").length,color:"#00E676"},
    {label:"MAYBE",val:results.filter(r=>r.recommendation==="MAYBE").length,color:"#FFB74D"},
    {label:"NOT FIT",val:results.filter(r=>r.recommendation==="NO").length,color:"#FF4F4F"},
  ].map(s=>`<div class="card stat-card"><div class="stat-num" style="color:${s.color}">${s.val}</div><div class="stat-label">${s.label}</div></div>`).join("");
  renderList();
}

function getRanked(){
  return results
    .map(c=>({candidate:c,ws:weightedScore(c)}))
    .sort((a,b)=>b.ws-a.ws)
    .map((item,i)=>({candidate:item.candidate,ws:item.ws,rank:i+1}));
}

function renderList(){
  const ranked=getRanked();
  if(!ranked.length){document.getElementById("candidate-list").innerHTML='<div style="text-align:center;padding:40px;color:#6B8CAE;">No candidates found.</div>';return;}
  document.getElementById("candidate-list").innerHTML=ranked.map((item,i)=>{
    const c=item.candidate,score=item.ws,id=c._id,sel=String(selectedId)===String(id);
    return`<div class="card cand-card ${sel?"selected":""}" onclick="selectCandidate('${id}')" style="display:flex;align-items:center;cursor:pointer;padding:14px 16px;animation:fadeUp .3s ease;animation-delay:${i*0.06}s"><div class="cand-rank" style="color:#6B8CAE;">#${item.rank}</div><div class="cand-info"><div class="cand-name-row"><span class="cand-name">${c.name}</span></div><div class="cand-sub">${c.headline||""} · ${c.yearsExp||0}yr exp</div></div><div class="cand-score"><div class="score-num" style="color:${scoreColor(score)};text-shadow:0 0 16px ${scoreColor(score)}44">${score}</div><div class="score-lbl">SCORE</div></div></div>`;
  }).join("");
}

function onWeightChange(){
  ["skills","experience","education","communication"].forEach(k=>{
    weights[k]=parseInt(document.getElementById("w-"+k).value);
    document.getElementById("w-"+k+"-val").textContent=weights[k]+"%";
  });
  renderList();
  if(selectedId!==null)renderDetail(selectedId);
}

function selectCandidate(id){
  if(selectedId==id){
    selectedId=null;
    document.getElementById("results-left").classList.remove("with-detail");
    document.getElementById("results-right").classList.remove("active");
    document.getElementById("results-right").innerHTML="";
    renderList();return;
  }
  selectedId=id;
  document.getElementById("results-left").classList.add("with-detail");
  document.getElementById("results-right").classList.add("active");
  renderDetail(id);renderList();
}

function barHTML(label,value){
  return`<div class="bar-row"><div class="bar-header"><span class="bar-label">${label}</span><span class="bar-value" style="color:${scoreColor(value)}">${value}</span></div></div>`;
}

function renderDetail(id){
  const c=results.find(r=>r._id==id);if(!c)return;
  const score=weightedScore(c);
  document.getElementById("results-right").innerHTML=`
    <div style="animation:fadeUp .3s ease;">
      <div class="detail-header">
        <div><div class="detail-name">${c.name}</div><div class="detail-sub">${c.headline||""} · ${c.yearsExp||0} yrs</div></div>
        <div style="text-align:right;"><div class="detail-score-big" style="color:${scoreColor(score)};text-shadow:0 0 26px ${scoreColor(score)}44">${score}</div></div>
      </div>
      <div class="card" style="padding:16px;margin-bottom:14px;">
        <div class="mono" style="font-size:11px;color:#6B8CAE;margin-bottom:12px;letter-spacing:1px;">DIMENSION SCORES</div>
        ${barHTML("SKILLS",c.scores.skills)}${barHTML("EXPERIENCE",c.scores.experience)}${barHTML("EDUCATION",c.scores.education)}${barHTML("COMMUNICATION",c.scores.communication)}
      </div>
      <div class="card" style="padding:16px;margin-bottom:14px;">
        <div class="mono" style="font-size:11px;color:#6B8CAE;margin-bottom:8px;letter-spacing:1px;">AI ASSESSMENT</div>
        <p style="font-size:13px;line-height:1.65;">${c.summary||""}</p>
      </div>
      <div class="strengths-gaps">
        <div class="card" style="padding:14px;">
          <div class="mono" style="font-size:11px;color:#00E676;margin-bottom:8px;letter-spacing:1px;">STRENGTHS</div>
          ${(c.strengths||[]).map(s=>`<div class="list-item">– ${s}</div>`).join("")}
        </div>
        <div class="card" style="padding:14px;">
          <div class="mono" style="font-size:11px;color:#FF4F4F;margin-bottom:8px;letter-spacing:1px;">GAPS</div>
          ${(c.gaps||[]).map(g=>`<div class="list-item">– ${g}</div>`).join("")}
        </div>
      </div>
      <div class="card" style="padding:16px;margin-bottom:14px;">
        <div class="mono" style="font-size:11px;color:#00D4FF;margin-bottom:10px;letter-spacing:1px;">AI INTERVIEW QUESTIONS</div>
        ${(c.interviewQuestions||[]).map((q,i)=>`<div class="q-row"><span class="q-num">Q${i+1}</span><span class="q-text">${q}</span></div>`).join("")}
      </div>
      <div class="email-btns">
        <button class="btn" style="flex:1;" onclick="openEmail('${c._id}','shortlist')">Draft Shortlist Email</button>
        <button class="btn-ghost" style="flex:1;" onclick="openEmail('${c._id}','reject')">Draft Rejection Email</button>
      </div>
    </div>`;
}

async function openEmail(id,type){
  const c=results.find(r=>r._id==id);if(!c)return;
  document.getElementById("modal-title").textContent=(type==="shortlist"?"Shortlist":"Rejection")+" Email — "+c.name;
  document.getElementById("modal-loading").style.display="flex";
  document.getElementById("modal-content").style.display="none";
  document.getElementById("modal").classList.add("active");
  const prompt=type==="shortlist"
    ?`Write a warm professional shortlist email to ${c.name} for a Senior PM - AI/ML Products role. Highlight: ${(c.strengths||[]).slice(0,2).join(" and ")}. Mention next step is interview scheduling. Under 150 words. No subject line. Output the email body only.`
    :`Write a polite and respectful rejection email to ${c.name} who applied for a Senior PM - AI/ML Products role. Include one genuine compliment about their profile. Keep it under 100 words. No subject line. Output the email body only.`;
  try{
    const text=await callAI([
      {role:"system",content:"You are a professional recruiter. Write concise, warm, human-sounding emails. Output only the email body with no extra commentary."},
      {role:"user",content:prompt}
    ],400);
    document.getElementById("modal-text").value=text;
  }catch(e){document.getElementById("modal-text").value="Error generating email: "+e.message;}
  document.getElementById("modal-loading").style.display="none";
  document.getElementById("modal-content").style.display="block";
}

function closeModal(){document.getElementById("modal").classList.remove("active");}
function copyEmail(){navigator.clipboard.writeText(document.getElementById("modal-text").value);alert("Copied!");}
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}
