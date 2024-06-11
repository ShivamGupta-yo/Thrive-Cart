import React from 'react';
import Layout from '../Layout/Layout';
import './About.css';

const About = () => {
  return (
    <Layout title={'About Us'}>
      <div className='about-container'>
        <h1 className='about-heading'>About Us</h1>
        <div className="aboutflex">
       

        <p className='about-text'>
          Welcome to Thrive Cart, your ultimate destination for all your shopping needs. We are dedicated to providing you with a seamless and enjoyable online shopping experience.
        </p>
        <p className='about-text'>
          At Thrive Cart, we believe in offering high-quality products at competitive prices, along with exceptional customer service. Our team is committed to ensuring that you find exactly what you're looking for and have a positive shopping experience every time you visit our website.
        </p>
        <p className='about-text'>
          With a wide range of products across various categories, including fashion, electronics, home goods, and more, we strive to cater to the diverse needs and preferences of our customers. Whether you're shopping for yourself or searching for the perfect gift, we have something for everyone.
        </p>
        <p className='about-text'>
          Thank you for choosing Thrive Cart. We appreciate your support and look forward to serving you for all your future shopping needs. Happy shopping!
        </p>
        </div>
       
      </div>
     
    </Layout>
  );
}

export default About;
