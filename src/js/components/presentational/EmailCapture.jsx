import React from 'react';

const EmailCapture = () => (
	<form name="emails" data-netlify="true" netlify-honeypot="bot-field">
		<input name="bot-field" styles="display: none;"/>
		<input className="email-capture" type="email" placeholder="ENTER EMAIL FOR UPDATES"></input>
	</form>
);

export default EmailCapture;