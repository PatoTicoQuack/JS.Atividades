import app from './app';

// const port = process.env.APP_PORT;
// app.listen(port);

const port = 3001;
app.listen(port, () => {
    console.log();
    console.log(`Server running on port ${port}`);
    console.log(`CTRL + Click on http://localhost:${port} to access the server`)
});
