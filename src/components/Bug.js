import React from 'react';
import Badge from './Badge.js';
import ActionButton from './ActionButton.js';

export default class Bug extends React.Component {

    constructor(props) {
        super(props);
        this.onHeaderClicked = this.onHeaderClicked.bind(this);
        this.state = {
            showDescription: false
        };
    }

    render() {
        let descriptionClass = 'bug-description';
        if (!this.state.showDescription) {
            descriptionClass += ' hidden';
        }
        return (
            <div className="bug-item">
              <div className="bug-header" onClick={this.onHeaderClicked}>
                <Badge status={this.props.data.status} />{this.props.data.name}
              </div>
              <div className={descriptionClass}>
                <div className="text-justify">
                  {this.props.data.description}
                </div>
                <div className="pt-2">
                  <ActionButton status={this.props.data.status} />
                </div>
              </div>
            </div>
        );
    }

    onHeaderClicked() {
        this.setState(state => ({
            showDescription: !state.showDescription
        }));
    }
}