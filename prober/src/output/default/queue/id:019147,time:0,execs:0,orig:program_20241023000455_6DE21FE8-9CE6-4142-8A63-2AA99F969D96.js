function f0(a1, a2) {
    return a1;
}
const v3 = [-4096,-546180325,14589,268435440];
const v5 = new Proxy(v3, v3);
function f6() {
    return f0(Proxy);
}
v5.set = f6;
Object.defineProperty(v5, "getOwnPropertyDescriptor", { configurable: true, value: f0 });
const v8 = new Proxy(v5, v5);
try { v8.reverse(); } catch (e) {}
gc();
