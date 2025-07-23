const v5 = new WeakMap();
class C6 {
    constructor(a8, a9) {
        a9 instanceof C6;
        try {
        } catch(e11) {
        }
    }
}
const v12 = new C6();
const v13 = v12.constructor;
const v14 = new v13();
const t12 = v14.constructor;
const v16 = new t12(v13, WeakMap, v14, v14);
const v17 = v12.constructor;
const v18 = new v17(v17, 1439449947, v14, v17, v14);
const t16 = v18.constructor;
const v20 = new t16(Set, v17);
const t18 = v20.constructor;
new t18(v5, v20, v14, v16, C6);
const v23 = new C6();
const v24 = v23.constructor;
const v25 = new v24(v5, v23);
const t23 = v25.constructor;
new t23();
const v28 = v23.constructor;
new v28();
const v32 = new Int32Array(209);
const v33 = ["5f","5f","5f"];
function f34() {
    const v35 = new v28(209, f34, C6);
    v35?.constructor;
    return v24;
}
const v38 = [f34];
Reflect.apply(v33.toSorted, v32, v38);
gc();
