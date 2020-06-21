# Cliniq / क्लीनिक 

[![Build Status](https://dev.azure.com/heyAyushhh/cliniq/_apis/build/status/heyAyushh.cliniq?branchName=master)](https://dev.azure.com/heyAyushhh/cliniq/_build/latest?definitionId=2?branchName=master)  
  
  
Clinec is a complete solution to manage hospital queues, book appointments and deliver medicines. 
  
Suite includes Android App for Patients.  
Chatbot via Messages for bookings.  
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Dashboard for Doctors  
Dashboard for Practitioners.   
  
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

See the site live at https://cliniq.now.sh
  
WORKFLOW  
  
1 . Booking generates a QR and Provides an estimated reporting time for the appointment.  
  
2. Showing the QR to the doctor gets him the patient details and doctor proceeds with writing symptoms and medicines to his dashboard.  
  
3. Showing the same QR to the Chemist will provide him the list of medicines to provide the patient using the chemist Dashboard.  
  
  
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  
DASHBOARDS
  
* Doctor Dashboard - 
1.  scans QR and Retrieves patient data.  
2. Uploads patients Symptoms and Medicines to be provided.  
  
* Pharmacist Dashboard - 
1. Scans QR and retrieves medicines to be given.  
  
* Lab Technician - 
1. Upload Test Results.
  
*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  
SMS Chatbot for Booking
1. Register on the website
2. send pincode as sms to our number and we will schedule your appointment.  
  
*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

## Building

go to ./website/cliniq
```
    npm run build
```