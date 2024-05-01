import AvaliabilityModal from '@/components/avaliablityModal/avaliabilityModal';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';

export default function productPageLayout({ children }) {
    return (
        <section className="flex flex-col p-3 gap-2">
            <div className="flex flex-row content-center font-bold"><Link href="/product"><ChevronLeftIcon />Back</Link></div>
            {children}
            <AvaliabilityModal />
        </section>)
}