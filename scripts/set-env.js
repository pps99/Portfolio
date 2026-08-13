const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].trim();
    }
  }
}

const apiKey = process.env['OPENROUTER_API_KEY'] || process.env['openRouterApiKey'] || '';

const content = `export const environment = {
  openRouterApiKey: '${apiKey}'
};
`;

const targetPath = path.join(__dirname, '..', 'src', 'environments', 'environment.ts');
fs.writeFileSync(targetPath, content);
console.log(`environment.ts generated (key present: ${!!apiKey})`);
