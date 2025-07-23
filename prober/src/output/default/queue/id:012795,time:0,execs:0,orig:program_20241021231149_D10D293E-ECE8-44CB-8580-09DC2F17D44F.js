function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
const v8 = new Float32Array(1024);
for (const v9 in v8) {
    v9.substring(15039, v5);
}
gc();
