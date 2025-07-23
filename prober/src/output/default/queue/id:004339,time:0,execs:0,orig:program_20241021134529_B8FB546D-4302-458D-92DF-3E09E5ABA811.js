const v1 = Date(Date);
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try { a5.call(); } catch (e) {}
}
new F2(v1, F2);
const v8 = new F2();
new F2(v8, F2);
const v12 = new Uint8ClampedArray(1262);
for (const v13 in v12) {
}
gc();
