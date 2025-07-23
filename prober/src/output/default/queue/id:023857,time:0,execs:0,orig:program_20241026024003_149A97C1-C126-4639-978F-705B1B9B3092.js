const v1 = new Float32Array(Float32Array);
const o2 = {
};
o2.getPrototypeOf = v1;
const v4 = new Proxy(Proxy, o2);
try { v4.bind(o2, v4, Float32Array, v1, Float32Array); } catch (e) {}
gc();
