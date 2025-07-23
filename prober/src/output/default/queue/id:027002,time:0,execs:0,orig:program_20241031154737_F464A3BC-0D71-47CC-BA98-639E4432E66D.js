const v0 = [-1000000000000.0,1000000000000.0,1000000.0,3.0,861498.0722507937];
const o2 = {
    get length() {
        Object.defineProperty(v0, "length", { configurable: true, enumerable: true, value: this });
        return v0;
    },
};
try { new Int16Array(o2); } catch (e) {}
gc();
