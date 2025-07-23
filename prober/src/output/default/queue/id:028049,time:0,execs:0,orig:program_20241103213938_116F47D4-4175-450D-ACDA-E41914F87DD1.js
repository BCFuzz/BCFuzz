const v1 = [-1000000000000.0,1000000000000.0,1000000.0,3.0,861498.0722507937];
const o3 = {
    get length() {
        Object.defineProperty(v1, "length", { configurable: true, enumerable: true, value: this });
        return this;
    },
};
try { new Int8Array(o3); } catch (e) {}
gc();
