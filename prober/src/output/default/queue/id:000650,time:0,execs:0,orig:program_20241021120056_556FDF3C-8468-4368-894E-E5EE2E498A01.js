async function* f1(a2, a3, a4) {
    'use strict';
    return a2;
}
for (let v5 = 0; v5 < 100; v5++) {
    f1(2);
}
gc();
