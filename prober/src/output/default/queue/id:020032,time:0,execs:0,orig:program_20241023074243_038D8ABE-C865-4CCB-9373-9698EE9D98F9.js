function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const t7 = ("1716506719").constructor;
    const v12 = t7().toLocaleLowerCase();
    const v14 = new Int32Array(C2, a8, a7);
    const v17 = new Uint32Array(1003);
    for (const v18 in v17) {
        for (let v19 = 0; v19 < 5; v19++) {
            const v20 = v12 + 3943;
            v20[1];
            v14[v20] = v19;
        }
        try { C2.reject(v18, C2, v18, v18); } catch (e) {}
    }
}
new F4(F0, "1716506719", F4);
gc();
