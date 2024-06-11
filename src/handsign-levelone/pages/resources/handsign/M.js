import * as fp from "fingerpose";

const mSign = new fp.GestureDescription('M');

//Thumb
mSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
mSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Index
mSign.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
mSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Middle
mSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
mSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
mSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
mSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
mSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
mSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.70);

export default mSign;