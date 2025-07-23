function f0(a1, a2, a3) {
    const o17 = {
        toString(a5, a6, a7) {
            const v8 = [a7];
            const v11 = URIError(a7).__proto__;
            let v12;
            try { v12 = v11.reverse(f0, a7); } catch (e) {}
            try { v12.unshift(a7, f0, v12, f0); } catch (e) {}
            const o14 = {
            };
            const v16 = new Proxy(v11, o14);
            v16.__proto__ = v8;
            return a2;
        },
    };
    o17.toString(o17, f0, a3);
    return a1;
}
f0(f0, f0, f0);
f0();
for (let i23 = 0, i24 = 10; i24--, i23 < i24;) {
}
gc();
