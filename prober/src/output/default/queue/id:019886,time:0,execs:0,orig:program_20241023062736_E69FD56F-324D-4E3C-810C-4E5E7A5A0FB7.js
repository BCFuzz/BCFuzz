const v2 = new Uint32Array(Uint32Array, 7n, 7n);
const v3 = v2.indexOf();
const v4 = [4294967296,-1507112381];
const o5 = {
};
o5.deleteProperty = o5;
const v7 = new Proxy(v4, o5);
let v8;
try { v8 = v3(); } catch (e) {}
v7[7n] = v8;
try { v7.shift(7n, v7, Proxy, 7n, Uint32Array); } catch (e) {}
gc();
