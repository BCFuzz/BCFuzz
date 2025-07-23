function f0() {
    const o3 = {
        ..."394",
        ["394"]: 255,
    };
    return o3;
}
const v4 = f0();
const v5 = f0();
const v6 = f0();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = this.constructor;
    try { new v11(this, a10); } catch (e) {}
    a10[394] = a10;
    this.e = v5;
}
new F7(v4, v5);
new F7(v5, v5);
const v15 = new F7(v6, v4);
const v17 = new BigInt64Array(v6, BigInt64Array, BigInt64Array);
const t21 = v17.constructor;
new t21(v5);
const t23 = Array.bind();
t23(Array);
const v24 = new Float32Array();
v24.set(v24);
const v26 = v24.reverse();
try { v26.toSorted(v15); } catch (e) {}
gc();
