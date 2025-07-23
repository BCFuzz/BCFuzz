function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
const v5 = new F0();
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const o12 = {
    };
    const v14 = new Proxy(v4, o12);
    v5.__proto__ = v14;
    for (let v15 = 0; v15 < 50; v15++) {
    }
}
const v16 = new F6();
const v17 = v16.constructor;
new v17();
new F6(F6, v5, v16, v17);
gc();
