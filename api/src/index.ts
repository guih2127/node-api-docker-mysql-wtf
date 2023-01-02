import express from 'express';
import cors from 'cors';
import { animalsRouter } from './animals/routes/animals.router';

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo!!!!!!!!!!!');
});

app.use(cors({
    origin: ['http://localhost:5000']
}));

app.use('/animals', animalsRouter);

app.use((req, res) => {
    res.status(404);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});