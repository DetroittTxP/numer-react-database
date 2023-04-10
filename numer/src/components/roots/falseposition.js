import { Form,Input,InputNumber,Button, Typography } from 'antd'
import axios from 'axios';
import { useEffect, useState } from 'react'
import '../../sass/style.css'
import { Falsechart } from './chart/falsechart';
import { FalsepositionTable } from './table/falsepostionTable';

const {Title} = Typography;
const Falseposition=()=>{
    const [equation,Setequation] = useState(null);
    const [xl,Setxl] = useState(null);
    const [xr,Setxr] = useState(null);
    const [ans,Setans] = useState(null);
    const [dataSource,Setdatasource] = useState([])
    const [showprocess,Setshowprocess] = useState(false);
    const [form] = Form.useForm();
 
    useEffect(()=>{
        console.log(dataSource);
    },[dataSource])

    const HandleSubmit= async ()=>{
        await axios.post('http://localhost:1234/falseposition',{equation,xl,xr})
        .then((res)=>{
           const data = res.data;
           Setdatasource(data);
           Setans(`Answer is ${data[data.length-1].x1}`);
        })
        .catch(err=>alert(err))
        
    }

    console.log(dataSource);

    const reset=()=>{
        form.resetFields();
        Setans(null);
        Setequation(null);
        Setxl(null);
        Setxr(null);
        Setdatasource([]);
        Setshowprocess(false);
    }

    return(
       <div>
           <div className="bisection">
               <Title level={2} style={{textAlign:'center'}}>False-Position</Title>
               <div className='formBisection'>
                    <Form
                      labelCol={{ span: 11, }}
                      wrapperCol={{span: 22,}}
                      onFinish={HandleSubmit}
                      form={form}
                      >
                      <Form.Item name='Function' label='Function' justify='center'>
                              <Input onChange={(e)=>Setequation(e.target.value)} className='input'/>
                      </Form.Item>
                      <Form.Item name='X0' label='X0' justify='center'>
                              <InputNumber onChange={(e)=>Setxr(e)} className='input'/>
                      </Form.Item>
                      <Form.Item name='X1' label='X1' justify='center'>
                              <InputNumber onChange={(e)=>Setxl(e)} className='input'/>
                      </Form.Item>

                      <Button className='calculate-button' type='primary' htmlType='submit'>CALCULATE</Button>
                      <Button onClick={reset} id='reset' type='primary' danger>RESET</Button>
                        
                    </Form>
                    <br/>
                    <div className='ans'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ans}</div>   
               </div>
           </div>
           <br/>

           <div className='my-chart'>
                {showprocess && <Falsechart chartData = {dataSource}/>}
            </div>

           <div className='Table'>
                    {ans != null && <Button onClick={()=>Setshowprocess(!showprocess)}>{showprocess ? 'HIDE' : 'SHOW'} PROCESS</Button>}
                    {showprocess && (<FalsepositionTable dataSource={dataSource}/>)}
            </div>
            
       </div>
    )
}

export default Falseposition;