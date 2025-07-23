for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 5; v13++) {
        const v14 = /(?<=a)/mdgu;
        function f15(a16) {
            return a16;
        }
        const v17 = f15();
        const v18 = f15(a12);
        const v19 = f15();
        function F20(a22, a23, a24) {
            if (!new.target) { throw 'must be called with new'; }
            a24.arguments = a24;
        }
        const v25 = new F20(v18, v19, F20);
        v25.arguments = v14;
        new F20(v17, v17, v25);
    }
}
new F10();
gc();
