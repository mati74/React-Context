import React from 'react';
import UserCreate from './UserCreate';
import {LanguageContext} from '../contexts/languageContext';
import ColorContext from '../contexts/colorContext';
import SelectLanguage from './SelectLanguage'
class App extends React.Component{

    render(){
        return(<div className="ui container">
                <LanguageContext>
               <SelectLanguage />
                <ColorContext.Provider value="red">
                    <UserCreate/>
                </ColorContext.Provider>
                </LanguageContext>
        </div>
    )
    }
}
export default App