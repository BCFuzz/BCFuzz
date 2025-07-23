function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i8 = 0, i9 = 10;
        i8 < i9;
        (() => {
            i9--;
            for (let v14 = 0; v14 < 10; v14++) {
                function f15() {
                    return v14;
                }
                class C16 extends f15 {
                }
                const v17 = [a3,a3,a3,a3];
                function f18(a19, a20, a21, a22) {
                    const o23 = {
                        __proto__: v17,
                    };
                    try { o23.flatMap(C16); } catch (e) {}
                }
                f18.call();
            }
        })()) {
    }
}
const v28 = new F0(F0, F0, F0, F0);
const v29 = v28.constructor;
new v29(v29);
gc();
