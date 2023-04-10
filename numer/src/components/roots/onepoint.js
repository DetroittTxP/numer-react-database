import {Form,Input,InputNumber,Button} from 'antd';
import axios from 'axios';
import { useState } from 'react';
import '../../sass/style.css'
import { OnepointTable } from './table/onepointTable';

const Onepoint = ()=>{
    const [equation,Setequation] = useState(null);
    const [x0,Setx0] = useState(null)
    const [ans,Setans] = useState(null);
    const [datasource,Setdatasource] = useState([]);
    const [form] = Form.useForm();

    const HandleSubmit = async()=>{
        await axios.post('http://localhost:1234/onepoint',{equation,x0})
        .then((res)=>{
            const result = res.data;
            Setdatasource(result)
            Setans(`Answer is ${result[result.length-1].x0}`)
        })
        .catch((err)=>alert(err))
    }

    const Reset=()=>{
        form.resetFields();
        Setans(null)
    }


    return(
        <div>
            <div className='bisection'>
                 <h2>Onepoint</h2>
                 <div className='formBisection'>
                      <Form
                        labelCol={{span : 11}}
                        wrapperCol={{span:22}}
                        onFinish={HandleSubmit}
                        form = {form}
                        >
                          <Form.Item name='function' label='FUNCTION' justify='center'>
                                <Input onChange={(e)=>Setequation(e.target.value)}  className='input'/>
                          </Form.Item>
                          <Form.Item name='x0' label='X0' justify='center'>
                                <InputNumber onChange={e=>Setx0(e)}  className='input'/>
                          </Form.Item>

                          <Button htmlType='submit' type='primary'>CALCULATE</Button>
                          <Button id='reset' type='primary' onClick={Reset} danger>RESET</Button>
                      </Form>
                      <br/>
                      <div className='ans' style={{marginLeft:150}}>{ans}</div>
                 </div>
                 
            </div>
            <br/>

            <div className='Table'>
                {ans !== null && <OnepointTable datasource={datasource}/>}
            </div>
        </div>
    )
}

export default Onepoint;