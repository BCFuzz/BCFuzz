function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
function f3() {
    return v2;
}
class C4 {
    static {
        const o6 = {
            "defineProperty": f3,
        };
        const v8 = new Proxy(this, o6);
        v8[Symbol.iterator] = f0;
    }
}
gc();
