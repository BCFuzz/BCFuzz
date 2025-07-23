function f0(a1) {
    const o2 = {
    };
    return o2;
}
const o4 = {
};
Object.defineProperty(o4, "defineProperty", { configurable: true, value: f0 });
const v6 = new Proxy(Int16Array, o4);
v6.d = v6;
gc();
