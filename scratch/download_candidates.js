import https from 'https';
import fs from 'fs';
import path from 'path';

const candidates = [
  { name: 'team_meeting', url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85&fit=crop' },
  { name: 'diverse_team', url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=85&fit=crop' },
  { name: 'security_entrance', url: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1600&q=85&fit=crop' },
  { name: 'modern_building', url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1600&q=85&fit=crop' },
  { name: 'security_patrol', url: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1600&q=85&fit=crop' },
  { name: 'enterprise_lobby', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85&fit=crop' },
  { name: 'executive_team', url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=85&fit=crop' },
  { name: 'corporate_security', url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=85&fit=crop' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve(dest);
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const c of candidates) {
    const dest = path.join('scratch', `${c.name}.jpg`);
    try {
      await download(c.url, dest);
      const stat = fs.statSync(dest);
      console.log(`Downloaded ${c.name} (${Math.round(stat.size / 1024)} KB)`);
    } catch (e) {
      console.log(`Failed ${c.name}: ${e.message}`);
    }
  }
}

run();
