import {Form,Button,InputNumber,Typography} from 'antd'
import { useState } from 'react';
import axios from 'axios'
const {Title} = Typography;
const {Item} = Form;

export const Polyregression = ()=>{
    const [ form ] = Form.useForm();
    const [size,Setsize] = useState(4);
    const [data,setdata] = useState(Array.from({length:size}).fill({x:0,y:0}))
    const [x,Setx] = useState(0);
    const [n,Setn] =useState(0)
    const [result,Setresult] = useState([]);

    const Setrow=()=>{
         setdata(prev=>{
          let newdata = [...prev]
          if(prev.length < size){ 
              let newsize = size - prev.length;

              for(let i =0 ;i<newsize;i++){
                 newdata.push({x:0,y:0})
              }
          }else{      
             newdata.length = size;
          }
          return newdata;
         })
    }

    const input=(index,value,key)=>{
        let newdata = prev =>{
              let newinput = [...prev];

              if(key === 'x'){
                   newinput[index] = {x:value,y:newinput[index].y}
              }
              else{
               newinput[index] = {x:newinput[index].x,y:value}
              }

              return newinput;
        }

        setdata(newdata);
    }

    const fetch= async ()=>{
         await axios.post('http://localhost:1234/polyregression',{data,x,n})
         .then(res=>{
            Setresult(res.data);
         })
         .catch(err=>alert(err))
    }

    return(
        <div>
        <div className="bisection">
                <Title level={2}>POLYNOMIAL REGRESSION</Title>

                <div className="interpolation-form">
                     
                     <div className="input-row">
                          <Title level={5}>ROW: </Title>
                          <InputNumber onChange={e => Setsize(e)} value={size} style={{marginLeft:10,bottom:4}}/>
                          <Button onClick={Setrow}  style={{marginLeft:10,bottom:4}}>SET ROW</Button>
                     </div>
                     <br/>

                     <div className="interpolation-form">

                        <Form form={form}   className='inter-form'>
                             <Item name='x'>
                                 <Title level={5} style={{position:'relative',left:5}}>X</Title> 
                                  {data.map((_,index)=>(
                                     <div  className='x-row'>
                                     <Title level={5} style={{position:'relative',right:10,bottom:5}}>X{index+1}</Title>   
                                        <InputNumber onChange={e=> input(index,e,'x')} style={{marginBottom:20}} key={index}/>                  
                                     </div>
                                  ))}
                             </Item>

                             <Item name='y'>
                                 <Title level={5} style={{position:'relative',left:45}}>Y = F(X)</Title>
                                 {data.map((_,index)=>(
                                     <div className="y-row">
                                          <Title level={5} style={{position:'relative',right:10,bottom:5}}>Y{index+1}</Title>
                                          <InputNumber  onChange={e=> input(index,e,'y')} style={{marginBottom:20}}/>
                                     </div>
                                 ))}
                             </Item>
                        </Form>

                        <Form form={form} className="find-x">
                                 <Title level={5} style={{position:'relative',bottom:8}} > X = </Title> 
                                 <Item name='x'>
                                    <InputNumber onChange={e => Setx(e)} style={{marginLeft:10}}/>  
                                 </Item>
                                 &nbsp; &nbsp; &nbsp;  
                                 <Title level={5} style={{position:'relative',bottom:8}} > ORDER = </Title> 

                                 <Item name='n'>
                                   <InputNumber onChange={e=>Setn(e)} style={{marginLeft:10}}/>  
                                 </Item>


                                 
                                 
                            </Form>

                             <div className='interpolate-button' >
                                    <Button onClick={fetch} type='primary' style={{left:51}}>CALCULATE</Button>  
                                    <Button  type='primary' danger style={{left:157}}>RESET</Button>  
                             </div>      

                             <div className='result-interpolation'>
                              
                            </div>   

                            <div className='my-chart'>
                                
                            </div>         

                     </div>


                </div>
        </div>
    </div>
    )
}