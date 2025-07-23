class C0 {
    n(a2, a3) {
        return -34354 ^ +a2;
    }
}
const v7 = new C0();
const v9 = v7["n"]();
const v11 = new Uint8Array(C0, v9);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v11;
}
const v18 = new F12(v11, C0, Uint8Array, C0);
v18.d.slice(v9);
gc();
