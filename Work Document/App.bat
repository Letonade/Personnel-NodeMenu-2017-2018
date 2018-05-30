@echo off

title Mon fichier Batch

mode con cols=100 lines=25

color 0F

::C:\Users\CONTE\Documents\NodeJStest\NodeJSPortable\NodeJSPortable.exe

C:\Users\CONTE\Documents\NodeJStest\NodeJSPortable\App\NodeJS\node.exe "C:\Users\CONTE\Documents\NodeJStest\Work Document\app.js"
cd "C:\Users\CONTE\Documents\NodeJStest\Work Document"
powershell.exe "ls"
powershell.exe
::exit


pause > nul
