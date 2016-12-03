
var articlesArray = [];
var array2 = [];
var count = 0;

// console.log(articlesArray)
function displayArticles(){
  console.log(count)
  if(count === 17){
    console.log(articlesArray)
    shuffle(articlesArray)
    imgFilter(articlesArray)

    $(function() {
      var source = $("#all-template").html();
      var template = Handlebars.compile(source);
      var html = template(array2);
      $('.allContent').html(html);
    });
  } else {
    // console.log(count)
    // console.log(articlesArray.length)
  }
};




$( document ).ready(function() {


  var newsMethod = {
    handlerData:function(resJSON){
      count++;
      displayArticles()

      var data = resJSON.articles

      // articlesArray.push(data)
      // console.log(data)
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }
      // console.log(articlesArray)
      // console.log(articlesArray[2])

      var templateSource  = $("#entry-template").html();
      var template = Handlebars.compile(templateSource);
      var context = template(resJSON);
      // console.log(context)
      $('.content').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'bbc-news',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  };

  var businessMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }
      // console.log(articlesArray)
      // console.log(articlesArray[2])

      // articlesArray.push(resJSON)
      var templateSource  = $("#entry-template").html();
      var template = Handlebars.compile(templateSource);
      var context = template(resJSON);
      $('.busContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'bloomberg',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  };

  var sportMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }
      // articlesArray.push(resJSON)
      var templateSource  = $("#entry-template").html();
      var template = Handlebars.compile(templateSource);
      var context = template(resJSON);
      $('.sportContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'fox-sports',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  };


  var entertainmentMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }
      // articlesArray.push(resJSON)
      var templateSource  = $("#entry-template").html();
      var template = Handlebars.compile(templateSource);
      var context = template(resJSON);
      $('.entContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'entertainment-weekly',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  };
  var travelMethod = {

    handlerData:function(resJSON){
      count ++;
      displayArticles()
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }
      // articlesArray.push(resJSON)
      var templateSource  = $("#entry-template").html();
      var template = Handlebars.compile(templateSource);
      var context = template(resJSON);
      $('.travContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'national-geographic',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  };
  var techMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      var data = resJSON.articles

      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }
      // articlesArray.push(resJSON)
      var templateSource  = $("#entry-template").html();
      var template = Handlebars.compile(templateSource);
      var context = template(resJSON);
      $('.techContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'hacker-news',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  };
  var scienceMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      // articlesArray.push(resJSON)
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }

      // articlesArray.forEach(function(x){
      //   console.log(x)
      // })
      // console.log(articlesArray.length)
      var templateSource  = $("#entry-template").html();
      var template = Handlebars.compile(templateSource);
      var context = template(resJSON);
      $('.scienceContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'new-scientist',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  }





  var cnnMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      // articlesArray.push(resJSON)
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }

      // articlesArray.forEach(function(x){
      //   console.log(x)
      // })
      // console.log(articlesArray.length)
      // var templateSource  = $("#entry-template").html();
      // var template = Handlebars.compile(templateSource);
      // var context = template(resJSON);
      // $('.scienceContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'cnn',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  }

  var polygonMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      // articlesArray.push(resJSON)
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }

      // articlesArray.forEach(function(x){
      //   console.log(x)
      // })
      // console.log(articlesArray.length)
      // var templateSource  = $("#entry-template").html();
      // var template = Handlebars.compile(templateSource);
      // var context = template(resJSON);
      // $('.scienceContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'polygon',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  }

  var reutersMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      // articlesArray.push(resJSON)
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }

      // articlesArray.forEach(function(x){
      //   console.log(x)
      // })
      // console.log(articlesArray.length)
      // var templateSource  = $("#entry-template").html();
      // var template = Handlebars.compile(templateSource);
      // var context = template(resJSON);
      // $('.scienceContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'reuters',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  }

  var skyNewsMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      // articlesArray.push(resJSON)
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }

      // articlesArray.forEach(function(x){
      //   console.log(x)
      // })
      // console.log(articlesArray.length)
      // var templateSource  = $("#entry-template").html();
      // var template = Handlebars.compile(templateSource);
      // var context = template(resJSON);
      // $('.scienceContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'polygon',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  }

  var huffingtonMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      // articlesArray.push(resJSON)
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }

      // articlesArray.forEach(function(x){
      //   console.log(x)
      // })
      // console.log(articlesArray.length)
      // var templateSource  = $("#entry-template").html();
      // var template = Handlebars.compile(templateSource);
      // var context = template(resJSON);
      // $('.scienceContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'the-huffington-post',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  }

  var ladBibleMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      // articlesArray.push(resJSON)
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }

      // articlesArray.forEach(function(x){
      //   console.log(x)
      // })
      // console.log(articlesArray.length)
      // var templateSource  = $("#entry-template").html();
      // var template = Handlebars.compile(templateSource);
      // var context = template(resJSON);
      // $('.scienceContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'the-lad-bible',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  }


  var telegraphMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      // articlesArray.push(resJSON)
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }

      // articlesArray.forEach(function(x){
      //   console.log(x)
      // })
      // console.log(articlesArray.length)
      // var templateSource  = $("#entry-template").html();
      // var template = Handlebars.compile(templateSource);
      // var context = template(resJSON);
      // $('.scienceContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'the-telegraph',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  }

  var timesIndiaMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      // articlesArray.push(resJSON)
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }

      // articlesArray.forEach(function(x){
      //   console.log(x)
      // })
      // console.log(articlesArray.length)
      // var templateSource  = $("#entry-template").html();
      // var template = Handlebars.compile(templateSource);
      // var context = template(resJSON);
      // $('.scienceContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'the-times-of-india',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  }

  var guardianUkMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      // articlesArray.push(resJSON)
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }

      // articlesArray.forEach(function(x){
      //   console.log(x)
      // })
      // console.log(articlesArray.length)
      // var templateSource  = $("#entry-template").html();
      // var template = Handlebars.compile(templateSource);
      // var context = template(resJSON);
      // $('.scienceContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'the-guardian-uk',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  }

  var economistMethod = {
    handlerData:function(resJSON){
      count ++;
      displayArticles()
      // articlesArray.push(resJSON)
      var data = resJSON.articles
      for (var key in resJSON.articles) {
          var obj = resJSON.articles[key];
          articlesArray.push(obj)
      }

      // articlesArray.forEach(function(x){
      //   console.log(x)
      // })
      // console.log(articlesArray.length)
      // var templateSource  = $("#entry-template").html();
      // var template = Handlebars.compile(templateSource);
      // var context = template(resJSON);
      // $('.scienceContent').html(context);
    },
      loadNewsData : function(){
      $.ajax({
        url:"https://newsapi.org/v1/articles",
        type: "GET",
        data: {
          'source':'the-economist',
          'apiKey':'5952789a3b18436ab600d8fc59f7b985'
        },
        dataType:'json',
        success : this.handlerData,
     }); //ajax
    }
  }

  economistMethod.loadNewsData();
  guardianUkMethod.loadNewsData();
  timesIndiaMethod.loadNewsData()
  telegraphMethod.loadNewsData()
  ladBibleMethod.loadNewsData();
  huffingtonMethod.loadNewsData();
  reutersMethod.loadNewsData();
  skyNewsMethod.loadNewsData();
  cnnMethod.loadNewsData();
  polygonMethod.loadNewsData();
  scienceMethod.loadNewsData();
  techMethod.loadNewsData();
  travelMethod.loadNewsData();
  entertainmentMethod.loadNewsData();
  sportMethod.loadNewsData();
  businessMethod.loadNewsData();
  newsMethod.loadNewsData();
  displayArticles()
})


function imgFilter(array){
  console.log("filtering")
  console.log(array.length)
  
  array.forEach(function(element){
    if(element.urlToImage != ""){
      if(element.urlToImage != null){
        array2.push(element)
      }
    }
  });
  // console.log("array2: " )
  // console.log( array2)
  // console.log(array2.length)

}

function shuffle(array) {
  console.log("shuffling")
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
