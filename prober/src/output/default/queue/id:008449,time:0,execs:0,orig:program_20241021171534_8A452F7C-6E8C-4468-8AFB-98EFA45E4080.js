const v2 = new Uint16Array(512);
for (let i = 0; i < 5; i++) {
    const v4 = new SharedArrayBuffer();
    const v6 = new DataView(v4);
    v6[219] = v6;
}
for (const v7 of v2) {
}
gc();
