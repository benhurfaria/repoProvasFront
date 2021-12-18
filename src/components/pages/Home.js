import {
    Main,
    Title,
    Button,
} from '../styles/Home_Style';
import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <Main>
            <Title>repoProvas</Title>
            <Link to="/send">
                <Button width="202px" height="45px" size="18px" margin="50px" color="#8c97ea">
                    Enviar prova
                </Button>
            </Link>
            <Button width="202px" height="45px" size="18px" margin="50px" color="#8c97ea">
              Visualizar provas
            </Button>
        </Main>
    )
}