import React, { useRef, useState, useEffect } from "react";
import * as fp from "fingerpose";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "./utilities";

import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";

function Test() {
     const webcamRef = useRef(null);
     const canvasRef = useRef(null);

     const [emoji, setEmoji] = useState(null);
     // const images = {thumbs_up:thumbs_up, victory:victory};
     const images = {thumbs_up:thumbs_up, victory:victory};

     const runHandpose = async () => {
          const net = await handpose.load();
          console.log("Handpose model loaded");

          setInterval(() => {
               detect(net);
          }, 10);
     };

     const detect = async (net) => {
          //Check if data is available

          if (
               typeof webcamRef.current !== "undefined" &&
               webcamRef.current !== null &&
               webcamRef.current.video.readyState === 4
          ) {
               // Get Video Properties
               const video = webcamRef.current.video;
               const videoWidth = webcamRef.current.video.videoWidth;
               const videoHeight = webcamRef.current.video.videoHeight;

               // Set video width
               webcamRef.current.video.width = videoWidth;
               webcamRef.current.video.height = videoHeight;

               // Set canvas height and width
               canvasRef.current.width = videoWidth;
               canvasRef.current.height = videoHeight;

               // Make Detections
               const hand = await net.estimateHands(video);


               ///////// NEW STUFF ADDED GESTURE HANDLING

               if (hand.length > 0) {
                    const GE = new fp.GestureEstimator([
                    fp.Gestures.VictoryGesture,
                    fp.Gestures.ThumbsUpGesture,
                    ])

                    const gesture = await GE.estimate(hand[0].landmarks, 8);
                    console.log("gesture:")
                    console.log(gesture);
                    

                    if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                         console.log("gesture.gestures:")
                         console.log(gesture.gestures);
               
                         const confidence = gesture.gestures.map(
                         (prediction) => prediction.confidence
                         );
                         const maxConfidence = confidence.indexOf(
                         Math.max.apply(null, confidence)
                         );
                         console.log(gesture.gestures[maxConfidence].name);
                         setEmoji(gesture.gestures[maxConfidence].name);
                         console.log(emoji);

                         //
                    }
               }

               
          ///////// NEW STUFF ADDED GESTURE HANDLING

          // Draw mesh
          const ctx = canvasRef.current.getContext("2d");
          drawHand(hand, ctx);
          }
     };

     useEffect(()=>{runHandpose()},[]);

     return (
          <div className="App">
            <header className="App-header">
              <Webcam
                ref={webcamRef}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 9,
                  width: 640,
                  height: 480,
                }}
              />
      
              <canvas
                ref={canvasRef}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zindex: 9,
                  width: 640,
                  height: 480,
                }}
              />
              {/* NEW STUFF */}
              {emoji !== null ? (
                <img
                  src={images[emoji]}
                  style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 400,
                    bottom: 500,
                    right: 0,
                    textAlign: "center",
                    height: 100,
                  }}
                />
              ) : (
                ""
              )}
      
              {/* NEW STUFF */}
            </header>
          </div>
        );
}

export default Test;
