import { Add } from "@mui/icons-material";
import { useState } from "react";

const faqContents = [
  {
    title: "How does the request process work?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in.",
  },
  {
    title: "What is the cancellation policy?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in.",
  },
  {
    title: "Am I insured as a renter?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in.",
  },
  {
    title: "How does Verification work?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in.",
  },
];

const ProductFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  return (
    <div className="mt-6 flex w-full flex-col items-start gap-4 bg-amber-400 bg-opacity-10 px-4 pb-8 pt-6 leading-6">
      <div className="self-center text-2xl font-semibold leading-7 text-amber-400">
        FAQs
      </div>
      {faqContents.map((index, i) => (
        <div
          className="w-full rounded-lg border border-solid border-primary bg-white p-3 text-primary shadow shadow-primary"
          key={i}
        >
          <div
            className="flex flex-row justify-between font-semibold text-primary"
            onClick={() => setOpenFAQ(key)}
          >
            {index.title}
            <Add />
          </div>
          <div
            className={`${openFAQ === key ? "text-md block py-2 font-light" : "hidden"}`}
          >
            {index.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductFAQ;
