const v1 = `
    \`toUTCString${/\u{12345}/myvis}c\`;
`;
const v4 = v1.split(6);
let v5 = v4.at(6, v1, v4);
for (const v6 of v1) {
    const v7 = v6 + v5;
    const t7 = this.RegExp;
    const v10 = t7(v7);
    function f11() {
        for (let i14 = -3, i15 = 10; i14 < i15; i15--) {
        }
        return 6;
    }
    v10[Symbol.toPrimitive] = f11;
    v5 = v10;
}
for (let i26 = 6n, i27 = 10; i26 < i27; i27--) {
}
gc();
