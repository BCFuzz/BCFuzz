const v2 = new Int8Array(6);
function f3() {
    return 6;
}
const o9 = {
    m(a5, a6, a7, a8) {
        Object.defineProperty(v2, 2, { get: f3, set: f3 });
        return 6;
    },
};
try { o9.m(); } catch (e) {}
gc();
