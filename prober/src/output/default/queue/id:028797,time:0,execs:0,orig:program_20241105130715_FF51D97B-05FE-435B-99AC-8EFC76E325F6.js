class C0 {
}
const v1 = new C0();
function f2(a3) {
    function f4() {
    }
    function F5() {
        if (!new.target) { throw 'must be called with new'; }
        const v9 = URIError(a3).__proto__;
        const o10 = {
        };
        function f11() {
            return f4;
        }
        Object.defineProperty(o10, "setPrototypeOf", { configurable: true, get: f11 });
        const v13 = new Proxy(v9, o10);
        v13.__proto__ = this;
    }
    new F5();
    return f4;
}
v1.constructor = f2;
const v15 = v1.constructor;
try { v15(); } catch (e) {}
gc();
