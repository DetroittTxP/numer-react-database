import React from 'react'
import { Table} from 'antd'
import '../../../sass/style.css'

const BisectionTable = (props) => {
    const { dataSource }= props;

    
    const columns = [
        {
             title: 'ITERATION',
             dataIndex:'iteration',
             key: 'iteration',
        },
        {
             title: 'XM',
             dataIndex:'xm',
             key: 'xm',
        }, 
        {
             title: 'XL',
             dataIndex:'xl',
             key: 'xl',
        },
        {
             title: 'XR',
             dataIndex:'xr',
             key: 'xr',
        },
        {
             title:'ERROR',
             dataIndex:'error',
             key: 'error',
        }
   ]
  return (
    <div className='Table'>
        
        <br/><br/>
        <Table  dataSource={dataSource} columns={columns}/>
    </div>
  )
}

export default BisectionTable