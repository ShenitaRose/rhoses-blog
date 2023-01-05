import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"


export default function Section4() {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2">
            <div className="item">
                <h1 className="font-bold text-4xl py-12 ">Business</h1>
                <div className="flex flex-col gap-6">
                    {/* posts */}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}

                </div>
            </div>
            <div className="item">
                <h1 className="font-bold text-4xl py-12 ">Travel</h1>
                <div className="flex flex-col gap-6">
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                </div>
            </div>
        </div>
    </section>
  )
}

function Post(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={"/"}><Image src={"/images/Baby.png"} width={300} height={250} alt="Image of my sim" className="rounded"/></Link>
            </div>
            <div className="info flex justify-center flex-col">
            <div className="cat">
            <Link href={"/"} className="text-orange-600 hover:text-orange-800">Stories</Link>
            <Link href={"/"} className="text-gray-800 hover:text-gray-600">-July 2, 2023</Link>
            </div>
            <div className="title">
            <Link href={"/"} className="text-xl  font-bold text-gray-800 hover:text-gray-600">The baby is here!</Link>
            </div>
            <Author />
            </div>
        </div>
    )
}