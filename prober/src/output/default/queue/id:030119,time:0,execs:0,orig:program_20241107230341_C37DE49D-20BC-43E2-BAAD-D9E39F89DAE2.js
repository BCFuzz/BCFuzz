const v2 = new Int8Array(255);
for (const v3 in v2) {
    const v6 = `
        -9223372036854775808 / -1000000000.0;
        /\u{12345}/myvis;
    `;
    v6.split().flatMap(parseInt);
}
gc();
