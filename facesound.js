Faces = new Meteor.Collection("faces");

if (Meteor.isClient) {
    Meteor.subscribe("all-faces");
    Template.hello.greeting = function () {
        return "Welcome to facesound, the really cool app where" +
            " you can make your friends faces make sounds!";
    };

    Template.hello.faces = function () {
        return Faces.find().fetch();
    };

    Template.hello.events({
        'click input' : function () {
            // template data, if any, is available in 'this'
            if (typeof console !== 'undefined')
                console.log("You pressed the button");
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
