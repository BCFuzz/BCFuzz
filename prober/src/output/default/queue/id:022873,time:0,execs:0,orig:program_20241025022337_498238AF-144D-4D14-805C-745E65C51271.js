let v1 = 2285;
const v3 = Array(v1);
for (let i5 = 1024, i6 = 10; i5 < v1;) {
    v1--;
    v3[i5 /= i6];
}
gc();
