import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
function ContactMob() {
  const form = useRef();
  const {
    register,
    handleSubmit,

    clearErrors,
    formState: { errors },
  } = useForm();

  const onFormSubmit = () => {
    const serviceID = "service_lbaydpa";
    const templateID = "template_wwht3ir";
    emailjs
      .sendForm(serviceID, "YOUR_TEMPLATE_ID", form.current, templateID)
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
    <div className="mv-contact-wrapper">
      <div className="mv-skillsSec-title">
        <p className="flip_text2">Contact</p>
      </div>
      <div className="mv-contact-row2">
        Get in touch or shoot me an email directly on bndissanayaka@gmail.com
      </div>
      <div className="mv-contact-row3">
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="mv-contact-form"
          ref={form}
        >
          <label className="mv-contact-fieldLbl">Name </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
            className="mv-contact-field"
            onInput={() => clearErrors("name")}
          />
          <div className="mv-details-errormsg">
            {errors?.name && errors.name.message}
          </div>
          <label className="mv-contact-fieldLbl">Email Address </label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Customer email required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
            placeholder="Enter your email address"
            className="mv-contact-field"
            onInput={() => clearErrors("email")}
          />
          <div className="mv-details-errormsg">
            {errors?.email && errors.email.message}
          </div>
          <label className="mv-contact-fieldLbl">Subject </label>
          <input
            type="text"
            name="subject"
            {...register("subject", { required: "Subject is required" })}
            placeholder="Enter your email subject"
            className="mv-contact-field"
            onInput={() => clearErrors("subject")}
          />
          <div className="mv-details-errormsg">
            {errors?.subject && errors.subject.message}
          </div>
          <label className="mv-contact-fieldLbl">Message</label>
          <textarea
            type="text"
            name="message"
            {...register("message", { required: "Message is required" })}
            placeholder="Enter your message"
            className="mv-contact-fieldarea"
            rows="4"
            cols="50"
            onInput={() => clearErrors("message")}
          />
          <div className="mv-details-errormsg">
            {errors?.message && errors.message.message}
          </div>
          <button type="submit" className="mv-contact-fieldSubmit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMob;
