const v1 = Array();
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F2();
Object.defineProperty(v8, 2, { enumerable: true, get: Array });
v1.__proto__ = v8;
gc();
