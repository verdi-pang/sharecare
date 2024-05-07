import ProfileDisplay from "@/components/profileDisplay/profileDisplay";
import ProfileHeader from "@/components/profileHeader/profileHeader";

export default function ProfileLayout({ children }) {
    return (
        <>
            <ProfileHeader />
            <ProfileDisplay />
            <main>{children}</main>
        </>
    )
}