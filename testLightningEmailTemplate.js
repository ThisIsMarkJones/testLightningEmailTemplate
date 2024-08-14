import { LightningElement, track } from 'lwc';
import getEmailTemplates from '@salesforce/apex/EmailTestController.getEmailTemplates';
import getTargetObjectType from '@salesforce/apex/EmailTestController.getTargetObjectType';
import getRecords from '@salesforce/apex/EmailTestController.getRecords';
import sendTestEmail from '@salesforce/apex/EmailTestController.sendTestEmail';

export default class TestLightningEmailTemplate extends LightningElement {
    @track emailTemplateOptions = [];
    @track recordOptions = [];
    @track selectedTemplateId;
    @track selectedRecordId;
    @track recipientEmail;
    @track error;

    connectedCallback() {
        this.loadEmailTemplates();
    }

    loadEmailTemplates() {
        getEmailTemplates()
            .then(result => {
                this.emailTemplateOptions = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error.body.message;
            });
    }

    handleTemplateChange(event) {
        this.selectedTemplateId = event.detail.value;
        this.loadTargetObjectType();
    }

    loadTargetObjectType() {
        if (this.selectedTemplateId) {
            getTargetObjectType({ templateId: this.selectedTemplateId })
                .then(objectType => {
                    this.loadRecords(objectType);
                })
                .catch(error => {
                    this.error = error.body.message;
                });
        }
    }

    loadRecords(objectType) {
        getRecords({ objectType: objectType })
            .then(result => {
                this.recordOptions = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error.body.message;
            });
    }

    handleRecordChange(event) {
        this.selectedRecordId = event.detail.value;
    }

    handleEmailChange(event) {
        this.recipientEmail = event.detail.value;
    }

    handleSendEmail() {
        if (this.selectedTemplateId && this.selectedRecordId && this.recipientEmail) {
            sendTestEmail({
                templateId: this.selectedTemplateId,
                recordId: this.selectedRecordId,
                recipientEmail: this.recipientEmail
            })
                .then(() => {
                    this.error = 'Email sent successfully';
                })
                .catch(error => {
                    this.error = error.body.message;
                });
        } else {
            this.error = 'Please fill out all fields';
        }
    }
}
