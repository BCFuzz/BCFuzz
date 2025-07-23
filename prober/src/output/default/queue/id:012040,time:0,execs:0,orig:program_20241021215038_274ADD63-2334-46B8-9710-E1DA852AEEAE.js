const o0 = {
};
function f1() {
    return o0;
}
class C2 {
}
const v3 = new C2();
function f4(a5) {
    return a5;
}
Object.defineProperty(v3, 4, { enumerable: true, set: f4 });
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = [F6,F6,F6];
    function f12(a13, a14) {
        const o15 = {
        };
        function f16() {
            return f1;
        }
        function f17(a18) {
            return v3;
        }
        Object.defineProperty(o15, "set", { configurable: true, enumerable: true, get: f16, set: f17 });
        const v20 = new Proxy(v3, o15);
        v20[4] = v20;
        return a10;
    }
    v11.constructor = f12;
    class C22 extends v11.constructor {
    }
    new C22();
}
new F6(f4, o0, o0);
gc();
