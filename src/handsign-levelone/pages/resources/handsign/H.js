import * as fp from "fingerpose";

const hSign = new fp.GestureDescription('H');

//Thumb
hSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
hSign.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 0.70);

//Index
hSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
hSign.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 0.70);

//Middle
hSign.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1);
hSign.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalRight, 0.70);

//Ring
hSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
hSign.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalRight, 0.70);

//Pinky
hSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
hSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalRight, 0.70);

export default hSign;