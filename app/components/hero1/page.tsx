import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
export default function Hero1(){
    return(
        <div className="w-screen pt-[15vh]  ">
                    <div className="flex flex-col gap-10">
                        <div className="text-[24px] font-bold text-center">
                            <h1>Welcome To My Data-Fetching Assignment</h1>
                        </div>
                        <div className="text-balance text-[18px] font-medium text-center">
                            <p>This assignment focuses on implementing efficient data fetching techniques, <br /> ensuring seamless integration with APIs, and handling responses effectively <br /> to build dynamic and responsive applications.</p>
                        </div>
                    

                    <div className=" pt-5 justify-center items-center self-center">
                    <Card className=" border-2 border-black rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 w-[500px] items-center justify-center self-center ">
  <CardHeader >
    <CardTitle> <h1 className="text-center font-bold text-white">Choose Your Data Fetching Method</h1></CardTitle>
    
  </CardHeader>
  <CardContent>
  <div className="flex flex-row justify-center items-center gap-5 ">
  <Link href="/ServerSide">  <Button size={"lg"}>Server-Side-Rendering</Button> </Link>
  <Link href="/ClientSide">  <Button size={"lg"}>Client-Side-Rendering</Button> </Link>
                            </div>
  </CardContent>
</Card>

                            
                    </div>
                    </div>
        </div>
    )
}