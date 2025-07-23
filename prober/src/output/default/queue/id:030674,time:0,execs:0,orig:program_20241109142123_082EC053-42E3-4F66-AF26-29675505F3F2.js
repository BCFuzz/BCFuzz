let v0 = 10;
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1();
class C8 {
    constructor(a10, a11, a12, a13) {
        try {
            function f15() {
                const v18 = ("").split();
                let v19 = `127`;
                ({"a":f15,"b":v19,"e":v19,...v0} = v7);
                v18.flatMap(eval);
                return eval;
            }
            const t15 = eval(([536870912n,f15]).toLocaleString());
            t15();
        } catch(e26) {
        }
    }
}
new C8(C8, C8, v0, C8);
gc();
