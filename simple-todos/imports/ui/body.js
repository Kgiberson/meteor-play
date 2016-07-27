import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
	this.state = new ReactiveDict();
});

Template.body.helpers({
	tasks() {
		return Tasks.find({}, { sort: { createdAt: -1} });
	}
});

Template.body.events({
	'submit .new-task'(event) {
		// prevent default browser form submit
		event.preventDefault();

		// get value from form element
		const target = event.target;
		const text = target.text.value;

		// Insert a task into the colleciton
		Tasks.insert({
			text,
			createdAt: new Date(),
		});

		// Clear form
		target.text.value = '';
	},
	'change .hide-completed input'(event, instance) {
		instance.state.set('hideCompleted', event.target.checked);
	}
});