import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import sharp from '/Users/gilbert/Claude Code/enablement-site/node_modules/sharp/lib/index.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../../../..');
const exportDir = path.join(root, 'Social Content Guidelines/Graphic Exports');
const name = 'how-to-diagnose-outbound';
const W = 1080;
const H = 1350;
const ink = '#0F1217';
const navy = '#17365F';
const blue = '#4F7FEA';
const pale = '#D1E5FF';
const white = '#FFFFFF';
const serifPath = '/Users/gilbert/Claude Code/enablement-gtm/exports/content/DMSerifDisplay-Italic.ttf';
const headlinePaths = execFileSync('python3', [path.join(here, 'font-to-svg-path.py'), serifPath, 'diagnose', '69'], {encoding:'utf8'});
const logo = fs.readFileSync(path.resolve(root, 'Branding and Design Guidelines/logos/enablement-black.svg')).toString('base64');

const stages = [
  { title: 'SETUP', question: 'Delivered?', failure: 'Lands in spam', check: 'Check inbox placement, domains, and mailboxes.' },
  { title: 'SIGNAL', question: 'Relevant now?', failure: 'Sent from a list, not a trigger', check: 'Name the event behind each send.' },
  { title: 'MESSAGE', question: 'Read?', failure: 'Sounds like a template', check: 'Use customer language from recent calls.' },
  { title: 'OFFER', question: 'Worth a reply?', failure: 'The ask gives nothing useful', check: 'Offer a quick asset that surfaces the pain.' },
];

function esc(s) { return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;'); }
function t(x, y, size, value, weight=400, extra='') {
  return `<text x="${x}" y="${y}" fill="${ink}" font-family="Sofia Sans" font-size="${size}" font-weight="${weight}" ${extra}>${esc(value)}</text>`;
}

function stage(i, visible, active) {
  const y = 340 + i * 215;
  const fill = visible ? (active ? '#B5D0FF' : '#F5FAFF') : '#FFFFFF';
  const opacity = visible ? 1 : 0.22;
  const s = stages[i];
  return `<g opacity="${opacity}">
    <line x1="91" y1="${y-24}" x2="91" y2="${y+171}" stroke="${visible ? navy : '#B5D0FF'}" stroke-width="3"/>
    <circle cx="91" cy="${y+28}" r="31" fill="${visible ? blue : white}" stroke="${navy}" stroke-width="2"/>
    <text x="91" y="${y+38}" fill="${visible ? white : ink}" font-family="Sofia Sans" font-weight="700" font-size="26" text-anchor="middle">${i+1}</text>
    <rect x="146" y="${y}" width="875" height="181" rx="9" fill="${fill}" stroke="${navy}" stroke-width="2"/>
    <rect x="146" y="${y}" width="875" height="50" rx="9" fill="${visible ? pale : white}"/>
    <path d="M146 ${y+50}H1021" stroke="${navy}" stroke-width="2"/>
    ${t(174, y+35, 21, s.title, 700, 'letter-spacing="2"')}
    ${t(467, y+36, 29, s.question, 700)}
    ${t(174, y+91, 21, 'FAILURE', 700, 'letter-spacing="1.5"')}
    ${t(339, y+91, 24, s.failure, 400)}
    ${t(174, y+139, 21, 'CHECK', 700, 'letter-spacing="1.5"')}
    ${t(339, y+139, 24, s.check, 400)}
  </g>`;
}

function svg(visible=4, active=-1) {
  const body = stages.map((_,i)=>stage(i, i<visible, i===active)).join('\n');
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="paper" x1="0" y1="0" x2="1080" y2="1350"><stop stop-color="#F5FAFF"/><stop offset="1" stop-color="#E4F2FF"/></linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#FF3762"/><stop offset="1" stop-color="#E11E48"/></linearGradient>
  </defs>
  <rect width="1080" height="1350" fill="url(#paper)"/>
  <rect x="20" y="20" width="1040" height="1310" fill="white" stroke="#17365F" stroke-opacity=".35"/>
  ${t(56,75,20,'OUTBOUND DIAGNOSIS',700,'letter-spacing="3"')}
  ${t(56,149,73,'How to',700)}
  <rect x="56" y="169" width="458" height="92" rx="10" fill="url(#accent)" stroke="${navy}" stroke-width="1"/>
  <g fill="white" transform="translate(80 237)">${headlinePaths}</g>
  ${t(530,238,73,'outbound',700)}
  ${t(56,300,25,'Four gates. Find where the campaign stalls.',400)}
  ${body}
  <path d="M56 1224H1024" stroke="${navy}" stroke-width="2"/>
  ${t(56,1266,25,'Fix the broken gate before you rewrite the email.',400,'font-style="italic"')}
  <image x="838" y="1263" width="180" height="44" xlink:href="data:image/svg+xml;base64,${logo}"/>
  </svg>`;
}

fs.mkdirSync(exportDir, { recursive: true });
const finalSvg = svg();
fs.writeFileSync(path.join(here, `${name}.svg`), finalSvg);
const frames = [
  { visible:0, active:-1, count:5 },
  { visible:1, active:0, count:9 },
  { visible:2, active:1, count:9 },
  { visible:3, active:2, count:9 },
  { visible:4, active:3, count:9 },
  { visible:4, active:-1, count:23 },
];
const frameDir = path.join(os.tmpdir(), 'enablement-outbound-gates-frames');
fs.mkdirSync(frameDir, { recursive:true });
let n=0;
for (const frame of frames) {
  const png = await sharp(Buffer.from(svg(frame.visible, frame.active))).png().toBuffer();
  for (let j=0;j<frame.count;j++) {
    fs.writeFileSync(path.join(frameDir, `frame-${String(n++).padStart(3,'0')}.png`), png);
  }
}
await sharp(Buffer.from(finalSvg)).png().toFile(path.join(exportDir, `${name}.png`));
console.log(JSON.stringify({frameDir, frames:n, svg:path.join(here, `${name}.svg`), png:path.join(exportDir, `${name}.png`)}));
