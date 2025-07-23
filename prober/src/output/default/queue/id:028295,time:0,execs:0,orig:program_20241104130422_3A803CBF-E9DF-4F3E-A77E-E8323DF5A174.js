class C2 {
    constructor(a4) {
        for (let i = 0; i < 5; i++) {
            C2[256n] = 256n;
        }
    }
}
const v5 = new C2(256n);
const v6 = v5.constructor;
new v6();
const t10 = v5.constructor;
new t10();
const v10 = new C2(v6);
const t13 = v10.constructor;
new t13();
const t15 = v10.constructor;
const v14 = new t15();
const v15 = v14.constructor;
const v16 = new v15();
const v17 = new v15();
const v18 = v10.constructor;
v18.g = v18;
new v18();
const v20 = new v18(v16, v10, v17, v5, v6);
const t24 = v20.constructor;
new t24();
const v23 = v10.constructor;
const v24 = new v23();
const v25 = new v23(v24, v14);
const v26 = v25.constructor;
const t30 = v26.g;
const v28 = new t30();
const v29 = v28.constructor;
const t32 = [v25,v25,v25];
t32[C2] /= -1604662915;
new v29();
const t36 = v26.g;
new t36(v6, v6);
for (let v34 = 0; v34 < 500; v34++) {
}
gc();
