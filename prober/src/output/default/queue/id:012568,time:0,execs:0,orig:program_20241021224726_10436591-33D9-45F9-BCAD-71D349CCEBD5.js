let v0 = [0.18889975918645152,-3.0,-480776.4972616355,6.35612500584149e+307,-6.972029675506799,-144585.27502470324,-1e-15];
function f1(a2, a3) {
    function F4(a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        const o11 = {
            "maxByteLength": 9,
        };
        const v12 = new SharedArrayBuffer(F4, o11);
        const v14 = new Int8Array(v12);
        v14.fill(v14);
    }
    new F4(a2, v0, a3);
}
const v18 = Symbol.toPrimitive;
v0[v18] = f1;
const o25 = {
    p(a20, a21, a22, a23) {
        ++v0;
        return a23;
    },
};
o25.p(v18, v18, f1, Symbol, o25);
gc();
