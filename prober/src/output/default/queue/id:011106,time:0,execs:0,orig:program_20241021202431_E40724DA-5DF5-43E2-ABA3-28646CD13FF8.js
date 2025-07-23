const v0 = [-9007199254740992,8819,-4096,10000,536870888,2147483649,937,65535,3,-45008];
function f1() {
    return f1;
}
const v2 = f1();
function f3(a4, a5) {
    return a4 < v0 ? a4 : v0;
}
v2[Symbol.toPrimitive] = f3;
const v10 = f1();
const v12 = new BigInt64Array();
try { v12.join(v10); } catch (e) {}
gc();
