function f0() {
}
const o1 = {
};
function f2() {
    return f0;
}
Object.defineProperty(o1, "getOwnPropertyDescriptor", { get: f2 });
const v4 = new Proxy(Proxy, o1);
const v6 = this.constructor;
v6.assign(v6, v4);
gc();
