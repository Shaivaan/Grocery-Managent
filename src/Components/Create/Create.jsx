import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button
} from "@chakra-ui/react";
import { Textarea } from '@chakra-ui/react'
import { useState } from "react";
import { url } from "../../url";
import "./Create.css";
export const Create = () => {

  const [grocery,setGrocery] = useState({
    "name":"",
    "qty":0,
    "price":"",
    "des":"",
    "img":"",
  });

  const handleChange = (e)=>{
    setGrocery({...grocery,[e.target.id]:e.target.value});
  }

  const Submit = ()=>{
    if(grocery.name.length == 0 && grocery.des.length == 0 && grocery.image.length == 0){
      alert("Please fill the required details");
      return;
    }else{
      fetch(url,{
        method:"POST",
        body:JSON.stringify(grocery),
        headers:{
          "content-type":"application/json"
        }
      })
      alert("Successful");
    }
  }

  return (
    <>
    <Heading>Add Grocery</Heading>
    <br /><br />
          <div id = "form">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input id="name" type="text" autoComplete="off"  onChange={handleChange}/><br /><br />
        <FormLabel>Quantity</FormLabel>
        <Input id="qty" type="number"  onChange={handleChange}/><br /><br />
        <FormLabel>Price</FormLabel>
        <Input id="price" type="number"  onChange={handleChange}/><br /><br />
        <FormLabel>Description</FormLabel>
        <Textarea placeholder='Add Grocery Description' id = "des" onChange={handleChange}/><br /><br />
        <FormLabel >Image Link</FormLabel>
        <Input id="img" type="text" onChange={handleChange}/><br /><br />
        <Button onClick={Submit}>Submit</Button>
      </FormControl>
        </div>
    </>
  );
};