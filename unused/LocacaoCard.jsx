import styles from '../src/components/Form/Cards.module.css'

import {Button, Card, CardContent, CardHeader} from "@material-ui/core";
import {useState} from "react";
import FormInputs from "../src/components/Form/FormInputs";
import { dadosLocacaoState } from "../src/models/ContratoLocacao";

const LocacaoCard = (props) => {

    const dados = dadosLocacaoState.state;
    const dadosTags = dadosLocacaoState.tags;

    const [dadosLocacao, setDadosLocacao] = useState(dados);

    const { tabScope } = props;

    const inputChangeHandler = (e) => {
        const key = e.target.id.split('-')[0]

        setDadosLocacao(prevState => {
            return {...prevState, [key]: e.target.value.trim()}
        })
    }

    const testeHandler = (e) => {
        e.preventDefault()
        console.log(dadosLocacao)
    }

    return (
        <Card className={`${styles['tab-cards-content']}`}>
            <CardHeader title="Locacao"/>
            <CardContent>
                <form noValidate autoComplete="off">
                    <FormInputs
                        data={dadosLocacao}
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

export default LocacaoCard;