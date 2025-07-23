const v1 = new Map();
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = this?.constructor;
    try { new v13(-9007199254740990, a10, a11); } catch (e) {}
    a11 * a11;
    a12 + a12;
    this.c = a12;
}
const v17 = new F7(296231.88682887075, v1, -25910);
new F7(1.08862094885021e+308, v17, -25910);
new F7(49992.98714530934, -9007199254740990, -25910);
gc();
