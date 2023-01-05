import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"

export default function Format({children}){
    return(
        <>
        <Head>
        <title>Rhoses Blog</title>
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}