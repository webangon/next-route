import { Metadata } from 'next'
import Header from '../.././components/Header'

export const metadata: Metadata = {
  title: 'Courses',
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

    const res = await fetch( process.env.LIOR_GRAPHQL as string, {
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
    return(
        <>    
        <Header/>
      {xyz.map((item:any) => {
        const content = item.content;
        return( 
            <>
          <div dangerouslySetInnerHTML={{__html: content}}></div>            
            </>
        );
      })}
      
        </>
    ) 
}