const express = require('express');
const apiRouter = require('./routes');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

// Start the server
app.listen(port, () => {
	console.log(`App is running on port ${port}`);
});
