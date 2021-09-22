import Image from 'next/image'
import logo from '../../src/assets/logo.png'
import LoginButton from '../../src/components/LoginButton'
import SignupButton from '../../src/components/SignupButton'



export default function Header() {
return (
    <>
    <div className="flex justify-between items-center absolute top-0 w-full">
        <div className="mx-12 w-1/4 my-6 ">
            <Image 
            src={logo}
            layout="responsive"   
             />
        </div>
        <div className="flex items-center absolute right-0 z-20">
            <LoginButton />
            <SignupButton />
        </div>
    </div>

    </>
)
}