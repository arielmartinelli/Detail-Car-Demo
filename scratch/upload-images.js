const fs = require('fs');
const https = require('https');
const path = require('path');

const apiKey = '6d207e02198a847e7b592a34647036e6'; // Free public ImgBB API key

const imagesToUpload = [
  { name: 'paint_before', file: 'public/paint_before.jpg' },
  { name: 'paint_after', file: 'public/paint_after.jpg' },
  { name: 'interior_before', file: 'public/interior_before.jpg' },
  { name: 'interior_after', file: 'public/interior_after.jpg' },
  { name: 'truck_before', file: 'public/truck_before.jpg' },
  { name: 'truck_after', file: 'public/truck_after.jpg' },
];

async function uploadImage(item) {
  return new Promise((resolve, reject) => {
    const fileData = fs.readFileSync(item.file);
    const base64Image = fileData.toString('base64');
    const postData = `image=${encodeURIComponent(base64Image)}`;

    const req = https.request(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData),
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          try {
            const json = JSON.parse(body);
            if (json && json.data && json.data.url) {
              console.log(`${item.name}: ${json.data.url}`);
              resolve({ name: item.name, url: json.data.url });
            } else {
              console.error(`Failed ${item.name}:`, body);
              resolve(null);
            }
          } catch (e) {
            reject(e);
          }
        });
      }
    );

    req.on('error', (e) => reject(e));
    req.write(postData);
    req.end();
  });
}

async function run() {
  const results = {};
  for (const item of imagesToUpload) {
    const res = await uploadImage(item);
    if (res) {
      results[res.name] = res.url;
    }
  }
  console.log('\n--- UPLOAD SUMMARY ---');
  console.log(JSON.stringify(results, null, 2));
}

run();
