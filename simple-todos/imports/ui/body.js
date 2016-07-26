import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';

Template.body.helpers({
	tasks() {
		return Tasks.find({ sort: { createdAt: -1} });
	}
});

Template.body.events({
	'submit .new-task'(event) {
		// prevent default browser form submit
		event.preventDefault();
		// get value from form element
		console.log(event)
		const target = event.target;
		const text = target.text.value;

		// Insert a task into the colleciton
		Tasks.insert({
			text,
			createdAt: new Date(),
		});

		// Clear form
		target.text.value = '';
	}
});