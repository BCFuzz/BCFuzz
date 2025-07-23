const v1 = new Uint32Array(Uint32Array, Uint32Array, Uint32Array);
for (const v2 in v1) {
}
const v4 = new Int8Array(v1, Int8Array, Uint32Array);
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
const v15 = new v14(Uint32Array, v12);
const v16 = new C6(v15, Int8Array, v1);
const v17 = v16.constructor;
new v17(v12, v1, v17, v14);
const t19 = v16.constructor;
const v20 = new t19();
const v21 = new C6(v20, Uint32Array, Uint32Array);
const t22 = v21.constructor;
new t22();
const v26 = new Int16Array(3681);
for (const v27 in v26) {
}
gc();
