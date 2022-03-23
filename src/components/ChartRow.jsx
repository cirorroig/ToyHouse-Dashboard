import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                    <td>{props.relations[0].name}</td>
                    <td>{props.relations[1].talle==null?"Sin Talle":props.relations[1].talle}</td>
                    <td>{props.relations[2].range}</td>       
                </tr>
            )
    }
    
        

export default ChartRow;