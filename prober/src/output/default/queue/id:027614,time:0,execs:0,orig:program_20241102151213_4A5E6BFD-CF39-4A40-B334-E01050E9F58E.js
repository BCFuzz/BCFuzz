const v0 = /[(?:a{5,1000000}){3,1000000}?]/mds;
class C1 {
    constructor(a3) {
        const v5 = `
            try {
            } catch(e6) {
            }
            /\u{12345}/myvis;
        `;
        const v8 = v5.split(a3);
        try { v8.flatMap(eval); } catch (e) {}
    }
}
new C1(v0);
gc();
