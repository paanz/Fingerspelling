import * as fp from "fingerpose";

const tSign = new fp.GestureDescription('T');

//Thumb
tSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
tSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Index
tSign.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
tSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Middle
tSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
tSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
tSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
tSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
tSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
tSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.70);

export default tSign;