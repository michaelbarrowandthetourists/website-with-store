import React from 'react';

const EmailCapture = () => (
	<form name="email-form" method="POST" enctype="application/x-www-form-urlencoded">
		<input type="hidden" name="form-name" value="email-form" />
		<input name="bot-field" hidden></input>
		<input className="email-capture" name="email-input" type="email" placeholder="ENTER EMAIL FOR UPDATES"></input>
	</form>
);

export default EmailCapture;