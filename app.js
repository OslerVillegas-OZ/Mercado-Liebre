const express = require('express');

const path = require('path');

const app = express();

// Set
app.set('view engine', 'ejs');

app.set('views', './views')

// Use
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(express.static('public'));

// Routes
const routesMain = require('./routes/main');

app.use('/', routesMain);

//app.listen(3000, () => console.log('Server Running on 3000'));
app.listen(process.env.PORT || 3000, function() {
	console.log('Servidor corriendo en el puerto 3000')
})