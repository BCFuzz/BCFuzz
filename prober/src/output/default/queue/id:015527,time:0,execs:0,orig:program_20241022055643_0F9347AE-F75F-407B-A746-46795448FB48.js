function f0(a1) {
    return a1;
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
F2.toJSON = f0;
const v8 = Array();
v8[1858] = F2;
const v10 = v8["toReversed"]();
const o15 = {
    toString(a12) {
        JSON.stringify(v10);
    },
};
Uint32Array[0] = o15;
new Uint32Array(Uint32Array);
gc();
