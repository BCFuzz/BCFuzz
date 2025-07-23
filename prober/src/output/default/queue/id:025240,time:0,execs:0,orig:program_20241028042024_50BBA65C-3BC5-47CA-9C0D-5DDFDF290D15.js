function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
for (let v4 = 0; v4 < 25; v4++) {
    const o5 = {
    };
    function f6(a7) {
        a7.toString();
        const v10 = new Uint32Array(a7, a7, v4);
        return v10;
    }
    o5.set = f6;
    const v12 = new Proxy(o5, o5);
    function f13() {
        return v3;
    }
    function f14(a15) {
        return F0;
    }
    Object.defineProperty(v12, Symbol.toStringTag, { enumerable: true, get: f13, set: f14 });
    v12.get = f6;
    v12.set(v3);
}
gc();
