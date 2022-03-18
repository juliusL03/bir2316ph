@ECHO OFF
:: Welcome to the API server run script
:: don't delete this file. It serve to auto run the API server

::file dicrectory
:SET_PATH
SET SERVER_PATH = 'C:\nginxTools\nginx\server'

:: change directory
:CHANGE_PATH
CD SERVER_PATH

:: run the server 
:RUN_SERVER
START pm2 start index.js -n "server_gulay"

:eof
exit

goto :eof