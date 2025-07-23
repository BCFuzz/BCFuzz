function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 extends F0 {
}
const v5 = new C4();
for (let [i14, i15] = (() => {
        const v9 = new Uint8Array();
        createGlobalObject().WebAssembly.instantiate(v9, v5);
        return [0, 10];
    })();
    i14 != i15;
    i15--) {
}
gc();
