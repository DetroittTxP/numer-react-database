import {Form,Input,InputNumber,Button,Typography} from 'antd'

const {Title} = Typography;
const {Item} = Form;



export const Simpson= () =>{
     return(
        <div>
        <div className='bisection'>
            <Title level={2} >SIMPSON'RULE</Title>
 
            <div className='form-integration'>
 
                 <Form
                     labelCol={{ span: 11, }}
                     wrapperCol={{span:2,}}
                  
                 >
                        <Item name='function' label='EQUATION'>
                              <Input  placeholder='equation here' value={null} style={{width:200}}/>
                        </Item>
 
                        <Item name='lower' label='LOWER'>
                             <InputNumber placeholder='lower here' value={null} style={{width:200}}/>
                        </Item>
 
                        <Item name='upper' label='UPPER'>
                             <InputNumber  placeholder='upper here'  style={{width:200}}/>
                        </Item>
 
                        <Button type='primary' htmlType='submit' >CALCULATE</Button>
                      
                 </Form>
 
        
                  
            </div>
 
        </div>
     </div>
     )
}