class C0 {
}
const v1 = new C0();
const v2 = new C0();
function f3(a4, a5, a6, a7) {
    function f8() {
        return f8;
    }
    Object.defineProperty(a4, "constructor", { configurable: true, get: f8 });
    const o9 = {
        __proto__: a6,
    };
    return o9;
}
const v10 = f3(C0);
const v12 = f3(v2, v1, f3(v10, v1, v10));
class C13 {
    constructor(a15, a16) {
        try { new a15(v12); } catch (e) {}
    }
}
new C13(C13);
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
gc();
