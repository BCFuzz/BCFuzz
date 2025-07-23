for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v10 = `
    async function* f11(a12, a13) {
        for (let [i19, i20] = (() => {
                try {
                    undefined.__proto__ = undefined;
                } catch(e16) {
                    e16.name = e16;
                }
                for (let v18 = 0; v18 < 250; v18++) {
                }
                return [0, 10];
            })();
            i19 !== i20;
            i20--) {
        }
        return v10;
    }
    f11(f11, v10);
`;
const v29 = eval(v10);
v29.next(v29, v29);
gc();
