function f0(a1, a2, a3) {
    const o17 = {
        toString(a5, a6, a7) {
            const v8 = [this,this];
            const v11 = URIError(a2).__proto__;
            let v12;
            try { v12 = v11.reverse(); } catch (e) {}
            try { v12.flat(); } catch (e) {}
            const o14 = {
            };
            const v16 = new Proxy(v11, o14);
            v16.__proto__ = v8;
            return v16;
        },
    };
    const v18 = o17.toString(f0);
    v18[1] = v18;
    return a3;
}
f0(f0, f0, f0);
f0();
gc();
