const ConfirmationCallout = () => {
    return (
        <div className="flex flex-col p-7 mt-6 text-base  tracking-wide rounded-3xl border border-black border-solid">
            <div>
                <span className="font-bold">Stay Active:</span> Respond promptly to
                rental requests and messages from potential borrowers.
            </div>
            <div className="mt-4">
                <span className="font-bold">Monitor Your Listing:</span> Keep an eye on your listing for any updates or messages.
            </div>
            <div className="mt-4">
                <span className="font-bold">Share the News:</span> Spread the word! Let your network know about your item on Novo for more sharing opportunities.
            </div>
        </div>
    );
}

export default ConfirmationCallout;