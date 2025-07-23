function f0() {
    return f0;
}
const v1 = f0();
const v2 = f0();
const v4 = new Date();
function f5(a6) {
    return a6;
}
v4.valueOf = f5;
function f7(a8, a9, a10) {
    const o11 = {
        __proto__: a10,
    };
    return o11;
}
const v13 = f7(v1, v4, f7(v1, v2, v4));
try { v13.toJSON(v1, v13); } catch (e) {}
gc();
