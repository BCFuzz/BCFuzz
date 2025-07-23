for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
const v10 = `
    function F11(a13, a14, a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
    }
    let v17 = new F11();
    [v17] = Array(188);
`;
eval(v10);
gc();
