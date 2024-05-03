import AvaliabilityModal from '@/components/avaliablityModal/avaliabilityModal';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';
import { Suspense } from "react";


export default function productPageLayout({ children }) {
    return (
        <section className="flex flex-col p-3 gap-2">
            <Link href="/product"><div className="flex flex-row content-center font-bold"><ChevronLeftIcon /><div>Back</div></div></Link>
            {children}
            <Suspense fallback={<>Loading...</>}>
                <AvaliabilityModal />
            </Suspense>
        </section>)
}