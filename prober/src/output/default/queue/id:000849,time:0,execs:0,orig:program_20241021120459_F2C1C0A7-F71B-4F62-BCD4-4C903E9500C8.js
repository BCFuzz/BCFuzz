class C0 {
    static n(a2, a3, a4, a5) {
        delete this.g;
    }
}
C0.n(C0, C0, C0, C0);
function f8(a9, a10, a11, a12) {
    const o13 = {
        __proto__: a9,
    };
    return o13;
}
const v14 = f8(f8);
const v15 = v14.constructor;
try { v15(v14); } catch (e) {}
gc();
