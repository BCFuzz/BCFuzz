const v1 = [Int16Array];
const o2 = {
};
const v4 = new Proxy(v1, o2);
const v5 = new Int16Array(v4);
const t5 = v5.constructor;
new t5(v4);
gc();
