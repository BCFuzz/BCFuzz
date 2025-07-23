class C0 {
}
const v1 = new C0();
const v2 = `
    const v3 = /9P()(ab|cde)[ra|bc]/gu;
    class C4 {
        static {
            super.d = v3;
            for (let v6 = 0; v6 < 5; v6++) {
                [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
                for (let v8 = 0; v8 < 5; v8++) {
                }
                function F9() {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v11 = new F9();
                const v12 = new F9();
                const v13 = v12.constructor;
                const v14 = v13.toString(v11);
                v14.match(v11);
                const v17 = new Int16Array();
                const v18 = new Int16Array();
                const v20 = v18.copyWithin;
                new C0();
                this[Symbol.species];
                const v26 = Reflect.apply(v20, v17, v13).fill();
                try {
                    super.now(v26, v20, v26);
                } catch(e28) {
                }
                super[v14] = v1;
            }
        }
    }
`;
eval(v2);
gc();
