import * as fp from "fingerpose";

const bSign = new fp.GestureDescription('B');

//Thumb
bSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
bSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.70);
bSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Index
bSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
bSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Middle
bSign.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1);
bSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
bSign.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1);
bSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);


//Pinky
bSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1);
bSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.70);

export default bSign;