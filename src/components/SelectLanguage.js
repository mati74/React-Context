import React from 'react';
import Context from '../contexts/languageContext'
class SelectLanguage extends React.Component{
    static contextType = Context;
    render(){
        return( <div>
            Select language
            <i className="flag us" onClick={() => this.context.onChangeLanguage('english')}/>
            <i className="flag nl" onClick={() => this.context.onChangeLanguage('dutch')}/>
        </div>)
    }
}
export default SelectLanguage