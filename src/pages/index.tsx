import Head from "next/head";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import { useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300","500","600"] });

console.log('1')
// const getProducts = async () => {
//   console.log('2')
//   try {
//     console.log('3')

//     const response = await api.get("/products?page=1&rows=5&sortBy=id&orderBy=ASC")
//     console.log('Response 1', response.data)
//     console.log('4')
  
//     return response.data.products;
    
//   } catch (error) {
//     console.log('5')
//     console.error('Error:', error)
//   }
// }

const Home: NextPage<IProducts> = (): JSX.Element => {
  console.log('6')
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    // queryFn: 
  })
  console.log('7')
console.log('Data:',data)
// console.log('Loading:',isLoading)
console.log('Erro:',error?.message, 'Causa:',error?.cause)
// useEffect(() => {
//   getProducts()
// },[])  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={``}>
        <ul>
          {}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {/* {data?.map((product: IProducts) => {
                <li key={product.id}>
                  <Image src={product.img} alt={product.name} width={180} height={180} />
                </li>
              })} */}
            </>
          )}
        </ul>
        {/* <div>{data?.map((product) => (

          ))}
        </div> */}
      </main>
    </>
  );
}

// export const getStaticProps: GetServerSideProps = async () => {
//   const response = await api.get<IProducts[]>("/products?page=1&rows=5&sortBy=id&orderBy=ASC")

//   return { 
//     props: { 
//       products

//     },
//     revalidate
//   }
// }

export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()
 
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}


export default Home