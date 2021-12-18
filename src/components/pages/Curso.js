import { useState, useContext } from "react";
import { Main, Button, Title } from "../styles/Home_Style";
import { Input } from "../styles/Send_style";
import { ProfessorContext } from '../Context/ProfessorContext';
import { CursoContext } from "../Context/CursoContext";
import { Link } from "react-router-dom";

export default function Curso(){
    const [arr, setArr] = useState(['ai', 'novas','eita']);
    const { curso, setCurso } = useContext(CursoContext);
    const { professor } = useContext(ProfessorContext);

    return(
        <Main>
            <Input margin="50px" value={curso} onChange={(e) => setCurso(e.target.value)}/>
            <Title>Digite um dos cursos depois clique em enviar</Title>
            {arr.map((ar) => (
                <Button width="150px" height="50px" size="18px" margin="50px" color="#8c97ea">
                    {ar}
                </Button>
            ))}
            <Link to={professor? "/" : "/teacher"}>
                <Button width="300px" height="70px" size="18px" margin="50px" color="black">
                    Enviar
                </Button>
            </Link>
        </Main>
    );
}