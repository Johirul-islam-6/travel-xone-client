import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';


const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
// const NewsletterForm = () =><MailchimpSubscribe url={url}/>
const NewsletterSubscribe = () => {

  return (
    <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <NewsletterForm status={ status }
            message={ message }
            onSubmitted={formData => subscribe(formData)} />
      </div>
    )}
  />
  );
};

export default NewsletterSubscribe;