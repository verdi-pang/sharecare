import AvaliabilityModal from '@/components/avaliablityModal/avaliabilityModal';
import FallbackScreen from '@/components/fallbackScreen/fallbackScreen';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { Suspense } from "react";


export default function productPageLayout({ children }) {
    // const router = useRouter();
    return (
        <section className="flex flex-col gap-2">

            {children}
            <Suspense fallback={<FallbackScreen />}>
                <AvaliabilityModal />
            </Suspense>
        </section>)
}