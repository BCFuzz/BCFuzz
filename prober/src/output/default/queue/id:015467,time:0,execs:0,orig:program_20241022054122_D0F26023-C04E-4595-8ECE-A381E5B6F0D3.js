function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [v2,v2,v2,v2];
const v5 = v2 === v3 ? v2 : v3;
for (let i = 0; i < 5; i++) {
    const o17 = {
        toString(a7, a8) {
            function f9() {
                return a7;
            }
            class C10 extends f9 {
            }
            function f11() {
                C10[1073741825] = v5;
                let v13 = -9007199254740990n;
                v13++;
                return arguments;
            }
            f11();
            f11();
            return a7;
        },
    };
    o17.toString(v5, F0, v2, o17);
    o17.toString(o17).toString();
}
gc();
