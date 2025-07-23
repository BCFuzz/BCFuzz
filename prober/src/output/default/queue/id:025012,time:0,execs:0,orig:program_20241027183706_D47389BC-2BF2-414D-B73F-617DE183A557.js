function f0(a1, a2, a3) {
    const o15 = {
        toString(a5, a6, a7) {
            const v8 = [this];
            const v11 = URIError().__proto__;
            const o12 = {
            };
            const v14 = new Proxy(v11, o12);
            v14.__proto__ = v8;
            return v14;
        },
    };
    const v16 = o15.toString(f0, f0, a2);
    v16.unshift(v16);
    return o15;
}
f0(f0, f0, f0);
gc();
