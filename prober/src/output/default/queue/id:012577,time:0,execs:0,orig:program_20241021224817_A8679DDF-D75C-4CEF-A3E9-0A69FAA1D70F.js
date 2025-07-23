const v3 = [1073741824,1];
v3.fill(Uint16Array);
const o12 = {
    toString(a6, a7, a8) {
        try { a7.toLocaleString(); } catch (e) {}
        JSON.stringify(a8, v3);
        return a6;
    },
};
o12.toString(o12).toString(6.896342694484826, 9223372036854775807n);
gc();
