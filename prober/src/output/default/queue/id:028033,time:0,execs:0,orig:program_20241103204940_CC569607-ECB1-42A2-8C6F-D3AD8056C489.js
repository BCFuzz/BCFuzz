for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v10 = /[(?:a{5,1000000}){3,1000000}?]/mds;
class C11 {
    constructor(a13) {
        const v15 = `
            for (let v16 = 0; v16 < 5; v16++) {
            }
            /\u{12345}/myvis;
        `;
        const v18 = v15.split(a13);
        try { v18.flatMap(eval); } catch (e) {}
    }
}
new C11(v10);
gc();
