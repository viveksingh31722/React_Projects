import React, { useEffect } from 'react'

export default function useOutsideClick(ref, handler) {
  
  useEffect(()=>{

    function listener(event){
      if(!ref.current || ref.current.contains(event)) {
        return
      }

      handler(event);
    }

    document.addEventListener('mouseenter', listener);
    document.addEventListener('touchstart', listener);


    return ()=>{
      document.removeEventListener('mouseenter', listener);
      document.removeEventListener('touchstart', listener);
    }

  },[ref, handler]);
}
