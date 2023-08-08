import React from 'react';
import AboutMe from './Aboutme';
import ContactForm from './ContactForm.JSX'
import Home from './Home';


// Homepage Component
const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <main>
        <Home />
        <AboutMe/>

        <ContactForm />
      </main>
    </div>
  );
};

export default HomePage;