const v0 = `
    const o4 = {
        valueOf(a2, a3) {
            return this;
        },
    };
    /\u{12345}/myvis;
`;
try { Uint8Array.fromBase64(v0); } catch (e) {}
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
gc();
