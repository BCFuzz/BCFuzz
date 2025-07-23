const v0 = [9007199254740991,1301170829,268435441,-9223372036854775808,2147483647];
function f1(a2, a3) {
    return 2n;
}
v0.toString = f1;
const v6 = new ArrayBuffer();
const v8 = new DataView(v6);
v8.h = v8;
const v9 = v8.h;
try { v9.getUint32(v0); } catch (e) {}
gc();
