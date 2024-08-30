import subprocess
import sys

def install_package(package_name, install_command):
    try:
        subprocess.run(install_command, check=True, shell=True)
        print(f"Successfully installed {package_name}.")
    except subprocess.CalledProcessError as e:
        print(f"Failed to install {package_name}: {e}")

def install_applications():
    # List of applications and their installation commands
    apps = {
        "KeePass": "sudo snap install keepass",
        "7-Zip": "sudo apt-get install -y p7zip-full",
        "Brave Browser": (
            "curl -fsSL https://brave-browser-apt-release.s3.brave.com/brave-core.asc | sudo apt-key add - && "
            "sudo apt-add-repository 'deb [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main' && "
            "sudo apt-get update && sudo apt-get install -y brave-browser"
        ),
        "Visual Studio Code": (
            "curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /usr/share/keyrings/microsoft-archive-keyring.gpg && "
            "echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-archive-keyring.gpg] https://packages.microsoft.com/repos/vscode stable main' | sudo tee /etc/apt/sources.list.d/vscode.list && "
            "sudo apt-get update && sudo apt-get install -y code"
        ),
        "Microsoft Outlook": "echo 'Outlook is a web-based application and does not require local installation.'"
    }

    for app, command in apps.items():
        print(f"Installing {app}...")
        install_package(app, command)

def main():
    install_applications()

if __name__ == "__main__":
    main()
