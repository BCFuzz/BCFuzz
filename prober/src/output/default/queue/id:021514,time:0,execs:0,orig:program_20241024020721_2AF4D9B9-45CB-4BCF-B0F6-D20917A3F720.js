const o1 = {
};
function f2(a3) {
    return f2;
}
Object.defineProperty(o1, "get", { writable: true, value: f2 });
const v5 = new Proxy(Uint8ClampedArray, o1);
try { new v5(Proxy); } catch (e) {}
gc();
