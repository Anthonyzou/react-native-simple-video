package com.imager;

import android.media.Image;
import android.media.MediaPlayer;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.MediaController;
import android.widget.VideoView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ReactImageManager;
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.uimanager.ThemedReactContext;

import javax.annotation.Nullable;


/**
 * Created by azou on 15/02/16.
 */
public class ViewManager extends SimpleViewManager<VideoView> {
    private VideoView videoView;
    private MediaController mediaControls;
    private MediaPlayer mediaPlayer;
    @Override
    public String getName() {
        return "VideoPlayer";
    }

    @Override
    public VideoView createViewInstance(ThemedReactContext reactContext) {
        mediaControls = new MediaController(reactContext);
        videoView = new VideoView(reactContext);
        videoView.setMediaController(mediaControls);
        videoView.requestFocus();
        return videoView;
    }

    // In JS this is Image.props.source.uri
    @ReactProp(name = "src")
    public void setSource(VideoView view, @Nullable String source) {
        Log.d("URI video", source);
        view.setVideoURI(Uri.parse(source));
        view.stopPlayback();
        videoView.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
            // Close the progress bar and play the video
            public void onPrepared(final MediaPlayer mp) {
                mediaPlayer = mp;
                videoView.start();
                final int width = mp.getVideoWidth();
                final int height = mp.getVideoHeight();
            }
        });
    }
}
