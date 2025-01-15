import React from 'react';

function Contact() {
  return (
    <div id="contact" className="flex min-h-[70hv] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-4xl md:text-5xl">
          <span className="text-white">Get in Touch</span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          Have a project in mind?<br></br>Contact me!
        </p>
        <form
          action="https://formspree.io/f/mzzzolzl"
          method="POST"
          className="flex flex-col gap-4 w-full max-w-md"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="rounded border-gray-300 px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            className="rounded border-gray-300 px-4 py-2 h-32"
          ></textarea>
          <button
            type="submit"
            className="rounded-lg border border-gray-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
