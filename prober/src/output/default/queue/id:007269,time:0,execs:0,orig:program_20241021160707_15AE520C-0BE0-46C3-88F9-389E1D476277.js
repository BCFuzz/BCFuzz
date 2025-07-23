function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = createGlobalObject().Float16Array;
new v6(F0, v6);
for (let v8 = 0; v8 < 250; v8++) {
}
gc();
