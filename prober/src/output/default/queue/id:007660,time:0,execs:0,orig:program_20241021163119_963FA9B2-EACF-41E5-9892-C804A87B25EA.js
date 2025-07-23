const v1 = [-65535,-65535,-65535,-65535];
const v3 = new Int16Array();
const v4 = v3.constructor;
const v5 = new v4(v3, v4, Int16Array);
v5.copyWithin(v1, -65535);
gc();
