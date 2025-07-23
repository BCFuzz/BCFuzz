function f0(a1, a2) {
    const o3 = {
        __proto__: a1,
    };
    return o3;
}
const v4 = f0(f0);
const v6 = new Int32Array();
try { v6.join(v4); } catch (e) {}
gc();
