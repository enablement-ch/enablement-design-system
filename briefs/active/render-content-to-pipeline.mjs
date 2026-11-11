import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from '/Users/gilbert/Claude Code/enablement-site/node_modules/sharp/lib/index.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const brain = path.resolve(here, '../../..');
const out = path.join(brain, 'Content/Graphic Exports');
const frameDir = path.join(os.tmpdir(), 'enablement-content-to-pipeline-frames');
const slug = 'from-post-to-pipeline';
const colors = {
  canvas:'#0F1217', surface:'#181C23', raised:'#232830', border:'#2E343F',
  borderStrong:'#404754', heading:'#E5E9F0', body:'#A0A8B5', muted:'#6B7280',
  accent:'#E11E48', flow:'#6FA8DC', white:'#FFFFFF'
};
const logo = fs.readFileSync(path.join(brain, 'Design/logos/enablement-white.svg')).toString('base64');
const rows = [
  {title:'Start from real conversations', body:'Pull topics from sales calls and strategy work.'},
  {title:'Publish the belief to change', body:'Challenge what buyers must stop believing. Bring proof.'},
  {title:'Write in the founder’s voice', body:'Give the hook, argument, proof, and visual separate jobs.'},
  {title:'Capture everyone who reacts', body:'Save likes and comments. Check role, company, and ICP fit.'},
  {title:'Reach out with context', body:'Message the people who fit. Mention their engagement.'},
  {title:'Connect the activity to CRM', body:'Tag content-sourced leads. Report deals, not impressions.'},
];
const yPositions = [324, 465, 606, 802, 943, 1084];
function esc(s) { return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }
function txt(x,y,size,copy,color,weight=400,attrs='') {
  return `<text x="${x}" y="${y}" fill="${color}" font-family="Sofia Sans" font-size="${size}" font-weight="${weight}" ${attrs}>${esc(copy)}</text>`;
}
function row(i, visible, active) {
  const y = yPositions[i], c=colors, item=rows[i];
  const opacity=visible?1:.18;
  return `<g opacity="${opacity}">
    <rect x="137" y="${y}" width="888" height="120" rx="10" fill="${active ? c.raised : c.surface}" stroke="${active ? c.flow : c.borderStrong}" stroke-width="${active?2:1.5}"/>
    <rect x="62" y="${y+27}" width="50" height="50" rx="8" fill="${active?c.accent:c.raised}" stroke="${active?c.accent:c.borderStrong}" stroke-width="1.5"/>
    <text x="87" y="${y+60}" fill="${active?c.white:c.heading}" font-family="JetBrains Mono" font-size="21" font-weight="600" text-anchor="middle">${String(i+1).padStart(2,'0')}</text>
    ${txt(165,y+51,32,item.title,c.heading,700)}
    ${txt(165,y+91,24,item.body,c.body,400)}
  </g>`;
}
function svg(reveal=6,active=-1) {
  const c=colors;
  const cards=rows.map((_,i)=>row(i,i<reveal,i===active)).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" height="1350" viewBox="0 0 1080 1350">
  <defs><pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="#FFFFFF" stroke-opacity=".035" stroke-width="1"/></pattern></defs>
  <rect width="1080" height="1350" fill="${c.canvas}"/><rect width="1080" height="1350" fill="url(#grid)"/>
  <path d="M40 20H1040M40 1330H1040" stroke="${c.borderStrong}"/>
  <text x="56" y="75" fill="${c.accent}" font-family="JetBrains Mono" font-size="21" font-weight="600" letter-spacing="1.2">1,163 POSTS / 27 GTM CREATORS</text>
  ${txt(56,169,80,'From post to',c.heading,700)}
  ${txt(56,250,82,'pipeline.',c.accent,700,'font-style="italic"')}
  ${txt(56,299,25,'The six moves that turn content into conversations.',c.body)}
  <rect x="667" y="113" width="356" height="155" rx="9" fill="${c.surface}" stroke="${c.borderStrong}"/>
  <path d="M667 113V268" stroke="${c.accent}" stroke-width="5"/>
  <text x="692" y="150" fill="${c.accent}" font-family="JetBrains Mono" font-size="18" font-weight="600" letter-spacing="1">REAL RESULT</text>
  ${txt(692,195,31,'Ekipa → Caritas',c.heading,700)}
  ${txt(692,232,22,'Pilot after one post',c.body)}
  <path d="M87 305V1202" stroke="${c.borderStrong}" stroke-width="3"/>
  <path d="M87 347V${reveal>0 ? Math.min(1200,yPositions[Math.max(0,reveal-1)]+77) : 347}" stroke="${c.flow}" stroke-width="3"/>
  ${cards}
  <rect x="137" y="751" width="888" height="34" fill="${c.canvas}"/>
  <path d="M137 768H485M695 768H1025" stroke="${c.borderStrong}" stroke-width="2"/>
  <rect x="491" y="747" width="198" height="42" rx="5" fill="${c.accent}"/>
  <text x="590" y="775" fill="${c.white}" font-family="JetBrains Mono" font-size="19" font-weight="600" text-anchor="middle" letter-spacing="1.3">PUBLISH</text>
  <path d="M56 1230H1024" stroke="${c.borderStrong}" stroke-width="2"/>
  ${txt(56,1274,25,'A post is the start. The deal is the measure.',c.heading,500)}
  <image x="833" y="1265" width="190" height="45" xlink:href="data:image/svg+xml;base64,${logo}"/>
  </svg>`;
}
fs.mkdirSync(out,{recursive:true});
fs.mkdirSync(frameDir,{recursive:true});
fs.writeFileSync(path.join(here,`${slug}.svg`),svg());
const states=[
  {reveal:0,active:-1,count:4},
  {reveal:1,active:0,count:6},
  {reveal:2,active:1,count:6},
  {reveal:3,active:2,count:7},
  {reveal:3,active:-1,count:5},
  {reveal:4,active:3,count:7},
  {reveal:5,active:4,count:7},
  {reveal:6,active:5,count:7},
  {reveal:6,active:-1,count:23},
];
let frame=0;
for(const state of states) {
  const png=await sharp(Buffer.from(svg(state.reveal,state.active))).png().toBuffer();
  for(let j=0;j<state.count;j++) fs.writeFileSync(path.join(frameDir,`frame-${String(frame++).padStart(3,'0')}.png`),png);
}
await sharp(Buffer.from(svg())).png().toFile(path.join(out,`${slug}.png`));
console.log(JSON.stringify({frameDir,frames:frame,svg:path.join(here,`${slug}.svg`),png:path.join(out,`${slug}.png`)}));
