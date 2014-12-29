Socialwall
==========

Show sponsors images, instagram and twitter pictures on the big screen.

This project was created to be used in an event setting. You can use it to show images of sponsors, and a social live stream of your event

You'll need some basic html/css/javascript/php skills to modify this to your needs.

Features
==========
*Rotate Sponsor Images
*Rotate Twitter images based on a hastag
*Rotate Instagram pictures based on a hashtag
*Blocking images provided by blocked users
*Shows the next artist in your line-up
*Emoji support

Basic installation guide
==========
<ol>
<li>In the assets folder change the background.png and headerLogo.png to fit your needs</li>
<li> Update configuration.php
  <ol><li>Fill in the instagram client id: http://instagram.com/developer/clients/manage/</li>
  <li>Fill in the twitter authentication info: https://dev.twitter.com/apps/</li>
  <li>Fill in the hastag you want to show</li>
  <li>optional: set the max amount of images you want to load and update the list of blocked users</li></ol></li>
<li> Upload your sponsor images to the folder sponsors (make sure they are resized)</li>
<li> Fill in your line-up in nextShows.js</li></ol>

That's it, your social live stream should now be working!

File Description
==========
HTML
<ul><li>socialwall.html: the page you'll show on the bigscreen. Page is divided in two, left will show sponsors, righ your social live stream</li></ul>

CSS
<ul><li>layout.css: has some basic styling, mostly to center allign the sponsors images. Edit to fit your needs</li></ul>

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
<li>refresh.js: this drives the entire page and does call other javascripts functions based on a timeout parameter</li>
<li>twitter.js: Has a function to retrieve data from getTwitter.php and one to show the next Twitter picture</li>
<li>instagram.js: Has a function to retrieve data from getInstagram.php and one to show the next Instagram picture</li>
<li>nextShows.js: holds a listing of stages for your event and a line-up for each one.</li>
</ul>
Uses the twitter php api: https://github.com/J7mbo/twitter-api-php
Uses a php library to convert the emoji characters: http://code.iamcal.com/php/emoji/




