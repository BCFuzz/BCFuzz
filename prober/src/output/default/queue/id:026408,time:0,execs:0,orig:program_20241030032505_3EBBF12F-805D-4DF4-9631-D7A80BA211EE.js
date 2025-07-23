class C0 {
    m(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        const v14 = `
            delete a2.length;
        `;
        eval(v14);
    }
}
class C18 extends C0 {
}
const v19 = new C18();
try { v19.m(); } catch (e) {}
gc();
