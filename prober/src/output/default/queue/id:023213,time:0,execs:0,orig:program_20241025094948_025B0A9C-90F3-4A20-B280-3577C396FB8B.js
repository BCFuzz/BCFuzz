function F0() {
    if (!new.target) { throw 'must be called with new'; }
    let v1 = this;
    --v1;
    class C4 {
        constructor(a6) {
            v1 + "c";
            let v8 = 1e-15;
            ({"length":v8,} = arguments);
        }
    }
    return C4;
}
class C10 extends F0 {
}
const v11 = new C10();
const v14 = 129 <= Int32Array;
const v15 = v14 ? 129 : Int32Array;
class C16 {
    get c() {
        const v19 = new Uint32Array();
        for (const v20 in v19) {
        }
        class C21 {
        }
        new v11(v14);
        const o23 = {
        };
        for (const v24 in o23) {
        }
    }
}
const v25 = new C16();
const v27 = new v15(586);
for (const v28 of v27) {
    v25.c;
}
gc();
