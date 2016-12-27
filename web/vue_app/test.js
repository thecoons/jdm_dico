Vue.component('test-item',{
  template: '<div class="row">\
                <p> {{message}} </p>\
                <div class="input-field col s3">\
                  <input placeholder="Quelle mot?" id="word" type="text" class="validate" v-model="word">\
                  <label for="word">Entrer un mot :</label>\
                </div>\
                <a class="waves-effect waves-light btn" @click="getTestApi">button</a>\
              </div>',
  data: function(){
      return {
        message: "hello",
        word: ""
      }
    },
  computed: {

  },
  watch: {

  },
  methods:{
    getTestApi: function(){
      var resource = this.$resource('/test{/word}')
      resource.get({word:this.word}).then((data) => {
        this.message = data.body
      },(data) =>{
        this.message = "Error loading data"
      });
    }
  },
  mounted: function(){
    window.test = this
  }
})
