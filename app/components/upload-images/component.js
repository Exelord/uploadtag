import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  store: service(),

  images: computed(function() {
    return this.store.peekAll('image');
  }),

  actions: {
    onChange(event) {
      let { files } = event.target; // getting the files
      files = Array.from(files); // As files are not an array we have to convert them

      files.forEach((file) => {
        let { name, size } = file; // https://developer.mozilla.org/en-US/docs/Web/API/File
        let url = URL.createObjectURL(file); // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL

        this.store.createRecord('image', { name, size, url }) // https://emberjs.com/api/ember-data/3.5/classes/DS.Store/methods/createRecord?anchor=createRecord
      });
    }
  }
});
