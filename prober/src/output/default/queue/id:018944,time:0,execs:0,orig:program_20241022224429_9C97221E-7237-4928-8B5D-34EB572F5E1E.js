function f0(a1) {
    return a1;
}
class C2 extends f0 {
}
const v3 = new C2();
const v5 = new Uint32Array();
let v6 = 0;
do {
    delete v3[v5.byteLength];
    v6++;
} while (v6 < 45830)
gc();
