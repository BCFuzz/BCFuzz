function f0(a1, a2) {
    const o3 = {
        ...a2,
        ...a1,
    };
    return a1;
}
const v4 = [-4096,-546180325,14589,268435440];
const v6 = new Proxy(v4, v4);
Object.defineProperty(v6, "getOwnPropertyDescriptor", { configurable: true, value: f0 });
const v7 = new Proxy(v6, v6);
try { v7.reverse(); } catch (e) {}
gc();
