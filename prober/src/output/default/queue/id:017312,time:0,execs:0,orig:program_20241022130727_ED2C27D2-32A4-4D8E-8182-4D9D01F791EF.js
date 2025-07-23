for (let i2 = -3, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        const v7 = createGlobalObject().Atomics;
        try { v7.exchange(); } catch (e) {}
        return v4;
    })();
    i2++, i3++, i3--) {
}
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    const v32 = this?.constructor;
    try { new v32(); } catch (e) {}
}
new F28();
const v37 = new Int32Array();
function f38(a39, a40, a41, a42) {
}
v37.map(f38);
gc();
