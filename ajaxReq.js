$( document ).ready(function() {


  var newsMethod = {
    handlerData:function(resJSON){
      var templateSource  = $("#entry-template").html();
      var template = Handlebars.compile(templateSource);
      var context = template(resJSON);
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
  scienceMethod.loadNewsData();
  techMethod.loadNewsData();
  travelMethod.loadNewsData();
  entertainmentMethod.loadNewsData();
  sportMethod.loadNewsData();
  businessMethod.loadNewsData();
  newsMethod.loadNewsData();

});
