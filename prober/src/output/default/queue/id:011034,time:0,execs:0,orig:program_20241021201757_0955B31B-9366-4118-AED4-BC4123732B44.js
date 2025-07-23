for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    for (let v11 = 0; v11 < 5; v11++) {
        function F12() {
            if (!new.target) { throw 'must be called with new'; }
            v11.__defineSetter__;
        }
        continue;
    }
`;
eval(v10);
gc();
