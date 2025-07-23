class C1 {
}
const v2 = new C1();
const o3 = {
};
const v5 = new Proxy(v2, o3);
function f6() {
    Date(v5, v5, 1249, Date);
    return Date;
}
Object.defineProperty(RangeError, "toString", { writable: true, configurable: true, value: f6 });
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let v20 = 0; v20 < 5; v20++) {
    for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
    }
    const v31 = RangeError.toString();
    v31();
    const o33 = {
    };
    const v36 = o33.constructor.create(v31).now;
    try { new v36(); } catch (e) {}
}
for (let v38 = 0; v38 < 250; v38++) {
}
gc();
