import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from '/Users/gilbert/Claude Code/enablement-site/node_modules/sharp/lib/index.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const brain = path.resolve(here, '../../../..');
const exports = path.join(brain, 'Social Content Guidelines/Graphic Exports');
const frames = path.join(os.tmpdir(), 'enablement-rep-ready-queue-frames');
const slug = 'rep-ready-account-queue';
const c = {canvas:'#0F1217',surface:'#181C23',raised:'#232830',border:'#2E343F',strong:'#404754',heading:'#E5E9F0',body:'#A0A8B5',muted:'#6B7280',red:'#E11E48',blue:'#6FA8DC',white:'#FFFFFF'};
const logo = fs.readFileSync(path.join(brain,'Branding and Design Guidelines/logos/enablement-white.svg')).toString('base64');
const steps = [
  ['Audit list-building hours','Count research, enrichment, and CRM cleanup time.'],
  ['Define a qualified account','Set fit, signal, and contact rules before routing.'],
  ['Build one live account queue','Source, enrich, and deduplicate continuously.'],
  ['Give reps a reason to act','Include the signal, account summary, and next step.'],
  ['Improve the queue each round','Feed replies and meetings back into the rules.'],
];
const ys=[565,686,807,928,1049];
function esc(s){return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');}
function text(x,y,size,s,color=c.heading,weight=400,attrs=''){return `<text x="${x}" y="${y}" fill="${color}" font-family="Sofia Sans" font-size="${size}" font-weight="${weight}" ${attrs}>${esc(s)}</text>`;}
function step(i,reveal,active){
  const y=ys[i], on=i<reveal;
  return `<g opacity="${on?1:.17}">
    <rect x="141" y="${y}" width="883" height="105" rx="9" fill="${active===i?c.raised:c.surface}" stroke="${active===i?c.blue:c.strong}" stroke-width="${active===i?2:1.5}"/>
    <rect x="59" y="${y+27}" width="54" height="50" rx="7" fill="${active===i?c.red:c.raised}" stroke="${active===i?c.red:c.strong}"/>
    <text x="86" y="${y+60}" fill="${c.heading}" font-family="JetBrains Mono" font-size="21" font-weight="600" text-anchor="middle">${String(i+1).padStart(2,'0')}</text>
    ${text(168,y+43,30,steps[i][0],c.heading,700)}
    ${text(168,y+79,23,steps[i][1],c.body)}
  </g>`;
}
function svg(reveal=5,active=-1){
  const body=steps.map((_,i)=>step(i,reveal,active)).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" height="1350" viewBox="0 0 1080 1350">
  <defs><pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="#FFFFFF" stroke-opacity=".035"/></pattern></defs>
  <rect width="1080" height="1350" fill="${c.canvas}"/><rect width="1080" height="1350" fill="url(#grid)"/>
  <path d="M40 20H1040M40 1330H1040" stroke="${c.strong}"/>
  <text x="56" y="74" fill="${c.red}" font-family="JetBrains Mono" font-size="20" font-weight="600" letter-spacing="1.2">SALES CAPACITY / SAME HEADCOUNT</text>
  ${text(56,161,75,'Give reps back their',c.heading,700)}
  ${text(56,242,79,'selling hours.',c.red,700,'font-style="italic"')}
  ${text(56,286,25,'A five-step switch from manual lists to rep-ready accounts.',c.body)}
  <rect x="56" y="318" width="461" height="181" rx="9" fill="${c.surface}" stroke="${c.strong}"/>
  <path d="M56 318V499" stroke="${c.red}" stroke-width="5"/>
  <text x="82" y="356" fill="${c.red}" font-family="JetBrains Mono" font-size="18" font-weight="600" letter-spacing="1">REP WORK TODAY</text>
  ${text(82,405,28,'Find prospects',c.heading,700)}
  ${text(82,445,24,'Enrich records  →  Clean CRM',c.body)}
  <rect x="539" y="318" width="485" height="181" rx="9" fill="${c.surface}" stroke="${c.strong}"/>
  <path d="M539 318V499" stroke="${c.blue}" stroke-width="5"/>
  <text x="565" y="356" fill="${c.blue}" font-family="JetBrains Mono" font-size="18" font-weight="600" letter-spacing="1">REP WORK WITH A SYSTEM</text>
  ${text(565,405,28,'Work qualified accounts',c.heading,700)}
  ${text(565,445,23,'Context  →  Outreach  →  Meetings',c.body)}
  <path d="M86 539V1171" stroke="${c.strong}" stroke-width="3"/>
  <path d="M86 539V${reveal?Math.min(1171,ys[Math.max(0,reveal-1)]+77):539}" stroke="${c.blue}" stroke-width="3"/>
  ${body}
  <path d="M56 1191H1024" stroke="${c.strong}" stroke-width="2"/>
  ${text(56,1235,26,'The list should improve while reps sell.',c.heading,500)}
  ${text(56,1274,22,'Start with step 1: measure the hours your reps spend sourcing.',c.body)}
  <image x="832" y="1264" width="190" height="45" xlink:href="data:image/svg+xml;base64,${logo}"/>
  </svg>`;
}
fs.mkdirSync(exports,{recursive:true});fs.mkdirSync(frames,{recursive:true});
fs.writeFileSync(path.join(here,`${slug}.svg`),svg());
const states=[{reveal:0,active:-1,count:5},{reveal:1,active:0,count:8},{reveal:2,active:1,count:8},{reveal:3,active:2,count:8},{reveal:4,active:3,count:8},{reveal:5,active:4,count:8},{reveal:5,active:-1,count:22}];
let n=0;
for(const s of states){const png=await sharp(Buffer.from(svg(s.reveal,s.active))).png().toBuffer();for(let j=0;j<s.count;j++)fs.writeFileSync(path.join(frames,`frame-${String(n++).padStart(3,'0')}.png`),png);}
await sharp(Buffer.from(svg())).png().toFile(path.join(exports,`${slug}.png`));
console.log(JSON.stringify({frames:n,frameDir:frames,png:path.join(exports,`${slug}.png`),svg:path.join(here,`${slug}.svg`)}));
