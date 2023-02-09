import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mw5ra7q",
        "template_suvcvch",
        form.current,
        "oMupwJAS1a7hnvO6w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
        <Header></Header>
        <div 
      id="contact"
      className=" rounded-lg mb-10"
      >

      <div  class="hero">
        <div class="hero-content  flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left lg:pl-10 w-1/2">
            <h1  
     data-aos-duration="200"  class="text-5xl text-primary font-bold">Get In Touch!</h1>
            <p   
     data-aos-duration="300" class="py-6 text-primary">
              Send us email if you think we can help you out with any of your query.
            </p>
          </div>
          <div   
     data-aos-duration="300" class="card flex-shrink-0 skills w-full max-w-sm shadow-2xl border contact">
            <form ref={form} onSubmit={sendEmail} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-primary font-semibold">Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  class="input input-bordered  text-black"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-primary font-semibold">Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  class="input input-bordered  text-black"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-primary font-semibold">Message</span>
                </label>
                <textarea
                  className=" text-black  border rounded"
                  required
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div class="form-control mt-6">
                <input type="submit" className="btn button" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ContactUs;