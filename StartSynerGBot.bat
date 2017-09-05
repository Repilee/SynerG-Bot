@echo off
color 0f
title SynerG Discord Launcher Bot
cd "%USERPROFILE%\Documents\GitHub\SynerG\"
node main.js
pause
:choice
set /P c=Are you sure you want to reconnect [Y/N]?
if /I "%c%" EQU "Y" goto :RECONNECT
if /I "%c%" EQU "N" goto :EXITPROMPT
goto :choice


:RECONNECT

echo Reconnecting...
cd "%USERPROFILE%\Documents\GitHub\SynerG\SynerGBot"
node main.js
pause

:EXITPROMPT

echo Bot is now off. Press any key to close this prompt...
pause
exit
