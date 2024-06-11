import * as fp from "fingerpose";

const lSign = new fp.GestureDescription('L');

//Thumb
lSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
lSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Index
lSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
lSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Middle
lSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
lSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
lSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
lSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
lSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
lSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.70);

export default lSign;