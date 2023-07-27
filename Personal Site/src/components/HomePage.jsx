import React from 'react';
import Header from './Header';
import AboutMe from './Aboutme';
import ContactForm from './ContactForm.JSX'


// Homepage Component
const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <AboutMe />
        <ContactForm />
      </main>
    </div>
  );
};

export default HomePage;