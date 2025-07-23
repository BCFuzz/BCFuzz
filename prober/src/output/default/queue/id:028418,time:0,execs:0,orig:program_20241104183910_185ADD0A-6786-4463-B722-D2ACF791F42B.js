const v0 = /Ih*/vgi;
const v2 = `
    for (let [i6, i7] = (() => {
            for (let v5 = 0; v5 < 5; v5++) {
            }
            return [0, 10];
        })();
        (() => {
            const v8 = i6 < i7;
            /\u{12345}/myvis;
            return v8;
        })();
        ) {
    }
`;
const v14 = v2.split(v0);
try { v14.flatMap(eval); } catch (e) {}
gc();
