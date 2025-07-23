function f2() {
    return -65535n;
}
Object.defineProperty(Uint8Array, "toString", { writable: true, configurable: true, value: f2 });
for (let i6 = 0, i7 = 10;
    i6 < i7;
    (() => {
        const o11 = {
        };
        i7--;
    })()) {
}
for (let v15 = 0; v15 < 5; v15++) {
    for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
    }
    let v27 = 5n != f2 ? 5n : f2;
    v27 ||= -65535n;
}
for (let v28 = 0; v28 < 250; v28++) {
}
gc();
