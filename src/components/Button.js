import React from 'react';
import Context from '../contexts/languageContext';
import ColorContext from '../contexts/colorContext'
class Button extends React.Component{
    // static contextType = LanguageContext ;
    //
    // render(){
    //     const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    //     return(<div>
    //         <button className="ui button primary">{text}</button>
    //     </div>)
    // }
    // OR

    render(){
        return(<div>
            <ColorContext.Consumer>
                {(color) =>
                    <button className={`ui button ${color}`}>
                    <Context.Consumer>
                        {({language}) => language === 'english' ? 'Submit' : 'Voorleggen'}
                    </Context.Consumer>
                </button> }

            </ColorContext.Consumer>
        </div>)
    }
}
export default Button