function f0(a1, a2) {
    const o3 = {
    };
    return o3;
}
const v4 = f0();
v4[Symbol.toPrimitive] = f0;
function f7(a8) {
    const v11 = new Int32Array(681);
    for (let v12 = 0; v12 < 5; v12++) {
        createGlobalObject().Atomics.store(v11, v12, a8);
    }
    return f7;
}
try { f7(v4); } catch (e) {}
gc();
