"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ServerApi from "../../../services/services.js";

interface DoiTuong {
  chenhlech: string;
  doituong: string;
  // Add other properties as needed
}

export default function page() {
  const [itemsdoituong, setItemsdoituong] = useState<DoiTuong[]>([]);
  useEffect(() => {
    ServerApi.getDoiTuong("")
      .then(function (response) {
        // handle success
        setItemsdoituong(response);
        console.log("response:", response);
      })
      .catch(function (error) {
        // handle error
        console.log("Error:", error);
      });
  }, []);
  return (
    <div>
      {/* {itemsdoituong.length>0 ?(
        <ul>
          {itemsdoituong.map((item,index)=>{
            <li>{index.chenhlech}</li>
          })}
        </ul>
      )} */}

      <ul>
        {itemsdoituong.map((itemsdoituongs, madoituong) => (
          <li key={madoituong}>
            {itemsdoituongs.chenhlech}
            {itemsdoituongs.doituong}
          </li>
        ))}
      </ul>
    </div>
  );
}
