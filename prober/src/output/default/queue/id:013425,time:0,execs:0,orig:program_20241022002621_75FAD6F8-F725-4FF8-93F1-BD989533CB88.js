function f0(a1, a2) {
    const o3 = {
    };
    o3[536870887] = o3;
    const v4 = o3[536870887];
    v4.length = v4;
    return o3;
}
const v5 = f0(f0, f0);
const v6 = v5.constructor;
try { v6.assign(f0, v5); } catch (e) {}
gc();
