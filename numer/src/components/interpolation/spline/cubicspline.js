

import { Typography,InputNumber,Button,Form } from "antd"
import { useState } from "react";
import axios from 'axios'
import {Chart} from './chart'

const {Title} = Typography;
const {Item} = Form;
export const Cubicspline=()=>{ 
    const [size,Setsize] = useState(4);
    const [x,Setx] = useState(Array.from({length:size}).fill(0))
    const [y,Sety] = useState(Array.from({length:size}).fill(0))
    const [point,Setpoint] = useState(null);
    const [result,Setresult] = useState([]);

    const setrow=()=>{
          Setx(prev =>{
              let newsize = [...prev];

              if(size > prev.length){
                  let newx = size - prev.length;

                  for(let i =0;i<newx;i++){
                      newsize.push(0);
                  }
              }
              else{
                newsize.length = size;
              }
              return newsize;
          });

          Sety( prev =>{
               let newsize = [...prev];

               if(size > prev.length){
                   let newx = size - prev.length;
 
                   for(let i =0;i<newx;i++){
                       newsize.push(0);
                   }
               }
               else{
                 newsize.length = size;
               }
               return newsize;
          })
    }

    const inputX=(index,e)=>{
          let newdataX = [...x];
          newdataX[index] = e;
          Setx(newdataX);
          
    }

    const inputY=(index,e)=>{
     let newdataY = [...y];
     newdataY[index] = e;
     Sety(newdataY);
     
     }

     const Submit = async ()=>{
          await axios.post('http://localhost:1234/spline/cubic',{x,y,point})
          .then(res => Setresult(res.data))
          .catch(err => alert(err))
     }



    return(
        <div>
            <div className="bisection">
                 <Title level={2}>CUBIC SPLINE</Title>

                 <div className="interpolation-form">

                        <div className="input-row">
                                <Title level={5}>ROW: </Title>
                                <InputNumber value={size} onChange={e => Setsize(e)}  style={{marginLeft:10,bottom:4}}/>
                                <Button onClick={setrow} style={{marginLeft:10,bottom:4}}>SET ROW</Button>
                        </div>
                        <br/>
                        <div >
                             <Form className="inter-form">
                                    <Item name='x'>
                                            <Title level={5} style={{position:'relative',left:5}}>X</Title>
                                            {x.map((value,index)=>(
                                                <div className="x-row">
                                                     <Title level={5} style={{position:'relative',right:10,bottom:5}}>X{index+1}</Title>   
                                                     <InputNumber onChange={e=>inputX(index,e)} style={{marginBottom:20}} key={index} />
                                                </div>
                                            ))}
                                    </Item>

                                    <Item name='x'>
                                         <Title level={5} style={{position:'relative',left:45}}>Y = F(X)</Title>
                                         {y.map((value,index)=>(
                                            <div className="y-row">
                                                 <Title level={5} style={{position:'relative',right:10,bottom:5}}>Y{index+1}</Title>
                                                 <InputNumber onChange={e => inputY(index,e)} style={{marginBottom:20}}/>
                                            </div>
                                         ))}
                                    </Item>
                             </Form>
                                             
                             <Form className="find-x">
                                      <Title level={5} style={{position:'relative',bottom:8}} > X = </Title> 
                                      <Item name='x'>
                                        <InputNumber onChange={e => Setpoint(e)}  style={{marginLeft:10}}/>        
                                    </Item>
                             </Form>

                             <div className='interpolate-button'>
                                        <Button onClick={Submit} type='primary' style={{left:51}}>CALCULATE</Button>  
                                        <Button  type='primary' danger style={{left:157}}>RESET</Button>  
                                 </div>      

                            <div className="result-interpolation">
                                 {result.length !== 0 && <Title level={5}>X = {point}  Y = {result.map((e)=> e.x === point && e.y)}</Title>}
                             </div>              

                             <div style={{marginTop:50}} className="my-chart-interpolation">
                              {result.length !== 0 && <Chart   OriginalX={x} OriginalY = {y} Splinedata ={result}  yValue={ result.find((e)=> {
                              if(e.x === point){
                                   return e.y
                              }
                              return null;
                         }) }/>}
                             </div>

                        </div>

                 </div>
            </div>
        </div>
    )
}




