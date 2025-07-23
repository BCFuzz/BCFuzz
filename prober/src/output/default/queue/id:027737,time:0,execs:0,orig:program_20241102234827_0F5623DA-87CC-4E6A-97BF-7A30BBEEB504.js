const v0 = /Ih*/vgi;
const v2 = `
    for (let [i6, i7] = (() => {
            for (let v5 = 0; v5 < 5; v5++) {
            }
            return [0, 10];
        })();
        i6 < i7;
        ) {
    }
`;
const v13 = v2.split(v0);
try { v13.flatMap(eval); } catch (e) {}
gc();
