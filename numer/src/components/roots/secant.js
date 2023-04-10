
import { Form,Input,InputNumber,Button } from 'antd'
import axios from 'axios';
import { useState } from 'react'
import SecantTable from './table/secantTable';

const Secant = () => {
  const [equation,Setequation] = useState('');
  const [x0,Setx0]  = useState(0);
  const [x1,Setx1] = useState(0);
  const [result,Setresult] = useState(null)
  const [datasource,Setdatasource] = useState([]);
  const [form] = Form.useForm();

  const handleFinish= async ()=>{
      await axios.post('http://localhost:1234/secant',{equation,x0,x1})
      .then((res)=>{
          const result = res.data;
          Setdatasource(result);
          Setresult(`Answer is : ${result[result.length-1].x1.toFixed(6)}`);

      })
      .catch((error)=>alert(error))
  }

  const Reset =()=>{
    form.resetFields();
    Setresult(null)
  }
  return (
    <div>
        <div className='bisection'>
            <h2>Secant</h2>
            <div className='formBisection'>
                <Form
                    onFinish={handleFinish}
                    labelCol={{ span: 11, }}
                    wrapperCol={{span: 22,}}
                    form = {form}
                    >
                    <Form.Item name='Function' label='Function' justify='center'>
                        <Input onChange={(e)=>Setequation(e.target.value)} className='input'/>
                    </Form.Item>
                    <Form.Item name='x0' label='X0' >
                        <InputNumber onChange={(e)=>Setx0(e)}  className='input' />
                    </Form.Item>
                    <Form.Item name='xr' label='X1' >
                        <InputNumber onChange={(e)=>Setx1(e)}  className='input' />
                    </Form.Item>

                    <Button type='primary' htmlType='submit'>CALCULATE</Button>
                    <Button onClick={Reset} id='reset' type='primary' danger>RESET</Button>
                </Form>
                <br/>
                <div className='ans'>{result}</div>
            </div>
        </div>
        <br/>
        <div className='Table'>
            {result !== null && (<SecantTable datasource={datasource}/>)}    
        </div>
    </div>
  )
}

export default Secant