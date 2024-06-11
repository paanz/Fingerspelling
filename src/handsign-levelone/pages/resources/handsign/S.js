import * as fp from "fingerpose";

const sSign = new fp.GestureDescription('S');

//Thumb
//Thumb
sSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
sSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Index
sSign.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
sSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Middle
sSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
sSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
sSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
sSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
sSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
sSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.70);

export default sSign;