noFTL.toPrimitive = noFTL;
const v2 = noFTL.toPrimitive;
v2.omitPadding = 0;
const v4 = new Uint8Array(v2, 0, 0);
v4.toBase64(v2);
gc();
