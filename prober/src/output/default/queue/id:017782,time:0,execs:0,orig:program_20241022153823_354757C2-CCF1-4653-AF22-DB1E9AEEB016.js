const v1 = new Float64Array();
const v3 = [17428,39892,10000,65536,7,-268435456,-62031];
v3.fill(v1);
const o5 = {
};
const v7 = new Proxy(v3, o5);
const v8 = new Uint16Array();
v8.subarray(Proxy, v7);
const v11 = this.constructor;
try { v11.defineProperties(v8, v7); } catch (e) {}
gc();
