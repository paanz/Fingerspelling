import * as fp from "fingerpose";

const rSign = new fp.GestureDescription('R');

//Thumb
rSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
rSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Index
rSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
rSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Middle
rSign.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1);
rSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
rSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
rSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
rSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
rSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.70);

export default rSign;