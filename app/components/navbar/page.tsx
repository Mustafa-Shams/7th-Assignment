import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Image from "next/image";
  
export default function Navbar() {
    return(
        <div className="w-screen bg-black p-5">
          <div className="flex flex-row justify-between items-center text-white mx-3  ">
                  <div className="text-[20px]">
                        <h1>Data-Fetching</h1>
                  </div>
                  <div className="  lg:flex  lg:flex-row gap-3 items-center text-[18px] shadow-lg hidden ">
                  <div><Button variant={"ghost"} ><Link href="/">Home</Link></Button></div>  
                   <div><Link href="/ServerSide"><Button variant={"ghost"} >Server-Side-Rendering</Button></Link></div>
                   <div><Link href="/ClientSide"><Button variant={"ghost"} >Client-Side-Rendering</Button></Link></div>
                  </div>
                  <div className="  lg:flex  lg:flex-row gap-5 hidden">
                    <div><Button size={"lg"} className="bg-white text-black hover:bg-blue-500">Login</Button></div>
                    <div><Button size={"lg"} className="bg-white text-black hover:bg-red-500">Sign Up</Button></div>
                  </div>
                  <div className="flex  lg:hidden ">
                  <DropdownMenu>
  <DropdownMenuTrigger><div> <Image src={"/menu.jpg"} alt="menu" width={24} height={24} className="bg-white"/> </div></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel><Link href={"/"}> Home</Link></DropdownMenuLabel>
    <DropdownMenuSeparator />
    <div className="flex flex-col gap-3">
    <DropdownMenuItem> <div><Link href="/ServerSide"><Button variant={"ghost"} >Server-Side-Rendering</Button></Link></div></DropdownMenuItem>
    <DropdownMenuItem><Link href="/ClientSide"><Button variant={"ghost"} >Client-Side-Rendering</Button></Link></DropdownMenuItem>
    </div>
    <DropdownMenuSeparator />
    <div className="flex flex-row gap-4">
    <DropdownMenuItem><Button>Login</Button></DropdownMenuItem>
    <DropdownMenuItem><Button>Sign Up</Button></DropdownMenuItem>
    </div>
  </DropdownMenuContent>
</DropdownMenu>

                  </div>
          </div>
        </div>
    )
}