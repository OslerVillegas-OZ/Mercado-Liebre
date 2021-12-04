const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
	let htmlPath = path.resolve(__dirname, './views/home.html');
	res.sendFile(htmlPath);
});

app.get('/register', (req, res) => {
	let htmlPath = path.resolve(__dirname, './views/register.html');
	res.sendFile(htmlPath);
});

app.get('/login', (req, res) => {
	let htmlPath = path.resolve(__dirname, './views/login.html')
	res.sendFile(htmlPath);
});

//app.listen(3000, () => console.log('Server Running on 3000'));

app.listen(process.env.PORT || 3000, function() {
	console.log('Servidor corriendo en el puerto 3000')
})