const express = require('express'), app = express(), router = express.Router();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const { createHmac } = require('node:crypto');

const secret = 'z4g33r';
const port = 8000;

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cookieParser(secret));
app.use(express.json());
app.use(router);

const hash = (password) => {
	const hashed = createHmac('sha256', secret)
				.update(password)
				.digest('hex');
	
	return hashed;
}

require('./routes/routes')(router, hash);

router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});