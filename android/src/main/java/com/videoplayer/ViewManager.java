package com.videoplayer;

import android.media.MediaPlayer;
import android.net.Uri;
import android.os.SystemClock;
import android.widget.MediaController;
import android.widget.VideoView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.EventDispatcher;

import java.util.Map;

import javax.annotation.Nullable;


/**
 * Created by azou on 15/02/16.
 */
public class ViewManager extends SimpleViewManager<VideoView> {

    private EventDispatcher mEventDispatcher;
    @Override
    public String getName() {
        return "VideoPlayer";
    }

    @Override
    public VideoView createViewInstance(ThemedReactContext reactContext) {
        mEventDispatcher = reactContext.getNativeModule(UIManagerModule.class).getEventDispatcher();
        MediaController mediaControls = new MediaController(reactContext);
        VideoView videoView = new VideoView(reactContext);
        videoView.setMediaController(mediaControls);
        videoView.requestFocus();
        return videoView;
    }

    // In JS this is Image.props.source.uri
    @ReactProp(name = "src")
    public void setSource(final VideoView view, @Nullable final String source) {
        view.setVideoURI(Uri.parse(source));
        view.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
            // Close the progress bar and play the video
            public void onPrepared(final MediaPlayer mp) {
                final int width = mp.getVideoWidth();
                final int height = mp.getVideoHeight();
                view.start();

                WritableMap event = Arguments.createMap();
                event.putInt("width", width);
                event.putInt("height", height);
                mEventDispatcher.dispatchEvent(
                        new VideoEvent(view.getId(), SystemClock.uptimeMillis(), VideoEvent.ON_LOAD)
                                .setPayLoad(event)
                );

//                ((ReactContext) view.getContext())
//                        .getJSModule(RCTEventEmitter.class)
//                        .receiveEvent(
//                                view.getId(),
//                                "topChange",
//                                event);
            }
        });

    }

    @ReactProp(name = "seek")
    public void setSeek(VideoView view, @Nullable int source) {
        view.seekTo(source);
    }

    @Override
    public @Nullable
    Map getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of(
                VideoEvent.eventNameForType(VideoEvent.ON_LOAD), MapBuilder.of("registrationName", "onLoad")
        );
    }
}
