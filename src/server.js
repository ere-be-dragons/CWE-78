import chalk from 'chalk';
import express from 'express'
import handlebars from 'express-handlebars';
import {exec} from 'node:child_process';

const app = express();

app.engine('html', handlebars.engine({
  extname: '.html',
}));
app.set('views', './src/views');
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/cmd/dig', (req, res) => {
  exec(`dig ${req.query.ip_addr}`, (err, stdout) => {
    res.render('home', {output: err?.toString() ?? stdout.toString()});

    console.log(
      chalk.blue('[tries]\t'),
      stdout.toString().includes(process.env.DATABASE_URL) ? '🟢 ' : '🟥 ',
      req.query.ip_addr,
    );
  });
});

app.listen(process.env.PORT ?? '5000', () => {
  console.log(chalk.blue('[start]\t'), `available on http://localhost:${process.env.PORT ?? 5000}`);
  console.log(chalk.blue('[tries]\t'), 'waiting for injection attempts...');
});
