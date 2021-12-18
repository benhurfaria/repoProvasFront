import { Link } from "react-router-dom";
import { Main, Button, Title } from "../styles/Home_Style";

export default function Send(){
    return (
        <Main> 
            <Title>Escolher por:</Title>
            <Link to="/teacher">
                <Button width="150px" height="50px" size="18px" margin="50px" color="#8c97ea">
                    Professor
                </Button>
            </Link>
            <Link to="/materia">
                <Button width="150px" height="50px" size="18px" margin="50px" color="#8c97ea">
                    Disciplina
                </Button>
            </Link>
        </Main>
    ); 
}  