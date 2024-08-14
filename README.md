# Test Lightning Email Template LWC

## Overview

The **Test Lightning Email Template** LWC component is designed to allow users to send test emails using Salesforce Lightning Email Templates. This component is especially useful for testing and verifying the merge tags within email templates before they are used in production. The component provides a user-friendly interface where users can select an email template, choose a record to merge data from, input a recipient email address, and send a test email.

## Files Overview

### Lightning Web Component (LWC) Files

- **testLightningEmailTemplate.html**
  - The HTML template file for the LWC. It defines the UI structure of the component, including comboboxes for selecting email templates and records, an input field for the recipient's email address, and a button to send the test email.

- **testLightningEmailTemplate.js**
  - The JavaScript controller for the LWC. This file handles the logic for loading email templates, retrieving records based on the selected template, and sending the test email. It interacts with the Apex controller to fetch data and perform actions.

- **testLightningEmailTemplate.js-meta.xml**
  - The XML configuration file for the LWC. It defines where this component can be used within Salesforce (e.g., App Page, Record Page, Home Page, Flow Screen).

- **testLightningEmailTemplate.css**
  - The CSS file for the LWC. It provides custom styling to ensure proper spacing and alignment within the component.

### Apex Classes

- **OptionWrapper**
  - A helper class that is used to structure data for the LWC combobox options. It contains `value` and `label` properties to represent the selectable options.

- **EmailTestController**
  - The main Apex controller that handles the backend logic for the LWC. It provides methods to:
    - Fetch active email templates.
    - Retrieve the target object type associated with an email template.
    - Load records from the object type associated with the selected template.
    - Send a test email using the selected template, record, and recipient email.

- **EmailTestControllerTest**
  - The test class for `EmailTestController`. It includes unit tests to validate the functionality of the Apex methods, ensuring that email templates are correctly retrieved and test emails are successfully sent.

## Usage Instructions

### Prerequisites

1. Ensure that you have active email templates in your Salesforce org.
2. The email templates should be associated with a specific Salesforce object (e.g., Contact, Lead, Account).

### Installation

1. Deploy the LWC files (`testLightningEmailTemplate.html`, `testLightningEmailTemplate.js`, `testLightningEmailTemplate.js-meta.xml`, `testLightningEmailTemplate.css`) to your Salesforce org.
2. Deploy the Apex classes (`OptionWrapper`, `EmailTestController`, `EmailTestControllerTest`) to your Salesforce org.

### How to Use

1. Add the **Test Lightning Email Template** component to a Lightning App Page, Record Page, Home Page, or Flow Screen via the Lightning App Builder.
2. Open the page containing the component.
3. Select an email template from the first combobox. The component will automatically retrieve and display the related object type for the template.
4. Select a record from the second combobox. The options will be populated based on the object type associated with the selected email template.
5. Enter a valid email address in the input field where the test email will be sent.
6. Click the **Send Email** button to send a test email. If all fields are correctly filled, you will see a success message; otherwise, an error message will be displayed.

### Testing the Component

To verify that the LWC and Apex logic are functioning correctly, you can run the included test class:

1. In Salesforce Setup, navigate to **Apex Test Execution**.
2. Find and select `EmailTestControllerTest`.
3. Run the test class to ensure that all methods in the `EmailTestController` work as expected.

### Troubleshooting

- Ensure that the recipient email address is correct and corresponds to a valid Salesforce Contact if the template is intended to be sent to a contact.
- Check for any error messages displayed in the component and refer to the debug logs for more details if needed.
