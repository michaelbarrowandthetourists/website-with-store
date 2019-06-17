import React from 'react';

const EmailCapture = () => (
	<form name="email-form" method="POST" enctype="application/x-www-form-urlencoded" netlify-honeypot="bot-field" data-netlify="true">
		<input className="hidden" name="bot-field" ></input>
		<input className="email-capture" name="email-input" type="email" placeholder="ENTER EMAIL FOR UPDATES"></input>
		<div className="hidden-submit"><input name="submit-button" type="submit" tabindex="-1"></input></div>
	</form>
);

export default EmailCapture;