function f0(a1, a2, a3) {
    let v4;
    try { v4 = a3(); } catch (e) {}
    const o17 = {
        toString(a6, a7, a8) {
            const v9 = [this];
            const v12 = URIError(a3).__proto__;
            v12[1] = v12;
            const o13 = {
            };
            const v15 = new Proxy(v12, o13);
            v15.toLocaleString();
            v15.__proto__ = v9;
            return v15;
        },
    };
    const v18 = o17.toString();
    v18.unshift(v18);
    return v4;
}
f0(f0, f0, f0);
gc();
