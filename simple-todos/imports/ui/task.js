import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';


import "./task.html";

Template.task.helpers({
    isOwner() {
      return this.owner === Meteor.userId();
    },
  });

Template.task.events({
    'clicked .toggle-checked'() {
        Meteor.call('tasks.setChecked', this._id, !this.checked);
    },
    'clicked .delete'() {
        Meteor.call('tasks.remove', this._id);
    },
    'click .toggle-private'() {
        Meteor.call('tasks.setPrivate', this._id, !this.private);
      },
});