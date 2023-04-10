
import { Typography,InputNumber, Button,Form } from "antd";
import { useState } from "react";
import axios from 'axios';
import {Chart} from './Chart'


const { Title  } = Typography;
const { Item } = Form;
export const Lagrangequadratic=()=>{
    const [size,Setsize] = useState(4);
    const [datasets,Setdatasets] = useState(Array.from({length:size}).fill({x:0,y:0}));
    const [x,Setx] = useState(0);
    const [result,Setresult] = useState([])

    const setrow = ()=>{
        
        Setdatasets((prev) =>{
            let newdata = [...prev];

            if(prev.length < size){
                for(let i= 0 ;i<(size-prev.length);i++)
                {
                    newdata.push({x:0,y:0});
                }
            }
            else{
                newdata.length = size;
            }

            return newdata;
        })
    }

    const handleChange = (index,value,key)=>{
          let newdataset = [...datasets];

          if(key === 'x'){
              newdataset[index] = { x:value , y:newdataset[index].y }

          }else{
              newdataset[index] = {x:newdataset[index].x,y:value} 
          }

          Setdatasets(newdataset);
    }

    const handleSubmit= async ()=>{
         await axios.post('http://localhost:1234/lagrange/quadratic',{datasets,x})
         .then(res=>{
             Setresult(res.data)
             
         })
         .catch(err => alert(err));
    }



    return(
        <div>
            <div className="bisection">
                  <Title level={2} >LAGRANGE (QUADRATIC)</Title>

                  <div className="interpolation-form">

                        <div className="input-row">
                              <Title level={5} >ROW: </Title>
                              <InputNumber value={size} onChange={(value)=> Setsize(value)} style={{marginLeft:10,bottom:4}} />
                              <Button onClick={setrow} style={{marginLeft:10,bottom:4}}>SET ROW</Button>
                        </div>

                        <br/>

                        <div className="interpolation-form">
                                
                                <Form className="inter-form"> 
                                     <Item name='x'>
                                            <Title level={5} style={{position:'relative',left:5}}>X</Title>
                                            {datasets.map((_,index)=>(
                                                <div className="x-row">
                                                    <Title level={5} style={{position:'relative',right:10,bottom:5}}>X{index+1}</Title>  
                                                    <InputNumber onChange={(value)=>handleChange(index,value,'x')}  key={index} style={{marginBottom:20}}/>
                                                </div>
                                            ))}
                                     </Item>

                                     <Item name='y'>
                                            <Title level={5} style={{position:'relative',left:45}}>Y = F(X)</Title>    
                                            {datasets.map((value,index)=>(
                                                <div className="y-row">
                                                    <Title level={5} style={{position:'relative',right:10,bottom:5}} >Y{index+1}</Title>
                                                    <InputNumber onChange={(value)=>handleChange(index,value,'y')}  key={index} style={{marginBottom:20}}/>
                                                </div>
                                            ))}
                                     </Item>
                                </Form>

                                <Form  className="find-x">
                                    <Title level={5} style={{position:'relative',bottom:8}} > X = </Title> 
                                    
                                    <Item name='x'>
                                        <InputNumber onChange={(value) => Setx(value)} style={{marginLeft:10}}/>        
                                    </Item>
                                 
                               </Form>

                                <div className="interpolate-button" >
                                     <Button  onClick={handleSubmit} type='primary' style={{left:51}}>CALCULATE</Button>  
                                    <Button  type='primary' danger style={{left:157}}>RESET</Button>  
                                </div>

                                <div className='result-interpolation'>
                                   {result.length !== 0 &&  <Title level={5}>X = {x} Y = {result.map((e)=> e.x === x && e.y)}  </Title>}
                                </div>

                                <div className="my-chart-interpolation">

                                    { result.length !== 0 &&  <Chart chartData={result} originaldata={datasets} yValue={result.find((e)=>{
                                        if(e.x === x){
                                            return e.y
                                        }
                                    })}/>}
                                                       
                                </div>

                        </div>

                  </div>
            </div>
        </div>
    )
}