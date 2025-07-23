const v0 = `
    const v2 = /\u{12345}/myvis?.exec;
    try { v2(); } catch (e) {}
`;
eval(v0);
for (let i8 = 0, i9 = 10; i9--, i8 < i9;) {
}
for (let i18 = 0, i19 = 10; i19--, i18 < i19;) {
}
gc();
