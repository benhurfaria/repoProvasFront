import { useState, useContext } from "react";
import { Main, Button, Title } from "../styles/Home_Style";
import { Input } from "../styles/Send_style";
import { ProfessorContext } from '../Context/ProfessorContext';
import { CursoContext } from "../Context/CursoContext";
import { Link, useNavigate } from "react-router-dom";

export default function Nome(){
    const [arr, setArr] = useState('');
    const [url, setUrl] = useState('');
    const { curso, setCurso } = useContext(CursoContext);
    const { professor } = useContext(ProfessorContext);

    return(
        <Main>
            <Title>Nome:</Title>
            <Input margin="50px" value={arr} onChange={(e) => setArr(e.target.value)}/>
            <Title>Ex: 2020.1</Title>
            <Title>url:</Title>
            <Input margin="50px" value={url} onChange={(e) => setUrl(e.target.value)}/>
            <Button width="300px" height="70px" size="18px" margin="50px" color="black">
                Enviar
            </Button>
        </Main>
    );
}  