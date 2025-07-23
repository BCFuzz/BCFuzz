const v2 = /(?<a>.)foo[z]*/dv;
const o3 = {
    __proto__: v2,
};
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(a9, Uint32Array, 56491, a8); } catch (e) {}
    a9.unicodeSets;
}
new F4(F4, F4, o3, v2);
gc();
