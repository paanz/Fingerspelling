import * as fp from "fingerpose";

const pSign = new fp.GestureDescription('P');

//Thumb
pSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
pSign.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 0.70);

//Index
pSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
pSign.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 0.70);

//Middle
pSign.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1);
pSign.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalDownRight, 0.70);

//Ring
pSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
pSign.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalDownRight, 0.70);

//Pinky
pSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
pSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalDownRight, 0.70);

export default pSign;