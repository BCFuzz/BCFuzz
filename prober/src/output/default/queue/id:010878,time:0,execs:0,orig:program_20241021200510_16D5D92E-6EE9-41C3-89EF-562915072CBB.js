function f0() {
}
const v2 = new Int32Array();
const v3 = v2.sort;
Date.toString = Date;
const v6 = [v3,10000n,Date];
v6.toString = f0;
v6.join(v6);
gc();
