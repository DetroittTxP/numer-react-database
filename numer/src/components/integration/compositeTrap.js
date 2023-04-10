

import {Form,InputNumber,Button,Input,Typography} from 'antd'
import { useState } from 'react';
import axios from 'axios';
import { ChartIn } from './chartIntegrate';


const {Title} = Typography;


export const CompositeTrap=()=>{

    const [equation,Setequation] = useState('');
    const [xlower,Setxlower] = useState(0);
    const [xupper,Setxupper] = useState(0);
    const [n,Setn] = useState(0);
    const [result,Setresult] = useState([]);


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


    const Cal= async ()=>{
        await axios.post('http://localhost:1234/caltrap',{equation,xlower,xupper,n})
        .then(res=>Setresult(res.data))
        .catch(err=>alert(err))
    }

    const fetch= async ()=>{
        await axios.post('http://localhost:1234/randomtrap')
        .then(res=>{
            Setresult(res.data)
            Setxlower(res.data[0].Lower);
            Setxupper(res.data[0].Upper);
            Setn(res.data[0].N)
            Setequation(res.data[0].Equation)
        })
        .catch(err=>alert(err))
    }

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

                 <Input onChange={e=>Setequation(e.target.value)} value={equation}  style={{width:200}}/>
                 <br/><br/>
                 <InputNumber value={xlower}/>
                 <br/><br/>
                 <InputNumber value={xupper}/>
                 <br/><br/>
                 <InputNumber value={n}/>
                 <br/><br/>
                 <Button onClick={Cal} >CALCULATE</Button>
                 <Button onClick={fetch} >GET API</Button>

                <br/>

                 {result.length !== 0 && <Title level={5}>Answer is: {result.map(e => e.totalArea)} </Title>}
                 <br/>
                 <br/>

                 <div className='my-chart-interpolation'>
                        { result.length !== 0 &&  <ChartIn  intergatedata={result}  />}
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