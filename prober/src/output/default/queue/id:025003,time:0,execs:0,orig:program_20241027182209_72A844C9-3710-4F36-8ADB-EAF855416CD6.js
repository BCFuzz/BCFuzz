function f0(a1, a2, a3) {
    const o15 = {
        toString(a5, a6, a7) {
            const v8 = [this];
            const v11 = URIError(a5).__proto__;
            const o12 = {
            };
            const v14 = new Proxy(v11, o12);
            v14.__proto__ = v8;
            return v14;
        },
    };
    return o15.toString();
}
const v17 = f0(f0, f0, f0);
v17.pop(f0, v17, v17, v17);
for (let i21 = 0, i22 = 10; i22--, i21 < i22;) {
}
gc();
