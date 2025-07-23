const t0 = createGlobalObject().Float16Array;
const v3 = new t0();
const v4 = v3.buffer;
v4.transferToFixedLength(createGlobalObject);
v3[127] = v4;
gc();
