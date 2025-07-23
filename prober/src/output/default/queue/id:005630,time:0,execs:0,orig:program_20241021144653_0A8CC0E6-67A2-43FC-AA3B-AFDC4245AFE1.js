const v3 = new Float32Array(128);
const v4 = v3.propertyIsEnumerable(9);
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const t4 = a8.constructor;
    new t4(a7);
}
new F5(v4, v4);
gc();
