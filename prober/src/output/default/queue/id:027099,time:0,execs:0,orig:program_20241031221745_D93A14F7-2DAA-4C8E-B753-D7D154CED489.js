const v3 = Reflect.construct(Uint16Array, [Reflect,Reflect,Reflect,Reflect,Reflect]);
const v5 = Symbol.iterator;
const o6 = {
};
function f7() {
    function f8(a9) {
        return a9;
    }
    return f8;
}
function f10(a11) {
    return f10;
}
Object.defineProperty(o6, "set", { get: f7, set: f10 });
const v13 = new Proxy(Symbol, o6);
v13[v3] = v5;
gc();
