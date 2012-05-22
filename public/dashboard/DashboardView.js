define("dashboard/DashboardView", [
    "use!backbone",
    "datum/Datum",
    "datum/DatumView",
    "datum_status/DatumStatus",
    "datum_status/DatumStatusView",
    "libs/Utils",
    "navigation/Navigation",
    "navigation/NavigationView",
    "activity_feed/ActivityFeedItem",
    "activity_feed/ActivityFeedItemView"
], function(Backbone, Datum, DatumView, DatumStatus, DatumStatusView, Utils, Navigation, NavigationView, ActivityFeedItem, ActivityFeedItemView) {
    var DashboardView = Backbone.View.extend(
    /** @lends DashboardView.prototype */
    {
       /**
        * @class The main layout of the program.
        *
        * @extends Backbone.View
        * @constructs
        */
       initialize: function() {
    	   (new Utils()).debug("Clicked addOneDatum");
        	  
        	  // Create the new Datum to be added
           var navigation = new Navigation();
           
           // Render it as a NavigationView
           var view = new NavigationView({model: navigation});
           this.$("#navigation").append(view.render().el);
       },
       
       el: $('#app'),
       
       events: {
       	"click #dashboard-view": "addOneDatum"	
       },
           
       
       /**
        * Add a datum to the screen.
        */
       addOneDatum: function() {
          (new Utils()).debug("Clicked addOneDatum");
       	  
       	  // Create the new Datum to be added
          var datum = new Datum({utterance: "Hello World!"});
          
          // Add it to the global list of Datum
          datumList.add(datum);
          //datumList.create({attestation: "Hello World!"});
          
          // Render it as a DatumView
          var view = new DatumView({model: datum});
          this.$("#content").append(view.render().el);

          var action = new ActivityFeedItem();
          activityFeed.add(action);
         // Render an activity in the activity feed
          var v = new ActivityFeedItemView({model: action});
          this.$("#activity_feed").append(v.render().el);
       }
    });

    return DashboardView;
});