const v1 = [1073741823,60812];
let v2;
try { v2 = v1.forEach(transferArrayBuffer); } catch (e) {}
const v3 = [v2,v2,v2,v2];
class C6 {
    #g;
    constructor(a8, a9, a10, a11) {
        const v12 = v3.pop();
        try {
            for (let v13 = 0; v13 < 5000; v13++) {
            }
            v12.#g %= a10;
        } catch(e14) {
        }
    }
}
new C6(-4, 255, 255);
gc();
