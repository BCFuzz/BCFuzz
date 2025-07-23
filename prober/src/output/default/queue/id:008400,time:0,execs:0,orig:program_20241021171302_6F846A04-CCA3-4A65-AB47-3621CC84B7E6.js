class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
const v3 = new v2(v1);
const v4 = v3.isConcatSpreadable;
const v6 = new Float32Array(v1);
const v7 = v6.sort(v2);
v7.sort(C0, v7).toSorted(v4);
gc();
