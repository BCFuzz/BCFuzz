const v1 = /\u0060/v.source;
function f2(a3, a4) {
    return v1;
}
const v5 = new f2();
const v6 = v5.__defineSetter__;
try { v6.constructor(v1); } catch (e) {}
gc();
