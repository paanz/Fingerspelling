import * as fp from "fingerpose";

const qSign = new fp.GestureDescription('Q');

//Thumb
qSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
qSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownRight, 0.70);

//Index
qSign.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1);
qSign.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 0.70);

//Middle
qSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
qSign.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalRight, 0.70);

//Ring
qSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
qSign.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownRight, 0.70);

//Pinky
qSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
qSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownRight, 0.70);

export default qSign;