const v1 = `
    /1abc|def|ghi\ud808\udf45*xyz{0,1}/mdyiu;
    class C3 extends Uint8Array {
        constructor(a5, a6) {
        }
        /*
        constructor(a8, a9, a10) {
            /a+ba\fb\nc\rd\te\vf/dyu;
        }
        */
    }
`;
eval(v1);
gc();
