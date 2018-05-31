
@echo off
set title=My Dos Window

if /i "%~1"=="remove" (
reg delete "hkcu\console\%title%"
goto :EOF
)

set xpos=-1920
set ypos=1
set /a "pos=(ypos << 16) + xpos"
>nul reg add "hkcu\console\%title%" /v WindowPosition /t REG_DWORD /d "%pos%" /f



 >file.bat echo.@echo off
>>file.bat echo title MenuFonctionnel
>>file.bat echo mode con cols=55 lines=83
>>file.bat echo color 8F
>>file.bat echo C:\Users\CONTE\Documents\NodeJStest\NodeJSPortable\App\NodeJS\node.exe "C:\Users\CONTE\Documents\NodeJStest\Work Document\app.js"
>>file.bat echo cd "C:\Users\CONTE\Documents\NodeJStest\Work Document"
>>file.bat echo powershell.exe "ls"
>>file.bat echo powershell.exe
>>file.bat echo pause > nul

start "%title%" cmd /c "file.bat"

::::IIIII Old Version IIIII::::
::@echo off
::
::title MenuFonctionnel
::
::mode con cols=55 lines=83
::
::color 8F
::C:\Users\CONTE\Documents\NodeJStest\NodeJSPortable\App\NodeJS\node.exe "C:\Users\CONTE\Documents\NodeJStest\Work Document\app.js"
::cd "C:\Users\CONTE\Documents\NodeJStest\Work Document"
::powershell.exe "ls"
::powershell.exe
::
::
::pause > nul
