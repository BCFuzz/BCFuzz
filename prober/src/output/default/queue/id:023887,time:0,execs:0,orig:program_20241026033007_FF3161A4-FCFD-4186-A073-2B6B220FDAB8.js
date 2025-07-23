const v2 = new Float32Array(3682);
const v4 = `bigint${0.32888887978694226}1073741823${v2}vzRr`;
const v5 = [v4];
const o6 = {
};
o6.toJSON = v5;
function f7() {
    return v4;
}
class C8 extends f7 {
    constructor(a10, a11) {
        for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
        }
        super();
        const v24 = Date();
        const o28 = {
            [Math]: v24,
            "h": o6,
            toString(a26, a27) {
                return this;
            },
        };
        JSON.stringify(o28);
    }
}
new C8();
for (let i34 = 0, i35 = 10; i34 < i35; i35--) {
}
gc();
