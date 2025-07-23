const v1 = `
    const o6 = {
        toString(a3, a4) {
            /\cA(?<a>.)\k<a>(?<a>.)\k<a>/myvi;
            return a3;
        },
    };
`;
const v7 = v1.split();
try { v7.flatMap(eval); } catch (e) {}
gc();
