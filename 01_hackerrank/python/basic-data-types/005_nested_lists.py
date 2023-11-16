"""
 * Nested List
"""

if __name__ == '__main__':
    std = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        std.append([name, score])
        
    std.sort(key=lambda x: x[1])
    sls = sorted(set(score for name, score in std))[1]
    
    for name, score in sorted(std):
        if score == sls:
            print(name)