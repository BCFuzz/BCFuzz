function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1(F1, "55827");
const v6 = `
    class C7 {
    }
    const v8 = new C7();
    async function f9(a10, a11, a12) {
        const o13 = {
        };
        try { Proxy(o13, v5); } catch (e) {}
        const v16 = new Proxy(v8, o13);
        for (let v18 = 0; v18 < 5; v18++) {
            new Int8Array();
            const v21 = new Int32Array(o13);
            try { v21.sort(C7); } catch (e) {}
            function f23(a24) {
                class C25 {
                }
                C25(f23, C25(), v18);
                return "55827";
            }
        }
        try { v16.then(); } catch (e) {}
        function F29(a31, a32, a33, a34) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v35 = new F29();
        const v36 = v35?.constructor;
        try { new v36(a11, a11, "55827", "55827"); } catch (e) {}
        for (let i40 = 0, i41 = 10;
            (() => {
                const v42 = i40 < i41;
                v42 || v42;
                return v42;
            })();
            (() => {
                -2091385077n * -2091385077n;
                const o48 = {
                };
                i41--;
            })()) {
        }
        for (let i53 = 0;
            (() => {
                const v55 = i53 < 0;
                !v55;
                return v55;
            })();
            ) {
            Reflect.construct(Int8Array, [Reflect,i53,i53], F29);
        }
        try { ("number").toUpperCase(); } catch (e) {}
        const v65 = eval?.toString;
        try { v65("number", v36, v65); } catch (e) {}
        eval(a12);
        return Int8Array;
    }
    f9();
`;
eval(v6);
gc();
