export default function Login() {
    return (
        <div className="flex flex-col justify-center px-4 py-2.5 mt-3.5 w-full text-sm font-medium text-violet-950">
            <div className="self-center text-3xl text-black">Welcome to Novo</div>
            <div className="justify-center items-center px-6 py-2.5 mt-14 tracking-normal text-center bg-white border border-solid border-violet-950 leading-[143%] rounded-[100px]">
                Continue with Google
            </div>
            <div className="justify-center items-center px-6 py-2.5 mt-6 tracking-normal text-center bg-white border border-solid border-violet-950 leading-[143%] rounded-[100px]">
                Continue with Facebook
            </div>
            <div className="justify-center items-center px-6 py-2.5 mt-6 tracking-normal text-center bg-white border border-solid border-violet-950 leading-[143%] rounded-[100px]">
                Continue with email
            </div>
        </div>
    )
}