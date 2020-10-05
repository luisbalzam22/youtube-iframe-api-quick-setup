# Youtube Iframe API quick setup for easy use on your website/web app

You just have to make use of the provided code and perform the required changes where specified in such files.

**Some notes about the workings of this API:**

- If a youtube video is being played in another tab, the API won't autoplay or start the reproduction of the video when the player is ready

- It only works on sites with domain and does not work on sites reached by IP adress. Works when using on "localhost" and causes "The video is unavailable" when using "127.0.0.1" or when opening through the system file path.

- When setting the player variable 'controls' to 0, the user will still be able to pause, play, increase and lower the volume of the video (using the keyboard "up" and "down" arrows), but not to go back and forward in the reproduction of video

- When it comes to "autoplay" and "Scripted Playback":
  The HTML5 <video> element, in certain mobile browsers (such as Chrome and Safari), only allows playback to take place if it's initiated by a user interaction (such as tapping on the player).

- When it comes to the player.seekTo() method:
  It is recommend that you set this parameter to false while the user drags the mouse along a video progress bar and then set it to true when the user releases the mouse. This approach lets a user scroll to different points of a video without requesting new video streams by scrolling past unbuffered points in the video. When the user releases the mouse button, the player advances to the desired point in the video and requests a new video stream if necessary.

**Feel free to fork it, use it, and rename if you need to.**
