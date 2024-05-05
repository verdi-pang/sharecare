import ConfirmationButtons from "@/components/confirmationButtons/confirmationButtons";
import ConfirmationCallout from "@/components/confirmationCallout/confirmationCallout";
import ConfirmationHeader from "@/components/confirmationHeader/confirmationHeader";

export default function Confirmation() {
    return (
        <div className="flex flex-col px-3 py-4">
            <ConfirmationHeader />
            <ConfirmationCallout />
            <ConfirmationButtons />
        </div>
    )
}