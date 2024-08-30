import paramiko
import time

# Configuration for the VM
VM_IP = 'your_vm_ip'
VM_USERNAME = 'your_vm_username'
VM_PASSWORD = 'your_vm_password'
SCRIPTS_PATH = '/path/on/vm/'

# Paths to local scripts
scripts = {
    'software_install.py': '/path/to/software_install.py',
    'account_creation.py': '/path/to/account_creation.py',
    # Add paths for other scripts as needed
}

def upload_scripts(ssh_client):
    sftp = ssh_client.open_sftp()
    for script_name, local_path in scripts.items():
        remote_path = f"{SCRIPTS_PATH}/{script_name}"
        print(f"Uploading {local_path} to {remote_path}...")
        sftp.put(local_path, remote_path)
        print(f"Uploaded {script_name} successfully.")
    sftp.close()

def run_script(ssh_client, script_name):
    stdin, stdout, stderr = ssh_client.exec_command(f"python3 {SCRIPTS_PATH}/{script_name}")
    print(f"Running {script_name}...")
    time.sleep(5)  # Wait for the script to run
    output = stdout.read().decode()
    error = stderr.read().decode()
    print(f"Output of {script_name}:\n{output}")
    if error:
        print(f"Errors in {script_name}:\n{error}")

def main():
    # Establish SSH connection to the VM
    print("Connecting to VM...")
    ssh_client = paramiko.SSHClient()
    ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh_client.connect(VM_IP, username=VM_USERNAME, password=VM_PASSWORD)
    print("Connected to VM.")
    
    try:
        upload_scripts(ssh_client)
        for script in scripts.keys():
            run_script(ssh_client, script)
    finally:
        ssh_client.close()
        print("Disconnected from VM.")

if __name__ == "__main__":
    main()
