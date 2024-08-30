#Note: Make sure to give execution permissions to the get_started.sh script by running the command:
#chmod +x get_started.sh

#!/bin/bash

echo "Starting Employee Onboarding Process..."

echo "Running account creation script..."
python3 scripts/account_creation.py

echo "Running software installation script..."
python3 scripts/software_install.py

echo "Running access rights assignment script..."
python3 scripts/access_rights.py

echo "Employee Onboarding Process Completed!"
