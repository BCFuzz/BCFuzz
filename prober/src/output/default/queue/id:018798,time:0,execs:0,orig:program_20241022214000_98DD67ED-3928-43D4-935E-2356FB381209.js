const v0 = [-1163898871,45746,512,1000,-4294967295];
const v2 = Error(v0);
function f3() {
    return this.parseInt(this);
}
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
Object.defineProperty(v2, "value", { configurable: true, enumerable: true, get: f3 });
function f16() {
    return v2;
}
const o17 = {
    "getOwnPropertyDescriptor": f16,
};
const v19 = new Proxy(v0, o17);
try { v19.pop(); } catch (e) {}
gc();
