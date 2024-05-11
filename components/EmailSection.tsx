import React from "react";

const EmailSection = () => {
  return (
    <section
      id="Contact"
      className="relative px-20  md:px-5 grid md:grid-cols-2 my-12 py-24 gap-4"
    >
      <div>
        <h2 className="mt-5 my-1 font-semibold text-3xl">Lets</h2>
        <h2 className="my-1 font-semibold text-3xl">Travel</h2>
        <h2 className=" my-1 font-semibold text-3xl">To Gether</h2>
        <p className="mt-5  pr-20">
          Escape to breathtaking landscapes, vibrant cultures, and unforgettable
          experiences with our exclusive travel packages. Whether you're seeking
          the sun-kissed shores of tropical paradises, the awe-inspiring majesty
          of ancient wonders, or the charm of quaint cobblestone streets.
        </p>
      </div>
      <form className="flex flex-col gap-4">
        <label htmlFor="email" className="text-slate-800">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder="yourname@google.com"
          className="rounded-lg p-1 pl-2  border-2 border-slate-400  text-slate-900"
        ></input>
        <label htmlFor="Subject" className="text-slate-800">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          required
          placeholder="subject"
          className="rounded-lg p-1 pl-2  border-2 border-slate-400   text-slate-900"
        ></input>
        <label htmlFor="message" className="text-slate-800">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="subject"
          className="rounded-lg p-1 pl-2  border-2 border-slate-400  h-24 text-slate-900"
        ></textarea>
        <button
          type="submit"
          className="bg-cyan-500 px-3 py-1 hover:bg-cyan-600 rounded-full"
        >
          Submit
        </button>
      </form>
      {/* <figure className="bubble  w-96 lg:w-[520px] h-60 bg-indigo-600 top-16 left-5 absolute"/>
      <figure className="bubble  w-96 lg:w-[700px] h-60 bg-sky-600 bottom-16 right-5 absolute"/> */}
    </section>
  );
};

export default EmailSection;
