import { Form,Input,InputNumber,Button,Typography } from'antd';
import { useState } from 'react';
import axios from 'axios'
const { Title } = Typography;

export  const Taylorseries=()=>{
    const [equation,Setequation] = useState('');
    const [x,Setx] = useState(null);
    const [x0,Setx0] = useState(null);
    const [result,Setresult] = useState([]);
    
    const [n,Setn] = useState(null);
    const [form] = Form.useForm();

    const HandleSubmit= async ()=>{
         await axios.post('http://localhost:1234/taylor',{equation,x0,x,n})
         .then((res)=>{
            Setresult(res.data);
         })
         .catch(error=>alert(error))
    }

    const reset=()=>{
        form.resetFields();
        Setresult(null);
    }

    return(
        <div>
            <div className="bisection">
                <Title level={2}>TAYLOR SERIES</Title>

                <div className="formBisection">
                     <Form
                        labelCol={{ span: 11, }}
                        wrapperCol={{span: 22,}}
                        form={form}
                        onFinish={HandleSubmit}
                     >

                         <Form.Item name='equation' label='EQUATION'>
                              <Input onChange={(e)=>Setequation(e.target.value)} className='input'/>
                         </Form.Item>

                         <Form.Item name='x0' label="X0">
                              <InputNumber onChange={ e=>Setx0(e) } className='input'/>
                         </Form.Item>
                                
                         <Form.Item name='x' label='X'>
                                 <InputNumber onChange={ e=>Setx(e) } className='input'/>
                         </Form.Item>

                         <Form.Item name='N' label='N'>
                                 <InputNumber onChange={ e=>Setn(e) } className='input'/>
                         </Form.Item>
                         
                         <Button type='primary' htmlType='submit' className='calculate-button'  >CALCULATE</Button> 
                         <Button type='primary' id='reset' onClick={reset} danger>RESET</Button>

                     </Form>
                     <br/>       

                </div>
             </div>
        </div>
    )
}