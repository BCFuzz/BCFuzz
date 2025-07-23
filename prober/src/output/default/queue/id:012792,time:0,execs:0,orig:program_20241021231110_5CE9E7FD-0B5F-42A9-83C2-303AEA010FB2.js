class C1 extends Uint8ClampedArray {
}
const v3 = new BigInt64Array();
const v4 = `
    const v5 = /\x01/mdgiu;
    const v6 = v5.lastIndex;
    /(\[\]\{\}\(\)\%\^\ )/dgis;
    class C8 {
        constructor(a10) {
            const v11 = this?.constructor;
            try { new v11(v3); } catch (e) {}
            function f13() {
                return v6;
            }
            try { f13(); } catch (e) {}
        }
    }
    let v15;
    try { v15 = v6(v5); } catch (e) {}
    const v16 = new C8(v15);
    v16.length = v16;
    class C17 {
    }
    const v18 = new C17();
    const t24 = v18.constructor;
    new t24(v3);
    class C21 extends C17 {
    }
    const v22 = new C21();
    const v23 = v22.constructor;
    new v23(v18, v23, BigInt64Array, v6);
    const v25 = /a(?!b)/mdu;
    try { v25.toString(v16, v4, C17); } catch (e) {}
`;
eval(v4);
gc();
