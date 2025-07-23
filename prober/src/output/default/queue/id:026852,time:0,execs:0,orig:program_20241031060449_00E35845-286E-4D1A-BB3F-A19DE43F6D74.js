for (let i1 = 10, i2 = 10; i2--, i2;) {
}
const v9 = `
    const o16 = {
        toString(a11, a12) {
            -a11 ** -9007199254740991;
            return this;
        },
    };
`;
const v17 = v9.split();
try { v17.flatMap(eval); } catch (e) {}
gc();
