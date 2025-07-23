function f1(a2, a3, a4) {
    try { a2(a4, a2); } catch (e) {}
    const v6 = a3.prototype;
    try { v6.constructor(Uint8ClampedArray, a2); } catch (e) {}
    const o19 = {
        toString(a9, a10, a11) {
            const v12 = [v6,v6,v6,v6,v6];
            const v15 = URIError(a2).__proto__;
            const o16 = {
            };
            const v18 = new Proxy(v15, o16);
            v18.__proto__ = v12;
            return v18;
        },
    };
    const v20 = o19.toString(o19, o19, a3);
    const v22 = v20.keys().next();
    return v20.unshift(v22, v22, Uint8ClampedArray, v22);
}
f1(f1, f1, f1);
gc();
