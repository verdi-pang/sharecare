import { Add } from "@mui/icons-material";
import { useState } from "react";

const faqContents =
    [
        {
            title: "How does the request process work?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in."
        },
        {
            title: "What is the cancellation policy?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in."
        },
        {
            title: "Am I insured as a renter?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in."
        },
        {
            title: "How does Verification work?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in."
        },
    ]

const ProductFAQ = () => {

    const [openFAQ, setOpenFAQ] = useState(null)
    return (
        <div className="flex flex-col items-start px-4 pt-6 pb-8 mt-6 w-full  leading-6 bg-amber-400 bg-opacity-10 gap-4">
            <div className="text-2xl font-semibold text-amber-400 leading-7 self-center">FAQs</div>
            {faqContents.map((index, key) =>
                <div className="p-3 bg-white border border-solid border-primary shadow shadow-primary rounded-lg w-full text-primary" key={key}>
                    <div className="flex flex-row justify-between text-primary font-semibold" onClick={() => setOpenFAQ(key)}>
                        {index.title}
                        <Add />
                    </div>
                    <div className={`${openFAQ === key ? 'block py-2 text-md font-light' : 'hidden'}`}>
                        {index.content}
                    </div>

                </div>
            )

            }
        </div>
    );
}

export default ProductFAQ;