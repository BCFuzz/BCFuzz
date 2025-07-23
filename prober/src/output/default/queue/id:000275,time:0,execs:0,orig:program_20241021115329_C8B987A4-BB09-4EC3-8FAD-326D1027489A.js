const v0 = [1073741824,-26526];
const o1 = {
};
function f2() {
    return f2;
}
Object.defineProperty(o1, "get", { writable: true, configurable: true, enumerable: true, value: f2 });
const v4 = new Proxy(v0, o1);
try { v4.toReversed(v4); } catch (e) {}
gc();
