class C0 {
}
const v1 = new C0();
const v3 = [0.06333842685810909,9.654102366361002];
Object.defineProperty(v3, "p", { writable: true, configurable: true, enumerable: true, value: "oYa7" });
for (let i6 = 0, i7 = 10;
    i6 < i7;
    (() => {
        for (let v11 = 0; v11 < 5; v11++) {
            let v12 = "p";
            const v13 = v12 + i7;
            v12 in v3;
            v12 = v1;
            v3[v13] = v11;
        }
        i7--;
        for (let v16 = 0; v16 < 5; v16++) {
            v3.d = v16;
            delete v3.d;
        }
    })()) {
}
gc();
