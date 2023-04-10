import {Typography, Form,Input,InputNumber,Button} from 'antd';
import axios from 'axios'
import { useState } from 'react';
import { Bichart } from './chart/bisecchart';
import BisectionTable from './table/bisectionTable';
const { Title } = Typography;



const Bisection = () => {
  const [equation,Setequation] = useState('');
  const [xl,Setxl] = useState(0);
  const [xr,Setxr] = useState(0);
  const [Result,SetResult] = useState(null);
  const [datasource,Setdatasource] = useState([])
  const [showprocess,Setshowprocess] = useState(false);

  const [form] = Form.useForm();

  const HandleSubmit = async ()=>{
       await axios.post('http://localhost:1234/bisection',{equation,xl,xr})
       .then((res)=>{
            
            Setdatasource(res.data);
            SetResult(`Answer is ${res.data[res.data.length - 1].xm.toFixed(6)}`)
             
       })
       .catch((err)=>alert(err))
  }

  const reset=()=>{
      SetResult(null);
      Setshowprocess(false);
      form.resetFields();
  }

  return (
     <div>
      <div className='bisection'>
            <Title level={2} style={{marginLeft:19}}>BISECTION</Title>
            <div className='formBisection'>
                  <Form
                  onFinish={HandleSubmit}
                  labelCol={{ span: 11, }}
                  wrapperCol={{span: 22,}}
                  form={form} 
                  >
                  
                        <Form.Item name='Function' label='Function' justify='center'>
                              <Input onChange={(e)=>Setequation(e.target.value)} className='input'/>
                        </Form.Item>
                        <Form.Item name='xl' label='XL' >
                              <InputNumber onChange={(e)=>Setxl(e)} className='input' />
                        </Form.Item>
                        <Form.Item name='xr' label='XR' >
                              <InputNumber onChange={(e)=>Setxr(e)} className='input' />
                        </Form.Item>
                        
                        <Button className='calculate-button' type='primary' htmlType='submit'>CALCULATE</Button>
                        <Button id='reset' type='primary' onClick={reset} danger>RESET</Button>
                  </Form>
                  <br/>
                  <div className='ans'>{Result}</div>
            </div>
            
      </div>
      <br/>
      <div className='my-chart'>
           {showprocess &&  <Bichart chartData = {datasource}/>}
      </div>
      
      <div className='Table'>
            {Result != null && <Button onClick={()=>Setshowprocess(!showprocess)} >{showprocess ? 'HIDE' : 'SHOW'} PROCESS</Button> }
            {showprocess && (<BisectionTable dataSource={datasource} />)}
      </div>
      
     
    </div>
  )
}

export default Bisection