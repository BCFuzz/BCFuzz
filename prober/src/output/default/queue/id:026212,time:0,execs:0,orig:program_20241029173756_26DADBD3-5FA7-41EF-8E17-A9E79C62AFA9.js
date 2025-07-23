function f1() {
    return 37437;
}
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = URIError(F2).__proto__;
    const o7 = {
    };
    function f8() {
        return f1;
    }
    Object.defineProperty(o7, "setPrototypeOf", { configurable: true, get: f8 });
    const v10 = new Proxy(v6, o7);
    v10.__proto__ = this;
    for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
    }
}
new F2();
gc();
