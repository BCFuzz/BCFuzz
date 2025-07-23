const o0 = {
};
class C1 {
}
const v2 = new C1();
const v3 = v2.constructor;
for (let v4 = 0; v4 < 250; v4++) {
    const v5 = [];
    v5[Symbol.isConcatSpreadable] = v3;
    v5.concat();
}
gc();
