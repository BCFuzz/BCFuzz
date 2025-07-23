for (let [i21, i22] = (() => {
        for (let i4 = 0, i5 = 10;
            (() => {
                for (let i8 = 0, i9 = 10; i9; i9--) {
                }
                return i4 < i5;
            })();
            i5--) {
        }
        return [0, 10];
    })();
    i21 < i22;
    i22--) {
}
const v30 = `
    do {
    } while ((() => {
            const v33 = 0 < 3;
            /a\nW/vgi;
            return v33;
        })())
`;
const v35 = v30.split();
try { v35.flatMap(eval); } catch (e) {}
gc();
