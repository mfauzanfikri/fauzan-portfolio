const Contact = () => {
  return (
    <section id="contact" className="bg-slate-100 pb-36 pt-36">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Contact Me
            </h2>
            <p className="text-base font-medium text-secondary md:text-lg">
              You can contact me for business below.
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-center gap-4 px-4 lg:gap-8">
          <div className="flex w-full justify-center rounded-lg bg-white px-8 py-3 lg:w-[80%]">
            <div className="w-1/2 lg:w-[80%]">
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-sm lg:text-base">Contact me with email</p>
            </div>
            <div className="flex w-1/2 items-center justify-end lg:w-[20%]">
              <a href="mailto:mfauzanfikri09@gmail.com">
                <button className="rounded-lg bg-primary px-3 py-1.5 text-sm text-white hover:opacity-80 md:text-base">
                  Email Me
                </button>
              </a>
            </div>
          </div>
          <div className="flex w-full justify-center rounded-lg bg-white px-8 py-3 lg:w-[80%]">
            <div className="w-1/2 lg:w-[80%]">
              <h3 className="text-lg font-semibold">Chat</h3>
              <p className="text-sm lg:text-base">Chat me via WhatsApp</p>
            </div>
            <div className="flex w-1/2 items-center justify-end lg:w-[20%]">
              <a href="https://wa.link/0afted">
                <button className="rounded-lg bg-primary px-3 py-1.5 text-sm text-white hover:opacity-80 md:text-base">
                  Chat Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
