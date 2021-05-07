import styles from "./Cards.module.css";
import { Card, CardContent, CardHeader} from "@material-ui/core";
import FormInputs from "./FormInputs";


const FormCard = (props) => {

    const {title, data, dataTags, tabScope, onChangeInput, objScope} = props;

    return (
        <Card className={`${styles['tab-cards-content']}`}>
            <CardHeader title={title}/>
            <CardContent>
                <form noValidate autoComplete="off">
                    <FormInputs
                        data={data}
                        dataTags={dataTags}
                        tabScope={tabScope}
                        objScope={objScope}
                        onInputChange={onChangeInput}
                    />
                </form>
            </CardContent>
        </Card>
    )
}

export default FormCard;