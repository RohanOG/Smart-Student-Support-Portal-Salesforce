import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LeaveFeedback extends LightningElement {
    name = '';
    email = '';
    message = '';

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleMessageChange(event) {
        this.message = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
        // For now, just show a toast. Later, integrate with Apex if needed.
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Thank You!',
                message: 'Your feedback has been submitted.',
                variant: 'success'
            })
        );

        // Clear form
        this.name = '';
        this.email = '';
        this.message = '';
    }
}
