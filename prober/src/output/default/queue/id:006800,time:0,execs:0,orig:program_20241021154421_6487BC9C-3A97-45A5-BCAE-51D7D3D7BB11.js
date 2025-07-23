for (let v0 = 0; v0 < 5; v0++) {
    const v1 = `
        for (let i = 0; i < 5; i++) {
            function F2(a4, a5) {
                if (!new.target) { throw 'must be called with new'; }
            }
        }
    `;
    eval(v1);
}
gc();
