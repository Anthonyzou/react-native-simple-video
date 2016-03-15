package com.videoplayer;

import android.support.annotation.IntDef;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * Created by anthonyou on 2016-03-15.
 */
public class VideoEvent extends Event<VideoEvent>{

    /**
     * Copyright (c) 2015-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     */


    @IntDef({ON_LOAD})
    @Retention(RetentionPolicy.SOURCE)
    @interface VideoEventType {}

    public static final int ON_LOAD = 1;

    private final int mEventType;
    private WritableMap payload;

    public VideoEvent(int viewId, long timestampMs, @VideoEventType int eventType) {
        super(viewId, timestampMs);
        mEventType = eventType;
    }

    public static String eventNameForType(@VideoEventType int eventType) {
        switch(eventType) {
            case ON_LOAD:
                return "topLoad";
            default:
                throw new IllegalStateException("Invalid video event: " + Integer.toString(eventType));
        }
    }

    @Override
    public String getEventName() {
        return VideoEvent.eventNameForType(mEventType);
    }

    @Override
    public short getCoalescingKey() {
        // Intentionally casting mEventType because it is guaranteed to be small
        // enough to fit into short.
        return (short) mEventType;
    }

    @Override
    public void dispatch(RCTEventEmitter rctEventEmitter) {
        rctEventEmitter.receiveEvent(getViewTag(), getEventName(), payload);
        payload = null;
    }

    public VideoEvent setPayLoad(WritableMap payLoad){
        this.payload = payLoad;
        return this;
    }
}
