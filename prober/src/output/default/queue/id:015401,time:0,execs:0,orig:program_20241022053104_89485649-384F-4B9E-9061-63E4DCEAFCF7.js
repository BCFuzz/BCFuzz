const v1 = new Uint32Array(Uint32Array);
for (const v2 in v1) {
}
const v4 = new Int8Array(v1);
for (const v5 in v4) {
}
class C6 {
    constructor(a8, a9, a10) {
        for (const v11 in a8) {
        }
    }
}
const v12 = new C6();
const v13 = new C6();
const v14 = v13.constructor;
const v15 = new v14();
const v16 = new v14(v15, v1);
const v17 = v13.constructor;
const v18 = new v17(v17, v16, v16);
const v19 = new C6(v15, v18, v12);
const v20 = v19.constructor;
new v20();
const t22 = v19.constructor;
const v23 = new t22();
const t24 = v23.constructor;
const v25 = new t24();
const v26 = new C6(v23, v16, v25);
const t27 = v26.constructor;
new t27(v20, v13);
const v31 = new Int16Array(3681);
for (const v32 in v31) {
}
gc();
