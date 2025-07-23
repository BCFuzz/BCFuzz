const v0 = [-1073741824,1679806406,1,8,2147483649,256,-1073741824,10,268435441,-16846];
const v1 = [-7,-2147483649,-16,-14];
const o2 = {
};
const v4 = new Proxy(v1, o2);
v0.__proto__ = v4;
const v6 = new BigUint64Array();
const v7 = v6.constructor;
try { new v7(v0); } catch (e) {}
gc();
