const v1 = new Uint8ClampedArray();
const v3 = new Int8Array(v1);
let v4;
try { v4 = v3.reduce(v3, v3); } catch (e) {}
const v5 = new Int8Array();
v5.toString = v4;
class C6 {
}
const v7 = new C6();
v7.length = v5;
try { v1.set(v7); } catch (e) {}
gc();
