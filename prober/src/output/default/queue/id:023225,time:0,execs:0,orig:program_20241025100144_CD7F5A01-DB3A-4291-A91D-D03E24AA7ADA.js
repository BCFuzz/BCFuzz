const o1 = {
};
function f2(a3) {
    return a3;
}
Object.defineProperty(o1, "get", { writable: true, value: f2 });
const v5 = new Proxy(WeakRef, o1);
try { new v5(f2); } catch (e) {}
gc();
