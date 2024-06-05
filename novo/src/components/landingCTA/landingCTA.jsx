
import Image from 'next/image';
import { Divider } from '@nextui-org/divider';

const LandingCTA = () => {
    return (
        <div className="flex flex-col p-4 gap-6 mt-6">
            <div className="flex flex-col text-center gap-6 ">

                <div className="flex flex-col px-2 gap-2">
                    <h1 className="text-2xl font-bold text-indigo-900">Share More, Earn More</h1>
                    <figure>
                        <Image src='/img/CTAasset/CTA_1.jpg' width={530} height={344} className="w-full max-w-[530px]" alt="illustration" />
                    </figure>

                    <p className="text-sm">Discover a world of possibilities when you share what you have. Your idle items can now become your extra income</p>
                </div>
                <Divider className='text-indigo-400' />

                <div className="flex flex-col px-2 gap-2">
                    <h1 className="text-2xl font-bold text-indigo-900">Sharing Made Simple</h1>
                    <figure>
                        <Image src='/img/CTAasset/CTA_2.svg' width={400} height={300} className="w-full max-w-[300px]" alt="illustration" />
                    </figure>

                    <p className="text-sm">Experience the simplicity of sharing. List your items, earn, and make new friends with Sharecare</p>
                </div>
                <Divider />

                <div className="flex flex-col px-2 gap-2">
                    <h1 className="text-2xl font-bold text-indigo-900">Get More from Your Belongings</h1>

                    <figure>
                        <Image src='/img/CTAasset/CTA_3.svg' width={520} height={400} className="w-full max-w-[520px]" alt="illustration" />
                    </figure>


                    <p className="text-sm">Your belongings are assets waiting to be shared. ShareCare connects you with those who need them</p>
                </div>
            </div>
        </div>
    );

}

export default LandingCTA;