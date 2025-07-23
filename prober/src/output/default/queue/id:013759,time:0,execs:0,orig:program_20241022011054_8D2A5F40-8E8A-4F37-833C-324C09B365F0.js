const v1 = new Uint32Array();
for (const v2 in v1) {
}
const v4 = new Int8Array();
for (const v5 in v4) {
}
class C6 {
    constructor(a8, a9, a10) {
        for (const v11 in a8) {
        }
    }
}
const v12 = new C6(v1, Uint32Array, C6);
const v13 = v12.constructor;
const v14 = new v13();
const v15 = new C6(C6, v14, Uint32Array);
const v16 = v15.constructor;
const v17 = new v16(v13, v13, v16, v16, v4);
const v18 = new C6(v13, v17, Int8Array);
const t19 = v18.constructor;
new t19(v17, v12, Int8Array, v15);
const v23 = new Int16Array(3681);
for (const v24 in v23) {
}
gc();
