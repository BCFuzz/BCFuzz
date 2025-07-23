const v2 = new Uint8ClampedArray(2502);
for (const v3 in v2) {
    const v4 = `
        const v6 = new WeakSet();
        true === v6;
    `;
    eval(v4);
}
gc();
