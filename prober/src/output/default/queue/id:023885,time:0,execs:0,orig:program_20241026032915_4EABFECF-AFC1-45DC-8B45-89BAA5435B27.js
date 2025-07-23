const v2 = [`bigint${0.32888887978694226}1073741823`];
const o3 = {
};
o3.toJSON = v2;
function f4() {
    return o3;
}
class C5 extends f4 {
    constructor(a7, a8) {
        for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
        }
        super();
        const v21 = Date();
        const o22 = {
            [Math]: v21,
            "h": o3,
        };
        JSON.stringify(o22);
    }
}
new C5(0.32888887978694226, C5);
gc();
