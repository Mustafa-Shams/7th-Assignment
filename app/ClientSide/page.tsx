"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

interface ITodo {
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image: string,
  rating: {
      rate: number,
      count: number
  }
}

const page = () => {
  const [data, setData] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 4000)
  
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const parsedResponse: ITodo[] = await response.json();
      console.log("todos >>>", parsedResponse);
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  if(loading){
    return (
    <div className=" ">
    <div>
    <h1 className='font-bold mt-4 text-[20px] '>Loading...</h1>
    </div>
    <div className='flex flex-row justify-center items-center   self-center'>
    <Image src={"/Loading.gif"} alt="Loading" width={600} height={600} className="justify-center items-center self-center" />
    </div>
    </div>
    )
}
  return (
    <div>
          <h1 className='text-center text-3xl font-bold mb-8 mt-8'>Client Side Data Fetching</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mb-9">
      {data.map((todo, index) => (
        <div key={index} className=" rounded-2xl p-4 shadow-xl hover:shadow-2xl hover:scale-[1.06] transition ">
         <Card className="h-full">
  <CardHeader>
    <CardTitle>  <Image src={todo.image} alt={todo.title} width={100} height={100} className="size-[200px] mx-auto" /></CardTitle>
    <CardDescription> <h1 className='text-gray-500 text-[18px] mt-5 mb-3'>{todo.category}</h1></CardDescription>
  </CardHeader>
  <CardContent className="">
     <h1 className='text-[20px] font-semibold mb-3 '>{todo.title}</h1>
    <h1 className='text-[gray] mb-3'>{todo.description}</h1>
    <h1 className='text-[20px] font-semibold mb-3'>${todo.price}</h1>
  </CardContent>

  <CardFooter className="flex flex-row justify-between items-center">
    <div className="flex flex-row justify-between items-center  ">
  <div className='flex items-center gap-3'>
                                       
       <p className='text-yellow-500 font-semibold'>{todo.rating.rate}</p>
  <p className='text-yellow-500 font-semibold'>({todo.rating.count} Reviews)</p>
    </div>
    <div className='flex items-end justify-end mr-2 self-end'>
     <button className='bg-amber-500 px-4 py-2 border hover:border-black rounded-full self-end justify-end items-end text-white font-bold hover:bg-white  hover:text-black '>Buy Now</button>
          </div>
          </div>
  </CardFooter>
</Card>

        </div>
      ))}
      </div>
    </div>
  );
};

export default page;