const ConfirmationHeader = () => {
    return (
        <div className="flex flex-col p-2 mt-2.5 w-full leading-6 text-black gap-2">
            <div className="text-xl font-bold">
                Congratulations! Your Item is Live on Novo!
            </div>
            <div className="text-lg">
                Thank you for choosing Novo to share your item!
            </div>
            <div className="text-m">
                Your listing is now live in our marketplace, opening the door to
                countless sharing possibilities. Here's what happens next:
            </div>
        </div>
    );
}

export default ConfirmationHeader;