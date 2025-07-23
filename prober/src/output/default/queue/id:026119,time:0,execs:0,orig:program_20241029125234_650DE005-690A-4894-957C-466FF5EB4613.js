function f0() {
    return f0;
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    class C6 {
        constructor(a8) {
            let v9 = 1e-15;
            const t12 = Math.ceil;
            t12(v3);
            ({"length":v9,} = arguments);
        }
    }
    return C6;
}
class C14 extends F4 {
}
const v15 = new C14();
const v19 = 129 <= Int32Array ? 129 : Int32Array;
class C20 {
    get c() {
        new v15(v3);
        f0();
    }
}
const v24 = new C20();
const v26 = new v19(586);
for (const v27 of v26) {
    v24.c;
}
gc();
