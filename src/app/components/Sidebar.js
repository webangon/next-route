"use client";
import Link from "next/link";
import { useEffect } from 'react';
export default function Sidebar() {

    useEffect(() => {

        document.body.classList.remove('sidebar-open')
        var body = document.querySelector('body')
        document.querySelector('.side-close').onclick = function () {
            body.classList.remove('sidebar-open')
        }

        document.querySelector('.mobile-tap').onclick = function () {
            body.classList.add('sidebar-open')
        }

        document.querySelector('.menu .plus').onclick = function () {
            this.parentNode.nextSibling.classList.toggle('show-sub')
        }

        var mobile_expand = document.querySelectorAll('.mobile-navigation .is-parent')

        mobile_expand.forEach((item, index) => {
            let _parent = item.querySelector(".plus");
            _parent.onclick = function () {
                this.parentNode.nextSibling.classList.toggle('show-sub')
            }

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
                                    <li><Link href="/page/open-path-brand/">Open Path</Link></li>
                                    <li><Link href="/page/butterflymx-brand/">Butterfly MX</Link></li>
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