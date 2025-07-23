class C0 {
}
const v1 = new C0();
class C2 {
}
const v3 = new C2();
let v4;
try { v4 = v3.constructor(C0, C0, v3); } catch (e) {}
const v6 = new ArrayBuffer(v4, v4);
let v7;
try { v7 = v4(C0, ArrayBuffer); } catch (e) {}
new Int8Array(v6, v1, v7);
gc();
