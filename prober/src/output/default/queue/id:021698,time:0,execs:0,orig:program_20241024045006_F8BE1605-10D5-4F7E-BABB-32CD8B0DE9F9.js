const v2 = new WeakMap();
const o3 = {
};
class C4 {
    constructor(a6, a7) {
        a7 instanceof C4;
        try {
        } catch(e9) {
        }
    }
}
const v10 = new C4();
const t12 = v10.constructor;
new t12(o3, o3);
const v13 = v10.constructor;
const v14 = new v13();
const t16 = v14.constructor;
new t16(Set, v13);
const v17 = new C4();
const t19 = v17.constructor;
new t19(v2, v17);
const v20 = v17.constructor;
const v23 = new Int32Array(209);
const v24 = [];
function f25() {
    new v20(209, f25, C4);
    return v24;
}
const v28 = [f25];
Reflect.apply(v24.toSorted, v23, v28);
gc();
