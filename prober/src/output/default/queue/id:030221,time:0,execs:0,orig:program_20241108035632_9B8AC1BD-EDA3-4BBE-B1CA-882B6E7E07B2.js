for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
const v10 = /[(?:a{5,1000000}){3,1000000}?]/mds;
class C11 {
    constructor(a13) {
        const v15 = `
            /\u{12345}/myvis;
            for (let v17 = 0; v17 < 5; v17++) {
            }
        `;
        const v18 = v15.split(a13);
        v18.reverse(C11, v18, v10);
        try { v18.flatMap(eval); } catch (e) {}
    }
}
new C11(v10);
gc();
