@echo off
:: Disable echo for cleaner output
echo Welcome to the Employee Onboarding Automation Setup

:: Check if Chocolatey is installed
choco -v >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Chocolatey is not installed. Installing Chocolatey...
    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))"
    if %ERRORLEVEL% NEQ 0 (
        echo Failed to install Chocolatey. Please install it manually and re-run this script.
        pause
        exit /b 1
    )
    echo Chocolatey installed successfully.
) else (
    echo Chocolatey is already installed.
)

:: Update Chocolatey to the latest version
echo Updating Chocolatey to the latest version...
choco upgrade chocolatey -y
if %ERRORLEVEL% NEQ 0 (
    echo Failed to update Chocolatey. Please check your internet connection and re-run this script.
    pause
    exit /b 1
)
echo Chocolatey updated successfully.

:: WiFi Setup
echo.
echo Please select your WiFi setup option:
echo 1. Enter SSID and Password manually
echo 2. Select from existing networks
set /p wifi_option="Enter your choice (1 or 2): "

if "%wifi_option%"=="1" (
    set /p ssid="Enter SSID: "
    set /p password="Enter WiFi Password: "
    echo Connecting to %ssid%...
    netsh wlan connect name=%ssid%
    netsh wlan set profileparameter name=%ssid% keyMaterial=%password%
    echo Connected to %ssid%.
) else (
    echo Listing available WiFi networks...
    netsh wlan show networks
    set /p ssid="Enter the SSID of the network you want to connect to: "
    set /p password="Enter WiFi Password: "
    echo Connecting to %ssid%...
    netsh wlan connect name=%ssid%
    netsh wlan set profileparameter name=%ssid% keyMaterial=%password%
    echo Connected to %ssid%.
)

:: Function to check if an application is installed
:check_install
set app=%1
where %app% >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo %app% is already installed.
    goto :eof
) else (
    echo %app% is not installed. Installing %app%...
    choco install %2 -y
    if %ERRORLEVEL% NEQ 0 (
        echo Failed to install %app%. Please check your internet connection and re-run this script.
        pause
        exit /b 1
    )
    echo %app% installed successfully.
)
goto :eof

:: Install Applications
echo.
echo Installing required applications...

:: Install KeePass
call :check_install keepass keepass

:: Install 7-Zip
call :check_install 7z 7zip

:: Install Brave Browser
call :check_install brave brave

:: Install Outlook (part of Office 365)
call :check_install outlook office365proplus

:: Install Visual Studio Code
call :check_install code vscode

:: Add more application installations as needed here

echo.
echo All applications have been installed successfully.
echo.
echo Initial setup completed. Proceeding with the next steps of onboarding.

:: Call other scripts
echo Running account creation script...
python account_creation.py

echo Running access rights assignment script...
python access_rights.py

echo.
echo All onboarding tasks are completed successfully.
pause
exit
