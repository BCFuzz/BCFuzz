for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v11 = `
    for (let v12 = 0; v12 < 5; v12++) {
        for (let [i16, i17] = (() => {
                /\u{12345}/myvis;
                return [2, 10];
            })();
            i16 < i17;
            (() => {
                continue;
            })()) {
        }
    }
`;
const v23 = v11.split();
try { v23.flatMap(eval); } catch (e) {}
gc();
