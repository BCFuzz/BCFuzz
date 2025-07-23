const v1 = new Int16Array();
const v2 = v1.buffer;
const o3 = {
};
const v5 = new Proxy(v2, o3);
try { v5.transfer(o3, v1, v1, v5, Proxy); } catch (e) {}
gc();
