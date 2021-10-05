import Image from 'next/image'
import logo from '../../src/assets/logo.png'
import LoginButton from '../../src/components/LoginButton'
import SignupButton from '../../src/components/SignupButton'



export default function Header() {
return (
    <>
    <div className="container mx-auto flex justify-between items-center z-20">
        <div className="mx-12 w-1/4 my-6 ">
            <Image className=""
            src={logo}
            layout="responsive"   
             />
        </div>

        <div className="flex items-center  ">
            <LoginButton />
            <SignupButton />
        </div>
    </div>

    </>
)
}