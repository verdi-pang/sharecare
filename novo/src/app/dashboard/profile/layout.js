import ProfileDisplay from "@/components/profileDisplay/profileDisplay";
import ProfileHeader from "@/components/profileHeader/profileHeader";

export default function ProfileLayout({ children }) {
  return (
    <div className="flex h-dvh flex-col">
      <ProfileHeader />
      <ProfileDisplay />
      <main>{children}</main>
    </div>
  );
}
