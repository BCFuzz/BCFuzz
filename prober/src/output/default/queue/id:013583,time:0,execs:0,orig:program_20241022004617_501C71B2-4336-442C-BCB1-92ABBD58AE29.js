const v1 = new Int8Array();
for (const v2 in v1) {
}
class C3 {
    constructor(a5, a6, a7) {
        for (const v8 in a5) {
        }
    }
}
const v9 = new C3();
const v10 = v9.constructor;
new v10();
const v12 = new C3();
const v13 = v12.constructor;
const v14 = new v13(v1, Int8Array, v13, v13);
const v15 = new C3(v10, v9, v14);
const v16 = v15.constructor;
new v16(v16);
const v20 = new Int16Array(3681);
for (const v21 in v20) {
}
gc();
