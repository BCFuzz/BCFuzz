for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
for (let i12 = 0, i13 = 10;
    i12 < i13;
    (() => {
        const v17 = `
            function F18(a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v17);
        i12++;
    })()) {
}
gc();
