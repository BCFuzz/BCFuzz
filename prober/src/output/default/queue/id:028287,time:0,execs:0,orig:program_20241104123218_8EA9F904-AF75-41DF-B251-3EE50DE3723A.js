class C0 {
    constructor(a2) {
        const t2 = this.toLocaleString();
        delete t2.f;
    }
}
const v5 = new C0(C0);
const t7 = v5.constructor;
new t7();
const t9 = v5.constructor;
const v9 = new t9();
const v10 = new C0();
const t12 = v10.constructor;
new t12();
const t14 = v10.constructor;
const v14 = new t14(v10, v9);
const v15 = v14.constructor;
new v15();
new v15();
const v18 = v10.constructor;
v18.g = v18;
const v19 = new v18();
const v20 = new v18(v19);
const t23 = v20.constructor;
new t23();
const v23 = v10.constructor;
new v23();
const v25 = new v23();
const v26 = v25.constructor;
v26.length;
const t29 = v26.g;
const v29 = new t29();
const t32 = v29.constructor;
new t32();
const t34 = v26.g;
const v33 = new t34();
const t36 = v33.constructor;
new t36();
for (let v36 = 0; v36 < 500; v36++) {
}
gc();
