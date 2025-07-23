class C0 {
    m(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        const v14 = `
            const t5 = [-5.0,-4.1832110668613255e+307,0.7381367627303691,-1.1233407217315306e+308,2.0];
            delete t5.length;
        `;
        eval(v14);
    }
}
class C19 extends C0 {
}
const v20 = new C19();
try { v20.m(); } catch (e) {}
gc();
