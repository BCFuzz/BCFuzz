const v3 = new Uint8Array(3129);
for (const v4 in v3) {
    let v5 = 536870887;
    for (let i = 0; i < 5; i++) {
        const v7 = v5++ === -2147483648;
        v7 || v7;
    }
}
gc();
