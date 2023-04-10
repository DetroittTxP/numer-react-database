
import { Table } from 'antd';

export const FalsepositionTable=(props)=>{
    const {dataSource} = props;

    const columns=[
        {
           title:'ITERATION',
           dataIndex:'iteration',
           key:'iteration'
        },
        {
            title:'X1',
            dataIndex:'x1',
            key:'x1'
        },
        {
            title:'XL',
            dataIndex:'xl',
            key:'xl'
        },
        {
            title:'XR',
            dataIndex:'xr',
            key:'xr'
        },
        {
            title:'ERROR',
            dataIndex:'error',
            key:'error'
        }
    ]

    return(
        <div className='Table'>
            
            <br/>          
            <Table columns={columns} dataSource={dataSource}/>
        </div>
    )
}