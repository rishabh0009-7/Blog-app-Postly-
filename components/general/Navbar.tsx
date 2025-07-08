import Link from "next/link"
import { Button } from "../ui/button"

export function Navbar(){
    return (
        <nav className="py-5 flex item-center justify-between">
            <div className="flex items-center gap-6">
            
                  <Link href = "/">
                  Blog<span className="text-blue-500">Nest</span>
                  </Link>
                

            </div>

            <div className="hidden sm:flex item-center gap-6">
                <Link href = "/" className= "text-sm font-medium hover:text-blue-500 transition-colours">Home</Link>
                <Link href = "/dashboard" className= "text-sm font-medium hover:text-blue-500 transition-colours">Dashboard</Link>
                

            </div>
<div className="flex items-center gap-4">
    <Button>Login</Button>
    <Button variant="secondary">Signup</Button>

</div>



        </nav>
    )

}