const ConfirmationCallout = () => {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-solid border-black p-7 text-base tracking-wide lg:w-3/5 lg:gap-6 lg:self-center">
      <div className="lg:text-lg">
        <span className="font-bold">Stay Active:</span> Respond promptly to
        rental requests and messages from potential borrowers.
      </div>
      <div className="lg:text-lg">
        <span className="font-bold">Monitor Your Listing:</span> Keep an eye on
        your listing for any updates or messages.
      </div>
      <div className="lg:text-lg">
        <span className="font-bold">Share the News:</span> Spread the word! Let
        your network know about your item on Novo for more sharing
        opportunities.
      </div>
    </div>
  );
};

export default ConfirmationCallout;
