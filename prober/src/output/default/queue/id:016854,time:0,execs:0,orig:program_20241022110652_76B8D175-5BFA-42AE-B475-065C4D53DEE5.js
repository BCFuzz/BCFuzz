class C0 {
}
const v1 = new C0();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    class C8 extends Date {
        p(a10, a11, a12, a13) {
            super[v1];
        }
        static #g;
    }
    const v15 = new C8();
    for (const v17 of v15.toString()) {
    }
    for (let v18 = 0; v18 < 5; v18++) {
        try { Reflect.getPrototypeOf(v18); } catch (e) {}
    }
}
const v21 = new F2();
const v22 = new F2(v21, C0, v21);
new F2(v22, v22, v21);
gc();
