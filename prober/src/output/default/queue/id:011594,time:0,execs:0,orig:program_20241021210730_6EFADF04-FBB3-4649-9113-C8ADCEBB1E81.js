const t0 = Promise.withResolvers(Promise, Promise, Promise).resolve;
new t0(Promise);
for (let v4 = 0; v4 < 250; v4++) {
    v4++;
    v4--;
}
gc();
