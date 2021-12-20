import { useState, useContext } from "react";
import { Main, Button, Title } from "../styles/Home_Style";
import { Input } from "../styles/Send_style";
import { ProfessorContext } from '../Context/ProfessorContext';
import { CursoContext } from "../Context/CursoContext";
import { useNavigate } from "react-router-dom";
import { api } from "../Services/urlApi";
import axios from "axios";

export default function Nome(){
    const [arr, setArr] = useState('');
    const [url, setUrl] = useState('');
    const { curso } = useContext(CursoContext);
    const { professor } = useContext(ProfessorContext);
    const history = useNavigate();
    function enviar(){
        const body={
            name: arr,
            categoria: 1,
            disciplina: curso.id,
            professor: professor.id,
            url,
        }
        const promise = axios.post(api+'prova', body);
        promise.then(()=>{
            alert('prova postada com sucesso');
            history('/');
        }).catch(()=>{
            alert('sistema fora do ar');
        })
    }
    return(
        <Main>
            <Title>Nome:</Title>
            <Input margin="50px" value={arr} onChange={(e) => setArr(e.target.value)}/>
            <Title>Ex: 2020.1</Title>
            <Title>url:</Title>
            <Input margin="50px" value={url} onChange={(e) => setUrl(e.target.value)}/>
            <Button width="300px" height="70px" size="18px" margin="50px" color="black" onClick={enviar}>
                Enviar
            </Button>
        </Main>
    );
}  