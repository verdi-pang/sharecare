import { Avatar } from "@mui/material";

const reviewsList = [
    { name: "John", location: "Toronto", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in, efficitur fermentum leo. Vivamus urna." },
    { name: "Jane", location: "Toronto", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in, efficitur fermentum leo. Vivamus urna." },
    { name: "James", location: "Toronto", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in, efficitur fermentum leo. Vivamus urna." }
]

const LandingReviews = () => {
    return (
        <div className="p-4 flex flex-col gap-4">
            <div><h2>Recent Reviews</h2></div>

            {reviewsList.map(review =>
                <div key={review}>
                    <div className="flex flex-col p-4 gap-4 border-2 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-md">
                        <div>
                            <p className="text-base">{review.review}
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 content-center">
                            <div><Avatar /></div>
                            <div className="flex flex-col">
                                <div>{review.name}</div>
                                <div>{review.location}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* <div>
                <div className="flex flex-col p-4 gap-4 border-2 rounded-tr-lg rounded-br-lg rounded-bl-lg shadow-md">
                    <div>
                        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in, efficitur fermentum leo. Vivamus urna.
                        </p>
                    </div>
                    <div className="flex flex-row gap-4 content-center">
                        <div><Avatar /></div>
                        <div className="flex flex-col">
                            <div>Header</div>
                            <div>Subhead</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default LandingReviews;