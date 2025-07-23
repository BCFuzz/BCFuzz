const v0 = [NaN,-Infinity,NaN,2.2250738585072014e-308,8.345946272449428,4.0,4.0,2.220446049250313e-16,5.0,-801009.6628115531];
const v1 = /oa{z}/dgis;
const o2 = {
};
o2.getPrototypeOf = v0;
const v4 = new Proxy(v1, o2);
function f5(a6) {
    function F7(a9) {
        if (!new.target) { throw 'must be called with new'; }
        this.isPrototypeOf(v4);
    }
    new F7();
    return v4;
}
try { f5(); } catch (e) {}
gc();
