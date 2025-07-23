class C0 {
}
function f1(a2) {
    const v3 = a2.__proto__;
    const o4 = {
    };
    const v6 = new Proxy(v3, o4);
    for (let i9 = 0, i10 = 10;
        (() => {
            const v11 = i9 < i10;
            for (const v12 in v6) {
            }
            return v11;
        })();
        i10--) {
    }
    return a2;
}
C0[Symbol.toPrimitive] = f1;
class C20 extends C0 {
    static {
        let v21 = this;
        --v21;
    }
}
gc();
