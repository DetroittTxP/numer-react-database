import {Form,Input,InputNumber,Button,Typography} from 'antd'
import { useState } from 'react';
import axios from 'axios'
import {ChartIn} from './chartIntegrate'
const {Title} = Typography;
const {Item} = Form;



export const Compositesimpson= () =>{
     const [equation,Setequation] = useState('');
     const [lower,Setlower ] = useState(0);
     const [upper,Setupper ] = useState(0);
     const [n,Setn ] = useState(0);
     
     
     const [result,Setresult ] = useState([]);


     const submit = async()=>{
          await axios.post('http://localhost:1234/compositesimpson',{equation,lower,upper,n})
          .then(res=>{
               Setresult(res.data)
          })
          .catch(err=>alert(err))
     }

     return(
        <div>
        <div className='bisection'>
            <Title level={2} >COMPOSITE SIMPSON'RULE</Title>
 
            <div className='form-integration'>
 
                 <Form
                    onFinish={submit}
                     labelCol={{ span: 11, }}
                     wrapperCol={{span:2,}}
                  
                 >
                        <Item name='function' label='EQUATION'>
                              <Input  onChange={e => Setequation(e.target.value)} placeholder='equation here' value={null} style={{width:200}}/>
                        </Item>
 
                        <Item name='lower' label='LOWER'>
                             <InputNumber onChange={e => Setlower(e)} placeholder='lower here' value={null} style={{width:200}}/>
                        </Item>
 
                        <Item name='upper' label='UPPER'>
                             <InputNumber  onChange={e => Setupper(e)}  placeholder='upper here'  style={{width:200}}/>
                        </Item>

                        <Item name='n' label='N'>
                             <InputNumber onChange={e=> Setn(e)}  placeholder='n'  style={{width:200}}/>
                        </Item>
 
                        <Button type='primary' htmlType='submit' >CALCULATE</Button>
                      
                 </Form>
 
                 { result.length !== 0 && <Title level={5}>RESULT: {result.map(e => e.sum)}</Title>}
                  
                 <div className='my-chart-interpolation'>
                     { result.length !== 0 &&  <ChartIn intergatedata={result} />}
                  </div>  
            </div>
 
        </div>
     </div>
     )
}