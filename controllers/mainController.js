let fs = require('fs');

const mainController = {

	home: (req, res) => { 
		let productsFile = fs.readFileSync('products.json', {encoding: 'utf8'} );

		let products = JSON.parse(productsFile);

		res.render('home', {products: products}); 
	},
	register: (req, res) => { res.render('register') },
	login: (req, res) => { res.render('login') }
}

module.exports = mainController;