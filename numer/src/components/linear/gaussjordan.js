import { Typography,Form,InputNumber,Select, Button } from "antd"
import {useEffect, useState} from 'react'
import axios from 'axios'
const { Title} = Typography
const { Item } = Form;
const { Option } = Select;

export const Gaussjordan=()=>{
    const [size,Setsize] = useState(3);
    const [matrix,Setmatrix] = useState(Array.from({length:size},()=>Array(size+1).fill(null)))
    const [inverse,Setinverse] = useState([]);
    const [result,Setresult] = useState([]);
    const [showtable,Setshowtable] = useState(false);

 

    const handlechange=(row,col,value)=>{
         const newMatrix = [...matrix];
         newMatrix[row][col] = value;
         Setmatrix(newMatrix)
    } 
 
    const handlesubmit=async()=>{
        await axios.post('http://localhost:1234/jordan',{matrix})
        .then(res=>Setresult(res.data))
        .catch(err=>alert(err))

        await axios.post('http://localhost:1234/inverse',{matrix})
        .then(res=>Setinverse(res.data))
        .catch(err=>alert(err))

        Setshowtable(true);
        
    }

    useEffect(()=>{Setmatrix(Array.from({length:size},()=>Array(size+1).fill(null)))},[size])

    return(
        <div>
            <div className="bisection">

                <Title level={2}>GAUSS JORDAN</Title>

                <div className='formlinear'>
                        <Select 
                            style={{width:80,marginLeft:20}}
                            defaultValue='3'
                            onChange={(value)=>Setsize(parseInt(value))}
                        
                        >
                            <Option value='3'>3x3</Option>
                            <Option value='4'>4x4</Option>
                        </Select>

                        <br/>
                        <br/>

                        <Form  onFinish={handlesubmit}>
                            <Item>
                                {matrix.map((row,rowIndex)=>(
                                    <div key={rowIndex}>
                                         {row.map((_,colIndex)=>(
                                            <div className="input-linear">
                                                <InputNumber style={{width:48}} onChange={(value)=>handlechange(rowIndex,colIndex,value)}  />&nbsp;
                                                {colIndex <= size -1 ? `x${colIndex+1}` : ''} {colIndex <= size-2 ? '+' : '' }{colIndex === size-1 ? '=' : ''}
                                            </div>
                                         ))}   
                                         {/* <InputNumber style={{width:48,marginLeft:20}}/> */}
                                    </div>
                                ))}
                            </Item>

                            <div className="button-linear">
                                <Button id="linear-submit" htmlType="submit" type="primary">CALCULATE</Button>
                                <Button id="linear-reset" type="primary" danger>RESET</Button>
                                  
                                  <br/><br/>
                                  {result.map((value,index)=>(
                                       <div>
                                           <Title level={5} key={index}>X{index+1} = {value}</Title>
                                       </div>
                                  ))}


                            </div>
                        </Form>
                        <br/>
                        <br/>
                       { showtable && <table className="table-jordan">
                            {inverse.map((row,rowIndex)=>(
                                  <th key={rowIndex}>
                                       {row.map((col,colindex)=>(
                                          <tr key={colindex}>{col}</tr>
                                       ))}
                                  </th>
                                ))}            
                        </table>}
                       
                </div>

            </div>
        </div>
    )
}