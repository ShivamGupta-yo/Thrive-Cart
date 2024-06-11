import React from 'react';
import Layout from '../Layout/Layout';
import './Policy.css';

const Policy = () => {
  return (
    <Layout title={'Privacy Policy'}>
      <div className='policy-container'>
        <h1 className='policy-heading'>Privacy Policy</h1>
        <div className='policy-content'>
          <p>
            Your privacy is important to us. It is Thrive Cart's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
          </p>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
          </p>
          <p>
            We don't share any personally identifying information publicly or with third-parties, except when required to by law.
          </p>
          <p>
            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
          </p>
          <p>
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
          </p>
          <p>
            Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
          </p>
       
        </div>
      </div>
    </Layout>
  );
}

export default Policy;
