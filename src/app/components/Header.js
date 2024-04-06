import React from 'react';
import Link from "next/link";
import '../css/frontend.min.css';
import '../css/header.css';

export default async function Header() {
  const res = await fetch('https://webangon.com/nextwp/wp-json/menus/v1/menus/primarymenu', { cache: 'no-store' });
  const data = await res.json();

  return (
    <>
      <header className='header'>
        <div className='container'>
          <Link id="logo" href="http://localhost:3000/" aria-label="Logo">
            <svg viewBox="0 0 203 62" fill="none" aria-hidden="true" focusable="false" role="img">
              <title>Logo</title>
              <path d="M26.3518 52.0536H31.0521C32.8147 52.0536 33.5981 53.2287 33.5981 54.4038C33.5981 55.5789 32.8147 56.3622 32.0313 56.5581C33.0105 56.7539 33.7939 57.7332 33.7939 58.7124C33.7939 60.0833 32.8147 61.2584 31.2479 61.2584H26.3518V52.0536ZM28.3102 55.7747H30.6604C31.2479 55.7747 31.6396 55.383 31.6396 54.7955C31.6396 54.2079 31.2479 53.8162 30.6604 53.8162H28.3102V55.7747ZM28.3102 59.4958H30.8562C31.6396 59.4958 32.0313 59.1041 32.0313 58.5166C32.0313 57.929 31.6396 57.5373 30.8562 57.5373H28.3102V59.4958Z" fill="#025A8C"></path>
              <path d="M37.515 52.0536H39.4735V57.5373C39.4735 58.7124 40.2569 59.6916 41.6278 59.6916C42.9987 59.6916 43.7821 58.9082 43.7821 57.5373V52.0536H45.7406V57.5373C45.7406 59.8875 44.3696 61.2584 41.6278 61.2584C38.8859 61.2584 37.515 59.6916 37.515 57.5373V52.0536Z" fill="#025A8C"></path>
              <path d="M48.4824 58.3207C49.07 58.9082 50.0492 59.4958 51.4201 59.4958C52.3994 59.4958 52.9869 58.9082 52.9869 58.5166C52.9869 57.929 52.2035 57.5373 51.2243 57.3415C49.6575 56.9498 47.8949 56.5581 47.8949 54.5996C47.8949 53.0328 49.2658 51.8578 51.4201 51.8578C52.791 51.8578 53.9661 52.2495 54.9454 53.0328L53.9661 54.4038C53.1827 53.8162 52.2035 53.4245 51.4201 53.4245C50.6367 53.4245 50.0492 53.8162 50.0492 54.4038C50.0492 54.9913 50.8326 55.1872 51.8118 55.383C53.3786 55.7747 55.1412 56.1664 55.1412 58.1249C55.1412 59.6916 53.9661 61.0626 51.4201 61.0626C49.6575 61.0626 48.4824 60.475 47.5032 59.6916L48.4824 58.3207Z" fill="#025A8C"></path>
              <path d="M58.4706 61.0626V52.0536H60.4291V61.0626H58.4706Z" fill="#025A8C"></path>
              <path d="M70.6131 61.0626L66.3045 54.9913V61.0626H64.346V52.0536H66.3045L70.4173 57.929V52.0536H72.3757V61.0626H70.6131Z" fill="#025A8C"></path>
              <path d="M75.901 61.0626V52.0536H82.3639V53.6204H77.8594V55.5789H82.168V57.1456H77.8594V59.2999H82.3639V61.0626H75.901Z" fill="#025A8C"></path>
              <path d="M86.2808 58.3207C86.8684 58.9082 87.8476 59.4958 89.2185 59.4958C90.1978 59.4958 90.7853 58.9082 90.7853 58.5166C90.7853 57.929 90.0019 57.5373 89.0227 57.3415C87.4559 56.9498 85.6933 56.5581 85.6933 54.5996C85.6933 53.0328 87.0642 51.8578 89.2185 51.8578C90.5894 51.8578 91.7645 52.2495 92.7438 53.0328L91.7645 54.4038C90.9811 53.8162 90.0019 53.4245 89.2185 53.4245C88.4351 53.4245 87.8476 53.8162 87.8476 54.4038C87.8476 54.9913 88.631 55.1872 89.6102 55.383C91.177 55.7747 92.9396 56.1664 92.9396 58.1249C92.9396 59.6916 91.7645 61.0626 89.2185 61.0626C87.4559 61.0626 86.2808 60.475 85.3016 59.6916L86.2808 58.3207Z" fill="#025A8C"></path>
              <path d="M96.0732 58.3207C96.6607 58.9082 97.6399 59.4958 99.0109 59.4958C99.9901 59.4958 100.578 58.9082 100.578 58.5166C100.578 57.929 99.7942 57.5373 98.815 57.3415C97.2482 56.9498 95.4856 56.5581 95.4856 54.5996C95.4856 53.0328 96.8565 51.8578 99.0109 51.8578C100.382 51.8578 101.557 52.2495 102.536 53.0328L101.557 54.4038C100.773 53.8162 99.7942 53.4245 99.0109 53.4245C98.2275 53.4245 97.6399 53.8162 97.6399 54.4038C97.6399 54.9913 98.4233 55.1872 99.4025 55.383C100.969 55.7747 102.732 56.1664 102.732 58.1249C102.732 59.6916 101.557 61.0626 99.0109 61.0626C97.2482 61.0626 96.0732 60.475 95.0939 59.6916L96.0732 58.3207Z" fill="#025A8C"></path>
              <path d="M115.854 61.0626L114.091 57.929H112.72V61.0626H110.762V52.0536H115.07C117.029 52.0536 118.204 53.2287 118.204 54.9913C118.204 56.5581 117.225 57.5373 116.245 57.7332L118.204 61.2584H115.854V61.0626ZM114.679 53.6204H112.72V56.1664H114.679C115.462 56.1664 116.05 55.5789 116.05 54.9913C116.05 54.2079 115.462 53.6204 114.679 53.6204Z" fill="#025A8C"></path>
              <path d="M121.729 61.0626V52.0536H128.192V53.6204H123.688V55.5789H127.996V57.1456H123.688V59.2999H128.192V61.0626H121.729Z" fill="#025A8C"></path>
              <path d="M131.913 58.3207C132.501 58.9082 133.48 59.4958 134.851 59.4958C135.83 59.4958 136.418 58.9082 136.418 58.5166C136.418 57.929 135.634 57.5373 134.655 57.3415C133.088 56.9498 131.326 56.5581 131.326 54.5996C131.326 53.0328 132.696 51.8578 134.851 51.8578C136.222 51.8578 137.397 52.2495 138.376 53.0328L137.397 54.4038C136.613 53.8162 135.634 53.4245 134.851 53.4245C134.067 53.4245 133.48 53.8162 133.48 54.4038C133.48 54.9913 134.263 55.1872 135.242 55.383C136.809 55.7747 138.572 56.1664 138.572 58.1249C138.572 59.6916 137.397 61.0626 134.851 61.0626C133.088 61.0626 131.913 60.475 130.934 59.6916L131.913 58.3207Z" fill="#025A8C"></path>
              <path d="M140.726 52.0536H142.685V57.5373C142.685 58.7124 143.468 59.6916 144.839 59.6916C146.21 59.6916 146.993 58.9082 146.993 57.5373V52.0536H148.952V57.5373C148.952 59.8875 147.581 61.2584 144.839 61.2584C142.097 61.2584 140.726 59.6916 140.726 57.5373V52.0536Z" fill="#025A8C"></path>
              <path d="M152.281 61.0626V52.0536H154.24V59.4958H158.157V61.0626H152.281Z" fill="#025A8C"></path>
              <path d="M163.836 61.0626V53.6204H161.094V51.8578H168.341V53.6204H165.795V61.0626H163.836Z" fill="#025A8C"></path>
              <path d="M171.474 58.3207C172.062 58.9082 173.041 59.4958 174.412 59.4958C175.391 59.4958 175.979 58.9082 175.979 58.5166C175.979 57.929 175.195 57.5373 174.216 57.3415C172.649 57.1456 170.887 56.7539 170.887 54.5996C170.887 53.0328 172.257 51.8578 174.412 51.8578C175.783 51.8578 176.958 52.2495 177.937 53.0328L176.762 54.5996C175.979 54.0121 174.999 53.6204 174.216 53.6204C173.433 53.6204 172.845 54.0121 172.845 54.5996C172.845 55.1872 173.628 55.383 174.608 55.5789C176.174 55.9705 177.937 56.3622 177.937 58.3207C177.937 59.8875 176.762 61.2584 174.216 61.2584C172.453 61.2584 171.278 60.6709 170.299 59.8875L171.474 58.3207Z" fill="#025A8C"></path>
              <path d="M50.4409 48.7242H55.5329L42.9987 19.7389H38.6901L25.9601 48.7242H31.4438L34.3815 41.4779H47.5032L50.4409 48.7242ZM35.9482 37.7568L40.8444 26.006L45.7406 37.7568H35.9482Z" fill="#595959"></path>
              <path d="M176.566 32.8606V48.5284H172.062V35.015C172.062 32.6648 169.907 30.7063 167.361 30.7063C165.011 30.7063 163.249 32.0773 162.661 34.0357C162.661 34.4274 162.465 34.6233 162.465 35.015V48.5284H157.961V26.9852H162.465V32.8606C162.465 29.1396 165.599 26.2019 169.516 26.2019C172.649 26.2019 175.391 28.3562 176.174 31.098C176.37 31.4897 176.566 32.0773 176.566 32.8606Z" fill="#595959"></path>
              <path d="M64.7377 37.3651V48.3325H60.2332V38.5402C61.8 38.3443 63.3668 37.9527 64.7377 37.3651Z" fill="#025A8C"></path>
              <path d="M78.8387 32.8606C78.8387 33.0565 78.8387 33.0565 78.6428 33.2523V48.5284H74.1383V34.6233C75.9009 34.0357 77.2719 33.4482 78.8387 32.8606Z" fill="#025A8C"></path>
              <path d="M90.1978 27.1811C88.0434 28.1603 86.085 28.9437 84.1265 29.7271C83.9307 29.7271 83.7348 29.7271 83.539 29.7271C81.9722 29.7271 80.6013 30.3146 79.8179 31.4897C79.4262 31.6856 79.0345 31.6856 78.8387 31.8814L74.3342 33.4482C73.9425 31.2939 71.984 29.7271 69.6339 29.7271C67.2837 29.7271 65.5211 31.2939 64.9335 33.2523C64.9335 33.644 64.7377 33.8399 64.7377 34.2316V36.3859C63.1709 36.7776 61.8 37.1693 60.2332 37.561V26.006H64.7377V32.2731C64.7377 28.552 67.8712 25.6143 71.5923 25.6143C74.53 25.6143 77.076 27.3769 78.0553 29.9229C83.1473 22.0891 90.1978 27.1811 90.1978 27.1811Z" fill="#595959"></path>
              <path d="M92.5479 32.0773V48.3325H88.2393V34.0357C88.2393 32.2731 87.2601 30.9022 85.6933 30.1188C87.4559 29.3354 89.2185 28.7479 90.9811 27.9645C91.7645 28.7479 92.1562 29.9229 92.3521 30.9022C92.5479 31.2939 92.5479 31.6856 92.5479 32.0773Z" fill="#025A8C"></path>
              <path d="M115.854 31.098C114.091 28.1603 110.762 26.006 106.845 26.006C104.69 26.006 102.536 26.5935 100.969 27.7686V32.6648C102.144 31.098 104.103 30.1188 106.453 30.1188C109.978 30.1188 112.916 32.4689 112.916 35.4066V37.7568C112.524 37.561 112.328 37.561 112.133 37.3651C110.566 35.7983 108.02 35.015 105.474 35.2108C103.319 35.4066 101.557 36.19 100.186 37.1693C99.2067 37.9527 98.4233 39.1277 98.0316 40.3028C97.8358 41.0862 97.6399 41.6737 97.8358 42.4571C98.0316 46.1782 101.949 49.1159 106.649 48.7242C109.195 48.5284 111.349 47.3533 112.916 45.7865V48.1367H117.225V35.015C117.029 33.8399 116.441 32.2731 115.854 31.098ZM112.524 41.8696C112.524 41.8696 112.524 42.653 111.937 43.6322C111.349 44.6114 109.978 45.7865 107.432 45.7865C105.082 45.7865 103.711 45.199 102.928 44.4156C102.144 43.6322 101.949 42.4571 101.949 41.8696C101.949 41.2821 102.144 40.6945 102.732 39.9111C103.515 38.9319 104.886 38.1485 107.628 38.1485C109.587 38.1485 110.762 38.5402 111.545 38.736C112.72 39.3236 112.916 39.9111 112.916 39.9111V41.8696H112.524Z" fill="#595959"></path>
              <path d="M122.121 26.5935H140.922V30.7063L128.388 44.6114H140.922V48.9201H122.121V44.8073L135.047 30.5105H122.121V26.5935Z" fill="#595959"></path>
              <path d="M151.694 26.5935H146.21V48.5284H151.694V26.5935Z" fill="#025A8C"></path>
              <path d="M151.694 18.5638H146.21V23.2642H151.694V18.5638Z" fill="#025A8C"></path>
              <path d="M203.005 49.5076V27.5728H198.109V31.4897C196.347 28.552 193.605 26.5935 190.471 26.5935C185.183 26.5935 180.875 31.8814 180.875 38.3443C180.875 40.6945 181.462 42.8488 182.442 44.6114C183.225 46.3741 184.4 47.745 185.771 48.7242C187.142 49.7035 188.709 50.291 190.471 50.291C193.213 50.291 195.563 48.9201 197.13 46.9616C197.522 46.5699 197.913 45.9824 198.109 45.5907V50.4868C198.109 54.0121 195.367 56.7539 191.842 56.7539C188.904 56.7539 186.554 54.7955 185.771 52.2495H180.875C181.658 57.5373 186.358 61.6501 191.842 61.6501C197.913 61.6501 203.005 56.7539 203.005 50.4868C203.005 49.8993 203.005 49.7035 203.005 49.5076ZM197.718 40.6945C197.326 42.4571 196.347 43.8281 195.172 44.8073C194.192 45.5907 193.213 45.9824 192.038 45.9824C190.863 45.9824 189.492 45.3948 188.709 44.6114C187.534 43.6322 186.75 42.0654 186.358 40.4987C186.163 39.9111 186.163 39.1277 186.163 38.3443C186.163 34.0357 188.904 30.5105 192.234 30.5105C195.563 30.5105 198.109 34.0357 198.109 38.3443C198.109 39.1277 197.913 39.9111 197.718 40.6945Z" fill="#595959"></path>
              <path d="M0.5 44.2197C0.5 44.2197 63.5626 53.0328 130.346 5.63796L127.8 2.70026L142.88 0.350098L136.026 12.8843L133.48 9.75074C133.48 9.75074 76.6843 55.5789 0.5 44.2197Z" fill="#025A8C"></path>
            </svg>
            </Link>
          <nav className='navigation'>
          <ul className='menu'>
          {data.items.map((item) => {
            const title = item.title;
            const childItems = item.child_items;
            const url = item.url.replace("https://webangon.com/nextwp", "");
            const sub_class = childItems ? "sub-menu" : "no-sub";
            if (item.post_parent === 0) {
              return (
                <>
                  <li key={item.id}><Link href={url}>{title}</Link>
                    <ul className={sub_class}>
                      {childItems && childItems.map(childItem => {
                        const childName = childItem.title;
                        const childUrl = childItem.url.replace("https://webangon.com/nextwp", "");
                        return (
                          <li key={childItem.id}><Link href={childUrl}>{childName}</Link></li>
                        )
                      })}
                    </ul>
                  </li>
                </>
              )
            } else {
              return (
                <li key={item.id}><Link href={url}>{title}</Link></li>
              )
            }

          })}
          </ul>
          </nav>
          <a className="signIn" href="#" aria-label="Justify">Sign In</a>
        </div>
      </header>
    </>
  )
}
