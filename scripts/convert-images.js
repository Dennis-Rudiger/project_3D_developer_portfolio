const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  await imagemin(['public/images/*.{jpg,png}'], {
    destination: 'public/images',
    plugins: [
      imageminWebp({quality: 75})
    ]
  });
})();
