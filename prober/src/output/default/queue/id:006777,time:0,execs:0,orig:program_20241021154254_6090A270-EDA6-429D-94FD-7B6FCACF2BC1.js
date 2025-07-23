const v1 = ([1.7976931348623157e+308,0.15377173754796836,NaN,0.486701376922685,0.7779527275094784,3.4824272583470055,-Infinity,-2.0,1.0])[7];
const v4 = new BigUint64Array();
try { v4.subarray(v4, 15316n); } catch (e) {}
const v7 = new Uint8ClampedArray();
v7.slice(v1);
gc();
