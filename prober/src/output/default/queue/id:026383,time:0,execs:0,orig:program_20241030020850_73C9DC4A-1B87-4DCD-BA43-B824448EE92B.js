const v2 = new Uint32Array(1000);
for (const v3 in v2) {
    const v4 = /(?:a+){0,0}U(?:ab)+/mis;
    v4.test(v4);
}
gc();
