
import {Form,Input,InputNumber,Button} from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { NewtonTable } from './table/newtonTable';


export const Newtonraphson = ()=>{
    const [equation,Setequation] = useState(null);
    const [x0,Setx0] = useState(null);
    const [datasource,Setdatasource] = useState([])
    const [ans,Setans] = useState(null);
    const [Showtable,Setshowtable] = useState(false);

    const HandleSubmit= async()=>{
        await axios.post('http://localhost:1234/newton',{equation,x0})
        .then((res)=>{
            Setdatasource(res.data)
            Setans(`Answer is ${res.data[res.data.length-1].x1}`)
        })
        .catch(err=>alert(err))
        Setshowtable(true);

    }   
    return(
        <div>
            <div className='bisection'>
                <h2>Newton-Raphson</h2>
                <div className='formBisection'>
                    <Form
                      labelCol={{span : 11}}
                      wrapperCol={{span: 22}}
                      onFinish={HandleSubmit}
                        >
                        <Form.Item name='function' label='FUNCTION' justify='center'>
                                <Input onChange={(e)=>Setequation(e.target.value)} className='input'/>
                        </Form.Item>
                        <Form.Item name='x0' label='X0' justify='center'>
                                <InputNumber onChange={e=>Setx0(e)}  className='input'/>
                        </Form.Item>
                        <Button htmlType='submit' type='primary'>CALCULATE</Button>
                        <Button id='reset' type='primary'  danger>RESET</Button>
                    </Form>
                    <br/>
                    <div className='ans' style={{marginLeft:150}}>{ans}</div>
                </div>
            </div>
            <br/>
            <div className='Table'>
                {Showtable && <NewtonTable datasource={datasource}/>}
            </div>
            
        </div>
    )
}

