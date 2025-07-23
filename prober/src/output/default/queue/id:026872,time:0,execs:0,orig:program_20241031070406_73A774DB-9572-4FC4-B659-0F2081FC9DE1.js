function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
v2[F0] = 1645;
for (let v5 = 0; v5 < 10; v5++) {
    v5 < 3;
    v5++;
}
gc();
const v11 = [-2];
new Uint8Array(v11);
const v16 = createGlobalObject().WebAssembly;
for (let i19 = 0, i20 = 10;
    (() => {
        const v21 = i19 < i20;
        v21 && v21;
        return v21;
    })();
    i20--) {
}
v16.compile().then(v11, createGlobalObject);
gc();
