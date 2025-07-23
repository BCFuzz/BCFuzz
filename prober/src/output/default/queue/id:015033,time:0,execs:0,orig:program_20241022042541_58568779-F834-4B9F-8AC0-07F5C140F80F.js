function f1(a2, a3) {
    const v4 = `
        function F5(a7, a8, a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            ("LqCm6").slice().matchAll(f1);
        }
        new F5();
        const v15 = \`
        \`;
    `;
    eval(v4);
    return v4;
}
f1(eval, eval);
gc();
