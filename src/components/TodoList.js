import React from 'react'
import { Card,Row,Col } from 'react-bootstrap';
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'
const TodoList = ({todos, onDelete, onEdit}) => {
    return (
        <div>
            <h5>Todo List</h5>
            { todos.length > 0 ? todos.map((item) =>{
                return(
                <Card key={item.id} col={5} className="my-3 w-50">         
                    <Card.Body>
                    <Row>
                        <Col md={9}>
                        {item.inputs}
                        </Col>
                        <Col md={3}>
                        <AiFillEdit onClick={(id)=>onEdit(item.id)} />{'  '}{' '}
                        <AiFillDelete onClick={(id)=>onDelete(item.id)} />
                        </Col>
                    </Row>
                    
                    </Card.Body>
                </Card>
                )
            }):
            (
                <h6> No records found</h6>
            )        }
            
        </div>
    )
}

export default TodoList
