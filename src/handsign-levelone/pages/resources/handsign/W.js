import * as fp from "fingerpose";

const wSign = new fp.GestureDescription('W');

//Thumb
wSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
wSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Index
wSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
wSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Middle
wSign.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1);
wSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
wSign.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1);
wSign.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Pinky
wSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
wSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.70);

export default wSign;