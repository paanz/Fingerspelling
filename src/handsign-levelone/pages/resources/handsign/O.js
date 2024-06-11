import * as fp from "fingerpose";

const oSign = new fp.GestureDescription('O');

//Thumb
oSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
oSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Index
oSign.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1);
oSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Middle
oSign.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1);
oSign.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.70);

//Ring
oSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
oSign.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 0.70);

//Pinky
oSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
oSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.70);

export default oSign;