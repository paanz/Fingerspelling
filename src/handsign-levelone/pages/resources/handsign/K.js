import * as fp from "fingerpose";

const kSign = new fp.GestureDescription('K');

//Thumb
kSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
kSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Index
kSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
kSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Middle
kSign.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1);
kSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
kSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
kSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
kSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
kSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.70);

export default kSign;