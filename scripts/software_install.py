import subprocess
import sys

def check_chocolatey_installed():
    try:
        subprocess.run(['choco', '--version'], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        return True
    except subprocess.CalledProcessError:
        return False

def install_chocolatey():
    print("Chocolatey not found. Installing Chocolatey...")
    try:
        # Command to install Chocolatey
        subprocess.run([
            'powershell', 
            '-NoProfile', 
            '-InputFormat', 'None', 
            '-ExecutionPolicy', 'Bypass', 
            '-Command', 
            '[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString(\'https://chocolatey.org/install.ps1\'))'
        ], check=True)
        print("Chocolatey installed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Failed to install Chocolatey: {e}")
        sys.exit(1)

def install_applications():
    apps = [
        "keepass.install",  # KeePass
        "7zip.install",     # 7-Zip
        "brave",            # Brave Browser
        "outlook",          # Microsoft Outlook
        "vscode"            # Visual Studio Code
    ]
    
    for app in apps:
        try:
            print(f"Installing {app}...")
            subprocess.run(['choco', 'install', app, '-y'], check=True)
            print(f"{app} installed successfully.")
        except subprocess.CalledProcessError as e:
            print(f"Failed to install {app}: {e}")

def main():
    if not check_chocolatey_installed():
        install_chocolatey()
    
    install_applications()

if __name__ == "__main__":
    main()
