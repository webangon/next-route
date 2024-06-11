import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import '../css/footer.css';

export default function Footer() {
    return (
        <>
            <footer className="footerSec">
                <div className="container">
                    <div className="ftrItms">
                        <div className="ftrLogo">
                            <Link href="#"><Image width={180} height={186} src="/img/ftr-logo-1.png" alt="Logo-1" />
                                <Image width={280} height={58} src="/img/ftr-logo-2.png" alt="Logo-1" /></Link>
                        </div>
                        <div className="ftrMenu">
                    <strong className="ftrHead">Quick Links</strong>
                    <ul>
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#">Products</Link></li>
                        <li><Link href="#">Industries</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Grants</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </div>  
                <div className="ftrAdrs">
                    <strong className="ftrHead">Address</strong>
                    <ul>
                        <li><Image width={20} height={20} src="/img/ftr-icon-1.png" alt="Icons" />
                            <Link href="tel:(888) 205-4036"><strong> Office:</strong> <br/>(888) 205-4036</Link>
                        </li>

                        <li><Image width={20} height={20} src="/img/ftr-icon-2.png" alt="Icons" />
                            <Link href="tel:647-922-5625"><strong>Mobile:</strong> <br/>647-922-5625</Link>
                        </li>

                        <li><Image width={20} height={20} src="/img/ftr-icon-3.png" alt="Icons" />
                            <span><strong>Mailing Address:</strong> <br/>
                                35 Cheltenham Ave, <br/> Woodbridge, ON., <br/> L4L 1K6
                                Office Address:</span>
                        </li>
                        <li><Image width={20} height={20} src="/img/ftr-icon-4.png" alt="Icons" />
                            <span><strong>Office Address:</strong> <br/>
                                120 Woodstream Blvd,<br/> Unit-12, Woodbridge ON., <br/> L4L 7Z1</span>
                        </li>

                        <li><Image width={20} height={20} src="/img/ftr-icon-5.png" alt="Icons" />
                            <Link href="www.utsgroup.ca"><strong>www.utsgroup.ca</strong></Link>
                        </li>

                    </ul>
                </div>                                      
                    </div>
                </div>
            </footer>
        </>
    )
}
