const v0 = [];
const o1 = {
};
function f2() {
}
Object.defineProperty(o1, "get", { configurable: true, enumerable: true, get: f2 });
const v4 = new Proxy(v0, o1);
v4.values;
gc();
