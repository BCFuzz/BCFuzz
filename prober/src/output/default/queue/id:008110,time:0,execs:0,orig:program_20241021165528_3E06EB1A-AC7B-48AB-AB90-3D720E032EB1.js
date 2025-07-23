function f2() {
    return [f2,f2,f2,f2];
}
const v4 = new SharedArrayBuffer();
const v6 = new DataView(v4);
v6[Symbol.toPrimitive] = f2;
try { v6.setFloat16(Map, v6); } catch (e) {}
gc();
