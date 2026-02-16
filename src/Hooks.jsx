import {useState,useEffect} from 'react'
function useGetCourseData(){
    const [courseData,setCourseData]=useState([]);
    async function getData(){
        let apiData= await fetch("https://mocki.io/v1/4817fde2-247c-4695-9a85-3913874ded08");
        let jsonData=await apiData.json();
        setCourseData(jsonData)
    }
    useEffect(()=>{
        getData();
    },[])
    return courseData;
}
export {useGetCourseData}