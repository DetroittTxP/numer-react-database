
import { Typography,Form,InputNumber,Button, Checkbox  } from "antd"
import { useEffect, useState } from 'react';
import axios from "axios";

const { Item } = Form;

const { Title } = Typography;


export const Cramer=()=>{
    const [size,Setsize] = useState(3)
    const [matrix,Setmatrix] = useState(Array.from({length:size},()=>Array(size).fill(0)))
    const [vector,Setvector] = useState(Array.from({length:size}).fill(0)); 
    const [result,Setresult] = useState([]);
    const [fillzero,Setfillzero] = useState(false);

    useEffect(()=>{
        Setmatrix(Array.from({length:size},()=>Array(size).fill(0)))
        Setvector(Array.from({length:size}).fill(0))
    },[size])

    const handlechange=(row,col,value)=>{
        const newMatrix = [...matrix];
        newMatrix[row][col] = value;

        
        Setmatrix(newMatrix);
    }

    const handlevector=(i,value)=>{
         const newvector = [...vector];
         newvector[i] = value;
         Setvector(newvector);
    }



    const check=(value)=>{
        if(fillzero && value === 0){
            return 0;
        }
    }

    const checv=(index)=>{
        if(fillzero &&  vector[index] === 0 )
        {
            return 5;
        }
    }

    const HandleSubmit= async()=>{
        await axios.post('http://localhost:1234/cramer',{matrix,vector})
        .then(res=>Setresult(res.data))
        .catch(err=>alert(err)) 
    }

    return(
        <div>
            <div className="bisection">
            <Title level={2} >CRAMER'S RULE</Title>

                <div className="formLinear">
                        {/* <Select  
                            defaultValue='3'
                            onChange={(value)=>Setsize(parseInt(value))}
                        
                            style={{width:80,marginLeft:50}}
                        >
                                <Option value='3'>3X3</Option>
                                <Option value='4'>4X4</Option>
                        </Select> */}

                        <InputNumber placeholder="size"  style={{width:80,marginLeft:50}} onChange={e => e <= 12  ? Setsize(e) : alert('size must <=12')}/>

                        <Checkbox checked={fillzero} onChange={(e)=>Setfillzero(e.target.checked)}  className="checkbox-linear">
                            <Title level={5}>FILL EMPTY FIELD WITH 0</Title>
                        </Checkbox>

                    <br/>    
                    <br/>  
                
                    <Form
                        onFinish={HandleSubmit}      
                        >
                        <Item name='matrix'>
                              {matrix.map((row,rowIndex)=>(
                                  <div key={rowIndex} >
                                        {row.map((col,colIndex)=>(
                                            <div className="input-linear">
                                                <InputNumber value={4}  onChange={(e)=>handlechange(rowIndex,colIndex,e)}  key={colIndex} style={{width:48}} />&nbsp;&nbsp;
                                                {`x${colIndex+1}${colIndex+1 === size ?  '=' : '+'}`}
                                            </div>
                                        ))}                                    
                                        <InputNumber value={checv(rowIndex)}   onChange={(e)=>handlevector(rowIndex,e)} key={rowIndex} style={{width:48,marginLeft:20}} />
                                  </div>                                
                              ))}            
                        </Item>                       
                        <div className="gauss-btn">
                            <Button  htmlType="submit"  type="primary">CALCULATE</Button> 
                            <Button  type="primary" danger>RESET</Button>
                        </div>
                    </Form>  
                     {result.map((e,index)=>(
                         <div key={index} style={{marginLeft:35}}>
                             {`X${index+1}= ${e}`}
                         </div>
                     ))}                 
                </div>
            </div>
        </div>
    )
}