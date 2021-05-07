import {Grid, TextField} from "@material-ui/core";
import InputMasked from "./InputMasked";


const FormInputs = (props) => {

    const { data, dataTags, onInputChange, tabScope, objScope} = props;

    const renderInputs = Object.keys(data).map(key => {
        const fieldType = key.split('_')[0]

        if(fieldType === 'cpf') {
            return (
                <Grid key={key} item xs={4}>
                    <InputMasked
                        fieldType={fieldType}
                        fieldLabel={dataTags[key]}
                        value={data[key]}
                        fieldId={`${objScope}-${key}-${tabScope}-input`}
                        onChange={onInputChange}
                    />
                </Grid>
            )
        }

        if(fieldType === 'date') {
            return (
                <Grid key={key} item xs={4}>
                    <TextField
                        value={data[key]}
                        id={`${objScope}-${key}-${tabScope}-input`}
                        label={dataTags[key]}
                        onChange={onInputChange}
                        fullWidth={true}
                        type={fieldType}
                    />
                </Grid>
            )
        }

        if(fieldType === 'number') {
            return (
                <Grid key={key} item xs={4}>
                    <InputMasked
                        fieldType={fieldType}
                        fieldLabel={dataTags[key]}
                        value={data[key]}
                        fieldId={`${objScope}-${key}-${tabScope}-input`}
                        onChange={onInputChange}
                    />
                </Grid>
            )
        }

        return (
            <Grid key={key} item xs={4}>
                <TextField
                    value={data[key]}
                    id={`${objScope}-${key}-${tabScope}-input`}
                    label={dataTags[key]}
                    onChange={onInputChange}
                    fullWidth={true}
                />
            </Grid>
        )
    })

    return (
        <Grid container spacing={3}>
            {renderInputs}
        </Grid>
    )
}

export default FormInputs;