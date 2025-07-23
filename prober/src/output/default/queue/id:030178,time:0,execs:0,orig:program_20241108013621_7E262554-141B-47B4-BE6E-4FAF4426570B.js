let v1 = -4294967297;
const v3 = `
    const v4 = ++v1;
    const o9 = {
        toString(a6, a7) {
            return /\u{12345}/myvis;
        },
    };
    -v4 >> "5";
`;
const v12 = v3.split("5");
v12.reverse();
for (let i16 = 0, i17 = 1851; i17--, i16 < i17;) {
}
try { v12.flatMap(runString); } catch (e) {}
gc();
