const v2 = URIError().__proto__;
v2.message = v2;
const v4 = new Proxy(v2, v2);
const v5 = v4.message;
for (let [i16, i17] = (() => {
        function f7() {
            return f7;
        }
        function f8() {
            const v10 = new Proxy(WeakMap, v5);
            let v11;
            try { v11 = v10(v2, v10, v2, WeakMap); } catch (e) {}
            return v11;
        }
        Object.defineProperty(f7, Symbol.toPrimitive, { configurable: true, value: f8 });
        -3 >= f7;
        return [-3, 10];
    })();
    i16 < i17;
    i17--) {
}
gc();
