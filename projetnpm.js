const imagemin = require('imagemin');// Ce paquet n'était pas installé. J'ai, donc, réalisé cettte installation en ligne de cmde. 
const imageminPngquant = require('imagemin-pngquant');

(async () => {
	await imagemin(['images/*.png'], {
		destination: 'build/images',
		plugins: [
			imageminPngquant({quality:[0,0.05]})
		]
	});

	console.log('Images optimized');
})();