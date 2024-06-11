import * as fp from "fingerpose";

const gSign = new fp.GestureDescription('G');

//Thumb
gSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
gSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.70);

//Index
gSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
gSign.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 0.70);

//Middle
gSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
gSign.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.70);

//Ring
gSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
gSign.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalRight, 0.70);

//Pinky
gSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
gSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalRight, 0.70);

export default gSign;