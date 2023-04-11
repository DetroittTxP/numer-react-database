

import {Form,InputNumber,Button,Input,Typography} from 'antd'
import { useState } from 'react';
import axios from 'axios';
import { ChartIn } from './chartIntegrate';


const {Title} = Typography;


export const CompositeTrap=()=>{

    const [equation,Setequation] = useState('');
    const [xlower,Setxlower] = useState(null);
    const [xupper,Setxupper] = useState(null);
    const [n,Setn] = useState(null);
    const [result,Setresult] = useState([])
    const [show,Setshow] = useState(false)
    const [token,Settoken] = useState('');


    const submit= async ()=>{
        await axios.post('http://localhost:1234/randomtrap',)
        .then(res => {
            Setresult(res.data)
            Setxlower(res.data[0].Lower);
            Setxupper(res.data[0].Upper);
            Setequation(res.data[0].Equation);
            Setn(res.data[0].N)
            
        } )
        .catch(err => alert(err));
    }

    const gettoken= async ()=>{
        await axios.get('http://localhost:1234/gettoken')
        .then(res=>{
            Settoken(res.data.token);
            console.log(token);
        })
        .catch(err=>alert(err))
    }

    const getdata= async ()=>{
        await axios.get('http://localhost:1234/randomtrap',{headers: { authorization: `Bearer ${token}` }})
        .then(res=>{
            Setresult(res.data)
            Setxlower(res.data[0].Lower);
            Setxupper(res.data[0].Upper);
            Setn(res.data[0].N)
            Setequation(res.data[0].Equation)
            Setshow(false)
            
        })
        .catch(err=>alert(err))
    }





    const Cal= async ()=>{
        await axios.post('http://localhost:1234/caltrap',{equation,xlower,xupper,n})
        .then(res=>Setresult(res.data))
        .catch(err=>alert(err))
        Setshow(true)
    }

    const fetch= async ()=>{
        await axios.post('http://localhost:1234/randomtrap',)
        .then(res=>{
            Setresult(res.data)
            Setxlower(res.data[0].Lower);
            Setxupper(res.data[0].Upper);
            Setn(res.data[0].N)
            Setequation(res.data[0].Equation)
            Setshow(false)
            
        })
        .catch(err=>alert(err))
    }
    console.log(token.token);
    return(
        <div>
        <div className='bisection'>
            <Title level={2} >COMPOSITE TRAPZOIDAL</Title>
 
            <div className='form-integration'>
                 {/* <Form
                     labelCol={{ span: 11, }}
                     wrapperCol={{span:2,}}
                     onFinish={submit}
                 >
                        <Item name='function' label='EQUATION'>
                              <Input  onChange={(e)=> Setequation(e.target.value)}  placeholder='equation here' value={null} style={{width:200}}/>
                        </Item>
 
                        <Item name='lower' label='LOWER'>
                                  <InputNumber value={xlower} />
                        </Item>
 
                        <Item name='upper' label='UPPER'>
                                  <InputNumber  value={xupper} />
                        </Item>
                
                        <Item name='n' label='N'>
                             <InputNumber value={n} onChange={e => Setn(e)}  placeholder='n'  style={{width:200}}/>
                        </Item>
 
                        <Button type='primary' htmlType='submit' >CALCULATE</Button>
                 </Form> */}

                 <Input onChange={e=>Setequation(e.target.value)} placeholder='eq' value={equation}  style={{width:200}}/>
                 <br/><br/>
                 <InputNumber placeholder='lower' value={xlower}/>
                 <br/><br/>
                 <InputNumber placeholder='upper' value={xupper}/>
                 <br/><br/>
                 <InputNumber placeholder='n' value={n}/>
                 <br/><br/>
                 <InputNumber placeholder='token' style={{width:1000}} value={token}/>
                 <br/><br/>
                 <Button onClick={Cal} >CALCULATE</Button>
                 <Button onClick={getdata} >GET DATA</Button>
                 <Button onClick={gettoken} >GET TOKEN</Button>

                <br/>

                 { show && <Title level={5}>Answer is: {result.map(e => e.totalArea)} </Title>}
                 <br/>
                 <br/>

                 <div className='my-chart-interpolation'>
                        { show  &&  <ChartIn  intergatedata={result}  />}
                </div>   
                 
                 {/* <table>
                     <thead>
                          <th>EQUATION</th>
                          <th>LOWER</th>
                          <th>UPPER</th>
                          <th>ANSWER</th>
                     </thead>

                     <tbody>
                     {result.map((e)=>(
                          <tr>
                             <td>{e.Equation}</td>
                             <td>{e.Lower}</td>
                             <td>{e.Upper}</td>
                          </tr>  
                     ))}
    
                     </tbody>
                 </table> */}
               
            </div>
        </div>
     </div>
    )
}