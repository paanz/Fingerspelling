import * as fp from "fingerpose";

const uSign = new fp.GestureDescription('U');

//Thumb
uSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
uSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Index
uSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
uSign.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 0.70);

//Middle
uSign.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1);
uSign.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 0.70);

//Ring
uSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
uSign.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 0.70);

//Pinky
uSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
uSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.70);

export default uSign;