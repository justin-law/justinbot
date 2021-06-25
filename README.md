# justinbot
<h2> A discord bot that detects certain words or phrases and can send a custom message </h2>
<p>Current commands available:</p>
<ul>
<li>$$add to add new words to the dictionary</li>
<li>$$remove to remove words from the dictionary</li>
<li>$$show to list all the current words in the dictionary</li>
<li>$$help to show all the commands available</li>
</ul>
<p>Other details:</p>
<ul>
<li>Has a persistent database of words to detect in the words.txt file, each word on a different line</li>
<li>Bot can now be deployed on Heroku</li>
  <ul>
    <li>Make sure to change dyno to worker instead of web</li>
    <li>Add discord token and other .env variables to Config Vars on Heroku settings</li>
  </ul>
<li>Word storage is currently configured for unix devices. To run on Windows, change newline (\n) instances to \r\n</li>
<li>Can detect user name and give customized messages to different users</li>
</ul>
