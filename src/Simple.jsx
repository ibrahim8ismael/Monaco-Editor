import Editor from '@monaco-editor/react';


export default function SimpleEditor (){

    return(
        <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />
    )
}