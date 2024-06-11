import React, { useRef, useState, useEffect } from "react"
// import * as tf from "@tensorflow/tfjs"
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam"
import { drawHand } from "./resources/utils"
import * as fp from "fingerpose"
import "./resources/App.css"
import {
    Box,
    Container,
    VStack,
    Heading,
    Text,
    Image,
    Stack,
    Button,
} from '@chakra-ui/react'

import { RiCameraFill, RiCameraOffFill } from "react-icons/ri"
// import thumbs_up from "./thumbs_up.png"

// import aSign from "./resources/handsign/A"
// import bSign from "./resources/handsign/B"
// import cSign from "./resources/handsign/C"

// import A_sign from "./resources/handimages/A.svg"
// import B_sign from "./resources/handimages/B.svg"
// import C_sign from "./resources/handimages/C.svg"

// import A_hand from "./resources/handimages/Ahand.svg"
// import B_hand from "./resources/handimages/Bhand.svg"
// import C_hand from "./resources/handimages/Chand.svg"

import Handsigns from "./resources/handsign"

import { Signimage, Signpass } from "./resources/handimages"

function OneFinal() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [emoji, setEmoji] = useState(null);

    const [camState, setCamState] = useState("on")

    //Game Decalrations
    let signList = []
    let currentSign = 0

    let gamestate = "started"

    const runHandpose = async () => {
        const net = await handpose.load()
        _signList()

        setInterval(() => {
            detect(net)
        }, 150);
    }

    //Game Function
    function _signList() {
        signList = generateSigns()
    }

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[a[i], a[j]] = [a[j], a[i]] 
        }
        return a
    }

    function generateSigns() {
        const password = shuffle(Signpass)
        return password
    }
    //**End Game Function


    const detect = async (net) => {
        if (typeof webcamRef.current !== "undefined" && webcamRef.current != null && webcamRef.current.video.readyState == 4) {
            //Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            //Set Video Width and Height
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            //Set Canvas Width and Height
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            //Make Detection
            const hand = await net.estimateHands(video)

            if (hand.length > 0) {
                const GE = new fp.GestureEstimator([
                    // fp.Gestures.ThumbsUpGesture,
                    Handsigns.aSign,
                    Handsigns.bSign,
                    Handsigns.cSign,
                    Handsigns.dSign,
                    Handsigns.eSign,
                    Handsigns.fSign,
                    Handsigns.gSign,
                    Handsigns.hSign,
                    Handsigns.iSign,
                    Handsigns.jSign,
                    Handsigns.kSign,
                    Handsigns.lSign,
                    Handsigns.mSign,
                    Handsigns.nSign,
                    Handsigns.oSign,
                    Handsigns.pSign,
                    Handsigns.qSign,
                    Handsigns.rSign,
                    Handsigns.sSign,
                    Handsigns.tSign,
                    Handsigns.uSign,
                    Handsigns.vSign,
                    Handsigns.wSign,
                    Handsigns.xSign,
                    Handsigns.ySign,
                    Handsigns.zSign,
                ])
                const gesture = await GE.estimate(hand[0].landmarks, 8);
                
                //Game Function
                if (gamestate == "started") {
                    document.querySelector('#app-title').innerText = 
                    "Make a ✌️ gesture with your hand to start"
                }

                if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                    const confidence = gesture.gestures.map(
                        (prediction) => prediction.score
                    );
                    const maxConfidence = confidence.indexOf(
                        Math.max.apply(null, confidence)
                    );
                    setEmoji(gesture.gestures[maxConfidence].name);

                     /**Testing */
                    console.log("gesture.gestures[maxConfidence]");
                    console.log(gesture.gestures[maxConfidence]);
          
                    console.log("gesture.gestures[maxConfidence].name");
                    console.log(gesture.gestures[maxConfidence].name);

                    if (
                        gesture.gestures[maxConfidence].name === "V" &&
                        gamestate !== "played"
                    ) {
                        _signList()
                        gamestate = "played"
                        document.getElementById("emojimage").classList.add("play")
                        document.querySelector(".tutor-text").innerText = 
                        "make a hand gesture based on letter shown below"
                    } else if (gamestate === "played") {
                        document.querySelector("#app-title").innerText = ""

                        if (currentSign === signList.length) {
                            _signList()
                            currentSign = 0
                            return
                        }

                        if (
                            typeof signList[currentSign].src.src === "string" || 
                            signList[currentSign].src.src instanceof String
                        ) {
                            document
                                .getElementById("emojimage")
                                .setAttribute("src", signList[currentSign].src.src)
                            if (
                                signList[currentSign].alt ===
                                gesture.gestures[maxConfidence].name
                            ) {
                                currentSign++
                            }
                            setEmoji(gesture.gestures[maxConfidence].name)
                        }
                    } else if (gamestate === "finished") {
                        return
                    }
                }
            }

            //Draw Mesh
            const ctx = canvasRef.current.getContext("2d");
            drawHand(hand, ctx);
        }
    }

    //Run Handpose
    useEffect(() => {
        runHandpose()
    }, []);

    function turnOffCamera() {
        if (camState === "on") {
            setCamState("off")
        } else {
            setCamState("on")
        }
    }

    return (
        //     <div className="App">
        //         <header className="App-header">
        //             <Webcam 
        //                 ref={webcamRef}
        //                 style={{
        //                     position: "absolute",
        //                     marginLeft: "auto",
        //                     marginRight: "auto",
        //                     left: 0,
        //                     right: 0,
        //                     textAlign: "center",
        //                     zindex: 9,
        //                     width: 640,
        //                     height: 480
        //                 }} />
        //             <canvas 
        //                 ref={canvasRef} 
        //                 style={{
        //                     position: "absolute",
        //                     marginLeft: "auto",
        //                     marginRight: "auto",
        //                     left: 0,
        //                     right: 0,
        //                     textAlign: "center",
        //                     zindex: 9,
        //                     width: 640,
        //                     height: 480
        //                 }}/>

        //             <img
        //                 src={Signimage[emoji]}
        //                 style={{
        //                 border: "1px solid red",
        //                 position: "absolute",
        //                 marginLeft: "auto",
        //                 marginRight: "auto",
        //                 left: 400,
        //                 bottom: 500,
        //                 right: 0,
        //                 textAlign: "center",
        //                 height: 100,
        //                 }}
        //             />
        //         </header>
        //     </div>

            <Box bgColor="#5784BA">
            <Container centerContent maxW="xl" height="100vh" pt="0" pb="0">
                <VStack spacing={4} align="center">
                    <Box h="20px"></Box>
                        <Heading
                            as="h3"
                            size="md"
                            className="tutor-text"
                            color="white"
                            textAlign="center"
                        ></Heading>
                    <Box h="20px"></Box>
                </VStack>

                <Heading
                    as="h1"
                    size="lg"
                    id="app-title"
                    color="white"
                    textAlign="center"
                >
                    🧙‍♀️ Loading the Magic 🧙‍♂️
                </Heading>

                <Box id="webcam-container">
                    {camState === "on" ? (
                    <div>
                        <Webcam 
                            // id="webcam" 
                            ref={webcamRef} 
                            style={{
                                position: "absolute",
                                marginLeft: "auto",
                                marginRight: "auto",
                                left: 0,
                                right: 0,
                                textAlign: "center",
                                zIndex: 9,
                                width: "100vw",
                                height: "100vh",
                            }}/>
                        <canvas 
                            id="gesture-canvas" 
                            ref={canvasRef} 
                            style={{
                                position: "absolute",
                                marginLeft: "auto",
                                marginRight: "auto",
                                left: 0,
                                right: 0,
                                textAlign: "center",
                                zIndex: 9,
                                width: "100vw",
                                height: "100vh",
                            }} />
                    </div>
                    ) : (
                    <div id="webcam" background="black"></div>
                    )}

                    {emoji ? (
                    <div
                        style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        right: "calc(50% - 50px)",
                        bottom: 100,
                        textAlign: "-webkit-center",
                        }}
                    >
                        <Text color="white" fontSize="sm" mb={1}>
                        detected gestures
                        </Text>
                            <img
                                alt="signImage"
                                src={Signimage[emoji]}
                                style={{
                                    height: 30,
                                }}
                        />
                    </div>
                    ) : (
                    " "
                    )}
                </Box>

                <Box
                    id="singmoji"
                    style={{
                        zIndex: 9,
                        position: "fixed",
                        top: "50px",
                        right: "30px",
                    }}
                >
                </Box>

                <Image 
                    h="150px" 
                    objectFit="cover" 
                    id="emojimage" 
                    style={{
                        border: "2px solid red",
                        position: "absolute",
                    }}/>
                {/* <pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre> */}
            </Container>

            <Stack id="start-button" spacing={4} direction="row" align="center">
            <Button
                leftIcon={
                camState === "on" ? (
                    <RiCameraFill size={20} />
                ) : (
                    <RiCameraOffFill size={20} />
                )
                }
                onClick={turnOffCamera}
                colorScheme="orange"
            >
                Camera
            </Button>
            {/* <About /> */}
            </Stack>

            </Box>
    );
}

export default OneFinal;