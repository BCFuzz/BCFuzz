function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = typeof a10 === a9;
    v12 && v12;
    for (let v14 = 0; v14 < 1000; v14++) {
    }
    a9.f = 1323282677n;
}
const v15 = new F7(-2130n);
const t13 = v15.constructor;
new t13(v4);
gc();
