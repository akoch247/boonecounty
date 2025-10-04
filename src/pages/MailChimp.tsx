import React, { useState } from 'react';

export default function MailchimpForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailConsent, setEmailConsent] = useState(false);
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch(e.target.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      setStatus('success');
      setMessage('Thank you for subscribing! Please check your email to confirm your subscription.');
      setEmail('');
      setFirstName('');
      setLastName('');
      setEmailConsent(false);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div id="mc_embed_shell">
      <style>{`
        #mc_embed_signup {
          background: #fff;
          clear: left;
          font: 14px Helvetica, Arial, sans-serif;
          width: 600px;
          max-width: 100%;
          margin: 0 auto;
        }
        #mc-embedded-subscribe-form input[type=checkbox] {
          display: inline;
          width: auto;
          margin-right: 10px;
        }
        #mergeRow-gdpr {
          margin-top: 20px;
        }
        #mergeRow-gdpr fieldset label {
          font-weight: normal;
        }
        #mc-embedded-subscribe-form .mc_fieldset {
          border: none;
          min-height: 0px;
          padding-bottom: 0px;
        }
        .mc-field-group {
          margin-bottom: 15px;
        }
        .mc-field-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        .mc-field-group input[type="text"],
        .mc-field-group input[type="email"] {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        .indicates-required {
          text-align: right;
          font-size: 11px;
          margin-bottom: 10px;
        }
        .asterisk {
          color: #e85c41;
          font-weight: bold;
        }
        .content__gdpr p {
          font-size: 12px;
          line-height: 1.5;
          margin: 10px 0;
        }
        .content__gdprLegal {
          margin-top: 15px;
        }
        .content__gdprLegal p {
          font-size: 11px;
          color: #666;
        }
        .button {
          background-color: #e85c41;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: bold;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        }
        .button:hover {
          background-color: #d14b2f;
        }
        .checkbox.subfield {
          display: flex;
          align-items: center;
          margin: 10px 0;
        }
        .status-message {
          padding: 10px;
          margin: 15px 0;
          border-radius: 4px;
          font-size: 14px;
        }
        .status-success {
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
          color: #155724;
        }
        .status-error {
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
          color: #721c24;
        }
        .status-sending {
          background-color: #d1ecf1;
          border: 1px solid #bee5eb;
          color: #0c5460;
        }
      `}</style>

      <div id="mc_embed_signup">
        <form
          action="https://boonecountyrepublicanwomensclub.us5.list-manage.com/subscribe/post?u=a2bf7f2f663c11b56aae15ef7&id=a9b0b0e5e3&v_id=3613&f_id=008271ebf0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          onSubmit={handleSubmit}
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Contact Information</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>

            {status && (
              <div className={`status-message status-${status}`}>
                {message}
              </div>
            )}

            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name</label>
              <input
                type="text"
                name="FNAME"
                className="text"
                id="mce-FNAME"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name</label>
              <input
                type="text"
                name="LNAME"
                className="text"
                id="mce-LNAME"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
              <div className="content__gdpr">
                <label>Marketing Permissions</label>
                <p>Please select all the ways you would like to hear from us:</p>
                <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                  <label className="checkbox subfield" htmlFor="gdpr_367813">
                    <input
                      type="checkbox"
                      id="gdpr_367813"
                      name="gdpr[367813]"
                      className="gdpr"
                      value="Y"
                      checked={emailConsent}
                      onChange={(e) => setEmailConsent(e.target.checked)}
                    />
                    <span>Email</span>
                  </label>
                </fieldset>
                <p>
                  You can unsubscribe at any time by clicking the link in the footer of our emails. 
                  For information about our privacy practices, please visit our website.
                </p>
              </div>
              <div className="content__gdprLegal">
                <p>
                  We use Mailchimp as our marketing platform. By clicking below to subscribe, 
                  you acknowledge that your information will be transferred to Mailchimp for processing.{' '}
                  <a href="https://mailchimp.com/legal/terms" target="_blank" rel="noopener noreferrer">
                    Learn more
                  </a>{' '}
                  about Mailchimp's privacy practices.
                </p>
              </div>
            </div>

            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>

            {/* Real people should not fill this in */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input
                type="text"
                name="b_a2bf7f2f663c11b56aae15ef7_a9b0b0e5e3"
                tabIndex={-1}
                defaultValue=""
              />
            </div>

            <div className="clear">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value={status === 'sending' ? 'Subscribing...' : 'Subscribe'}
                disabled={status === 'sending'}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}