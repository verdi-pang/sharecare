const AboutCallout = () => {
  return (
    <div className="flex px-4 py-12 text-center text-sm lg:justify-center lg:py-24">
      <div className="flex flex-col lg:w-3/5 lg:self-center">
        <div>
          <h2 className="text-3xl font-semibold leading-8 text-primary lg:font-bold">
            Your Peace of Mind, <br />
            Our Priority
          </h2>
        </div>
        <div className="mt-4 leading-5 tracking-wide lg:w-3/5 lg:self-center">
          <p className="lg:text-lg">
            Feel confident in renting with Novo—where your experiences are not
            only facilitated but also safeguarded. Join us and experience the
            peace of mind that comes with secure and insured renting!
          </p>
        </div>
        <div className="text-neutral-500 mt-4 justify-center rounded-md border border-solid border-indigo-900 px-6 py-3.5 text-center font-medium shadow-primary shadow-indigo-900 lg:w-fit lg:self-center lg:text-xl">
          Learn more
        </div>
      </div>
    </div>
  );
};

export default AboutCallout;
