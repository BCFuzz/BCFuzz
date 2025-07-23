const v0 = [-1000000000.0,1e-15,0.5930054870755997,9.972188740254595e+305];
for (let v1 = 0; v1 < 5; v1++) {
    const v3 = new Uint16Array(Uint16Array);
    const v4 = new Uint16Array(v3);
    Object.defineProperty(v4, "p4", { value: v0 });
    for (let v5 = 0; v5 < 10; v5++) {
        v4["p" + v5] = v5;
    }
    for (const v8 in v4) {
        v3[v8];
        for (let v10 = 0; v10 < 250; v10++) {
        }
    }
}
gc();
