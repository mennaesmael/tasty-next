import Link from 'next/link'
import React from "react";
export default function NavBar() {
return (
<nav className="w-full border-0 py-4 lg: px-24 px
bg-gray-950">
<h1 className="text-3x1 text-white">
<Link href='/'>Tasty Next</Link>
</h1> I
</nav>
);
}