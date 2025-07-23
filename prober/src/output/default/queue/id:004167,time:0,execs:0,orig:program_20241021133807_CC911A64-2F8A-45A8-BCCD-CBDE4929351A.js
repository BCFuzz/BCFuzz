const v1 = /a[a-z]*/mdygsu;
function f2(a3) {
    return v1;
}
v1[Symbol.toPrimitive] = f2;
try { v1.compile(65536, v1); } catch (e) {}
gc();
