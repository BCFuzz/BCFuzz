const v1 = [-572348283n,-572348283n];
function f2() {
    return -572348283n;
}
v1[Symbol.toPrimitive] = f2;
const v6 = new ArrayBuffer();
const v8 = new DataView(v6);
try { v8.setUint8(v1); } catch (e) {}
gc();
