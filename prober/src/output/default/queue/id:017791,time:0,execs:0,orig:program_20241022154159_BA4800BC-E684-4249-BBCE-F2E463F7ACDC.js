const v1 = new WeakSet();
const v2 = [v1];
function f3(a4, a5) {
    try { v2.splice(v2); } catch (e) {}
    return a5;
}
v2[Symbol.toPrimitive] = f3;
const o14 = {
    [v2](a10, a11, a12, a13) {
    },
};
gc();
