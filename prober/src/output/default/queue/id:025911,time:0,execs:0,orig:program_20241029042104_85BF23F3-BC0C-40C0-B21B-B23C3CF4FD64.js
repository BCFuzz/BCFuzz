const v1 = `
    class C2 extends Uint8Array {
        constructor(a4, a5) {
        }
        /*
        constructor(a7, a8, a9) {
            /a+ba\fb\nc\rd\te\vf/dyu;
        }
        */
    }
`;
eval(v1);
gc();
