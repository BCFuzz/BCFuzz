class C1 extends Uint16Array {
    #c;
    static n(a3, a4, a5) {
        const v6 = `
            a4.shift();
        `;
        eval(v6);
    }
}
try { C1.n(); } catch (e) {}
gc();
