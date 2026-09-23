import https from 'https';
import fs from 'fs';
import path from 'path';

const photoIds = [
  { id: '3RM3wBDAcis', name: 'guard_university_entrance' },
  { id: 'W_dau70yjHQ', name: 'guard_uniform_public' },
  { id: 'vhKSJjv-yBM', name: 'guard_walking_rooftop' },
  { id: 'T31shlwoduM', name: 'guard_tactical_vest' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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
  for (const item of photoIds) {
    const dest = path.join('scratch', `${item.name}.jpg`);
    const downloadUrl = `https://unsplash.com/photos/${item.id}/download?w=1600&q=85`;
    try {
      console.log(`Downloading ${item.id}...`);
      await download(downloadUrl, dest);
      const stat = fs.statSync(dest);
      console.log(`Successfully downloaded ${item.name} (${Math.round(stat.size / 1024)} KB)`);
    } catch (e) {
      console.error(`Failed ${item.name}:`, e.message);
    }
  }
}

run();
