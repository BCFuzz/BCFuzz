class C17 {
    constructor(a19, a20, a21) {
        let v23 = "string";
        function f25(a26) {
            const o30 = {
                [a26](a28, a29) {
                    v23 = a29;
                },
            };
            return o30;
        }
        const v31 = f25();
        const v32 = f25();
        function f33(a34, a35, a36, a37) {
            const o38 = {
                [a34]: a37,
            };
            return o38;
        }
        const v40 = f33(v23, f33(v23, v31), "a", v32);
        const v41 = `
            const t21 = v40[v23];
            t21.length = 2;
        `;
        eval(v41);
    }
}
const v49 = new C17();
new C17(v49, Reflect, 255);
gc();
