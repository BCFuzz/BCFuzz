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
Object.defineProperty(Uint8Array, "toString", { writable: true, configurable: true, value: f6 });
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let v20 = 0; v20 < 5; v20++) {
    for (let v21 = 0; v21 < 25; v21++) {
    }
    const v22 = Uint8Array.toString();
    for (let v23 = 0; v23 < 25; v23++) {
    }
    const o24 = {
    };
    o24.constructor.create(v22);
}
gc();
