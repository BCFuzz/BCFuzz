function f0() {
    return f0;
}
const v1 = [-61621,65535,13,-2147483648];
Object.defineProperty(v1, 6, { enumerable: true, value: v1 });
const v2 = v1.constructor;
const v3 = v2(f0, f0, v2, f0, f0);
const o4 = {
    __proto__: v1,
};
o4[6] = v3;
Object.defineProperty(o4, 6, { writable: true, value: f0 });
gc();
