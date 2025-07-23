const v0 = /[(?:a{5,1000000}){3,1000000}?]/mds;
class C1 {
    constructor(a3) {
        const v5 = `
            try {
            } catch(e6) {
            }
        `;
        const v7 = v5.split(a3);
        try { v7.flatMap(eval); } catch (e) {}
    }
}
new C1(v0);
gc();
