for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    const v11 = /\u{12345}/myvis;
    for (const v13 in "50955") {
        v11[v13] = v13;
        const t6 = "50955";
        t6[v13] = v13;
    }
`;
eval(v10);
gc();
