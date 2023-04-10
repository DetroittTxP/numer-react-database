

import { Typography,InputNumber,Button,Form } from "antd"
import { useState } from "react";


const {Title} = Typography;
const {Item} = Form;
export const Quadraticspline=()=>{ 
    const [size,Setsize] = useState(4);
    const [datasets,Setdataset] = useState(Array.from({length:size}).fill({x:0,y:0}))
    const [point,Setpoint] = useState(null)

    const Setrow=()=>{
         Setdataset(prev =>{
            let newdata = [...datasets];
            if(size > prev.length){
                let newsize = size - prev.length;
                for(let  i =0;i<newsize;i++){
                    newdata.push({x:0,y:0});
                }
            }
            else{
               newdata.length = size;
            }

            return newdata;
         })
    }

    const input = (index,value,key) =>{
          let newdata =[...datasets]
          Setdataset(() =>{
                 if(key === 'x'){
                     newdata[index] = {x:value,y:newdata[index].y}
                 }
                 else{
                    newdata[index] = {x:newdata[index].x,y:value}
                 }

                return newdata; 
          })
    }

    return(
        <div>
            <div className="bisection">
                 <Title level={2}>QUADRATIC SPLINE</Title>

                 <div className="interpolation-form">

                        <div className="input-row">
                                <Title level={5}>ROW: </Title>
                                <InputNumber onChange={e => Setsize(e)}  style={{marginLeft:10,bottom:4}}/>
                                <Button onClick={Setrow} style={{marginLeft:10,bottom:4}}>SET ROW</Button>
                        </div>
                        <br/>
                        <div >
                             <Form className="inter-form">
                                    <Item name='x'>
                                            <Title level={5} style={{position:'relative',left:5}}>X</Title>
                                            {datasets.map((value,index)=>(
                                                <div className="x-row">
                                                     <Title level={5} style={{position:'relative',right:10,bottom:5}}>X{index+1}</Title>   
                                                     <InputNumber onChange={(e) => input(index,e,'x')} style={{marginBottom:20}} key={index} />
                                                </div>
                                            ))}
                                    </Item>

                                    <Item name='x'>
                                         <Title level={5} style={{position:'relative',left:45}}>Y = F(X)</Title>
                                         {datasets.map((value,index)=>(
                                            <div className="y-row">
                                                 <Title level={5} style={{position:'relative',right:10,bottom:5}}>Y{index+1}</Title>
                                                 <InputNumber onChange={(e) => input(index,e,'y')} style={{marginBottom:20}}/>
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

                             <div className="interpolate-button">

                             </div>

                             <div className="result-interpolation">

                             </div>

                             <div className="my-chart-interpolation">

                             </div>

                        </div>

                 </div>
            </div>
        </div>
    )
}




