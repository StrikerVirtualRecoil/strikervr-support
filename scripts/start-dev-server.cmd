@echo off
cd /d "%~dp0.."
C:\Progra~1\nodejs\npm.cmd run start -- --host 127.0.0.1 --port 3000 > docusaurus-start.log 2> docusaurus-start.err.log
