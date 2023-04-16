import React, { useEffect, useState } from 'react'
import logo from "./twitter.avif"

export const AdviceComponent = (props:any) => {
    console.log(props)


    const twitterPost = ()=>{ //This functions opens a new twitter window and allow the user to share the current advice in their profile, this function is called when the twitter button is clicked
        const twurl = `https://twitter.com/intent/tweet?url=${props.advice}`;
        window.open(twurl,"_blank");
    }
  
  return (
    <>
        <p className='advice'>{ props.advice }</p>
        <button onClick={props.function}>Random advice</button>
        <img src= {logo} onClick={twitterPost} alt="Twitter logo" />
    </>
    
  )
}
