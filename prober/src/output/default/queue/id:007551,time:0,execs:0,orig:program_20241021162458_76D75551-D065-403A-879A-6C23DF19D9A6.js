class C2 {
    constructor(a4, a5) {
        super[a5];
    }
    [Int16Array];
    static #b = Uint8ClampedArray;
    static p(a8) {
    }
}
const v9 = new C2();
const v10 = new C2(Uint8ClampedArray, v9);
const v11 = new C2(v10, C2);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    const v18 = this?.constructor;
    try { new v18(a15, a16, F12); } catch (e) {}
    a14.c = a14;
}
new F12(v11, v11, C2);
new F12(v10, v9, v9);
new F12(v9);
gc();
