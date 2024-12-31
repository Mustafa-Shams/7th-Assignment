import { Button } from "@/components/ui/button"
import React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface ITodo {
    id: number
    name: number
    type: string
    available: boolean

  }
  
  const Page = async () => {
    const response = await fetch("https://simple-books-api.glitch.me/books/");
  
    const parsedResponse: ITodo[] = await response.json();
  
    console.log("todos >>>", parsedResponse);
  
    return (
        <div>
        <h1 className='text-center text-3xl font-bold mb-8 mt-8'>Server Side Data Fetching</h1>
        
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-7">
        {parsedResponse.map((todo, index) => (
          <div key={index} className="p-4 grid gap-2 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.05] transition ">
           <Card>
           <CardHeader className="gap-5 ">
           <CardTitle><h1>Name:{todo.name}</h1></CardTitle>
           <CardDescription><h1>Type: {todo.type}</h1></CardDescription>
          </CardHeader>
          <CardContent>
             <h1>Available: {`${todo.available}`}</h1>
           </CardContent>
           <CardFooter className="justify-center items-center">
           <Button size={"lg"}>View More</Button>
           </CardFooter>
            
            
            </Card>
          </div>
        
        ))}
      </div>
      </div>
    );
  };
  
  export default Page;