import * as fp from "fingerpose";

const aSign = new fp.GestureDescription('A');

//Thumb
aSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
aSign.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
aSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
aSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
aSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);
// aSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
aSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
aSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
aSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
aSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.70);

export default aSign;