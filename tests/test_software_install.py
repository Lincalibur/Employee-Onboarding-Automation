import subprocess

def check_package_installed(package_name, check_command):
    try:
        result = subprocess.run(check_command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if result.returncode == 0:
            print(f"{package_name} is installed.")
        else:
            print(f"{package_name} is not installed.")
    except subprocess.CalledProcessError as e:
        print(f"{package_name} is not installed. Error: {e}")

def main():
    # List of applications and their verification commands
    apps = {
        "KeePass": ["snap list keepass"],
        "7-Zip": ["dpkg -l | grep p7zip"],
        "Brave Browser": ["which brave"],
        "Visual Studio Code": ["which code"],
        "Microsoft Outlook": ["echo 'Outlook is a web-based application and does not require local installation.'"]
    }

    for app, command in apps.items():
        print(f"Checking {app}...")
        for cmd in command:
            check_package_installed(app, cmd)

if __name__ == "__main__":
    main()
