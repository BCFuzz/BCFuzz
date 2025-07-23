const v1 = new Float32Array();
const o2 = {
    __proto__: v1,
};
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    try { Proxy.apply(o2, o2); } catch (e) {}
}
new F3(F3, F3);
gc();
