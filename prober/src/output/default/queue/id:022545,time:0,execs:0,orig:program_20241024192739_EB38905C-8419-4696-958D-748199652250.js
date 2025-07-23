const v1 = [60608,60608,60608,60608,60608];
const v2 = `
    async function* f3(a4, a5) {
        for (let i8 = 0, i9 = 10;
            (() => {
                v1[0] = a5;
                for (let v10 = 0; v10 < 5; v10++) {
                    v1.d = v10;
                    delete v1.d;
                }
                return i8 < i9;
            })();
            (() => {
                i9--;
                try { v1.flatMap(); } catch (e) {}
            })()) {
        }
        return a4;
    }
    f3(f3, 60608);
`;
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
    for (let i32 = 0, i33 = 10; i32 < i33; i33--) {
    }
}
const v41 = eval(v2);
v41.next(v2, v41, v41, eval, v1);
gc();
