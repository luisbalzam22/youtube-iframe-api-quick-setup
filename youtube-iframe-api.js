(function(){
    //Asyncronously load API (don't touch this code)
    //-------------------------------------------------------------------
    function youtubeAPI(){
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    //--------------------------------------------------------------------


    //Setting player configuration for when API is loaded
    window.player = undefined;
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('your-yt-player', { //1st argument is a string containing the id of the empty <div> where you want the player to replace it
        videoId: 'UGCLGgKOt7c', //2nd argument is the code provided by youtube when embedding a video, it's the part of the src attribute right after "embed/"
        playerVars: { 
        'autoplay': 1, //Set to 1 if you want your video to autoplay once the video player's fully loaded
        'controls': 0 //Set to 0 if you want to hide the video player's controls
        },
        events: {
            'onReady': onPlayerReady //we can use any name for the value of the key, since such value will be the event handler function for such event
        }
        });
    }

        window.onPlayerReady = function (event) { //to play video as soon as the player is ready
        player.playVideo(); //this function and the event handler aren't necessary if the player variable autoplay is set to 1
        console.log("Playing video...");
        }
    }

    youtubeAPI();
})();
 /*Some useful methods /events you may want to have access to (remember that "player" is the name of the variable we set for the actual player, but you can name it however you want)

 
    
    METHODS:
    player.playVideo() --Play Video
    player.pauseVideo() --Pause Video
    player.stopVideo() --Stops and cancels loading of the current video (it won't be buffered). 
    player.loadVideoById(<string>) --This function loads and plays the specified video. The required videoId parameter specifies the YouTube Video ID of the video to be played.
    player.getCurrentTime() --Returns a number of the elapsed time in seconds since the video started playing.
    player.getVideoLoadedFraction() --Returns a number between 0 and 1 that specifies the percentage of the video that the player shows as buffered
    player.seekTo(seconds:Number, allowSeekAhead:Boolean):Void --Seeks to a specified time in the video. If the player is paused when the function is called, it will remain paused. If the function is called from another state (playing, video cued, etc.), the player will play the video.
    The seconds parameter identifies the time to which the player should advance.

    The player will advance to the closest keyframe before that time unless the player has already downloaded the portion of the video to which the user is seeking.

    The allowSeekAhead parameter determines whether the player will make a new request to the server if the seconds parameter specifies a time outside of the currently buffered video data.

    EVENTS:
    * onReady-> This event fires whenever a player has finished loading and is ready to begin receiving API calls. Your application should implement this function if you want to automatically execute certain operations, such as playing the video or displaying information about the video, as soon as the player is ready.

    * onStateChange-> This event fires whenever the player's state changes. The data property of the event object that the API passes to your event listener function will specify an integer that corresponds to the new player state. Possible values are:
    
        -1 (unstarted)
        0 (ended)
        1 (playing)
        2 (paused)
        3 (buffering)
        5 (video cued).
        When the player first loads a video, it will broadcast an unstarted (-1) event. When a video is cued and ready to play, the player will broadcast a video cued (5) event. In your code, you can specify the integer values or you can use one of the following namespaced variables:
        YT.PlayerState.ENDED
        YT.PlayerState.PLAYING
        YT.PlayerState.PAUSED
        YT.PlayerState.BUFFERING
        YT.PlayerState.CUED

    * onError ->This event fires if an error occurs in the player. The API will pass an event object to the event listener function. That object's data property will specify an integer that identifies the type of error that occurred. Possible values are:

        2 – The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.
        5 – The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.
        100 – The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.
        101 – The owner of the requested video does not allow it to be played in embedded players.
        150 – This error is the same as 101. It's just a 101 error in disguise!
    */

