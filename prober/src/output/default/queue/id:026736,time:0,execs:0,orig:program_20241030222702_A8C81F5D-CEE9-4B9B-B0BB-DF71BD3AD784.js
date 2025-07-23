function f0(a1, a2, a3) {
    const o14 = {
        toString(a5, a6, a7) {
            const v8 = [this];
            const v11 = URIError().__proto__;
            const v13 = new Proxy(v11, v11);
            v13.__proto__ = v8;
            return v13;
        },
    };
    return o14.toString(f0);
}
f0().pop();
gc();
