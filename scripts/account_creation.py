import string
import random
import os
from datetime import datetime
from pykeepass import PyKeePass
from getpass import getpass

# Function to generate a random password
def generate_password(length=12):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for i in range(length))
    return password

# Function to create a new work email
def generate_work_email(first_name, company_domain='companyName.co.za'):
    return f"{first_name.lower()}@{company_domain}"

# Function to generate a unique user ID
def generate_user_id(first_name, last_name, dob, employee_number):
    # Extract initials from first and last name
    initials = f"{first_name[0].upper()}{last_name[0].upper()}"
    
    # Format date of birth as YYMMDD
    dob_formatted = datetime.strptime(dob, "%Y-%m-%d").strftime("%y%m%d")
    
    # Generate a unique suffix from the employee number and a random string
    suffix = f"{employee_number}-{''.join(random.choices(string.ascii_uppercase + string.digits, k=4))}"
    
    # Combine parts to create the user ID
    user_id = f"{initials}{dob_formatted}-{suffix}"
    
    return user_id

# Function to prompt user for required information
def get_user_details():
    print("Enter the following details to create a new work email and account.")
    first_name = input("First Name: ").strip()
    middle_name = input("Middle Name (optional): ").strip()
    last_name = input("Last Name: ").strip()
    preferred_name = input("Preferred Name/Nickname (optional): ").strip()
    date_of_birth = input("Date of Birth (YYYY-MM-DD): ").strip()
    gender = input("Gender (if required for record-keeping): ").strip()
    home_address = input("Home Address (Street, City, State, Zip Code): ").strip()
    phone_number = input("Phone Number (Mobile/Home): ").strip()
    personal_email = input("Personal Email Address: ").strip()
    employee_number = input("Employee Number: ").strip()
    
    return {
        "first_name": first_name,
        "middle_name": middle_name,
        "last_name": last_name,
        "preferred_name": preferred_name,
        "date_of_birth": date_of_birth,
        "gender": gender,
        "home_address": home_address,
        "phone_number": phone_number,
        "personal_email": personal_email,
        "employee_number": employee_number
    }

# Function to create Microsoft account (simulation)
def create_microsoft_account(email, password):
    # Note: Actual Microsoft account creation requires API calls and authentication, which is complex
    # Here, we'll just simulate the account creation process
    print(f"Creating Microsoft account for email: {email}")
    print(f"Account created successfully! [Simulated]")
    return True

# Function to store the password securely in KeePass
def store_password_in_keepass(email, password):
    keepass_db_path = "path/to/your/keepass/database.kdbx"
    keepass_password = getpass("Enter your KeePass database password: ")
    
    # Open KeePass database
    kp = PyKeePass(keepass_db_path, password=keepass_password)
    
    # Create a new entry in the KeePass database
    kp.add_entry(kp.root_group, email, email, password)
    
    # Save the KeePass database
    kp.save()
    print(f"Password for {email} has been stored securely in KeePass.")

def main():
    user_details = get_user_details()
    work_email = generate_work_email(user_details["first_name"])
    password = generate_password()
    user_id = generate_user_id(user_details["first_name"], user_details["last_name"], user_details["date_of_birth"], user_details["employee_number"])
    
    print(f"Generated work email: {work_email}")
    print(f"Generated password: {password}")
    print(f"Generated user ID: {user_id}")
    
    # Create Microsoft account (simulated)
    if create_microsoft_account(work_email, password):
        # Store password in KeePass
        store_password_in_keepass(work_email, password)
    
    print("Account creation process completed.")

if __name__ == "__main__":
    main()
