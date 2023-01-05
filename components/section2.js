import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"

export default function Section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
        
        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
        </div>
    </section>
  )
}

function Post(){
    return(
        <div className="item">
            <div className="images">
                <Link href={"/"}><Image src={"/images/cat.png"} width={500} height={350} alt="Image of my sim" className="rounded"/></Link> 
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
            <Link href={"/"} className="text-orange-600 hover:text-orange-800">Stories</Link>
            <Link href={"/"} className="text-gray-800 hover:text-gray-600">-July 2, 2023</Link>
            </div>
            <div className="title">
            <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600">Rhia finds love in one of the most Hopeless places ever!</Link>
            </div>
            <p className="text-gray-500 py-3">
            Today Rhia decided that she was going to go out and enjoy herself.
            Rhia has been at home since Lock down and has found it quite difficult to make friends. She had just moved to Moonwood Mill and was Hoping for a fresh Start.
            </p>
            <Author />
            </div>
        </div>
    )
}