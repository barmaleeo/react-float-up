import React, {Component} from 'react';

import './floatUpStyle.scss';
import * as ReactDOM from "react-dom";


export default class FloatUp extends Component {
    state = {show:false};
    show = (show = true) => {
        const self = this;
        this.setState({show:show}, () => {
            window.addEventListener('keyup', self.keyUpListener.bind(self));
            window.addEventListener('click', self.clickListener.bind(self));
        });

    };
    hide = (hide = false) => {
        this.show(!hide);
    };
    toggle = () => {
        this.show(!this.state.show)
    };


    componentDidMount() {
        this.setState({element: ReactDOM.findDOMNode(this)});
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.keyUpListener.bind(this) );
        window.removeEventListener('click', this.clickListener.bind(this) );

    }

    clickListener = (e) => {
        if(this.state.show && !this.state.element.contains(e.target)){
            window.removeEventListener('keyup', this.keyUpListener.bind(this) );
            window.removeEventListener('click', this.clickListener.bind(this) );
            this.setState({show:false})
        }
    };


    keyUpListener(e){
        if(e.code === 'Escape'){
            window.removeEventListener('keyup', this.keyUpListener.bind(this) );
            window.removeEventListener('click', this.clickListener.bind(this) );
            this.setState({show:false})
        }
    };


    render() {
        const p = this.props;
        const s = this.state;
        return (
            <div className={'float-up-outher'+(s.show?' show':'')}>
                {p.children}
            </div>
        )
    }
}
