import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCourseData } from './Store/appSlice';
function useGetCourseData(){
   const dispatch=useDispatch();
   const courseData=useSelector(state=> state.app.courses)
    async function getData(){
        if(courseData.length !== 0) return;
        let apiData= await fetch("https://mocki.io/v1/4817fde2-247c-4695-9a85-3913874ded08");
        let jsonData=await apiData.json();
        dispatch(setCourseData(jsonData))
    }
    useEffect(()=>{
        getData();
    },[])
    return courseData;
}
function useIsProductInCart(id){
  const cartData=useSelector(state=> state.app.cart);
  const cartArray=Object.keys(cartData);
  const isPresent=cartArray.includes(id);
  if(isPresent){
    return true;
  }
  else{
    return false;
  }
}
export {useGetCourseData,useIsProductInCart}