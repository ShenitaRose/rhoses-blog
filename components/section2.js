import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from '../lib/fetcher'


export default function Section2() {

    const { data,isLoading,isError}=fetcher('api/posts')

    if(isLoading)return<div>Loading...</div>
    if(isError)return<div>Error</div>
   
  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
        
        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {
                data.map((value,index)=>(
                <Post data={value} key={index}/>
                ))
            }
        </div>
    </section>
  )
}

function Post({data}){
     const {id,title,category,img,published,subtitle,author}=data;
    return(
        <div className="item">
            <div className="images">
                <Link href={"/"}><Image src={img} width={500} height={350} alt="Image of my sim" className="rounded"/></Link> 
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
            <Link href={"/"} className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</Link>
            <Link href={"/"} className="text-gray-800 hover:text-gray-600">-{published || "Unknown"}</Link>
            </div>
            <div className="title">
            <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</Link>
            </div>
            <p className="text-gray-500 py-3">{subtitle || "Subtitle"}</p>
            {author?<Author />:<></>}
            </div>
        </div>
    )
}