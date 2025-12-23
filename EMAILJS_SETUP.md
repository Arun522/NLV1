# EmailJS Setup Guide

This contact form uses EmailJS to send emails directly from the frontend to mailarun522@gmail.com.

## Setup Steps:

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"  
3. Choose Gmail (or your preferred email provider)
4. Connect your Gmail account (mailarun522@gmail.com)
5. Note down the Service ID

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have received a new contact form submission:

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Interest Area: {{interest_area}}

Message:
{{message}}

---
Sent via NextMaze Contact Form
```

4. Save the template and note down the Template ID

### 4. Get Public Key
1. Go to "Account" in your dashboard
2. Find your Public Key in the API Keys section

### 5. Update Environment Variables
1. Open the `.env` file in the project root
2. Replace the placeholder values with your actual EmailJS credentials:

```bash
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Test the Form
1. Restart your development server
2. Fill out and submit the contact form
3. Check mailarun522@gmail.com for the email

## Features Implemented:
- ✅ Form validation
- ✅ Loading states during submission
- ✅ Success/error feedback messages
- ✅ Form reset after successful submission
- ✅ Sends to mailarun522@gmail.com
- ✅ Records all form data in email

## Form Fields:
- First Name (required)
- Last Name (required) 
- Email (required)
- Company Name (optional)
- Interest Area (dropdown)
- Message (required)

All submissions will be sent to mailarun522@gmail.com with all the form data included.