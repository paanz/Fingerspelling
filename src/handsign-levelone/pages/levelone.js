import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "./resources/utils";
import * as fp from "fingerpose";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { RiCameraFill, RiCameraOffFill, RiHome3Line } from "react-icons/ri";
import Handsigns from "./resources/handsign";
import { Signimage, Signpass } from "./resources/handimages";
import "./resources/App.css";
import BIM_Image from "./BIMalphabet.png";

function LevelOne() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const [camState, setCamState] = useState("on");

  let signList = [];
  let currentSign = 0;
  let gamestate = "started";

  const runHandpose = async () => {
    const net = await handpose.load();
    _signList();

    setInterval(() => {
      detect(net);
    }, 100);
  };

  function _signList() {
    signList = generateSigns();
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function generateSigns() {
    const password = shuffle(Signpass);
    return password;
  }

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current != null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
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
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 7);

        if (gamestate === "started") {
          document.querySelector("#app-title").innerText =
            "Make a ✌️ gesture with your hand to start";
        }

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.score
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          setEmoji(gesture.gestures[maxConfidence].name);

          if (
            gesture.gestures[maxConfidence].name === "V" &&
            gamestate !== "played"
          ) {
            _signList();
            gamestate = "played";
            const emojimage = document.getElementById("emojimage");
            if (emojimage) {
              emojimage.classList.add("play");
            }
            document.querySelector(".tutor-text").innerText =
              "Make a hand gesture based on the letters shown below";
          } else if (gamestate === "played") {
            document.querySelector("#app-title").innerText = "";

            if (currentSign === signList.length) {
              _signList();
              currentSign = 0;
              return;
            }

            if (
              typeof signList[currentSign].src.src === "string" ||
              signList[currentSign].src.src instanceof String
            ) {
              document
                .getElementById("emojimage")
                .setAttribute("src", signList[currentSign].src.src);
              if (
                signList[currentSign].alt ===
                gesture.gestures[maxConfidence].name
              ) {
                currentSign++;
              }
              setEmoji(gesture.gestures[maxConfidence].name);
            }
          } else if (gamestate === "finished") {
            return;
          }
        }
      }

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  function turnOffCamera() {
    setCamState(camState === "on" ? "off" : "on");
  }

  return (
    <Box bgColor="#5784BA" minHeight="100vh" display="flex" flexDirection="column" overflow="hidden">
      <Container centerContent maxW="100vw" p="0" flex="1" display="flex" flexDirection="column">
        <Box h="20px" mt="20px">
          <Heading
            as="h3"
            size="md"
            className="tutor-text"
            color="white"
            textAlign="center"
            mb={2}
          ></Heading>
          <Heading
            as="h3"
            size="md"
            color="white"
            textAlign="center"
            mb={4}
          >
            (Buat isyarat tangan berdasarkan huruf yang ditunjukkan di bawah)
          </Heading>
        </Box>

        <Heading
          as="h1"
          size="lg"
          id="app-title"
          color="white"
          textAlign="center"
          mb={4}
        >
          Please wait... / Tunggu seketika...
        </Heading>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4} flex="1">
          <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
            <Image
              src={BIM_Image}
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
              }}
            />
          </GridItem>
          <GridItem colSpan={1} display="flex" justifyContent="center" alignItems="center">
            <Box position="relative" width="100%" maxWidth="500px" height="auto">
              {camState === "on" ? (
                <>
                  <Webcam
                    ref={webcamRef}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <canvas
                    ref={canvasRef}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </>
              ) : (
                <Box background="black" width="100%" height="100%"></Box>
              )}
            </Box>
          </GridItem>
        </Grid>

        <Box mt={4}>
          {emoji !== null ? (
            <div>
              <Text color="white" fontSize="lg" mb={1} textAlign="center">
                Detected Gestures / Isyarat yang Dikesan:
              </Text>
              <Image
                alt="signImage"
                src={Signimage[emoji]}
                marginLeft="auto"
                marginRight="auto"
                style={{
                  height: 70,
                }}
              />
            </div>
          ) : (
            ""
          )}
        </Box>

        <Box
          alt="Detected letters"
          id="singmoji"
          style={{
            zIndex: 9,
            position: "fixed",
            top: "50px",
            right: "30px",
          }}
        ></Box>

        <Image
          h={{ base: "200px", md: "150px" }}
          objectFit="cover"
          id="emojimage"
          style={{
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "20px",
          }}
        />

        <Stack
          id="start-button"
          spacing={4}
          direction="row"
          align="center"
          position="relative"
          bottom="20px"
          width="100%"
          justifyContent="center"
          mt="auto"
          mb="20px"
        >
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
          <Link to="/menu">
            <Button
              leftIcon={<RiHome3Line size={20} />}
              colorScheme="orange"
            >
              Back (ENG)
            </Button>
          </Link>
          <Link to="/menu/my">
            <Button
              leftIcon={<RiHome3Line size={20} />}
              colorScheme="orange"
            >
              Pulang (MY)
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

export default LevelOne;
