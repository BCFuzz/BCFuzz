function f0() {
    return f0;
}
function f1(a2, a3) {
    return a2;
}
const v5 = new Int16Array();
const o6 = {
};
const v8 = new Proxy(f0, o6);
Object.defineProperty(v5, Int16Array, { configurable: true, enumerable: true, get: v8, set: f1 });
gc();
