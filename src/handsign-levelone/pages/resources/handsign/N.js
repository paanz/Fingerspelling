import * as fp from "fingerpose";

const nSign = new fp.GestureDescription('N');

//Thumb
nSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
nSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Index
nSign.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
nSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Middle
nSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
nSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
nSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
nSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
nSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
nSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.70);

export default nSign;