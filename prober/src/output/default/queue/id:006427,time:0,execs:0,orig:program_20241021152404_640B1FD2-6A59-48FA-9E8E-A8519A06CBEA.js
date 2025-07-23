for (let v0 = 0; v0 < 100; v0++) {
    let v1 = 102;
    const v2 = `
        ++v1;
        +2147483648;
    `;
    eval(v2);
}
gc();
