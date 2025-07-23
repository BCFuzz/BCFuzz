const v1 = `
    for (let [i7, i8] = (() => {
            while (10 < 10) {
                /\P{Decimal_Number}/mvgi;
            }
            return [0, 10];
        })();
        i7 < i8;
        ) {
    }
`;
const v14 = v1.split();
try { v14.flatMap(eval); } catch (e) {}
gc();
