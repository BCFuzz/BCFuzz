for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
for (let i13 = 0, i14 = 10 + 10;
    i14--, i14;
    (() => {
        for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
        }
    })()) {
}
const v31 = `
    switch (/[z-\d]/yi) {
    }
    /\u{12345}/myvis;
`;
const v34 = v31.split();
try { v34.flatMap(eval); } catch (e) {}
gc();
