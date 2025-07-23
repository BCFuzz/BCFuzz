function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    class C5 {
        constructor(a7) {
            let v8 = 1e-15;
            const t9 = Math.ceil;
            t9(v2);
            ({"length":v8,} = arguments);
        }
    }
    return C5;
}
class C13 extends F3 {
}
const v14 = new C13();
const v18 = 129 <= Int32Array ? 129 : Int32Array;
class C19 {
    get c() {
        new v14();
    }
}
const v22 = new C19();
const v24 = new v18(586);
for (const v25 of v24) {
    v22.c;
}
gc();
