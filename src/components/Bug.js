import React from 'react';
import Badge from './Badge.js';
import ActionButton from './ActionButton.js';

export default class Bug extends React.Component {
    render() {
        return (
            <div className="bug-item">
              <div className="bug-header">
                <Badge status={this.props.data.status} />{this.props.data.name}
              </div>
              <div className="bug-description">
                <div className="text-justify">
                  {this.props.data.description}
                </div>
                <div>
                  <ActionButton status={this.props.data.status} />
                </div>
              </div>
            </div>
        );
    }
}