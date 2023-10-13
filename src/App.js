import { Container,Card,Form,Button,Row,Col } from 'react-bootstrap';
import React,{useState,useEffect} from 'react'

import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState('')
  const[todos,setTodos]=useState([]);
  const[editTodo,setEditTodo]=useState(null);
  const [isEdit, setIsEdit] = useState(false);


  useEffect(()=>{
    if(editTodo){
      setTodo(editTodo.inputs)
      setIsEdit(true);
    
    }else{
      setTodo('')
      setIsEdit(false);
    }
  },[editTodo,setTodo])

  const updatedTodo =(inputs,id) =>{
    const newTodo = todos.map((todo)=>
    todo.id === id ? {inputs,id} : todo
    );
    setTodos(newTodo)
    setEditTodo('')

  }


  const handleChange= e =>{
    setTodo(e.target.value)
  }
  const handleSubmit = event =>{
    event.preventDefault()
   
    if(!editTodo){
      setIsEdit(false)
      setTodos([...todos,{id:Math.floor(Math.random()*100),inputs:todo}])
      setTodo('')
    }else{
      updatedTodo(todo,editTodo.id)
    }
    console.log(todo)
  }
  const onDelete = id =>{
    setTodos(todos.filter( item => item.id !== id))
  }
  
  const onEdit = id =>{
    const newTodo = todos.find( item=> item.id === id)
    setEditTodo(newTodo)
    console.log(newTodo);
  }
  return (
    <>
      <Container >
        <h4 className='my-2'>Todo Application</h4>
        <Card className='my-3 w-50'>
          <Card.Body>
            <Card.Title>Todo's </Card.Title>
            <Form class="container">
              <Form.Group>
                <Row>
                  <Col md={9}>
                   <Form.Control type="text" value={todo} onChange={handleChange}/>
                  </Col>
                  <Col md={3}>
                    <Button onClick={handleSubmit}>{isEdit === true   ? "Edit Todo" : "Add Todo"  }</Button>
                  </Col>
                </Row>
                
               
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>        
        <TodoList todos={todos} onDelete={onDelete} onEdit={onEdit}/>
        
          
        

        
        
      </Container>
    </>
  );
}

export default App;
