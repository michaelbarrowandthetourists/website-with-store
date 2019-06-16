import React from 'react';

const EmailCapture = () => (
	<form name="emails" method="POST" netlify-honeypot="bot-field" data-netlify="true">
		<input className="hidden" name="bot-field" />
		<input className="email-capture" type="email" placeholder="ENTER EMAIL FOR UPDATES"></input>
		<div  ><input type="submit" tabindex="-1"/></div>
	</form>
);

export default EmailCapture;