import React, { useEffect, useState } from "react";

export default function Homepage() {
  const [load, setLoad] = useState('isLoading')

  useEffect(() => {
      setLoad('isLoaded')
  }, [])

  return (
    <>
    <div className="container mt-[128px] px-0 max-w-full inline-block  text-white">
      <h1 className={`text-5xl text-white mx-auto flex justify-center opacity-0transition-all ease-in-out duration-1000 ${load==='isLoaded' ? 'opacity-100' : ''}`}><div className="animate-bounce w-6 h-6 rounded-full bg-blue-700 relative top-10"></div> Generative AI NFT Minter<div className="animate-bounce w-6 h-6 rounded-full bg-pink-700"></div></h1>
      <div className="rounded-md mt-10 w-1/3 mx-auto bg-gradient-to-r from-blue-600 via-transparent to-pink-700 p-1">
        <div className="p-3  bg-indigo-950">
        You create NFTs we mint them for you. <br/> <br/> 
        </div>
      </div>
    </div>
      <a href="/Generate" ><button className="text-white block w-1/5 mx-auto text-center my-24 bg-blue-700 py-2 rounded-full transition duration-300 transform hover:scale-105 hover:bg-blue-800 ">Start by creating your nfts through ai prompts</button></a>
    </>
  );
}
