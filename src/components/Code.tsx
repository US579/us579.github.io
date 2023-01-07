import { CopyToClipboard } from "react-copy-to-clipboard";
import { PrismLight as SyntaxHighLighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { CopyIcon } from "./assets/icons";

export interface CodeItf {
    children: string;
    language: string;
}
 
export const Code: React.FC<CodeItf> = ({ children, language }) => {
    return (
        <div className="code">
            <CopyToClipboard text={children}>
                <button className="icon copy-icon">{<CopyIcon/>}</button>
            </CopyToClipboard>
            <SyntaxHighLighter language={language} style={materialDark}>
                {children}
            </SyntaxHighLighter>
        </div>
    );
};
