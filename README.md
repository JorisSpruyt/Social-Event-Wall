Social Event Wall
==========

Create a livestream of Twitter and Instagram pictures to be shown during your event.

I created this project while I was looking for a way to show twitter or instagram picutres being posted by guests on the big screen. There are multiple commercial solutions for this but most of them are quite costly. So with some helpfull guides on the interenet I was able to create something myself.

You'll need some basic html/css/javascript/php skills to modify this to your needs.

Features
==========
<ul>
<li>Shows logo's of your sponsors</li>
<li>Show a live feed of pictures being posted by your guests</li>
<li>Supports Twitter & Instagram</li>
<li>Block guests that are misbehaving</li>
<li>Automatically shows the next artist/band in your line-up</li>
<li>Emoji support</li>
</ul>

Setup
==========
<ol>
<li>In the assets folder change the background.png and headerLogo.png to fit your needs</li>
<li> Update configuration.php
  <ol><li>Fill in the instagram client id: http://instagram.com/developer/clients/manage/</li>
  <li>Fill in the twitter authentication info: https://dev.twitter.com/apps/</li>
  <li>Fill in the hastag you want to show</li>
  <li>optional: set the max amount of images you want to load and update the list of blocked users</li></ol></li>
<li> Upload your sponsor images to the folder sponsors (make sure they are resized)</li>
<li> Fill in your line-up in nextShows.js</li>
</ol>

That's it, your social live stream should now be working!

Details
==========

HTML
<ul>
<li>socialwall.html: the page you'll show on the bigscreen. Page is divided in two, left will show sponsors, righ your social live stream</li>
</ul>

CSS
<ul>
<li>layout.css: has some basic styling, mostly to center allign the sponsors images. Edit to fit your needs</li>
</ul>

PHP
<ul>
<li>configuration.php: holds some configuration parameters</li>
<li>getSponsors.php: scans the folder 'sponsors' for files and returns a json encoded list of filenames</li>
<li>getInstagram.php: does a request to the Instagram api based on the hastag provided in configuration.php. Returns a json encoded list.</li>
<li>getTwitter.php: does a request to the Twitter V1.1. api based on the hastag provided in confuration.php Returns a json encoded list.</li>
<li>getBlocked.php: simple function that checks if a user is blocked, referenced from getInstagram.php and getTwitter.php</li>
</ul>
Both getInstagram and getTwitter check if the user is not blocked and if the max amount of images hasn't been reached before adding the picture. 

Javascript

<ul>
<li>refresh.js: this drives the entire page and does calls to other javascripts functions based on a timeout parameter. Twitter and Instagram pictures are rotated untill both lists are completed</li>
<li>twitter.js: Has a function to retrieve data from getTwitter.php and one to show the next Twitter picture</li>
<li>instagram.js: Has a function to retrieve data from getInstagram.php and one to show the next Instagram picture</li>
<li>nextShows.js: holds a listing of stages for your event and a line-up for each one.</li>
</ul>

When doing changes to refresh.js and increasing the amount of calls to either Twitter or Instagram make sure to take into account the limitations, see <a href="https://dev.twitter.com/rest/public/rate-limiting">Twitter</a> and <a href="http://instagram.com/developer/limits/">Instagram</a> documentation.

References
==========
Uses the twitter php api: https://github.com/J7mbo/twitter-api-php<br/>
Uses a php library to convert the emoji characters: https://github.com/iamcal/php-emoji/pulls

Final Stuff
==========
I created this to help support a non-profit organisation that creates a musicfestival for young and local talent. You are free to use and edit this project anyway you like. However I would appreaciate it if you let me know if this was helpfull to you and let me know where and how you used it!
You can follow me on <a href="http://twitter.com/jorisspruyt">Twitter</a> or the organisation I volunteer for on <a href="http://twitter.com/Slorarock">Twitter</a> and <a href="http://facebook.com/Slorarock">Facebook</a>



