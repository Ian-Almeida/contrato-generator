import {Button, Card, CardContent, CardHeader} from "@material-ui/core";
import styles from "../src/components/Form/Cards.module.css";
import {useState} from "react";
import FormInputs from "../src/components/Form/FormInputs";
import { dadosPessoaisState } from '../src/models/ContratoLocacao'

const DadosPessoaisCard = (props) => {
    const dados = dadosPessoaisState.state;
    const dadosTags = dadosPessoaisState.tags;

    const [dadosPessoais, setDadosPessoais] = useState(dados);

    const { tabScope } = props;

    const inputChangeHandler = (e) => {
        const key = e.target.id.split('-')[0]

        setDadosPessoais(prevState => {
            return {...prevState, [key]: e.target.value.trim()}
        })
    }

    const testeHandler = (e) => {
        e.preventDefault()
        console.log(dadosPessoais)
    }

    return (
        <Card className={`${styles['tab-cards-content']}`}>
            <CardHeader title="Dados pessoais"/>
            <CardContent>
                <form noValidate autoComplete="off">
                    <FormInputs
                        data={dadosPessoais}
                        dataTags={dadosTags}
                        tabScope={tabScope}
                        onInputChange={inputChangeHandler}
                    />
                </form>
            </CardContent>
            <Button onClick={testeHandler}>Teste</Button>
        </Card>

    )
}

export default DadosPessoaisCard;