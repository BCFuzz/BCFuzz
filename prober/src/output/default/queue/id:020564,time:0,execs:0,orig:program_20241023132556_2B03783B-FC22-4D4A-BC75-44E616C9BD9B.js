function f1() {
    return Int32Array();
}
const v4 = (-9223372036854775807).__proto__;
const o5 = {
};
const v7 = new Proxy(v4, o5);
v7[Symbol.toPrimitive] = f1;
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const o32 = {
    n(a22, a23, a24) {
        const v25 = this;
        const v27 = v25.Intl.Locale;
        function f28() {
            return a23;
        }
        function f29(a30) {
            return a24;
        }
        Object.defineProperty(v27, "script", { configurable: true, enumerable: true, get: f28, set: f29 });
        new v27("aWqBm", v27);
        return a24;
    },
};
const v33 = o32.n;
try { v33(v4, v4); } catch (e) {}
gc();
