import { useState, useContext, useEffect } from "react";
import { Main, Button, Title } from "../styles/Home_Style";
import { Input } from "../styles/Send_style";
import { ProfessorContext } from '../Context/ProfessorContext';
import { CursoContext } from "../Context/CursoContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../Services/urlApi";

export default function Curso(){
    const [arr, setArr] = useState(['ai', 'novas','eita']);
    const { curso, setCurso } = useContext(CursoContext);
    const { professor } = useContext(ProfessorContext);
    const history = useNavigate();
    function enviar(){
        let a = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i].nome === curso){
                setCurso({id: arr[i].id, nome: arr[i].nome});
                a = true;
            }
        }
        if(!a) alert('digite outro nome');
        if(professor.length === 0){
            history('/teacher');
        }else{
            history('/nome');
        }
    }
    useEffect(()=>{
        if(professor.length === 0){
            const promise = axios.get(api+'disciplina');
            promise.then((resp)=>{
                setArr(resp.data);
                console.log(resp.data);
            }).catch((err)=>{
                if(err.response.status === 500) alert('servidor indisponivel');
            })
        }else{
            const promise  = axios.post(api+'curso', { professor: professor.nome });
            promise.then((resp)=>{
                setArr(resp.data);
            }).catch((err)=>{
                if(err.response.status === 500) alert('servidor indisponivel');
            });
        }
    },[]);
    return(
        <Main>
            <Input margin="50px" value={curso} onChange={(e) => setCurso(e.target.value)}/>
            <Title>Digite um dos cursos depois clique em enviar</Title>
            {arr.map((ar) => (
                <Button width="150px" height="50px" size="18px" margin="50px" color="#8c97ea">
                    {ar.nome}
                </Button>
            ))}
            <Button width="300px" height="70px" size="18px" margin="50px" color="black" onClick={enviar}>
                Enviar
            </Button>
        </Main>
    );
}