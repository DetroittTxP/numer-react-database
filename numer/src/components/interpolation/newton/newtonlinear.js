import { Button, Form, InputNumber, Typography } from "antd";
import { useState } from "react";
import axios from 'axios'
import {Chart} from './Chart'
const {Title } = Typography;
const {Item} = Form;

const Newtonlinear = ()=>{
    const [size,Setsize] = useState(4);
    const [dataset,Setdataset] = useState(Array.from({length:size}).fill({x:0,y:0}));
    const [x,Setx] = useState(null);
    const [result,Setresult] = useState([]);
    const [showresult,Setshowresult] = useState(false);
    const [form] = Form.useForm();

    const Setrow=()=>{
         
        let newdataset = (prev) =>{
             let newdata = [...prev]
             if(prev.length < size){ // 4  6 = 6 - 4 = 2
                 let newsize = size - prev.length;// = 2

                 for(let i =0 ;i<newsize;i++){
                    newdata.push({x:0,y:0})
                 }
             }else{      
                newdata.length = size;
             }
             return newdata;
        }

        Setdataset(newdataset);
    }
         
    
        

    const handleChange=(index,value,key)=>{
        let newdataset = [...dataset];

        if(key === 'x'){
            newdataset[index] = {x:value,y:newdataset[index].y}
        }
        else{
            newdataset[index] = {x:newdataset[index].x,y:value}
        }
        Setdataset(newdataset);
    }

    const handleSubmit=async()=>{
         await axios.post('http://localhost:1234/newtoninterpolation/linear',{dataset,x})
         .then(res=>{
            Setresult(res.data);
            Setshowresult(true);
         })
         .catch(err => alert(err));
    }

    const reset=()=>{
        form.resetFields();
        Setshowresult(false)
    }


    return(
        <div>
            <div className="bisection" >
                 <Title level={2}>NEWTON DIVIDED DIFFERENCE (LINEAR)</Title>

                 <div className="interpolation-form">
                       
                       <div className="input-row">
                            <Title level={5}>ROW: </Title>
                            <InputNumber value={size} onChange={(value)=>Setsize(value)} style={{marginLeft:10,bottom:4}}/>
                            <Button  onClick={Setrow}  style={{marginLeft:10,bottom:4}}>GO</Button>
                       </div>
                       <br/>

                       <div className="interpolation-form">

                            <Form form={form} className='inter-form' >
                                 
                                 <Item name='x'>
                                         <Title level={5} style={{position:'relative',left:5}}>X</Title>
                                         {dataset.map((e,index)=>(
                                             <div className="x-row">
                                                   <Title level={5}  style={{position:'relative',right:10,bottom:5}}>X{index+1}</Title>
                                                   <InputNumber onChange={(value)=> handleChange(index,value,'x')} style={{marginBottom:20}}/>
                                             </div>
                                         ))}
                                 </Item>

                                 <Item name='y'>
                                        <Title level={5} style={{position:'relative',left:45}}>Y = F(X)</Title>     
                                        {dataset.map((e,index)=>(
                                            <div className="y-row">
                                                  <Title level={5} style={{position:'relative',right:10,bottom:5}}>Y{index+1}</Title>
                                                  <InputNumber onChange={(value)=>handleChange(index,value,'y')} style={{marginBottom:20}}/>  
                                            </div>
                                        ))}                             
                                 </Item>
                            </Form>

                            <Form form={form} className="find-x">
                                 <Title level={5} style={{position:'relative',bottom:8}} > X = </Title> 
                                 <Item name='x'>
                                    <InputNumber onChange={(value) => Setx(value)} style={{marginLeft:10}}/>        
                                 </Item>
                                 
                            </Form>

                            <div className='interpolate-button'  >
                                        <Button onClick={handleSubmit} type='primary' style={{left:51}}>CALCULATE</Button>  
                                        <Button onClick={reset} type='primary' danger style={{left:157}}>RESET</Button>  
                            </div>     
                            
                            <div className='result-interpolation'>
                               {showresult && <Title level={5}> X = {x} Y = {result.map((e) => e.x === x && e.y)}</Title> }            
                            </div>   
                             
                             <br/><br/>

                             <div style={{marginTop:50}} className='my-chart-interpolation'  >
                            {result.length !== 0  && <Chart chartData={result} originaldata={dataset} yValue={ result.find((e)=> {
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

export default Newtonlinear;