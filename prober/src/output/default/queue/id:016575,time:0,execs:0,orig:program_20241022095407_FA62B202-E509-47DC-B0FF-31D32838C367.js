const v1 = new Float32Array(Float32Array, Float32Array, Float32Array);
const v2 = `
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        try { new a7(); } catch (e) {}
    }
    new F3(F3, F3, F3);
`;
const t8 = eval(v2).constructor;
new t8(v1, v2, eval);
for (let i17 = 10, i18 = 10; -13369 < i18; i18--) {
}
gc();
