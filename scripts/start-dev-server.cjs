const {spawn} = require('node:child_process');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const npmCmd = 'C:\\Progra~1\\nodejs\\npm.cmd';

const child = spawn(
  'C:\\Windows\\System32\\cmd.exe',
  [
    '/d',
    '/c',
    `${npmCmd} run start -- --host 127.0.0.1 --port 3000 > docusaurus-start.log 2> docusaurus-start.err.log`,
  ],
  {
    cwd: root,
    detached: true,
    stdio: 'ignore',
    windowsHide: true,
  },
);

child.unref();
console.log(child.pid);
