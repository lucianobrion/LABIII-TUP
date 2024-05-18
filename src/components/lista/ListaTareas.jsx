import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';




function ListaTareas({ tareas, pushDeleted, pushIndex }) {

  const sendDeletedHandler = (data) => {
    pushDeleted(data);
  };

  const clickHanlder = (data) => {
    pushIndex(data);
  };



  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Lista de tareas</Card.Title>
        </Card.Body>
        <ListGroup >
          {tareas.map((tarea) => (
            <ListGroup.Item
              key={tarea.id}
              className={tarea.estado ? "text-white bg-dark" : ""}>
              {tarea.actividad}
              <Button onClick={() => sendDeletedHandler(tarea.id)}>
                Borrar
              </Button> 
              <Button onClick={() => clickHanlder(tarea.id)} >
                {tarea.estado ? "Desmarcar" : "Marcar como Realizada"}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};


ListaTareas.propTypes = {
  tareas: PropTypes.array,
  pushDeleted: PropTypes.func.isRequired,
  pushIndex: PropTypes.func.isRequired,
};


export default ListaTareas;