const ConfirmationHeader = () => {
  return (
    <div className="mt-2.5 flex flex-col gap-2 p-2 leading-6 text-black lg:w-3/5 lg:gap-4 lg:self-center">
      <div className="text-xl font-bold text-primary lg:text-3xl">
        Congratulations! Your Item is Live on Novo!
      </div>
      <div className="text-lg lg:text-2xl">
        Thank you for choosing Novo to share your item!
      </div>
      <div className="text-base lg:text-lg">
        Your listing is now live in our marketplace, opening the door to
        countless sharing possibilities. Here's what happens next:
      </div>
    </div>
  );
};

export default ConfirmationHeader;
