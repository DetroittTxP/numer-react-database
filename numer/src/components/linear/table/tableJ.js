

import { Table } from "antd"

export const TableJ = ({datasource})=>{

    const columns = [
        {
            title:'ITERATION',
            dataIndex:'ITERATION',
            key:'ITERATION',
            align: 'center',
        },
        {
            title:'X',
            dataIndex:'x',
            key:'x',
            align: 'center',
            render:(x) => {
                return x.map((value,index) => (
                    <div>
                        X{index+1}: {value}
                    </div>
                ))
            }

        },
       
    ]


    return(
        <div className="Table" >
            <Table columns={columns} dataSource={datasource} defa/>
        </div>
    )
}