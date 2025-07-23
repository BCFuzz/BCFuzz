const v0 = `
    function f1(a2, a3, a4) {
        return a2;
    }
`;
for (let v5 = 0; v5 < 10; v5++) {
    function F7() {
        if (!new.target) { throw 'must be called with new'; }
        v0.replace("p", v0);
    }
    new F7();
}
gc();
