for (let i3 = 256, i4 = 10 + 10; i4--;) {
    const v11 = [i4,i4,i4];
    const v12 = `
        let v13 = -507126209 * v11;
        v13 >>>= v13;
        function F14(a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            class C18 {
                static n(a20, a21) {
                    const v23 = URIError(a21);
                    eval(v23 + v23);
                }
            }
            try { C18.n(v12, v12); } catch (e) {}
        }
        new F14();
    `;
    eval(v12);
}
gc();
