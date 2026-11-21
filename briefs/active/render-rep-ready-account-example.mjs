import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from '/Users/gilbert/Claude Code/enablement-site/node_modules/sharp/lib/index.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const brain = path.resolve(here, '../../../..');
const exportDir = path.join(brain, 'Social Content Guidelines/Graphic Exports');
const slug = 'rep-ready-account-example';
const c = { bg:'#0F1217', panel:'#181C23', raised:'#232830', border:'#404754', heading:'#E5E9F0', body:'#A0A8B5', muted:'#6B7280', red:'#E11E48', blue:'#6FA8DC', white:'#FFFFFF' };
const logo = fs.readFileSync(path.join(brain,'Branding and Design Guidelines/logos/enablement-white.svg')).toString('base64');
const fields = [
  { label:'FIT', line1:'B2B software · 50–200 employees', line2:'Sales team in target market' },
  { label:'SIGNAL', line1:'Two SDR roles posted this week', line2:'Source: public job listings' },
  { label:'CONTACT', line1:'VP Sales', line2:'Owns the SDR team' },
  { label:'CONTEXT', line1:'Fact: hiring more outbound capacity', line2:'Question: how will new reps get accounts?' },
  { label:'NEXT MOVE', line1:'Ask how qualified accounts reach new reps', line2:'Open with the hiring signal' },
];
const notes = [
  { side:'left', head:'FILTER FIRST', line1:'Keep poor-fit', line2:'accounts out.' },
  { side:'right', head:'SHOW THE TRIGGER', line1:'Give the rep a', line2:'reason to act now.' },
  { side:'left', head:'NAME THE OWNER', line1:'No extra hunt in', line2:'Sales Navigator.' },
  { side:'right', head:'MARK THE INFERENCE', line1:'Ask about the gap.', line2:'Do not assume it.' },
  { side:'left', head:'SUGGEST A MOVE', line1:'Turn the record', line2:'into outreach.' },
];
function esc(s){return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');}
function txt(x,y,size,s,color=c.heading,weight=400,attrs=''){return `<text x="${x}" y="${y}" fill="${color}" font-family="Sofia Sans" font-size="${size}" font-weight="${weight}" ${attrs}>${esc(s)}</text>`;}
function note(i,y){
  const n=notes[i],left=n.side==='left',x=left?55:870,lineX=left?212:848,cardEdge=left?235:845;
  return `<path d="M${lineX} ${y-3}H${cardEdge}" stroke="${c.blue}" stroke-width="2"/>
  <circle cx="${cardEdge}" cy="${y-3}" r="4" fill="${c.blue}"/>
  <text x="${x}" y="${y-24}" fill="${c.blue}" font-family="JetBrains Mono" font-size="16" font-weight="600" letter-spacing=".5">${n.head}</text>
  ${txt(x,y+6,18,n.line1,c.body)}${txt(x,y+30,18,n.line2,c.body)}`;
}
function field(i){
  const y=444+i*99,f=fields[i];
  return `<path d="M263 ${y-13}H817" stroke="${c.border}" stroke-opacity=".65"/>
  <text x="263" y="${y+15}" fill="${c.red}" font-family="JetBrains Mono" font-size="17" font-weight="600" letter-spacing="1">${f.label}</text>
  ${txt(263,y+49,27,f.line1,c.heading,600)}
  ${txt(263,y+77,20,f.line2,c.body)}`;
}
const build=[
  ['Measure','Sourcing hours'],['Define','Fit + signals'],['Automate','Source + enrich'],['Learn','Replies + meetings']
];
let buildSvg='';
build.forEach((item,i)=>{
  const x=74+i*250;
  buildSvg+=`<circle cx="${x}" cy="1092" r="17" fill="${i===0?c.red:c.raised}" stroke="${i===0?c.red:c.blue}" stroke-width="2"/>
  <text x="${x}" y="1099" fill="${c.white}" font-family="JetBrains Mono" font-size="16" font-weight="600" text-anchor="middle">${i+1}</text>
  ${txt(x-18,1141,26,item[0],c.heading,700)}
  ${txt(x-18,1174,20,item[1],c.body)}`;
});
const svg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" height="1350" viewBox="0 0 1080 1350">
  <defs><pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="#FFFFFF" stroke-opacity=".035"/></pattern></defs>
  <rect width="1080" height="1350" fill="${c.bg}"/><rect width="1080" height="1350" fill="url(#grid)"/>
  <path d="M40 20H1040M40 1330H1040" stroke="${c.border}"/>
  <text x="56" y="75" fill="${c.red}" font-family="JetBrains Mono" font-size="20" font-weight="600" letter-spacing="1">THE REP-READY QUEUE</text>
  ${txt(56,163,77,'Give reps a',c.heading,700)}
  ${txt(56,248,79,'reason to act.',c.red,700,'font-style="italic"')}
  ${txt(56,294,25,'What one qualified account should arrive with.',c.body)}
  <rect x="235" y="334" width="610" height="617" rx="12" fill="${c.panel}" stroke="${c.border}" stroke-width="2"/>
  <rect x="235" y="334" width="610" height="96" rx="12" fill="${c.raised}"/>
  <path d="M235 430H845" stroke="${c.border}" stroke-width="2"/>
  <text x="263" y="367" fill="${c.blue}" font-family="JetBrains Mono" font-size="17" font-weight="600" letter-spacing="1">ILLUSTRATIVE ACCOUNT RECORD</text>
  ${txt(263,409,33,'B2B software account',c.heading,700)}
  ${fields.map((_,i)=>field(i)).join('')}
  ${notes.map((_,i)=>note(i,485+i*99)).join('')}
  <path d="M56 991H1024" stroke="${c.border}" stroke-width="2"/>
  <text x="56" y="1039" fill="${c.red}" font-family="JetBrains Mono" font-size="20" font-weight="600" letter-spacing="1">HOW TO MAKE THIS THE DEFAULT</text>
  <path d="M74 1092H824" stroke="${c.blue}" stroke-width="2"/>
  ${buildSvg}
  <path d="M56 1233H1024" stroke="${c.border}" stroke-width="2"/>
  ${txt(56,1274,25,'Reps work the account. The system assembles it.',c.heading,500)}
  <image x="835" y="1264" width="187" height="45" xlink:href="data:image/svg+xml;base64,${logo}"/>
  </svg>`;
fs.mkdirSync(exportDir,{recursive:true});
fs.writeFileSync(path.join(here,`${slug}.svg`),svg);
await sharp(Buffer.from(svg)).png().toFile(path.join(exportDir,`${slug}.png`));
console.log(JSON.stringify({svg:path.join(here,`${slug}.svg`),png:path.join(exportDir,`${slug}.png`)}));
