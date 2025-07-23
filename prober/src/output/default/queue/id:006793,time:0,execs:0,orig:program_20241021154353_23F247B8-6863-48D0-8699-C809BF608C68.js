const v1 = new Uint32Array();
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F2(v1, Uint32Array, F2, Uint32Array);
function f9(a10, a11) {
    eval();
    const o19 = {
        valueOf(a15, a16, a17, a18) {
            return a10;
        },
    };
    return o19;
}
const v20 = f9(v1, f9);
const v21 = f9(v20, v8, F2, v1);
try { v21.p(v20, v1); } catch (e) {}
gc();
