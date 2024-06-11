import * as fp from "fingerpose";

const zSign = new fp.GestureDescription('Z');

//Thumb
zSign.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.8);
zSign.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 0.70);

//Index
zSign.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1);
zSign.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.70);

//Middle
zSign.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1);
zSign.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 0.70);

//Ring
zSign.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1);
zSign.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalLeft, 0.70);

//Pinky
zSign.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1);
zSign.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalLeft, 0.70);

export default zSign;