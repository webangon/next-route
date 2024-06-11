"use client";
import Link from "next/link";
import { useEffect } from 'react';
export default function Sidebar() {

    useEffect(() => {

        const jsFiles = [
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

        </>
    )
}