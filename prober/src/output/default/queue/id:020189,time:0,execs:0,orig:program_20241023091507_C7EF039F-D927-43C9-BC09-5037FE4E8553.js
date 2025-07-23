class C0 {
    constructor(a2, a3, a4, a5) {
        const v6 = this.__defineSetter__;
        try { new v6(); } catch (e) {}
        function f8(a9, a10) {
            return arguments[1];
        }
        f8(a3);
        for (let i = 0; i < 250; i++) {
        }
    }
}
const v14 = new C0(C0, C0, C0, C0);
const v15 = v14.constructor;
const v16 = new v15(v15, C0, v15);
const v17 = new C0(v16, v14, v16, v16);
const v18 = v17.constructor;
new v18(v16);
const v20 = new v18();
const v21 = v17.constructor;
const v22 = new v21(C0, C0, v16, v21, v20);
const t21 = v22.constructor;
const v24 = new t21();
const v25 = v22.constructor;
new v25(v17, v24, v14, v25, v21);
const t25 = v17.constructor;
new t25();
gc();
