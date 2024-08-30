@echo off
echo Starting Employee Onboarding Process...

echo Running account creation script...
python scripts\account_creation.py

echo Running software installation script...
python scripts\software_install.py

echo Running access rights assignment script...
python scripts\access_rights.py

echo Employee Onboarding Process Completed!
pause
