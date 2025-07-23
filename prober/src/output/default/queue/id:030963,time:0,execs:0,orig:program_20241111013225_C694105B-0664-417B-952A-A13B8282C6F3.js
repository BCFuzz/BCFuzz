for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
const v21 = `
    for (let [i26, i27] = (() => {
            for (const v23 of [-2.0,-1.0,0.19795010264126411,1.2076363296656204e+308,229318.16947127413,1.3439790166549788,1000000.0,1000000.0,-166.13863760403774,Infinity]) {
            }
            return [0, 10];
        })();
        i26 < i27;
        ) {
    }
    /.[a[^R\u{12345}]*]/dyvi;
`;
const v34 = v21.replaceAll("n");
class C35 {
    constructor(a37) {
        const v39 = `
            \`match${C35}getUint32${v34}o\`;
        `;
        const v41 = v39.split(a37);
        v41.reverse(v34, v21, this);
        v41.flatMap(eval);
    }
}
try { new C35(C35); } catch (e) {}
gc();
