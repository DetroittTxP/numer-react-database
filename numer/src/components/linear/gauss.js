
import { Typography,Form,InputNumber,Button,Select,Checkbox } from "antd"
import { useEffect, useState } from 'react';
import axios from 'axios'
const {Option} = Select;
const { Title } = Typography;

export const Gauss=()=>{
    const [size,Setsize] = useState(3);
    const [matirx,Setmatrix] = useState(Array.from({length:size},()=>Array(size).fill(0)));
    const [vector,Setvector] = useState(Array.from({length:size}).fill(0));
    const [result,Setresult] = useState([])
    const [fillzero,Setfillzero] = useState(false);
    const [form] = Form.useForm();
  
    useEffect(()=>{
        Setmatrix(Array.from({length:size},()=>Array(size).fill(0)))
        Setvector(Array.from({length:size}).fill(0))
    },[size])

    const handlechange=(row,col,e)=>{
        
        const newMatrix = [...matirx]
        newMatrix[row][col] = e;
        Setmatrix(newMatrix);
    }

    const handleVector=(i,e)=>{
          const newvector = [...vector];
          newvector[i] = e;
          Setvector(newvector)
    }

    const handleSubmit=async()=>{
        await axios.post('http://localhost:1234/gauss',{matirx,vector})
        .then(res=>Setresult(res.data))
        .catch(err=>alert(err))
    }

    const checkZero=(value)=>{
        if(fillzero && value === 0)
        {
            return 0;
        }
    }

    const checkV=(index)=>{
        if(fillzero && vector[index] === 0){
            return 0;
        }
    }

    const resset=()=>{
        form.resetFields();
    }





    return(
        <div className='bisection'>
            <Title level={2} >GAUSS ELIMINATION</Title>
            <div className='formLinear'>

                <Select 
                     defaultValue='3'
                     style={{width:80,marginLeft:50}}
                     onChange={(value)=>Setsize(parseInt(value))}
                >
                    <Option value='3'>3x3</Option>
                    <Option value='4'>4x4</Option>
                </Select>

                <Checkbox checked={fillzero} onChange={(e)=> Setfillzero(e.target.checked)} className="checkbox-linear">
                        <Title level={5}>FILL EMPTY FIELD WITH 0</Title>
                </Checkbox>


                <br/>
                <br/>

                 <Form form={form} onFinish={handleSubmit}>
                      
                      <Form.Item name='matrix'>

                      
                            {matirx.map((row,Rowindex)=>(
                                <div key={Rowindex} >
                                        {row.map((col,Colindex)=>(
                                            <div className="input-linear" >
                                                <InputNumber value={checkZero(col)} onChange={(e)=>handlechange(Rowindex,Colindex,e)} style={{width:48}} key={Colindex} /> &nbsp;
                                                {`x${Colindex+1}${Colindex+1 === size ? '=' : '+'}`} 
                                                
                                            </div>
                                        ))}
                                        <InputNumber value={checkV(Rowindex)} onChange={(e)=>handleVector(Rowindex,e)} style={{width:48,marginLeft:20}}  />  
                                </div>
                            ))}                    
                      </Form.Item>

                      <div className="gauss-btn">
                            <Button   type="primary" htmlType="submit">CALCULATE</Button>
                            <Button  onClick={resset} danger type="primary" >RESET</Button>        
                      </div>
                   
                 </Form>
                 <br/>

                 {result.map((value,index)=>(
                    <div key={index}>
                        {`X${index+1}: ${value}`}
                    </div>
                 ))}
                    

            </div>
        </div>
    )    
}