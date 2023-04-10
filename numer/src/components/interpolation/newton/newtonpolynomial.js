
import {Typography,Form,InputNumber, Button,} from 'antd'
import { useState } from 'react';
import axios from 'axios'
import { Chart } from './Chart';

const {Title} = Typography;
const {Item} = Form;

export const Newtonpolynomial=()=>{
    const [size,Setsize] = useState(4);
    const [dataset,Setdataset] = useState(Array.from({length:size}).fill({x:0,y:0}));
    const [point,Setpoint] = useState(null);
    const [datasource,Setdatasource] = useState([]);
    const [show,Setshow] = useState(false);
    const [form] = Form.useForm();


     const Setrow = ()=>{
        let newdata = (prev)=>{
            let newdata = [...prev];
             if(prev.length < size){
                let diff = size - prev.length
                for(let i = 0 ; i<diff;i++){
                    newdata.push({x:0,y:0})
                }

             }else{
                newdata.length = size;
             }
             return newdata;
        } 
        Setdataset(newdata)
     }

    const handleChange=(index,value,key)=>{
         const newdataset = [...dataset]; 
         if(key === 'x'){
            newdataset[index] = {x:value,y:newdataset[index].y}
         }
         else{
            newdataset[index] = {x:newdataset[index].x,y:value}
         }
         Setdataset(newdataset)
         
    }

    const handlesubmit = async ()=>{
        await axios.post('http://localhost:1234/newtoninterpolation/polynomial',{dataset,point})
        .then((res) =>{
            Setdatasource(res.data);   
            Setshow(true);      
        })
        .catch(err => alert(err))
    }

    const reset=()=>{
         form.resetFields();
         Setshow(false);
    }

    return (
        <div>
            <div className='bisection'>
                <Title level={2}>NEWTON DIVIDED DIFFERENCE (POLYNOMIAL)</Title>

                <div className='interpolation-form'>

                        <div className='input-row' >
                             <Title level={5}>ROW: </Title>
                             <InputNumber value={size} onChange={(value)=> Setsize(value)} style={{marginLeft:10,bottom:4}}/>
                             <Button onClick={Setrow}  style={{marginLeft:10,bottom:4}}>GO</Button>
                        </div>
                        <br/>
                        <div className='interpolation-form'>
                          

                               
                                <Form className='inter-form'  form={form} onFinish={handlesubmit} >
                                    
                                     <Item name='x' >
                                                <Title level={5} style={{position:'relative',left:5}}>X</Title>
                                                 {dataset.map((_,index)=>(
                                                      <div className='x-row'>
                                                          <Title level={5}  style={{position:'relative',right:10,bottom:5}}>X{index+1}</Title>
                                                          <InputNumber onChange={(value)=>handleChange(index,value,'x')} style={{marginBottom:20}}  key={index}/> 
                                                      </div>
                                                 ))}
                                            
                                     </Item>
                                     <Item name='y'>
                                            <Title level={5} style={{position:'relative',left:45}}>Y = F(X)</Title>
                                            {dataset.map((_,index)=>(
                                                 <div className='y-row' >
                                                        <Title level={5} style={{position:'relative',right:10,bottom:5}}>Y{index+1}</Title>
                                                        <InputNumber onChange={(value)=>handleChange(index,value,'y')} style={{marginBottom:20}}  key={index}/> 
                                                </div>
                                            ))}  
                                         
                                     </Item>
                                
                                   
                                 </Form>
                         
                                <Form form={form} className='find-x' >
                                       <Title level={5} style={{position:'relative',bottom:8}} > X = </Title> 
                                       <Item name='point'>
                                              <InputNumber onChange={e => Setpoint(e)} style={{marginLeft:10}}/>  
                                                     
                                       </Item>                                    
                                 </Form>    

                                 <div className='interpolate-button'>
                                        <Button onClick={handlesubmit}  type='primary' style={{left:51}}>CALCULATE</Button>  
                                        <Button onClick={reset} type='primary' danger style={{left:157}}>RESET</Button>  
                                 </div>      
 
                                                         
                        </div>  

                        <div className='result-interpolation'>
                            { show && <Title level={5}> X = {point} Y = {datasource.map((e)=>e.x === point && e.y)} </Title>}
                        </div>   

                        <br/><br/>

                        <div style={{marginTop:50}} className='my-chart-interpolation'  >
                            {show  && <Chart chartData={datasource} originaldata={dataset} yValue={ datasource.find((e)=> {
                                  if(e.x === point){
                                    return e.y
                                  }
                                  return null;
                            }) } />}
                        </div>                      
                </div>
            </div>
        </div>
    )
}