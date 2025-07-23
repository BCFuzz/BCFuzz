let v1;
try {
const t0 = "valueOf";
v1 = t0();
} catch (e) {}
const v5 = new SharedArrayBuffer(2659);
const v7 = new DataView(v5);
v7.setBigInt64(DataView, false, v1);
gc();
