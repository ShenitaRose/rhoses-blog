import Format from '../../layout/format'
import Author from '../../components/_child/author'
import Image from 'next/image'
import Related from '../../components/_child/related'

export default function page() {
  return (
    <Format>
        <section className='container mx-auto md:px-2 py-16 w-1/2'>
            <div className='flex justify-center'>
                <Author />
            </div>

            <div className='post py-10'>
                <h1 className='font-bold text-4xl text-center pb-5'>Rhia finds love in one of the most Hopeless places ever!</h1>

                <p className='text-gray-500 text-xl text-center'>Today Rhia decided that she was going to go out and enjoy herself.
                   Rhia has been at home since Lock down and has found it quite difficult to make friends. 
                   She had just moved to Moonwood Mill and was Hoping for a fresh Start.
                </p>

                <div className='py-10'>
                 <Image src={"/images/Telephone.png"} 
                    width={900} 
                    height={600}
                    alt="Image of my sim" 
                />
                </div>

                <div className='content text-gray-600 text-lg flex flex-col gap-4'>
                    <p>
                    Today Rhia decided that she was going to go out and enjoy herself.
                    Rhia has been at home since Lock down and has found it quite difficult to make friends.
                    She had just moved to Moonwood Mill and was Hoping for a fresh Start.
                    </p>
                    <p>
                    Today Rhia decided that she was going to go out and enjoy herself.
                    Rhia has been at home since Lock down and has found it quite difficult to make friends.
                    She had just moved to Moonwood Mill and was Hoping for a fresh Start. 
                    </p>
                    <p>
                    Today Rhia decided that she was going to go out and enjoy herself.
                    Rhia has been at home since Lock down and has found it quite difficult to make friends.
                    She had just moved to Moonwood Mill and was Hoping for a fresh Start.
                    </p>

                </div>

            </div>

            <Related />

        </section>
    </Format>
  )
}

