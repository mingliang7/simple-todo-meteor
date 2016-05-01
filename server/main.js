import { Meteor } from 'meteor/meteor';
import {Tasks} from '../imports/api/task.js'

Meteor.startup(() => {
  // code to run on server at startup
  if(Tasks.find().count() <=0 ){
    for(let i = 0 ; i < 10; i++){
      Tasks.insert({_id: `${i}`, text: `text ${i}`})
    }
  }
});
