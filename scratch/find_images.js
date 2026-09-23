import https from 'https';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'SecurityWebsiteBuilder/1.0 (contact: info@example.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const catApi = 'https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:Security_guards_in_India&gcmnamespace=6&gcmlimit=20&prop=imageinfo&iiprop=url|mime|dimensions&format=json';
  const data = await fetchUrl(catApi);
  const json = JSON.parse(data);
  console.log('Category members:');
  if (json.query && json.query.pages) {
    for (const page of Object.values(json.query.pages)) {
      if (page.imageinfo && page.imageinfo[0]) {
        console.log(page.title, page.imageinfo[0].url);
      }
    }
  } else {
    console.log('No direct category members or category does not exist.');
  }
}

run();
