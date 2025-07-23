const o13 = {
    toString(a1, a2) {
        const v3 = [a1];
        const v4 = [2147483648,63256,-3,4294967297,2147407618,1073741823,1540878931];
        class C6 {
            constructor(a8, a9, a10) {
                a9[221] = v3;
                a9.shift();
            }
        }
        new C6("T", v4);
        return v4;
    },
};
const v14 = o13.toString(o13);
const v15 = v14.concat();
try { v15.join(v14); } catch (e) {}
gc();
