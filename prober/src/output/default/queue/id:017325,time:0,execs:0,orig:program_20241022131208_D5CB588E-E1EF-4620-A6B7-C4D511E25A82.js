const v1 = WeakMap.bind(WeakMap, WeakMap, WeakMap, WeakMap);
const v2 = [-1163898871,45746,512,1000,-4294967295];
const o3 = {
};
o3.deleteProperty = v1;
const v5 = new Proxy(v2, o3);
try { v5.pop(); } catch (e) {}
gc();
