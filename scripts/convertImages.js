import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const convertImages = async () => {
    try {
        const files = await imagemin(
            [join(dirname(__dirname), 'src/assets/*.{jpg,png}')],
            {
                destination: join(dirname(__dirname), 'src/assets/compressed'),
                plugins: [
                    imageminWebp({
                        quality: 75,
                        resize: {
                            width: 800,
                            height: 600
                        }
                    })
                ]
            }
        );

        console.log('Images optimized:', files.map(f => f.destinationPath));
    } catch (error) {
        console.error('Error converting images:', error);
    }
};

convertImages();
