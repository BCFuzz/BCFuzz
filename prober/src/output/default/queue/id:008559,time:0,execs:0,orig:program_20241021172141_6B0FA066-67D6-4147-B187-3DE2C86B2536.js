const v3 = new Int8Array(255);
for (const v4 in v3) {
}
class C5 {
}
class C6 extends C5 {
    #m(a8, a9, a10, a11) {
    }
}
const v12 = new C6();
const v13 = v12.constructor;
new v13(v13, Symbol, Int8Array, v13, C6);
const v15 = v12.constructor;
let v16;
try { v16 = new v15(); } catch (e) {}
v16.constructor = Symbol;
for (let v17 = 0; v17 < 250; v17++) {
}
gc();
