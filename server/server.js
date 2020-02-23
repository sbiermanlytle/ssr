import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import Hello from 'components/Hello.jsx';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<Hello />);

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
      </head>
      <body>
        <div id="root">${app}</div>
        <p>static</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
