import React from 'react';
import {actionText} from '../definitions.js';

export default class ActionButton extends React.Component {
    render() {
        let className = 'action-btn';
        if (this.props.status === 0) {
            className += ' resolve';
        } else if (this.props.status === 1) {
            className += ' reopen';
        }
        return (
            <button className={className}>{actionText[this.props.status]}</button>
        );
    }
}