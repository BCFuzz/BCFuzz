const o2 = {
};
const v4 = new Proxy(Map, o2);
const v6 = v4 != Proxy ? v4 : Set;
const v8 = new Int8Array(v6);
v8.sort(v6);
gc();
