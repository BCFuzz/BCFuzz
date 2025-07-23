const v0 = -Infinity;
const o21 = {
    o(a2, a3) {
        const v4 = [-666.0974781919775,1000.0];
        function f5(a6) {
            return v0;
        }
        v4.toString = f5;
        const v7 = [303537114,-4294967297,1000];
        const v8 = [-1,9,4294967296,65536,10,49592,10];
        v8[9] = v4;
        const v11 = [];
        const v13 = Reflect.apply(v7.sort, v8, v11);
        const v14 = v13.join(v13);
        const v16 = new Uint16Array(v4, v14, a2);
        const v18 = v16["sort"]();
        Object.defineProperty(v18, "constructor", { value: Date });
        const t17 = v18.constructor;
        new t17(v14);
        return v0;
    },
};
o21.o(o21, o21, o21);
gc();
