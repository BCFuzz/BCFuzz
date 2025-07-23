for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i = 0; i < 5; i++) {
        const o21 = {
            toString(a17, a18) {
                const t7 = this.constructor;
                new t7(a17);
                return a14;
            },
        };
        -o21;
    }
}
new F10();
new F10();
gc();
