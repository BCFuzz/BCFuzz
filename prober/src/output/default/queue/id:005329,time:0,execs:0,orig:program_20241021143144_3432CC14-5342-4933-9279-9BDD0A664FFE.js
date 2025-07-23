const v0 = [-1000000000.0,1000.0,-1000.0,1000000000.0,990848.5493455029,3.0,392701.13766166684,2.543995245289311e+307];
function f1() {
    return v0;
}
function f2(a3, a4) {
    return f1;
}
const v6 = ([1000,861464607,1073741824,14,28302,129,64736]).filter(f2);
v6[Symbol.toPrimitive] = f1;
try { JSON.parse(v6); } catch (e) {}
gc();
