import Link from "next/link";
import styles from "./page.module.css";
import getMenu from './lib/getMenu'

export default async function Home() {
  const res = await fetch('http://edd.test/wp-json/menus/v1/menus/primarymenu', { cache: 'no-store' });
  const data = await res.json();
  return (
    <>
      {data.items.map((item) => {
        const title = item.title;
        const childItems = item.child_items;
        const url = item.url.replace("http://edd.test", "");   
        const sub_class = childItems ? "has-sub" : "no-sub";
        if(item.post_parent === 0){
          return (
            <>
            <li><Link href={url}>{title}</Link>
              <ul className={sub_class}>
              { childItems.map(childItem => {
                const childName = childItem.title;
                const childUrl = childItem.url.replace("http://edd.test", "");
                return(
                  <li><Link href={childUrl}>{childName}</Link></li>
                )
              })}   
              </ul> 
              </li>        
            </> 
          )
        } else {
          return(
            <li><Link href={url}>{title}</Link></li>
          )
        }

      })}

      <h2>Hello world</h2>
      <Link href="/blog/ghy">About Us</Link>
    </>
  );
}
