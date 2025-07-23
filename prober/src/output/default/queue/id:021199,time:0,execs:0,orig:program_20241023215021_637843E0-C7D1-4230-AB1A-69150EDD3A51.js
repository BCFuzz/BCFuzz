const v2 = new Uint8Array(567);
for (const v3 of v2) {
    for (let v4 = 0; v4 < 5; v4++) {
        const v6 = new Uint16Array(v3, v4);
        with (v6) {
        }
    }
}
gc();
