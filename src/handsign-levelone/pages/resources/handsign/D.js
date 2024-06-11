import * as fp from "fingerpose";

const dSign = new fp.GestureDescription('D');

//Thumb
dSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
dSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Index
dSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
dSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Middle
dSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
dSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
dSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
dSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
dSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
dSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.70);

export default dSign;