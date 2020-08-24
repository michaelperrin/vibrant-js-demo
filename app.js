var app = new Vue({
  el: '#app',
  data: {
    palette: {}
  },
  methods: {
    dropImage: (event) => {
      event.preventDefault();
      const dt = event.dataTransfer;
      const files = dt.files;

      var reader = new FileReader();
      reader.addEventListener('loadend', () => {
        const vibrant = new Vibrant(reader.result);
        vibrant.getPalette((err, palette) => app.palette = palette );
      });

      reader.readAsDataURL(files[0]);
    },
    allowDrop: function (event) {
      event.preventDefault();
    }
  }
});
