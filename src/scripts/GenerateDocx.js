import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import { returnContratoLocacaoModel, contratoLocacaoModelLink } from '../models/ContratoLocacao'

const loadFile = (url, callback) => {
    PizZipUtils.getBinaryContent(url, callback);
}


export const generateDocx = (data) => {
    const docxTemplate = returnContratoLocacaoModel(data);
    console.log(docxTemplate)


    loadFile(contratoLocacaoModelLink, (error, content) => {
            if(error) {
                throw error;
            }
            let zip = new PizZip(content);
            let doc = new Docxtemplater().loadZip(zip);
            doc.setData(docxTemplate);

            try{
                doc.render();
            } catch (e) {
                const replaceErrors = (key, value) => {
                    if(value instanceof Error) {
                        return Object.getOwnPropertyNames(value).reduce((error, key) => {
                            error[key] = value[key];
                            return error;
                        },
                            {});
                    }
                    return value;
                }
                console.log(JSON.stringify({error: error}, replaceErrors));

                if(error.properties && error.properties.errors instanceof  Array) {
                    const errorMessages = error.properties.errors.map(error => {
                        return error.properties.explanation;
                    }).join("\n");
                    console.log("errorMessages", errorMessages);
                }
                throw error;
            }
            let out = doc.getZip().generate({
                type: "blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            });
            saveAs(out, "output.docx");
        }
    )
}