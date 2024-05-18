import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import PropTypes from "prop-types";



const NuevaTarea = ({ enviarTarea }) => {

    const [newTarea, SetNewTarea] = useState("");
    const [contador, SetContador] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault()
        const nuevoElemento = {
            actividad: newTarea,
            estado: false,
            id: contador,
        };
        enviarTarea(nuevoElemento);
        SetNewTarea("");
        SetContador(prev => prev + 1);  
    };

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" >
                    <Form.Label>Ingrese su nueva tarea</Form.Label>
                    <Form.Control type="text" value={newTarea} onChange={(e) => (SetNewTarea(e.target.value))} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Agregar
                </Button>
            </Form>
        </div>
    );
};



NuevaTarea.propTypes = {
    enviarTarea: PropTypes.func.isRequired,
};

export default NuevaTarea