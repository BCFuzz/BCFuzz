function f0(a1, a2) {
    return a1;
}
const v3 = [-4096,-546180325,14589,268435440];
const v5 = new Proxy(v3, v3);
Object.defineProperty(v5, "getOwnPropertyDescriptor", { configurable: true, value: f0 });
const v6 = new Proxy(v5, v5);
try { v6.reverse(f0, v5); } catch (e) {}
gc();
