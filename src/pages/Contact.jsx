import React from "react";
import ContactHeading from "../components/ContactHeading";
import Support from '../components/Support';
import UserInputSection from "../components/UserInputSection";


const Contact = () => {
  return (
    <div className="contact_page">

      <ContactHeading />
      <UserInputSection/>

      <Support/>


    </div>

  );
};

export default Contact;