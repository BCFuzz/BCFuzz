function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const t3 = createGlobalObject().Float16Array;
const v7 = new t3(F0);
class C8 {
}
const v10 = new Float32Array();
const v12 = Proxy.revocable(v10, C8);
class C13 {
    [v7] = v12;
}
gc();
