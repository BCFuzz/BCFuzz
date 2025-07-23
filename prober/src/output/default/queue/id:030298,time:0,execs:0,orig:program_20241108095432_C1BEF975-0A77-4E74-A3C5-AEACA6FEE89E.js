for (let i4 = 0, i5 = 1000; i5--, i4 < i5;) {
}
class C12 {
    o(a14, a15, a16, a17) {
        const v18 = a15[a14];
        const v19 = `
            const v20 = v18 - undefined;
            const v21 = \`
                /\u{12345}3ya(?!b)*/myvis;
            \`;
            arguments = v20;
        `;
        eval(v19);
    }
}
const v25 = new C12();
const v26 = new C12();
try { v26.o(1, v25); } catch (e) {}
gc();
