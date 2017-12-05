React component for choosing among several options
===================


Usage
----------

```
import Chooser from 'react-option-chooser';

const Something = props => <div>
	<Chooser onSelect={this.select} />
</div>
...

```

### Props

prop     | type | default | description
-------- | --- | -------- | ------
onSelect  | func.required| undefined | callback when an option is selected, passes (option, index)
options    | array | ['option1', 'option2'] | array of options, for now only text supported
hideAfterSelect| bool |false | should the entire component hide after an option is selected
unselectPossible| bool |false | should the user be able to deselect currently selected component by clicking it
reselectPossible| bool |true | should the user be able to select another option after already choosing

For closer description of how a conversation item looks like, checkout [react chat cloud](https://www.npmjs.com/package/react-chat-cloud).

