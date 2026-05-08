const fs = require('fs');
const path = require('path');

const apiKey = process.env['openRouterApiKey'] || '';

const content = `export const environment = {
  openRouterApiKey: '${apiKey}'
};
`;

const targetPath = path.join(__dirname, '..', 'src', 'environments', 'environment.ts');
fs.writeFileSync(targetPath, content);
console.log(`environment.ts generated (key present: ${!!apiKey})`);
