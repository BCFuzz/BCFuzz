const v1 = [0.06333842685810909,9.654102366361002];
Object.defineProperty(v1, "p", { writable: true, configurable: true, enumerable: true, value: "oYa7" });
for (let i4 = 0, i5 = 10;
    i4 < i5;
    (() => {
        for (let v9 = 0; v9 < 5; v9++) {
            const v11 = "p" + i5;
            "p" in v1;
            v1[v11] = v9;
        }
        i5--;
        for (let v14 = 0; v14 < 5; v14++) {
            v1.d = v14;
            delete v1.d;
        }
    })()) {
}
gc();
