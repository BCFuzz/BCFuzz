function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [F0,F0,F0,F0];
const v5 = v2 === v3 ? v2 : v3;
let v6 = "8";
for (let i = 0; i < 5; i++) {
    const o15 = {
        toString(a8, a9) {
            function f10() {
                return f10;
            }
            class C11 extends f10 {
            }
            function f12() {
                C11[1073741825] = v5;
                return arguments;
            }
            f12();
        },
    };
    o15.toString(v6, v5);
    -o15;
    v6 *= o15;
}
gc();
