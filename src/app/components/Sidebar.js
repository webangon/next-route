"use client";
import Link from "next/link";
import { useEffect } from 'react';
export default function Sidebar() {

    useEffect(() => {

        const jsFiles = [
            'https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.12.4.min.js',
            '/js/script.js',
        ]

    jsFiles.forEach((item) => {
        const scriptEle = document.createElement('script');
        scriptEle.src = item;
        document.head.appendChild(scriptEle);
    })

    }, []);

    return (
        <>
            <div className="sidebar-wrap" aria-hidden="true">
                <div className="sidebar__content">
                    <span className="side-close">+</span>
                    <nav className="mobile-navigation">
                        <ul className="menu">
                            <li><Link href="https://next-route-seven.vercel.app/">Home</Link>
                            </li>
                            <li><Link href="/page/product-detail/">Product Detail</Link>
                            </li>
                            <li><Link href="/page/pdf-download/">PDF Download</Link>
                            </li>
                            <li className="is-parent"><Link href="#">Brands <span className="plus">+</span></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/page/openpath-brand/">Open Path</Link></li>
                                    <li><Link href="/page/butterfly/">Butterfly MX</Link></li>
                                    <li><Link href="/page/ict-brand/">ICT</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}