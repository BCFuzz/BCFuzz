function f0() {
    const o3 = {
        set g(a2) {
        },
    };
    return o3;
}
const v4 = f0();
class C7 extends f0 {
}
const v8 = new C7();
const v9 = v8.__defineGetter__;
try { v9(v9, 10000n, -1n, -1n); } catch (e) {}
const v11 = new C7();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    a15.g;
}
const v19 = new F12(10000n, v4);
new F12(10000n, v11);
new F12(-1n, v11);
const v24 = new Uint8Array(1024);
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v24;
}
const v31 = new F25(F12, v19, Uint8Array, F12);
for (const v33 of v31.d) {
}
gc();
