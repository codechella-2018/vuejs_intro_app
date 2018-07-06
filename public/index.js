/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Hello World",
      reviews: [
        {
          text: "Vue.js is the best thing since sliced bread!",
          rating: 5,
          reviewer: "Dani"
        },
        {
          text: "I love Vue.js for front end JS programming!",
          rating: 4,
          reviewer: "Jenn"
        },
        {
          text: "Vue.js is bad.",
          rating: 3,
          reviewer: "Jaron"
        },
        {
          text: "Vue.js is better than chinese checkers.",
          rating: 4,
          reviewer: "Asher"
        }
      ],
      newReview: {}
    };
  },
  created: function() {},
  methods: {
    addReview: function() {
      // create a new review object, then push it into reivews array
      var newReviewInfo = {
        text: this.newReview.text,
        rating: this.newReview.rating,
        reviewer: this.newReview.reviewer
      }
      this.reviews.push(newReviewInfo);
    },
    isPositive: function(currentReview) {
      // check to see if the word bad is in currentReviews text
      return currentReview.text.indexOf('bad') === -1;
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});