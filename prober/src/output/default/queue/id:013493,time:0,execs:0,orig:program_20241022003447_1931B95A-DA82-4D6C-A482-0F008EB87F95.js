for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
for (let v10 = 0; v10 < 5; v10++) {
    function F11() {
        if (!new.target) { throw 'must be called with new'; }
        const o14 = {
            get b() {
                return this;
            },
        };
        o14.b;
    }
    const v16 = new F11();
    const v17 = v16.constructor;
    new v17(v10, v17, v10);
}
gc();
