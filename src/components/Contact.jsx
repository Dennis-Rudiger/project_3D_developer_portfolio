import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); // Add error state

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const checkEmailJSConfig = () => {
    console.log("Service ID:", import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkEmailJSConfig(); // Add this line to debug
    
    if (!validateForm()) return;
    
    setLoading(true);

    // Check if environment variables are set
    if (!import.meta.env.VITE_APP_EMAILJS_SERVICE_ID ||
        !import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID ||
        !import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY) {
      setLoading(false);
      alert("Email service is not properly configured");
      return;
    }

    // Prepare email data
    const templateParams = {
      from_name: form.name,
      to_name: "Dennis",
      from_email: form.email,
      to_email: "rudigabuilds@gmail.com",
      message: form.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setLoading(false);
          if (response.status === 200) {
            alert("Message sent successfully! I will get back to you soon.");
            // Clear form after successful send
            setForm({
              name: "",
              email: "",
              message: "",
            });
          } else {
            alert(`Message not sent. Status: ${response.status}`);
          }
        },
        (error) => {
          setLoading(false);
          console.error("Email error:", error);
          alert(`Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.name ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.email ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                errors.message ? 'border-2 border-red-500' : ''
              }`}
            />
            {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] xl:overflow-hidden'
        style={{ height: '50vh', minHeight: '300px', maxHeight: '600px' }} // Added style
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
