import Link from "next/link";

const AboutHowitworks = () => {
  const content = [
    {
      title: "Discover",
      body: "Explore Novo's marketplace and find the perfect items for your projects, adventures, or events.",
    },
    {
      title: "Request",
      body: "Select the items you want, submit a rental request, and connect with lenders for details.",
    },
    {
      title: "Confirm and Pay",
      body: "Once terms are agreed upon, securely confirm the rental and make payments through Novo.",
    },
  ];
  return (
    <div className="mt-14 flex flex-col gap-3 bg-amber-400 bg-opacity-10 px-3 pb-6 pt-8 text-black">
      <div className="lg:w-3/5 lg:self-center">
        <div>
          <h2 className="text-center text-2xl font-semibold leading-9 text-secondary">
            How renting works
          </h2>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {content.map((item, index) => (
            <div
              className="flex flex-col gap-2 rounded-lg border-2 bg-white p-4 shadow-md"
              key={index}
            >
              <div>
                <h3 className="justify-center text-xl font-semibold leading-7 text-primary">
                  {item.title}
                </h3>
              </div>
              <div className="mt-2.5 text-sm leading-5 tracking-wide">
                {item.body}
              </div>
            </div>
          ))}
        </div>
        <Link href="/posting">
          <div className="text-neutral-500 mt-4 justify-center rounded-md border border-solid border-indigo-900 bg-white px-6 py-3.5 text-center font-medium shadow-primary shadow-indigo-900">
            Post an item
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutHowitworks;
