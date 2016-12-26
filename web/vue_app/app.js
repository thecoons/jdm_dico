
setTimeout(function(){
  app = new Vue({
    el: '#app',

    delimiters: ['${','}'],

    data: {
      message: 'On est le ' + new Date(),
      seen: true,
      titre: 'Titre d\'essaie',
      todos: [
        { text : 'Learn JS'},
        { text : 'Learn Ruby'},
        { text : 'Learn Php'}
      ]
    },
    computed: {
      reversedMessage: function(){
        return this.message.split('').reverse().join('')
      },
      perScore: function(){
        return (game.score/game.maxScore)*100
      },
      perAlive: function(){
        return (game.alives/Neuvol.options.population)*100
      }
    },
    methods: {

    },
    mounted: function() {
      $("#logo-container").sideNav();
    }
  })
},10)
