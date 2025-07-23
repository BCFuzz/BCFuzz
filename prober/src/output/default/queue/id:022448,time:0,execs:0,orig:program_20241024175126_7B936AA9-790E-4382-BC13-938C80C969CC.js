const v1 = [-1783472146,27386,-9,16,-9007199254740992,-1784327280,-43209224,7360,-342629510,-1024];
const v3 = new Int16Array(v1);
const v4 = `
    async function* f5(a6, a7) {
        for (let i11 = 0, i12 = 10;
            i11 < i12;
            (() => {
                const v16 = v3[1];
                eval(-93540663n, v3[2], -93540663n, v16, a7, ...v1);
                i12--;
            })()) {
        }
        return a6;
    }
    f5();
`;
eval(v4).next();
gc();
