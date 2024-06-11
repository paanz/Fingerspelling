import * as fp from "fingerpose";

const ySign = new fp.GestureDescription('Y');

//Thumb
ySign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
ySign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Index
ySign.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
ySign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Middle
ySign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
ySign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
ySign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
ySign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
ySign.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1);
ySign.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.70);

export default ySign;