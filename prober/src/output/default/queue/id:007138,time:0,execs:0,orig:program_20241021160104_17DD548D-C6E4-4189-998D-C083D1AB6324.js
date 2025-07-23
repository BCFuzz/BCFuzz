const v2 = new Uint8ClampedArray(3, 3);
const t1 = v2.constructor;
const v4 = new t1();
const v5 = v4.toString();
const o7 = {
};
const v8 = o7.constructor;
try { v8.create(v5); } catch (e) {}
v8(-1000000000000.0).toString(3);
gc();
