const v2 = ["boolean"];
const v4 = Date();
function f5() {
    return v4;
}
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    v12.prototype = v12;
    new v12(8n);
}
const v14 = new F7(undefined, undefined, v2);
const v17 = 7 >> 7;
function f20(a21, a22) {
    return v14;
}
function f23(a24) {
    f5 ** 8n;
    return a24;
}
try { f23(); } catch (e) {}
const v28 = f20().constructor;
v28.d = v2;
const v29 = new v28();
const v30 = v29.constructor;
try { v30(f20, v4, v17); } catch (e) {}
gc();
