function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = `
        function f3(a4, a5) {
            return F0;
        }
    `;
    eval(v2);
}
new F0();
new F0();
gc();
