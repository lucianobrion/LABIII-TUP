import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";


const Login = () => {

    const [userName, setUserName] = useState("");

    const handleLoginUser = (e) => {
        setUserName(e.target.value)
        if (userName.toLowerCase().includes("o")) {
            window.alert("Por favor, ¡Nombres de usuario sin la letra o!")
        };

    };

    const handlerLoginButton = () => {
        if (userName.toLocaleLowerCase().includes("o") || userName == "") {
            window.alert("Usuario inválido para registrarse")
        }
        else {
            window.alert("¡Usuario registrado correctamente!")
        };
        setUserName("");
    };


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese su nombre de usuario:</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" onChange={handleLoginUser} value={userName} />
            </Form.Group>
            <Button onClick={handlerLoginButton}>
                Registrarse
            </Button>
            <Form.Text className="text-muted">
                <p>{userName}</p>
            </Form.Text>
        </Form>
    )
}

export default Login