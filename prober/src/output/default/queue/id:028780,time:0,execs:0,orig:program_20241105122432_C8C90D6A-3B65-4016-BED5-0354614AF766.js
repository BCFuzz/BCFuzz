for (let i3 = 256, i4 = 10 + 10; i4--;) {
    const v10 = [i3,i3,i3,i3];
    const v11 = `
        const v12 = 256 * v10;
        v12 | v12;
        function F14(a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            class C18 {
                static n(a20, a21) {
                    a20.match(a20);
                }
            }
            C18.n(v11);
        }
        new F14();
    `;
    eval(v11);
}
gc();
