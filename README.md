Very simple rails application using JQuery-UI
=========

The running application is hosted at: [w465.us/jqui_demo](http://w465.us/jqui_demo)

Files changed after **$ rails new**

[jqui_demo/Gemfile](https://github.com/tysonhenry/jqui_demo/blob/master/Gemfile) to add gem 'jquery-ui-rails'

[jqui_demo/config/routes.rb](https://github.com/tysonhenry/jqui_demo/blob/master/config/routes.rb) to make home#index the root page

[jqui_demo/app/assets/stylesheets/application.css](https://github.com/tysonhenry/jqui_demo/blob/master/app/assets/stylesheets/application.css) to include jquery-ui CSS

[jqui_demo/app/assets/javascripts/application.js](https://github.com/tysonhenry/jqui_demo/blob/master/app/assets/javascripts/application.js) to include jquery-ui JS

Files created after **$ rails new**

[jqui_demo/app/assets/javascripts/home.js](https://github.com/tysonhenry/jqui_demo/blob/master/app/assets/javascripts/home.js) for jquery-ui functions

[jqui_demo/app/views/home/index.html.erb](https://github.com/tysonhenry/jqui_demo/blob/master/app/views/home/index.html.erb) to use jquery-ui

[jqui_demo/app/controllers/home_controller.rb](https://github.com/tysonhenry/jqui_demo/blob/master/app/controllers/home_controller.rb) to provide index controller

=========

The asset pipeline does not correctly handle the /jqui_demo subdirectory when pre-compiling the JQuery-UI images.  If you use the normal **$ rake assets:precompile** command, the compiled files will be in the /jqui_demo/public/assets (as they should be) directory but the links (in the .html files) will be /assets instead of /jqui_demo/assets.

This problem can be fixed by specifying the relative root directory when running the rake command:

**$ RAILS_RELATIVE_URL_ROOT=/jqui_demo RAILS_ENV=production bundle exec rake assets:precompile**

-or-

By adding the following line to the config/environments/production.rb file

config.action_controller.relative_url_root = '/jqui_demo'
