new Float32Array(7);
const v5 = new Float64Array(2228);
const v10 = new Int16Array(255);
const v11 = `
    try { v10(2228, v11, 2228); } catch (e) {}
    let v13 = 2147483648;
    +(++v13);
`;
eval(v11);
const v18 = new Int16Array(v5);
function f22() {
    const o25 = {
        toString(a24) {
            return this;
        },
    };
    return o25;
}
const v26 = f22();
const v27 = f22();
let v28 = undefined;
const o29 = {
    ...v27,
};
const v32 = new Uint32Array(7);
let v35 = -800107.347952191;
let v36 = 222.24607957266767;
class C37 {
    get b() {
        let v38 = this;
        ({"d":v35,"g":v38,"length":v28,...v36} = "g");
        try { v35(v38, v35, v38, v38); } catch (e) {}
        return "g";
    }
    constructor(a41, a42) {
        this[16];
        a42.g = a42;
        const t37 = "g";
        t37.h = "g";
    }
    268435440 = v36;
    static n(a48, a49) {
        this.valueOf = this;
        function F50(a52, a53, a54, a55) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = a49;
            this.e = this;
        }
        new F50(C37, v35, v35, a48);
        const v57 = new F50(a48, a48, C37, v35);
        const v58 = new a49(v35, v57, C37, a49);
        return v58;
    }
    4 = Float32Array;
    16 = v18;
}
const v60 = new BigInt64Array(3947);
v32.reverse(v28, v26, ...v60, Uint32Array, ...v32);
gc();
