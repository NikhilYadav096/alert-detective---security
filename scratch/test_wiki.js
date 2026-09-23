import https from 'https';
import fs from 'fs';

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Contre-jour_image_of_security_guard_standing_at_the_entrance_of_Instituto_Superior_T%C3%A9cnico%2C_Alameda_Afonso_Henriques%2C_Lisbon%2C_Portugal_julesvernex2.jpg/1600px-Contre-jour_image_of_security_guard_standing_at_the_entrance_of_Instituto_Superior_T%C3%A9cnico%2C_Alameda_Afonso_Henriques%2C_Lisbon%2C_Portugal_julesvernex2.jpg';

https.get(url, { headers: { 'User-Agent': 'VaxalorSecuritySite/1.0 (contact: info@vaxalor.com)' } }, res => {
  console.log('Status:', res.statusCode);
  if (res.statusCode === 200) {
    const f = fs.createWriteStream('scratch/wikimedia_guard.jpg');
    res.pipe(f);
    f.on('finish', () => console.log('Saved! Size:', fs.statSync('scratch/wikimedia_guard.jpg').size));
  }
});
