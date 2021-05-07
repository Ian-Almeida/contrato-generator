import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


const TextMaskCustom = (props) => {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
};

const NumberFormatCustom = (props) => {
    const { inputRef, onChange, id, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        id: id,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            prefix="R$"
        />
    );
}


const InputMasked = (props) => {

    const { fieldType, fieldLabel , value, fieldId, onChange } = props;

    if(fieldType === 'cpf') {
        return (
            <FormControl style={{width: "100%"}}>
                <InputLabel htmlFor={fieldId}>{fieldLabel}</InputLabel>
                <Input
                    value={value}
                    onChange={onChange}
                    id={fieldId}
                    inputComponent={TextMaskCustom}
                />
            </FormControl>
        )
    }

    if(fieldType === 'number') {
        return (
            <TextField
                label={fieldLabel}
                value={value}
                onChange={onChange}
                id={fieldId}
                fullWidth={true}
                InputProps={{
                    inputComponent: NumberFormatCustom,
                }}
            />
        )
    }
}

export default InputMasked;