import {Form, Typography,InputNumber,Button,Select} from 'antd'
import { useState,useEffect } from 'react';
import axios from 'axios'
import { TableJ } from './table/tableJ';

const {Title} = Typography;
const {Item} = Form;
const {Option} = Select;


export const Jacobi=()=>{
    const [size,Setsize] = useState(3)
    const [matrix,Setmatrix] = useState(Array.from({length:size},()=>Array(size).fill(null)));
    const [vector,Setvector] = useState([]);
    const [x0,Setx0] = useState(Array.from({length:size}).fill(null));
    const [result,Setresult] = useState([]);
    const [datasource,Setdatasource] = useState([]);
    const [form] = Form.useForm();
    const [showtable,Setshowtable] = useState(false);

    useEffect(()=>{
        Setmatrix(Array.from({length:size},()=>Array(size).fill(null)))
        Setx0(Array.from({length:size}).fill(null))
    },[size])

    const handlematrix=(row,col,value)=>{
        let newmatrix = [...matrix];
        newmatrix[row][col] = value;
        Setmatrix(newmatrix);
    }

    const handlevector=(index,value)=>{
        let newvector = [...vector];
        newvector[index] = value;
        Setvector(newvector);
    }

    const handlex0=(index,value)=>{
        let newx0 = [...x0];
        newx0[index] = value;
        Setx0(newx0);
    }

    const handlesubmit = async ()=>{
        await axios.post('http://localhost:1234/jacobi',{matrix,vector,x0})
        .then(res=>{
            Setdatasource(res.data)
            Setresult(res.data[res.data.length - 1].x);
            Setshowtable(true)
        })
        .catch(err=>alert(err))

        
    }

    const reset=()=>{
        form.resetFields();
        Setdatasource([]);
        Setresult([]);
        Setshowtable(false)
    }

    return(
        <div>
            <div className='bisection'>
                <Title level={2}>JACOBI</Title>

                <div className='formLinear'>
                     
                     <Select
                        defaultValue='3'
                        style={{width:80,marginLeft:20}}
                        onChange={(value)=>Setsize(parseInt(value))}
                     >
                        <Option value='3'>3X3</Option>
                        <Option value='4'>4X4</Option>
                     </Select>

                     <br/>
                     <br/>

                     <Form onFinish={handlesubmit} form={form}>

                        <Item name='matrix'>
                            {matrix.map((row,rowindex)=>(
                                <div key={rowindex}>
                                     {row.map((_,colindex)=>(
                                        <div className="input-linear">
                                            <InputNumber onChange={(value)=>handlematrix(rowindex,colindex,value)}  key={colindex} style={{width:48}} />&nbsp;
                                            {`x${colindex+1}`}{colindex+1 === size ? '=' : '+'}
                                        </div>
                                     ))}

                                     <InputNumber onChange={(value)=>handlevector(rowindex,value)}  style={{width:48,marginLeft:21}} />
                                </div>
                            ))}
                            <Title level={5} >STARTING VALUE</Title>
                            
                           
                            {x0.map((_,index)=>(
                                <div className='input-linear'>
                                   {`x${index+1}=`} <InputNumber onChange={(value) => handlex0(index,value)}  style={{width:48}}/>&nbsp;
                                    
                                </div>
                             ))}
                             
                        </Item>

                        <div className="gauss-btn">
                            <Button   type="primary" htmlType="submit">CALCULATE</Button>
                            <Button  onClick={reset} danger type="primary" >RESET</Button>        
                         </div>

                     </Form>

                    
                    {/* <div style={{marginLeft:20}}>
                        {result.map((value,index)=>(
                                <Title level={5}>X{index+1} = {value}</Title>
                            ))}
                    </div> */}

                    <div style={{marginLeft:890, display: 'flex', flexDirection: 'column'}}>
                    {result.map((value,index)=>(
                        <Title level={5} style={{alignSelf: 'flex-start'}} key={`X${index+1}`}>X{index+1} = {value}</Title>
                    ))}
                    </div>

                    {showtable && <TableJ datasource={datasource}/>}
 
                </div>
            </div>
        </div>
    )
}