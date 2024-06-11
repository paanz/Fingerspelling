import * as fp from "fingerpose";

const iSign = new fp.GestureDescription('I');

//Thumb
iSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
iSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Index
iSign.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
iSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Middle
iSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
iSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
iSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
iSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
iSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1);
iSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.70);

export default iSign;