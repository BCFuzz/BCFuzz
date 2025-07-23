const v0 = [];
const v2 = new Int32Array(v0, Int32Array);
let v3 = 7;
class C5 extends Int8Array {
}
let v6 = -1;
const o7 = {
};
({"buffer":v6,"byteLength":C5,"byteOffset":v3,} = v2);
o7.get = v0;
const v9 = new Proxy(Int8Array, o7);
try { new v9(v6); } catch (e) {}
for (let i13 = -3, i14 = 10; i13 < i14; i14--) {
}
gc();
