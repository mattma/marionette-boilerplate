# Marionette Boilerplate

This is by no mean the definition of Marionette Boilerplate. After reading Derick Bailey's blog, he does not want to create any type of boilerpate for his Backbone.js framework project -- Marionette. I am not here to fill in the role for him but could not find any projects which could demostrate what I am trying to do, using Node.js as server, Require.js instead of Marionette's Module, Handlebars instead of Underscore templating system, and a way to organize the file structure inn the MVC style. That is why I create this boilerplate for my own personal studying. But I hope that someone could folk it and make it a really truly boilerplate.

## Usage

Follow the steps to start the Marionette Boilerplate project in 2 minutes

1. git clone https://github.com/mattma/marionette-boilerplate.git

2. Open your favorite terminal, then navigate to the project folder.    cd Path/To/marionette-boilerplate

3. npm install   ( Install all the dependencies )

4. node server  ( Kick start your server )

5. Open your favorate browsers, navigate to   http://localhost:3002


## Comparison Between Marionette.js and Chaplin.js

1. Controller ( I like Chaplin.js implemenation )

Marionette.js  simplify the router logic into only a configuration file. Developer need to implement the controller logic in the separated file.

Chaplin.js  has an internal dispatcher object, it maps the router function name, to real controller logic, further abstract the complex controller logics into multiple modules. Developer has full controls on what they want to originize their logics.


2. Global Event Dispatcher ( I lik Marionette.js implemenatione )

Marionette.js  using the Event Aggregator object, originially from .Net Developer get a free global object which attached in the application obj, ex:  App.vent.on("some:event", function() { } );   App.vent.trigger("some:event"); Developer can even initialize module own event aggregator.

Chaplin.js  using mediator which simply extends from Backbone.Event, map to its own methods name "publish", "subscribe", 'unsubscribe'.


3. Views

No Doubt. Marionette.js won this one in the BIG way.

Marionette.js  Region manager mange which view to show, hide. It automatically trigger the garbage collection and close the view. A lot of different event hooks into the view implementations are like "before:render", "render", "before:close", "closed", "item:added", "item:removed", etc.

Marionette.js View.bindUIElements, define "ui" hash that contains a mapping between the ui element's name and its jquery selector.  ex:  ui: { checkbox: ".name" }   usage:  this.ui.checkbox  # to access $('.name') selector


4. Sync Machine

Chaplin.js has a great implementation on Sync machine. With several additional hooks on what is going on an Ajax request, that makes Chaplin.js a powerful on syncing between client and server.
