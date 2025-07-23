function f0() {
    return Date;
}
Object.defineProperty(Uint8Array, "toString", { writable: true, configurable: true, value: f0 });
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
for (let v13 = 0; v13 < 5; v13++) {
    for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
    }
    const v24 = Uint8Array.toString();
    const o25 = {
    };
    o25.constructor.create(v24);
}
for (let v28 = 0; v28 < 250; v28++) {
}
gc();
