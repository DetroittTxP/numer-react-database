
import React, { useState } from 'react'
import {Form, InputNumber, Typography,Button,Input} from 'antd'

import axios from 'axios'
const {Title} = Typography;
const {Item} = Form;

    export const Trap = () => {
        const [equation,Setequation] = useState('');
        const [xlower, Setlower] = useState(0);
        const [xupper,Setuppper] = useState(0);
        const [result,Setresult] = useState(null)

        const submit= async ()=>{
            await axios.post('http://localhost:1234/trap',{equation,xlower,xupper})
            .then(res => Setresult(res.data))
            .catch(err => alert(err));
        }
        
  return (
    <div>
       <div className='bisection'>
           <Title level={2} >SINGLE TRAPZOIDAL</Title>

           <div className='form-integration'>

                <Form
                    labelCol={{ span: 11, }}
                    wrapperCol={{span:2,}}
                    onFinish={submit}
                >
                       <Item name='function' label='EQUATION'>
                             <Input onChange={(e)=> Setequation(e.target.value)} placeholder='equation here' value={null} style={{width:200}}/>
                       </Item>

                       <Item name='lower' label='LOWER'>
                            <InputNumber onChange={(e)=> Setlower(e)} placeholder='lower here' value={null} style={{width:200}}/>
                       </Item>

                       <Item name='upper' label='UPPER'>
                            <InputNumber onChange={(e)=> Setuppper(e)} placeholder='upper here'  style={{width:200}}/>
                       </Item>

                       <Button type='primary' htmlType='submit' >CALCULATE</Button>
                     
                </Form>

                {result}

                 
           </div>

       </div>
    </div>
  )
}




