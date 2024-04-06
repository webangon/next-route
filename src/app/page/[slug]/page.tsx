import { Metadata } from 'next'
import { Suspense } from "react";
import Header from '../.././components/Header'
import Loading from "../.././loading";
 
export const metadata: Metadata = {
  title: 'About',
}

export default async function Page({ params }: {
    params: { slug: string };
}) {

    const query = `
    query {
        pages(where: {name: "${params.slug}"}) {
            nodes {
              title
              content
            }
        }  
    }    
    `;

    const res = await fetch('https://webangon.com/nextwp/graphql', {
        method: "POST",
        cache: 'no-store',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            query
        })
    }).then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            return data;
        }
    )
    const xyz = res.data.pages.nodes;
    //console.log(xyz);
    return(
        <>
        <Header/>
    <Suspense fallback={<Loading />}>
      {xyz.map((item:any) => {
        const content = item.content;
        return( 
            <>
          <div dangerouslySetInnerHTML={{__html: content}}></div>            
            </>
        );
      })}
    </Suspense>
        </>
    ) 
}