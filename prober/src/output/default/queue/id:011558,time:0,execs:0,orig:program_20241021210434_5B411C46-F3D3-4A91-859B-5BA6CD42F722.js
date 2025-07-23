const v2 = new Uint8Array(567);
for (const v3 of v2) {
    for (let v4 = 0; v4 < 5; v4++) {
        const v6 = "p" && v4;
        v2[v6] = v6;
    }
}
gc();
