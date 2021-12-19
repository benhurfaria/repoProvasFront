import { useState, useContext, useEffect } from "react";
import { Main, Button, Title } from "../styles/Home_Style";
import { Input } from "../styles/Send_style";
import { ProfessorContext } from '../Context/ProfessorContext';
import { CursoContext } from "../Context/CursoContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../Services/urlApi";

export default function Teacher(){
    const [arr, setArr] = useState(['ai', 'novas','eita']);
    const { professor, setProfessor } = useContext(ProfessorContext);
    const { curso } = useContext(CursoContext);
    useEffect(()=>{
        if(curso.length === 0){
            const promise = axios.get(api+'professores');
            promise.then((resp)=>{
                setArr(resp.data);
            })
        }
    },[]);
    return(
        <Main>
            <Input margin="50px" value={professor} onChange={(e) => setProfessor(e.target.value)}/>
            <Title>Digite um dos nomes depois clique em enviar</Title>
            {arr.map((ar) => (
                <Button width="150px" height="50px" size="18px" margin="50px" color="#8c97ea">
                    {ar.nome}
                </Button>
            ))}
            <Link to={curso? "/" : "/materia"}>
                <Button width="300px" height="60px" size="18px" margin="50px" color="black">
                    Enviar
                </Button>
            </Link>
        </Main> 
    );
}