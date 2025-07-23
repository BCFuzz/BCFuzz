class C0 {
}
const v1 = new C0();
const v3 = `
    const o4 = {
    };
    class C5 {
    }
    const v7 = [v1,,o4,,Uint32Array];
    try { v7.reduceRight(C0, v1); } catch (e) {}
`;
eval(v3);
gc();
