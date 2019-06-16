import React from 'react';

const EmailCapture = () => (
	<form name="emails" data-netlify="true" netlify-honeypot="bot-field">
		<input className="hidden" name="bot-field" />
		<input className="email-capture" type="email" placeholder="ENTER EMAIL FOR UPDATES"></input>
		<div class="hidden-submit"><input type="submit" tabindex="-1"/></div>
	</form>
);

export default EmailCapture;