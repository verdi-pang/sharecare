import { Avatar } from "@mui/material";

const reviewsList = [
  {
    name: "John",
    location: "Toronto",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in, efficitur fermentum leo. Vivamus urna.",
  },
  {
    name: "Jane",
    location: "Toronto",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in, efficitur fermentum leo. Vivamus urna.",
  },
  {
    name: "James",
    location: "Toronto",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit urna, sollicitudin in pretium in, efficitur fermentum leo. Vivamus urna.",
  },
];

const LandingReviews = () => {
  return (
    <div className="flex flex-col gap-4 p-4 lg:w-2/5 lg:py-12">
      <div>
        <h2 className="text-xl font-bold">Recent Reviews</h2>
      </div>

      {reviewsList.map((review, index) => (
        <div key={index}>
          <div className="flex flex-col gap-4 rounded-bl-lg rounded-br-lg rounded-tr-lg border-2 p-4 shadow-md">
            <div>
              <p className="text-base">{review.review}</p>
            </div>
            <div className="flex flex-row content-center gap-4">
              <div>
                <Avatar />
              </div>
              <div className="flex flex-col">
                <div>{review.name}</div>
                <div>{review.location}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
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
};

export default LandingReviews;
