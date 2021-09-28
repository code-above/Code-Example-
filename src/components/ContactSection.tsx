

export default function ContactSection() {

    return (
        <section className="relative bottom-0 md:bottom-0  bg-contact-box w-full md:grid grid-cols-2 p-20">
            <div className="mr-28 ">
                <h2 className="text-blue-300 text-4xl font-bold mb-6">Lorem Ipsum</h2>   
                <p className="text-white leading-tight font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>     
            </div>

            <div>
               
            <form className="block mt-12 md:mt-0 md:ml-28" action="" method="POST">
                    <label className="block text-blue-300 pb-2" for="name">Name</label>
                    <input className="rounded-md mb-4 py-2 px-5" id="name" type="text" autocomplete="name" placeholder="John Doe" required />

                    <label className="block text-blue-300 pb-2" for="Email">Email</label>
                    <input className="block rounded-md py-2 px-5 mb-4" id="email" type="text" autocomplete="email" placeholder="john@doe.com" required />
                    <button className="mt-6 px-12 py-3 rounded-2xl bg-blue-800 text-white"type="submit">Submit</button>
             </form>
                
            </div>
        </section>
    )
}