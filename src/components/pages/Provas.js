import { Main, Title, Button } from "../styles/Home_Style";
import { Href } from "../styles/Send_style";
import { useState, useEffect } from "react";
import { api } from "../Services/urlApi";
import axios from "axios";

export default function Provas(){
    const [arr, setArr] = useState(['ai', 'novas', 'qisso']);
    useEffect(()=>{
        const promise = axios.get(api+'prova');
        promise.then((resp)=>{
            setArr(resp.data);
        }).catch(()=>{
            alert('servidor fora do ar');
        })
    },[])
    return(
        <Main>
            <Title>Provas:</Title>
            {
                arr.map((ar) => (
                    <Button width="150px" size="18px" margin="50px" color="#8c97ea">
                        <Href href={ar.url} target="_blank" width="150px" size="18px" margin="50px" color="#8c97ea">
                            {ar.name}
                        </Href>
                    </Button>
                ))
            }
        </Main>
    );
}
