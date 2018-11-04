import Component from '@ember/component';

export default Component.extend({
  actions: {
    onChange(event) {
      let { files } = event.target;

      // TODO: Upload those files to the server (to `/analyze` endpoint)
      // Use ember-fetch
    }
  }
});
