import * as fp from "fingerpose";

const jSign = new fp.GestureDescription('J');

//Thumb
jSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
jSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Index
jSign.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
jSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Middle
jSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
jSign.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.70);

//Ring
jSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
jSign.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalRight, 0.70);

//Pinky
jSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1);
jSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalRight, 0.70);

export default jSign;