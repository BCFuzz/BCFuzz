function f0() {
    return f0;
}
class C1 {
    #b;
    constructor(a3, a4) {
        a4 instanceof f0;
        try {
            a3.#b;
        } catch(e7) {
        }
    }
}
const v8 = new C1();
const t14 = v8.constructor;
new t14(v8);
const v11 = new C1();
const v12 = v11.constructor;
new v12(v11);
const v16 = new Int32Array(209);
const v17 = [f0,f0,f0,f0];
function f18() {
    const v19 = new v12(209, f18, C1, f18);
    return v19;
}
const v21 = [f18];
Reflect.apply(v17.toSorted, v16, v21);
gc();
