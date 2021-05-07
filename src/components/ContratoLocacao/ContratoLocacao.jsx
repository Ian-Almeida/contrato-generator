import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Container, Tab, Tabs, Paper, Button} from '@material-ui/core';

import TabPanel from "../TabPanel";
import FormCard from "../Form/FormCard";
import { dadosPessoaisState, dadosEnderecoState, dadosLocacaoState, dadosMiscState} from "../../models/ContratoLocacao";
import { generateDocx } from "../../scripts/GenerateDocx";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const data = {
    locador: {
        dadosPessoais: dadosPessoaisState.state,
        endereco: dadosEnderecoState.state,
        misc: dadosMiscState.state,
    },
    locatario: {
        dadosPessoais: dadosPessoaisState.state,
        endereco: dadosEnderecoState.state,
    },
    locacao: {
        locacao: dadosLocacaoState.state,
    }
}

const dataTags = {
    locador: {
        dadosPessoais: dadosPessoaisState.tags,
        dadosPessoaisTitle: 'Dados Pessoais',
        endereco: dadosEnderecoState.tags,
        enderecoTitle: 'Endereço',
        misc: dadosMiscState.tags,
        miscTitle: 'Misc',
    },
    locatario: {
        dadosPessoais: dadosPessoaisState.tags,
        dadosPessoaisTitle: 'Dados Pessoais',
        endereco: dadosEnderecoState.tags,
        enderecoTitle: 'Endereço',
    },
    locacao: {
        locacao: dadosLocacaoState.tags,
        locacaoTitle: 'Locação',
    }
}

const ContratoLocacao = () => {

    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);

    const [dataState, setDataState ] = useState(data);

    const [isAllFilled, setIsAllFilled] = useState(true);

    const changeTabHandler = (event, newValue) => {
        setTabValue(newValue);
    };

    const inputChangeHandler = async (e) => {
        const id = e.target.id.split('-');

        const cardAccess = id[0];
        const key = id[1];
        const scope = id[2];



        await setDataState((prevState => {
            return {
                ...prevState, [scope]: {
                    ...prevState[scope], [cardAccess]: {
                        ...prevState[scope][cardAccess], [key]: e.target.value
                    }
                }}
        }))
        setIsAllFilled(true);
    }

    const generateDocument = () => {

        generateDocx(dataState);
    }

    let cont = 0;
    const renderCards = Object.keys(dataState).map(tabScope => {
        const retorno = (
            <TabPanel key={`panel-${cont}`} value={tabValue} index={cont}>
                {Object.keys(dataState[tabScope]).map(objScope => {
                    return (
                        <FormCard
                            key={`form-card-${objScope}`}
                            title={dataTags[tabScope][objScope+'Title']}
                            data={dataState[tabScope][objScope]}
                            dataTags={dataTags[tabScope][objScope]}
                            tabScope={tabScope}
                            objScope={objScope}
                            onChangeInput={inputChangeHandler}
                        />
                    )
                })}
            </TabPanel>
        )
        cont++;
        return retorno
    })

    const verifyAllFields = () => {
        const scopes = Object.keys(dataState);

        for(let i in scopes) {
            if(!isAllFilled) {
                break;
            }
            const access = Object.keys(dataState[scopes[i]]);

            for(let j in access) {
                if(!isAllFilled) {
                    break;
                }
                const keys = Object.keys(dataState[scopes[i]][access[j]]);
                const values = Object.values(dataState[scopes[i]][access[j]]);

                for(let k in keys) {
                    if(!isAllFilled) {
                        break;
                    }
                    const type = keys[k].split('_')[0];

                    if((type === 'text' || type === 'cpf') && values[k] === '') {
                        setIsAllFilled(false);
                        break
                    } else if(type === 'number' && values[k] === 0) {
                        setIsAllFilled(false);
                        break
                    } else if(type === 'date' && values[k] === new Date().toISOString().split('T')[0]) {
                        setIsAllFilled(false);
                        break
                    }
                }
            }
        }
     }

    verifyAllFields();
    return (
        <Container>
            <Paper className={classes.root}>
                <div style={{display: "flex"}}>
                    <Tabs
                        style={{width: "100%", marginLeft: "10%"}}
                        value={tabValue}
                        onChange={changeTabHandler}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Locador" />
                        <Tab label="Locatário" />
                        <Tab label="Locação" />
                    </Tabs>
                    <Button
                        style={{width: "10%"}}
                        variant="contained"
                        color="primary"
                        onClick={generateDocument}
                        disabled={!isAllFilled}
                    >Gerar</Button>
                </div>
            </Paper>
            {renderCards}
        </Container>
    )
}

export default ContratoLocacao;