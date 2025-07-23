const v1 = /a./dvg;
function f2() {
    return Date;
}
function f3(a4) {
    return v1;
}
Object.defineProperty(v1, Symbol.toPrimitive, { configurable: true, get: f2, set: f3 });
const v9 = ([[v1]]).toString();
function f11() {
    ("n").fontcolor();
    const t10 = Date().constructor;
    const v16 = t10();
    const v17 = v16.toLocaleLowerCase();
    const v19 = new Int32Array();
    for (let v20 = 0; v20 < 5; v20++) {
        v19[v17 + v9] = v20;
    }
    return v16;
}
const v23 = new Int32Array(257);
v23.map(f11);
gc();
