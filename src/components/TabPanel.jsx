
import Box from '@material-ui/core/Box';
import {Card, CardContent} from "@material-ui/core";

const TabPanel = (props) => {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={1} >
                    <Card>
                        <CardContent>
                            {children}
                        </CardContent>
                    </Card>
                </Box>
            )}
        </div>
    );
}

export default TabPanel;

