import * as fp from "fingerpose";

const fSign = new fp.GestureDescription('F');

//Thumb
fSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
fSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Index
fSign.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
fSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Middle
fSign.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1);
fSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
fSign.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1);
fSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
fSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1);
fSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.70);

export default fSign;