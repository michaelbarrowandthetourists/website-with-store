import React from 'react';

const EmailCapture = () => (
	<form name="email-form" method="POST" enctype="application/x-www-form-urlencoded" netlify-honeypot="bot-field" data-netlify="true">
		<input className="hidden" name="bot-field" />
		<input className="email-capture" type="email" placeholder="ENTER EMAIL FOR UPDATES"></input>
		<div  ><input name="submit" type="submit" tabindex="-1"/></div>
	</form>
);

export default EmailCapture;