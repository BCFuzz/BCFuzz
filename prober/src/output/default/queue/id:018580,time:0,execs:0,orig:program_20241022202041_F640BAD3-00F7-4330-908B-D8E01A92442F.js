const v1 = createGlobalObject();
const v2 = v1;
const v4 = v2.Intl.Collator;
new v4(v4, v1);
gc();
