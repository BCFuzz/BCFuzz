for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v10 = `
    for (let v11 = 0; v11 < 5; v11++) {
        function F12(a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
        }
        F12.prototype = F12;
        const v17 = new F12();
        v17.length;
    }
`;
eval(v10);
gc();
