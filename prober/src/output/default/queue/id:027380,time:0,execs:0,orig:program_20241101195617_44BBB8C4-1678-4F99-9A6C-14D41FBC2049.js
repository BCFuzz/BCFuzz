function f1() {
    return f1;
}
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const o12 = {
};
function f13() {
    for (let v15 = 0; v15 < 25; v15++) {
        function F16() {
            if (!new.target) { throw 'must be called with new'; }
            function f18(a19) {
                const v20 = new Float64Array(58766);
                return v20;
            }
            const o22 = {
                "apply": f1,
                "call": Date,
                "construct": Date,
                "defineProperty": Date,
                "deleteProperty": f18,
                "getOwnPropertyDescriptor": f18,
                "getPrototypeOf": Date,
                "has": f18,
            };
            new Proxy(o12, o22);
            Object.defineProperty(this, "c", { configurable: true, set: f18 });
            this.c = -256;
        }
        new F16();
        new F16();
    }
    return f1;
}
f13();
f13();
f13();
gc();
