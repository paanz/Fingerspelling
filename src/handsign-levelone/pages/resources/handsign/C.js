import * as fp from "fingerpose";

const cSign = new fp.GestureDescription('C');

//Thumb
cSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
cSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Index
cSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
cSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Middle
cSign.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1);
cSign.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.70);

//Ring
cSign.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1);
cSign.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 0.70);

//Pinky
cSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1);
cSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.70);

export default cSign;