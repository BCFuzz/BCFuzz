function f2(a3) {
    const v4 = [-4.0,-3.0,1000000000.0,-1.7976931348623157e+308,-4.2267025509389794e+307,0.7757437941691913];
    Object.defineProperty(v4, -2147483648, { configurable: true, enumerable: true, value: a3 });
    v4[-1 << -1] |= -1;
    return -1;
}
for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
}
const v18 = new Int8Array(255);
for (const v19 in v18) {
    class C20 {
    }
    const v21 = new C20();
    v21.constructor = f2;
    const t14 = v21.constructor;
    t14();
}
gc();
