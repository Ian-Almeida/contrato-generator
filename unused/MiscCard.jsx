import styles from '../src/components/Form/Cards.module.css'

import {Button, Card, CardContent, CardHeader} from "@material-ui/core";
import {useState} from "react";
import FormInputs from "../src/components/Form/FormInputs";
import { dadosMiscState } from "../src/models/ContratoLocacao";

const MiscCard = (props) => {

    const dados = dadosMiscState.state;
    const dadosTags = dadosMiscState.tags;

    const [dadosMisc, setDadosMisc] = useState(dados);

    const { tabScope } = props;

    const inputChangeHandler = (e) => {
        const key = e.target.id.split('-')[0]

        setDadosMisc(prevState => {
            return {...prevState, [key]: e.target.value.trim()}
        })
    }

    const testeHandler = (e) => {
        e.preventDefault()
        console.log(dadosMisc)
    }


    return (
        <Card className={`${styles['tab-cards-content']}`}>
            <CardHeader title="Misc"/>
            <CardContent>
                <form noValidate autoComplete="off">
                    <FormInputs
                        data={dadosMisc}
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

export default MiscCard;