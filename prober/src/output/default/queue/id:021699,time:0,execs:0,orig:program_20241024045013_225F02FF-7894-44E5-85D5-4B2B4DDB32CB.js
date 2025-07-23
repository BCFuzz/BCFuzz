const v1 = Array();
class C2 {
    constructor(a4, a5) {
        a5 instanceof C2;
        try {
        } catch(e7) {
        }
    }
}
const v8 = new C2();
const v9 = v8.constructor;
const v12 = new Int32Array(209);
const v13 = [v12,v12];
function f14() {
    const v15 = new v9(209, f14);
    const t15 = v15.constructor;
    const v17 = new t15(v1, v15);
    return v17;
}
const v19 = [f14];
Reflect.apply(v13.toSorted, v12, v19);
gc();
