for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = `
    for (let v12 = 0; v12 < 5; v12++) {
        for (let i15 = 0, i16 = 10;
            (() => {
                break;
                return i15 < i16;
            })();
            ) {
        }
    }
`;
const v22 = v11.split();
try { v22.flatMap(eval); } catch (e) {}
gc();
