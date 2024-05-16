import { CircularProgress } from "@mui/material";

const FallbackScreen = () => {
    return (
        <div className="w-full flex flex-col justify-center gap-6 py-40">
            <CircularProgress className="self-center" />
            <h1 className="self-center">Loading...</h1>
        </div>
    );
}

export default FallbackScreen;