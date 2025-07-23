function f0(a1, a2) {
    Object.defineProperty(a1, "ownKeys", { writable: true, value: a1 });
    const o4 = {
        ...a1,
        get c() {
            return this;
        },
    };
    return o4;
}
const v5 = [-4096,-546180325,14589,268435440];
const v7 = new Proxy(v5, v5);
Object.defineProperty(v7, "getOwnPropertyDescriptor", { configurable: true, value: f0 });
const v8 = new Proxy(v7, v7);
try { v8.reverse(Proxy, v8, v7); } catch (e) {}
for (let i12 = 0, i13 = 10; i12 !== i13; i13--) {
}
gc();
