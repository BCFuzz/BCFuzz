for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
}
class C10 {
}
let v13 = new BigUint64Array(586);
for (let v14 of v13) {
    const o15 = {
    };
    function f16() {
        let v17 = arguments;
        ({"b":v13,"e":C10,"f":v17,...v14} = o15);
        function f18(a19) {
            return a19;
        }
        class C20 extends f18 {
        }
        return v17;
    }
    f16();
}
gc();
