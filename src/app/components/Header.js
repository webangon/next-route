import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Link from "next/link"
import '../css/header.css'
import '../css/awesomesauce.css'
import '../css/frontend.min.css'
import '../css/kit.css'
import Sidebar from './Sidebar'

export default function Header() {
 
  return (
    <>
    <header id="header">
        <div className="container">
            <button className="menuBtn" type="button" onclick="menuBtn('header'); return false;">Overview</button>
            <Link id="logo" href="index.html" aria-label="Logo">
                <Image src="/img/logo.png" alt="Facebo0k" width={280} height={58} />
            </Link>
            <nav className="navigation">
                <ul className="menu">
                    <li className="menu-item-has-children current-menu-item"><Link href="#">About</Link>
                        <ul className="sub-menu">
                            <li><Link href="#">Sub menu item 1</Link></li>
                            <li><Link href="#">Sub menu item 2</Link></li>
                            <li><Link href="#">Sub menu item 3</Link></li>
                            <li><Link href="#">Sub menu item 4</Link></li>
                        </ul>
                    </li>
                    <li className="pdMenu menu-item-has-children"><Link target="_blank" rel="noopener" href="#">Products</Link>
                        <ul className="sub-menu">
                            <li className="megaMenuItms">
                                <div className="megaMenuItm">
                                    <div className="mgMenuImg">
                                        <Image src="/img/menu-image/icon-1.png" alt="Icon 1" width={79} height={81} />
                                    </div>
                                    <div className="mgMenuCont">
                                        <strong>Access Control</strong>
                                        <ul className="mgMenuLink">
                                            <li><Link href="https://utsgroup.ca/access-control-system/">Access Control
                                                    System</Link></li>
                                            <li><Link href="https://utsgroup.ca/residential-access-control/">Residential
                                                    Access Control System</Link></li>
                                            <li><Link href="https://utsgroup.ca/commercial-access-control/">Commercial
                                                    Access Control System</Link></li>
                                            <li><Link href="https://utsgroup.ca/visitor-management-system/">Visitor
                                                    Management System</Link></li>
                                            <li><Link href="https://utsgroup.ca/keyless-entry-system/">Keyless Entry
                                                    System</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="megaMenuItms">
                                <div className="megaMenuItm">
                                    <div className="mgMenuImg">
                                        <Image src="/img/menu-image/icon-2.png" alt="Icon 2" width={79} height={81} />
                                    </div>
                                    <div className="mgMenuCont">
                                        <strong>Intercom System</strong>
                                        <ul className="mgMenuLink">
                                            <li><Link href="https://utsgroup.ca/intercom-system/">Intercom System</Link></li>
                                            <li><Link href="#">Residential Access Control System</Link></li>
                                            <li><Link
                                                    href="https://utsgroup.ca/intercom-system/intercom-system-installation/">Intercom
                                                    Installation</Link></li>
                                            <li><Link href="#">Visitor Management System</Link></li>
                                            <li><Link href="https://utsgroup.ca/buzzer-system/">Buzzer Systems</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="megaMenuItms">
                                <div className="megaMenuItm">
                                    <div className="mgMenuImg">
                                        <Image src="/img/menu-image/icon-3.png" alt="Icon 3" width={79} height={81} />
                                    </div>
                                    <div className="mgMenuCont">
                                        <strong>Automatic Doors</strong>
                                        <ul className="mgMenuLink">
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/automatic-doors/">Automatic Doors</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/automatic-doors/automatic-sliding-doors/">Sliding
                                                    Doors</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/automatic-doors/handicap-accessible-doors/">Handicap
                                                    Accessible Doors</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/automatic-doors/automatic-swing-doors/">Swing
                                                    Doors</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/accessible-standards-for-ontario-universal-washrooms/">Universal
                                                    Washroom</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="megaMenuItms">
                                <div className="megaMenuItm">
                                    <div className="mgMenuImg">
                                        <Image src="/img/menu-image/icon-4.png" alt="Icon 4" width={79} height={81} />
                                    </div>
                                    <div className="mgMenuCont">
                                        <strong>Automatic Doors</strong>
                                        <ul className="mgMenuLink">
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/security-camera-installation-ontario/">Security
                                                    Camera System</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/cctv-camera/">CCTV Camera System</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/security-cameras-monitoring/">Security
                                                    Camera Monitoring</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/security-cameras-audit/">Security Camera
                                                    Audit</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/surveillance-camera-system/">Surveillance
                                                    Camera System</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="megaMenuItms">
                                <div className="megaMenuItm">
                                    <div className="mgMenuImg">
                                        <Image src="/img/menu-image/icon-5.png" alt="Icon 5" width={79} height={81} />
                                    </div>
                                    <div className="mgMenuCont">
                                        <strong>Locksmith</strong>
                                        <ul className="mgMenuLink">
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/locksmith/">Locksmith Service</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/electric-strike/">Electric Strikes</Link>
                                            </li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/master-key-system/">Master Key System</Link>
                                            </li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/magnetic-locks/">Magnetic Locks</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/door-hardware/">Door Hardware</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/24-hour-emergency-locksmith/">Emergency
                                                    Service</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="megaMenuItms">
                                <div className="megaMenuItm">
                                    <div className="mgMenuImg">
                                        <Image src="/img/menu-image/icon-6.png" alt="Icon 6" width={79} height={81} />
                                    </div>
                                    <div className="mgMenuCont">
                                        <strong>Universal Washroom</strong>
                                        <ul className="mgMenuLink">
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/universal-washroom-requirements-in-ontario/">Universal
                                                    Washrooms</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/barrier-free-washrooms/">Barrier Free
                                                    Washrooms</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/accessible-standards-for-ontario-universal-washrooms/">Code
                                                    Compliance</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="megaMenuItms">
                                <div className="megaMenuItm">
                                    <div className="mgMenuImg">
                                        <Image src="/img/menu-image/icon-7.png" alt="Icon 7" width={79} height={81} />
                                    </div>
                                    <div className="mgMenuCont">
                                        <strong>Aluminum & Storefront Doors</strong>
                                        <ul className="mgMenuLink">
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/aluminum-glass-doors/">Aluminum Doors</Link>
                                            </li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/aluminum-storefront-doors/">Aluminum
                                                    Storefront Doors</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/automatic-doors/automatic-storefront-doors/">Automatic
                                                    Storefront Doors</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="megaMenuItms">
                                <div className="megaMenuItm">
                                    <div className="mgMenuImg">
                                        <Image src="/img/menu-image/icon-8.png" alt="Icon 8" width={79} height={81} />
                                    </div>
                                    <div className="mgMenuCont">
                                        <strong>Turnstiles</strong>
                                        <ul className="mgMenuLink">
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/turnstile-installation-supplying-company/">Turnstile
                                                    Gates</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/security-portal/">Security Portals</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="megaMenuItms">
                                <div className="megaMenuItm">
                                    <div className="mgMenuImg">
                                        <Image src="/img/menu-image/icon-9.png" alt="Icon 9" width={79} height={81} />
                                    </div>
                                    <div className="mgMenuCont">
                                        <strong>Safes, Lockers and Vaults</strong>
                                        <ul className="mgMenuLink">
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/safes-lockers-and-vaults/">Safes, Lockers
                                                    and Vaults</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="megaMenuItms">
                                <div className="megaMenuItm">
                                    <div className="mgMenuImg">
                                        <Image src="/img/menu-image/icon-10.png" alt="Icon 10" width={79} height={81} />
                                    </div>
                                    <div className="mgMenuCont">
                                        <strong>Hollow Metal/ Fire- Rated Doors</strong>
                                        <ul className="mgMenuLink">
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/hollow-metal-doors/">Hollow Metal
                                                    Doors</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/fire-rated-doors/">Fire-Rated Doors</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="megaMenuItms">
                                <div className="megaMenuItm">
                                    <div className="mgMenuImg">
                                        <Image src="/img/menu-image/icon-11.png" alt="Icon 11" width={79} height={81} />
                                    </div>
                                    <div className="mgMenuCont">
                                        <strong>Glass & Glazing</strong>
                                        <ul className="mgMenuLink">
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/commercial-glass-installation/">Glass
                                                    Solutions</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/choose-curtain-wall-installation/">Curtain
                                                    Wall Installation</Link></li>
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/commercial-glazing-contractors/">Glazing
                                                    Solutions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="megaMenuItms">
                                <div className="megaMenuItm">
                                    <div className="mgMenuImg">
                                        <Image src="/img/menu-image/icon-12.png" alt="Icon 12" width={79} height={81} />
                                    </div>
                                    <div className="mgMenuCont">
                                        <strong>Security Films</strong>
                                        <ul className="mgMenuLink">
                                            <li><Link target="_blank" rel="noopener"
                                                    href="https://utsgroup.ca/security-window-film/">Security Films</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>    
                    <li className="indMenu menu-item-has-children"><Link href="#">Industries</Link>
                        <ul className="sub-menu">
                            <li><Link href="#">Sub menu item 1</Link></li>
                            <li><Link href="#">Sub menu item 2</Link></li>
                            <li><Link href="#">Sub menu item 3</Link></li>
                            <li><Link href="#">Sub menu item 4</Link></li>
                            <li><Link href="#">Sub menu item 1</Link></li>
                            <li><Link href="#">Sub menu item 2</Link></li>
                            <li><Link href="#">Sub menu item 3</Link></li>
                            <li><Link href="#">Sub menu item 4</Link></li>
                            <li><Link href="#">Sub menu item 1</Link></li>
                            <li><Link href="#">Sub menu item 2</Link></li>
                            <li><Link href="#">Sub menu item 3</Link></li>
                            <li><Link href="#">Sub menu item 4</Link></li>
                            <li><Link href="#">Sub menu item 1</Link></li>
                            <li><Link href="#">Sub menu item 2</Link></li>
                            <li><Link href="#">Sub menu item 3</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><Link href="#">Blogs</Link>
                        <ul className="sub-menu">
                            <li><Link href="#">Sub menu item 1</Link></li>
                            <li><Link href="#">Sub menu item 2</Link></li>
                            <li><Link href="#">Sub menu item 3</Link></li>
                            <li><Link href="#">Sub menu item 4</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children"><Link href="#">Grants</Link>
                        <ul className="sub-menu">
                            <li><Link href="#">Sub menu item 1</Link></li>
                            <li><Link href="#">Sub menu item 2</Link></li>
                            <li><Link href="#">Sub menu item 3</Link></li>
                            <li><Link href="#">Sub menu item 4</Link></li>
                        </ul>
                    </li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
            </nav>
            <Link className="iconUser" href="#"><Image src="/img/iconUser.png" alt="Facebo0k" width={28} height={28} />Contact Our Team</Link>
        </div>
    <Sidebar/>    
    </header>
      <Script src="/js/splide.min.js"></Script>
      <Script src="/js/glightbox.js"></Script>
      <Script src="/js/lottie-player.js"></Script>
      <link href="/css/glightbox.css" rel="stylesheet"></link>
      <link href="/css/splide.min.css" rel="stylesheet"></link>      
    </>
  )
}
