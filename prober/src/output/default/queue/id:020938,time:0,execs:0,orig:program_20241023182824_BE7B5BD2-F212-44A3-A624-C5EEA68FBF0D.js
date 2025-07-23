function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v6 = 0;
    const v7 = v6++;
    for (let v8 = 0; v8 < 250; v8++) {
        function f9(a10, a11, a12, a13) {
            return arguments;
        }
        f9(v6, f9, v7, f9);
    }
}
new F0();
gc();
