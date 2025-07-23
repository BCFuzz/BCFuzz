for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        for (let i7 = -2147483648, i8 = 57020; i8; i8--) {
        }
        return v4;
    })();
    i3--) {
}
const v20 = `
    for (let [i25, i26] = (() => {
            for (const v22 of [-1.6947626211328586e+308,NaN,1000.0]) {
            }
            return [0, 2147483649];
        })();
        i25 < i26;
        ) {
    }
`;
const v32 = v20.replaceAll("n");
class C33 {
    constructor(a35) {
        const v37 = `
            \`match${C33}getUint32${v32}o\`;
        `;
        const v39 = v37.split(a35);
        v39.reverse(v39, v39, "n", v39, eval);
        v39.flatMap(eval);
    }
}
for (let i45 = -3, i46 = 10; 8 < i46; i46--) {
}
try { new C33(C33); } catch (e) {}
gc();
