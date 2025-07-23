function f0() {
    return f0;
}
const v1 = f0();
const v2 = f0();
const v4 = new Date();
function f5(a6, a7, a8) {
    const o9 = {
        __proto__: a8,
    };
    return o9;
}
const v11 = f5(v1, v4, f5(v1, v2, v4));
try { v11.toJSON(v11, v1, f0, v4); } catch (e) {}
gc();
