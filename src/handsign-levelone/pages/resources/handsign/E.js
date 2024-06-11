import * as fp from "fingerpose";

const eSign = new fp.GestureDescription('E');

//Thumb
eSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
eSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Index
eSign.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1);
eSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Middle
eSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
eSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
eSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
eSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
eSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
eSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 0.70);

export default eSign;