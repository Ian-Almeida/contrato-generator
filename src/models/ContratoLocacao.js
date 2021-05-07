export const dadosPessoaisState = {
    state: {
        text_nomeCompleto: '',
        text_nacionalidade: '',
        text_estadoCivil: '',
        text_trabalho: '',
        cpf_cpf: '',
        text_rg: '',
        text_orgaoEmissor: '',
    },
    tags: {
        text_nomeCompleto: 'Nome Completo',
        text_nacionalidade: 'Nacionalidade',
        text_estadoCivil: 'Estado Civil',
        text_trabalho: 'Trabalho',
        cpf_cpf: 'CPF',
        text_rg: 'RG',
        text_orgaoEmissor: 'Órgão Emissor',
    }
}

export const dadosEnderecoState = {
    state: {
        text_rua: '',
        text_numero: '',
        text_bairro: '',
        text_cidade: '',
        text_estado: '',
        text_uf: '',
    },
    tags: {
        text_rua: 'Rua',
        text_numero: 'Número',
        text_bairro: 'Bairro',
        text_cidade: 'Cidade',
        text_estado: 'Estado',
        text_uf: 'UF',
    }
}

export const dadosLocacaoState = {
    state: {
        text_prazo: '',
        number_Aluguel: 0,
        text_aluguelExtenso: '',
        number_multaDiaria: 0,
        text_multaDiariaExtenso: '',
        number_multaQuebraContrato: 0,
        text_multaQuebraContratoExtenso: '',
        text_foroCompetente: '',
        text_cidadeAtual: '',
        date_dataAtual: new Date().toISOString().split('T')[0],
        date_dataInicio: new Date().toISOString().split('T')[0],
        date_dataFim: new Date().toISOString().split('T')[0],
        date_dataPagamento: new Date().toISOString().split('T')[0],
    },
    tags: {
        text_prazo: 'Prazo',
        date_dataInicio: 'Data de Início',
        date_dataFim: 'Data do Fim',
        number_Aluguel: 'Valor do Aluguel',
        text_aluguelExtenso: 'Valor do Aluguel por Extenso',
        date_dataPagamento: 'Data de Pagamento',
        text_foroCompetente: 'Foro Competente',
        number_multaDiaria: 'Multa Diária',
        text_multaDiariaExtenso: 'Multa Diária por extenso',
        number_multaQuebraContrato: 'Multa por Quebra de Contrato',
        text_multaQuebraContratoExtenso: 'Multa por Quebra de Contrato por Extenso',
        date_dataAtual: 'Data Atual',
        text_cidadeAtual: 'Cidade Atual'
    }
}

export const dadosMiscState = {
    state: {
        text_descricaoCasa: '',
        text_ruaCasa: '',
        text_numeroCasa: '',
        text_bairroCasa: '',
        text_cidadeCasa: '',
        text_estadoCasa: '',
        text_ufCasa: '',
    },
    tags: {
        text_descricaoCasa: 'Descrição',
        text_ruaCasa: 'Rua',
        text_numeroCasa: 'Número',
        text_bairroCasa: 'Bairro',
        text_cidadeCasa: 'Cidade',
        text_estadoCasa: 'Estado',
        text_ufCasa: 'UF',
    }
}

export const contratoLocacaoModelLink = 'https://srv-store6.gofile.io/download/w2pwUm/e23b1380c571b8b5359cc0c86d7d4712/template-locacao.docx';

export const returnContratoLocacaoModel = (data) => {
    return {
        locador_nomeCompleto: data.locador['dadosPessoais']['text_nomeCompleto'],
        locador_nacionalidade: data.locador['dadosPessoais']['text_nacionalidade'],
        locador_estadoCivil: data.locador['dadosPessoais']['text_estadoCivil'],
        locador_trabalho: data.locador['dadosPessoais']['text_trabalho'],
        locador_cpf: data.locador['dadosPessoais']['cpf_cpf'],
        locador_rg: data.locador['dadosPessoais']['text_rg'],
        locador_orgaoEmissor: data.locador['dadosPessoais']['text_orgaoEmissor'],

        locador_rua: data.locador['endereco']['text_rua'],
        locador_numero: data.locador['endereco']['text_numero'],
        locador_bairro: data.locador['endereco']['text_bairro'],
        locador_cidade: data.locador['endereco']['text_cidade'],
        locador_estado: data.locador['endereco']['text_estado'],
        locador_uf: data.locador['endereco']['text_uf'],

        locador_descricaoCasa: data.locador['misc']['text_descricaoCasa'],
        locador_ruaCasa: data.locador['misc']['text_ruaCasa'],
        locador_numeroCasa: data.locador['misc']['text_numeroCasa'],
        locador_bairroCasa: data.locador['misc']['text_bairroCasa'],
        locador_cidadeCasa: data.locador['misc']['text_cidadeCasa'],
        locador_estadoCasa: data.locador['misc']['text_estadoCasa'],
        locador_ufCasa: data.locador['misc']['text_ufCasa'],

        locatario_nomeCompleto: data.locatario['dadosPessoais']['text_nomeCompleto'],
        locatario_nacionalidade: data.locatario['dadosPessoais']['text_nacionalidade'],
        locatario_estadoCivil: data.locatario['dadosPessoais']['text_estadoCivil'],
        locatario_trabalho: data.locatario['dadosPessoais']['text_trabalho'],
        locatario_cpf: data.locatario['dadosPessoais']['cpf_cpf'],
        locatario_rg: data.locatario['dadosPessoais']['text_rg'],
        locatario_orgaoEmissor: data.locatario['dadosPessoais']['text_orgaoEmissor'],

        locatario_rua: data.locatario['endereco']['text_rua'],
        locatario_numero: data.locatario['endereco']['text_numero'],
        locatario_bairro: data.locatario['endereco']['text_bairro'],
        locatario_cidade: data.locatario['endereco']['text_cidade'],
        locatario_estado: data.locatario['endereco']['text_estado'],
        locatario_uf: data.locatario['endereco']['text_uf'],

        locacao_prazo: data.locacao['locacao']['text_prazo'],
        locacao_Aluguel: data.locacao['locacao']['number_Aluguel'],
        locacao_aluguelExtenso: data.locacao['locacao']['text_aluguelExtenso'],
        locacao_multaDiaria: data.locacao['locacao']['number_multaDiaria'],
        locacao_multaDiariaExtenso: data.locacao['locacao']['text_multaDiariaExtenso'],
        locacao_multaQuebraContrato: data.locacao['locacao']['number_multaQuebraContrato'],
        locacao_multaQuebraContratoExtenso: data.locacao['locacao']['text_multaQuebraContratoExtenso'],
        locacao_foroCompetente: data.locacao['locacao']['text_foroCompetente'],
        locacao_cidadeAtual: data.locacao['locacao']['text_cidadeAtual'],
        locacao_dataAtual: data.locacao['locacao']['date_dataAtual'],
        locacao_dataInicio: data.locacao['locacao']['date_dataInicio'],
        locacao_dataFim: data.locacao['locacao']['date_dataFim'],
        locacao_dataPagamento: data.locacao['locacao']['date_dataPagamento'],
    }
}