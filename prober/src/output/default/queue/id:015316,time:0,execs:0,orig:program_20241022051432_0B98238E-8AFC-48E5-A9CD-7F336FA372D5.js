for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v13 = 0; v13 < 10; v13++) {
        const o14 = {
        };
        function f15(a16, a17, a18, a19) {
            function f21(a22, a23) {
                a19 == o14;
                return arguments;
            }
            f21(F10, f15);
        }
        f15();
    }
}
new F10(F10);
gc();
