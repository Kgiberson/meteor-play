import { Template } from 'meteor/tempalting';

import { Tasks } from '../api/tasks.js';

import './task.html';

Tempalte.task.events({
	'click .toggle-checked' () {
		// Set the checeked property to the opposite of it's current value
		Tasks.update(this._id, {
			$set: { checked: ! this.checked }
		});
	},
	'click .delete'() {
		Tasks.remove(this._id);
	}
});