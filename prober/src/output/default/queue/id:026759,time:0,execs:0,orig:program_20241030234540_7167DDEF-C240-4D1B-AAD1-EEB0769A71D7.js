function f0(a1, a2, a3) {
    const o15 = {
        toString(a5, a6, a7) {
            const v8 = [this];
            const v10 = URIError();
            const v11 = v10.__proto__;
            const v13 = new Proxy(v11, v11);
            try { v13.flat(); } catch (e) {}
            v13.__proto__ = v8;
            return v10;
        },
    };
    return o15.toString(o15, f0, f0, f0);
}
const v17 = f0();
f0(v17, v17, v17);
gc();
