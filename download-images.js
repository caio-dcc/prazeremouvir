const fs = require('fs');
const https = require('https');
const path = require('path');

const images = {
  // Unsplash
  "img-1.jpg": "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80",
  "img-2.jpg": "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=900&q=80",
  "img-3.jpg": "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?auto=format&fit=crop&w=900&q=80",
  "img-4.jpg": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  "img-sobre.jpg": "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80",
  "img-servicos.jpg": "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
  "img-hero-bg.jpg": "https://images.unsplash.com/photo-1559757175-7cb056fba93d?auto=format&fit=crop&w=1600&q=80",
  "img-sobre-home.jpg": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  
  // Placeholders
  "rexton-rose.png": "https://placehold.co/900x675/E30613/FFFFFF/png?text=Rexton+Rose&font=lora",
  "power-one.png": "https://placehold.co/900x675/111827/FFFFFF/png?text=Power+One&font=lora",
  "hero-placeholder.png": "https://placehold.co/900x1200/111827/FFFFFF/png?text=Aparelho+Auditivo"
};

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(path.join(__dirname, 'public'))) {
  fs.mkdirSync(path.join(__dirname, 'public'));
}
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // follow redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  for (const [filename, url] of Object.entries(images)) {
    const dest = path.join(dir, filename);
    console.log(`Downloading ${filename}...`);
    try {
      await download(url, dest);
      console.log(`Finished ${filename}`);
    } catch (e) {
      console.error(`Error downloading ${filename}:`, e);
    }
  }
}

main();
