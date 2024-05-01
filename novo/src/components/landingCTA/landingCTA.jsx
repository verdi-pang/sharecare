import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Image from 'next/image';

const LandingCTA = () => {
    return (
        <div className="flex flex-col p-4 gap-6 mt-6">
            <div className="flex flex-col text-center gap-6">

                <div className="flex flex-col px-6 gap-2">
                    <div><PriceCheckIcon fontSize='large' /></div>
                    <h1 className="font-bold">Share More, Earn More</h1>
                    <p className="text-sm">Discover a world of possibilities when you share what you have. Your idle items can now become your extra income</p>
                </div>

                <div className="flex flex-col px-6 gap-2">
                    <div><ThumbUpAltIcon fontSize='large' /></div>
                    <h1 className="font-bold">Sharing Made Simple</h1>
                    <p className="text-sm">Experience the simplicity of sharing. List your items, earn, and make new friends with Sharecare</p>
                </div>

                <div className="flex flex-col px-6 gap-2">
                    <div><ThumbUpAltIcon fontSize='large' /></div>

                    <h1 className="font-bold">Sharing Made Simple</h1>
                    <p className="text-sm">Experience the simplicity of sharing. List your items, earn, and make new friends with Sharecare</p>
                </div>
            </div>

            <div className="flex flex-col gap-6 mt-4">
                <div className='w-[20rem] h-[30rem] relative'>
                    <Image
                        src="/img/iphone.png"
                        style={{ objectFit: 'cover' }}
                        fill
                        alt="iphone"
                    />

                </div>

                <div className='text-xl font-bold'>Join Sharecare Today</div>

                <p className="text-sm">
                    Ready to transform your possessions into a source of income and make a positive impact on the environment?

                    Sign up for Sharecare today and become a part of the sharing revolution. Whether you have items to lend or are searching for something specific, Sharecare is the platform that brings people together to share the things they love.</p>

            </div>
        </div>
    );

}

export default LandingCTA;