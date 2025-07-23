const v1 = [-3463,-16,4294967296,127,-6697,51995,64,10];
const o2 = {
};
const v4 = new Proxy(v1, o2);
v1.length = 1024;
new Uint8ClampedArray(v4);
gc();
