for (let i2 = -3, i3 = 10; --i3, i2 < i3;) {
}
const t2 = createGlobalObject().Float16Array;
const v13 = new t2();
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    const v18 = new Float64Array(v13.buffer);
    v18.set(v13);
}
new F14();
gc();
