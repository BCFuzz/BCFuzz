function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = Array();
v7[1858] = F1;
const v9 = v7["toReversed"]();
v9.fill(268435439);
const o15 = {
    toString(a12) {
        return JSON.stringify(v9);
    },
};
Uint32Array[0] = o15;
new Uint32Array(Uint32Array);
gc();
