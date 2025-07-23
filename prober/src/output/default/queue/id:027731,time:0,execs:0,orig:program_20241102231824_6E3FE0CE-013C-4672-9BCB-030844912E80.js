class C0 {
    constructor(a2) {
        delete this.f;
    }
}
const v4 = new C0(C0);
const v5 = v4.constructor;
const v6 = new v5();
const t8 = v4.constructor;
const v8 = new t8();
const v9 = v4.constructor;
const v10 = new v9(v9, C0, v9);
const t12 = v10.constructor;
new t12();
const t14 = v10.constructor;
new t14(C0);
const v15 = new C0();
const t17 = v15.constructor;
const v17 = new t17();
const v18 = v17.constructor;
new v18();
const v20 = v15.constructor;
const v21 = new v20();
const v22 = new v20(v21, v18, v5, v6);
const v23 = v22.constructor;
new v23(v21, v23, v10);
const v25 = v15.constructor;
const v26 = new v25();
v25.g = v25;
const v27 = new v25();
const v28 = v27.constructor;
const t31 = v28.g;
new t31();
const t33 = v28.g;
const v32 = new t33();
const v33 = v32.constructor;
new v33(v15, v26, v8, v33);
for (let v35 = 0; v35 < 500; v35++) {
}
gc();
