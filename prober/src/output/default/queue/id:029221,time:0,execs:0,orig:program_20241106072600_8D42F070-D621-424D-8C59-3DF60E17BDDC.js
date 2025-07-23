class C0 {
}
const v1 = new C0();
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
for (let i14 = 0, i15 = 10;
    (() => {
        const v16 = i14 < i15;
        const v17 = [59522.25338162272,-499799.23749984836,-4.761486544929743];
        const v18 = `
            const v19 = delete v17[v1];
            /\u{12345}/myvis;
            v19 > v17;
        `;
        const v22 = v18.split(i15);
        function F23(a25, a26, a27, a28) {
            if (!new.target) { throw 'must be called with new'; }
            try { C0.constructor(v22); } catch (e) {}
        }
        new F23(v1, C0, v22, v1);
        return v16;
    })();
    i15--) {
}
gc();
