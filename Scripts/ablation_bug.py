import scipy.stats

bcfuzz_1 = [2, 5, 3, 3, 3]
bcfuzz_gen = [2, 3, 1, 2, 1]
bcfuzz_nojitir = [1, 1, 0, 3, 2]
bcfuzz_noedge = [1, 3, 2, 3, 3]
bcfuzz_2 = [4, 5, 3, 4, 5]
bcfuzz_mutate = [2, 3, 3, 2, 2]
bcfuzz_schedule = [4, 3, 2, 2, 4]

list_name=["bcfuzz_1","bcfuzz_gen","bcfuzz_nojitir","bcfuzz_noedge","bcfuzz_2","bcfuzz_mutate","bcfuzz_schedule"]
list_list = [bcfuzz_1, bcfuzz_gen, bcfuzz_nojitir, bcfuzz_noedge, bcfuzz_2, bcfuzz_mutate, bcfuzz_schedule]

for i in range(len(list_list)):
    current_list = list_list[i]
    current_value = round(sum(current_list)/len(current_list), 2) # average value
    print(list_name[i], ": ", current_value)

print("=============p-value==============")
print("bcfuzz_gen:")
print(scipy.stats.mannwhitneyu(bcfuzz_gen, bcfuzz_1, False,'less'))
print("")

print("bcfuzz_nojitir:")
print(scipy.stats.mannwhitneyu(bcfuzz_nojitir, bcfuzz_1, False,'less'))
print("")

print("bcfuzz_noedge:")
print(scipy.stats.mannwhitneyu(bcfuzz_noedge, bcfuzz_1, False,'less'))
print("")

print("bcfuzz_mutate:")
print(scipy.stats.mannwhitneyu(bcfuzz_mutate, bcfuzz_2, False,'less'))
print("")

print("bcfuzz_schedule:")
print(scipy.stats.mannwhitneyu(bcfuzz_schedule, bcfuzz_2, False,'less'))
print("")

