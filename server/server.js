const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/getnum', (req, res) => {
	const data = [1, 2, 3, 4, 5, 6];
	res.send(data);
});

app.listen(5000, () => {
	console.log('server started in port 5000');
});
