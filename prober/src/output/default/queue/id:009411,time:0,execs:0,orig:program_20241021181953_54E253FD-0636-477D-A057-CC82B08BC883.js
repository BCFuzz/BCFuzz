const v1 = [1000000000.0,-2.0];
const o2 = {
    "set": Number,
};
const v4 = new Proxy(v1, o2);
v4.h = v4;
gc();
