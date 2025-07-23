const v1 = createGlobalObject();
const v2 = v1.Float16Array;
const v3 = new v2(v1, v2);
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    new Uint16Array(v3);
}
new F4();
gc();
