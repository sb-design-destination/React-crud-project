import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from "../Commanfile/Header";

const ApiCalling = () => {
  const [data, Setdata] = useState({})
  const [dataList, SetDatalist] = useState(false)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response => response.json()))
      .then(result => {
        console.log(result);
        Setdata(result)
        SetDatalist(true)
      })

  }, [])
  return (
    <>
      <Header />
      {/* {JSON.stringify(data)} */}


      {
        dataList ?
          Object.entries(data).map((ky, val) => {
            // console.log(i); 
            // console.log(val[2].title);
            console.log("val is", val);
            console.log("key is", ky[1].title);
            return <li key={ky}>{ky[1].title}</li>
          }) : "loading"
      }

    </>
  );
};

export default ApiCalling;