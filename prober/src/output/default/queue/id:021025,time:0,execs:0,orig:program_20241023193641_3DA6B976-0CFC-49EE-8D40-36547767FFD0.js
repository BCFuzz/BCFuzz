const v1 = [-130679.95684546442,24.731097917562238,5.0,2.220446049250313e-16,2.0,8.442851954632282,-0.6531130417545778,-1000.0];
function f2() {
    const o3 = {
        __proto__: v1,
    };
    return o3;
}
const v4 = f2();
const v5 = f2();
const v6 = f2();
class C7 {
    constructor(a9) {
        for (let v10 = 0; v10 < 100; v10++) {
            a9["p" + v10] = v10;
        }
    }
}
const v13 = new C7(v4);
const v14 = v13.constructor;
new v14(BigUint64Array);
const v16 = new v14(v6);
const t21 = v16.constructor;
new t21(v16);
new C7(v5);
gc();
