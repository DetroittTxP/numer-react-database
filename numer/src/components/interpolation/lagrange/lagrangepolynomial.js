
import { Button, Form, InputNumber, Typography } from "antd"
import { useState } from "react";
import axios from 'axios';
import {Chart} from './Chart'

const {Title} = Typography;
const {Item} = Form;
export const Lagrangepolynomial = ()=>{
    const [size,Setsize] = useState(4);
    const [datasets,Setdatasets] = useState(Array.from({length:size}).fill({x:0,y:0}))
    const [x,Setx] = useState(0);
    const [result,Setresult] = useState([]);

    const Setrow=()=>{
        let newrows = (prev) =>{
             let newdatas = [...datasets];

             if(prev.length < size ){//ของใหม่มากกว่าของเดิม // เดิมมี 4 ใหม่ มี 6 // 6 - 4 = +2
                 for(let i = 0 ; i <(size-prev.length);i++){
                    newdatas.push({x:0,y:0});
                 }
             }else{  // ของใหม่น้อยกว่าเดิม
                newdatas.length = size;
             }    

             return newdatas;
        }
        Setdatasets(newrows)
    }

    const handleChange=(index,value,key)=>{
        let newchange = [...datasets];

        if(key === 'x'){
            newchange[index] = {
                x:value,
                y:newchange[index].y
            }

        }else{
            newchange[index] = {
                x:newchange[index].x,
                y:value
            }
        }

        Setdatasets(newchange);
    }

    const handleSubmit= async ()=>{
        await axios.post('http://localhost:1234/lagrange/polynomial',{datasets,x})
        .then((res)=>{
            Setresult(res.data);
        })
    }

    return(
        <div>
            <div className="bisection">
                 <Title level={2}>LAGRANGE (POLYNOMIAL)</Title>

                 <div className="interpolate-form">
                        <div className="input-row">
                             <Title level={5}>ROW: </Title>
                             <InputNumber value = {size} onChange={(value)=>Setsize(value)} style={{marginLeft:10,bottom:4}}/>
                             <Button onClick={Setrow} style={{marginLeft:10,bottom:4}}>SET ROW</Button>
                        </div>
                        <br/>

                        <div>
                            <Form className="inter-form">
                                <Item name='x'>
                                    <Title level={5} style={{position:'relative',left:5}}>X</Title>
                                    {datasets.map((_,index)=>(
                                        <div className="x-row">
                                              <Title level={5} style={{position:'relative',right:10,bottom:5}}>X{index+1}</Title>
                                               <InputNumber onChange={(e)=>handleChange(index,e,'x')} style={{marginBottom:20}}/>
                                        </div>
                                    ))}
                                </Item>

                                <Item name='y'>
                                     <Title level={5} style={{position:'relative',left:45}}>Y = F(X)</Title>
                                     {datasets.map((_,index)=>(
                                        <div className="y-row">
                                             <Title level={5} style={{position:'relative',right:10,bottom:5}}>Y{index+1}</Title>
                                             <InputNumber onChange={(e)=>handleChange(index,e,'y')} style={{marginBottom:20}}/>
                                        </div>
                                     ))}
                                </Item>
                            </Form> 

                            <Form   className="find-x">
                                 <Title level={5} style={{position:'relative',bottom:8}} > X = </Title> 
                                 <Item name='x'>
                                    <InputNumber onChange={(e) => Setx(e) }  style={{marginLeft:10}}/>        
                                 </Item>
                                 
                            </Form>

                            <div className='interpolate-button' >
                                 <Button onClick={handleSubmit} type='primary' style={{left:51}}>CALCULATE</Button>  
                                 <Button type='primary' danger style={{left:157}}>RESET</Button>          
                            </div>

                            <div className="result-interpolation">
                                 {result.length !== 0 && <Title level={5}>  X = {x}  Y = {result.map((e)=> e.x === x && e.y)}</Title>}
                                
                            </div>

                            <div className="my-chart-interpolation">
                                    {result.length !== 0  && <Chart chartData={result} originaldata={datasets} yValue={ result.find((e)=> {
                                        if(e.x === x){
                                            return e.y
                                        }
                                        return null;
                                    }) } />}
                            </div>

                        </div>

                 </div>
            </div>
        </div>
    )
}