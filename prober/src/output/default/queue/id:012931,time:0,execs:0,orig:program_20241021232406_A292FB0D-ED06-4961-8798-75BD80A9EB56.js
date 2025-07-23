function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = v2.g;
for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
    const v16 = createGlobalObject().Atomics;
    try { v16.or(v3, createGlobalObject, v16); } catch (e) {}
    for (let v18 = 0; v18 < 25; v18++) {
    }
}
gc();
