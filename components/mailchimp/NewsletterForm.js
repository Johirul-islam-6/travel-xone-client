import { useState } from 'react';
import { decode } from 'html-entities';

const NewsletterForm = ( { status, message, onSubmitted }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  
  const handleFormSubmit = () => {

    setError(null);

    const isFormValidated = onSubmitted({ EMAIL: email });
    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }


    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
     return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
     return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode( formattedMessage ) : null;
  }

  return (
    <>
    {/* --------------Newsletter form input field------------- */}
    <div className="pt-5 md:pt-5 lg:pt-0">
        <p className="text-left font-light">
          Subscribe to get our latest update
        </p>
        <div className="flex justify-start lg:justify-end pt-1">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="email"
            placeholder="Enter your email address"
            className="px-2 py-2 text-slate-500 text-sm border"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
          <button
            className="bg-[#3264FF] text-sm p-2 border"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </div> 
    {/* -----------validation message with styles---------- */}
      <div className="newsletter-form-info">
        {status === "sending" && <div style={{ color: "blue" }}>Sending...</div>}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {status === "success" && status !== "error" && !error && (
          <div style={{ color: "green" }} dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </>
  );
}

export default NewsletterForm