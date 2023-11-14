"""
 * Finding the percentage
"""

if __name__ == "__main__":
    n = int(input())
    sm = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        sm[name] = scores
    query_name = input()

    m = sm[query_name]
    avg = sum(m) / len(m)

    print("{:.2f}".format(avg))