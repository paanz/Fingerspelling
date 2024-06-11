import * as fp from "fingerpose";

const vSign = new fp.GestureDescription('V');

//Thumb
vSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
vSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Index
vSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
vSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Middle
vSign.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1);
vSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
vSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
vSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
vSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
vSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.70);

export default vSign;