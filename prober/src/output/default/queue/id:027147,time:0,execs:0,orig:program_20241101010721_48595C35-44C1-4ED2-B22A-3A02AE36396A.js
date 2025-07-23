const o2 = {
    "maxByteLength": 129,
};
const v4 = new ArrayBuffer(129, o2);
const v6 = new Int16Array(v4);
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    a9[Symbol.species];
    for (let v15 = 0; v15 < 250; v15++) {
    }
    this.b = a11;
}
new F7(o2);
new F7(v6);
gc();
