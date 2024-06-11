import * as fp from "fingerpose";

const xSign = new fp.GestureDescription('X');

//Thumb
xSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
xSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Index
xSign.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1);
xSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Middle
xSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
xSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
xSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
xSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
xSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
xSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.70);

export default xSign;