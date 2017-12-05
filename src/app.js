import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class ReactOptionChooser extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};

      this.select = this.select.bind(this);
    }

    select(item, key) {
        if (!this.props.reselectPossible && this.state.selected) return; 
        if (this.props.unselectPossible && key === this.state.selected) {
            this.setState({
              selected: undefined
            });
            return;
        }
        this.props.onSelect(item);
        this.setState({
            selected: key
        });
    }

    render() {
      if (this.props.hideAfterSelect && (this.state.selected || this.state.selected === 0)) return false;
      return <div className="react-option-chooser">
          {this.props.options.map((item, key) => 
              <div className={key===this.state.selected?'selected':''} onClick={() => this.select(item, key)} key={key}>{item}</div>
          )}
      </div>
    }
}

ReactOptionChooser.PropTypes = {
  onSelect: PropTypes.func.required,
  options: PropTypes.array,
  hideAfterSelect: PropTypes.bool,
  unselectPossible: PropTypes.bool,
  reselectPossible: PropTypes.bool
}

ReactOptionChooser.defaultProps = {
  options:['option1', 'option2'],
  hideAfterSelect: false,
  unselectPossible: false,
  reselectPossible: true
}

export default ReactOptionChooser;
