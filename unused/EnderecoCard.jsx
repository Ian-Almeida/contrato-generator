import {Button, Card, CardContent, CardHeader} from "@material-ui/core";
import styles from "../src/components/Form/Cards.module.css";
import {useState} from "react";
import FormInputs from "../src/components/Form/FormInputs";
import { dadosEnderecoState } from "../src/models/ContratoLocacao";

const EnderecoCard = (props) => {

    const dados = dadosEnderecoState.state;
    const dadosTags = dadosEnderecoState.tags;

    const [dadosEndereco, setDadosEndereco] = useState(dados);

    const { tabScope, objScope } = props;

    const inputChangeHandler = (e) => {
        const key = e.target.id.split('-')[0]

        setDadosEndereco(prevState => {
            return {...prevState, [key]: e.target.value.trim()}
        })
    }

    const testeHandler = (e) => {
        e.preventDefault()
        console.log(dadosEndereco)
    }

    return (
        <Card className={`${styles['tab-cards-content']}`}>
            <CardHeader title="Endereco"/>
            <CardContent>
                <form noValidate autoComplete="off">
                    <FormInputs
                        data={dadosEndereco}
                        dataTags={dadosTags}
                        tabScope={tabScope}
                        objScope={objScope}
                        onInputChange={inputChangeHandler}
                    />
                </form>
            </CardContent>
            <Button onClick={testeHandler}>Teste</Button>
        </Card>
    )
}

export default EnderecoCard;