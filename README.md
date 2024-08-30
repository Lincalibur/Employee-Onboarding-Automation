# Employee Onboarding Automation - Demo Branch

## Purpose

The Employee Onboarding Automation project aims to streamline and automate the onboarding process for new employees. This includes setting up user accounts, installing essential software, assigning access rights, and managing onboarding documentation. The Demo branch showcases the capabilities of the project, including its core features and integration points.

## How It Works

### 1. **Initial Setup**

- **`get_started.bat` / `get_started.sh`**: These scripts initiate the onboarding process. They handle the installation of essential tools and applications required to set up a new employee’s computer.

### 2. **Scripts**

- **`account_creation.py`**: Automates the creation of new user accounts. Prompts for user details and generates a work email, creating accounts on various platforms (e.g., Microsoft) and securely storing passwords.
  
- **`software_install.py`**: Installs necessary software using Chocolatey on Windows or apt packages on Linux. Checks if Chocolatey is installed, and if not, installs it first.

- **`access_rights.py`**: Assigns access rights to various systems based on user roles and departments. This script is designed to be customized for different systems and permissions.

- **`test_software_install.py`**: Tests the installation of software to ensure it is properly installed. This script verifies that the applications are correctly set up and available.

### 3. **Configuration and Integration**

- **`config` Directory**: Contains configuration files for roles, permissions, and software lists.

- **`docs` Directory**: Provides documentation including API documentation, requirements, user guides, and user roles.

- **`ui` Directory**: Contains the user interface components for the application, including backend and frontend files.

### 4. **GitHub Actions**

- **`main.yml`**: Configures a GitHub Actions workflow to automate testing and setup. Runs the test scripts to verify the installation and functionality of the software.

### Running the Demo

1. **Update the Demo Branch**: Push changes to the `Demo` branch to trigger the GitHub Actions workflow.

2. **Verify Setup**: The workflow will check out the code, set up the environment, install dependencies, and run tests to ensure everything is working correctly.

3. **Check Results**: Review the results of the GitHub Actions workflow to see if any issues were detected during testing.

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/lincalibur/Employee-Onboarding-Automation.git
   ```

2. **Checkout the Demo Branch**
   ```bash
   git checkout Demo
   ```

3. **Run the Setup Scripts**
   - For Windows: `get_started.bat`
   - For Linux: `get_started.sh`

4. **Verify the Installation and Access Rights**
