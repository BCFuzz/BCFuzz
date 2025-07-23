function f0(a1, a2, a3) {
    const o16 = {
        toString(a5, a6, a7) {
            const v8 = [this,this];
            const v10 = URIError();
            const v11 = v10.__proto__;
            try { v11.reverse(a3, v11, f0, f0, v10); } catch (e) {}
            const o13 = {
            };
            const v15 = new Proxy(v11, o13);
            v15.__proto__ = v8;
            return v15;
        },
    };
    return o16.toString();
}
f0(f0, f0, f0);
f0();
for (let i22 = 0, i23 = 10; i23--, i22 < i23;) {
}
gc();
