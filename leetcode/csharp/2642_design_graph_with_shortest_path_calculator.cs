/**
 * 2642. Design Graph With Shortest Path Calculator
 * Problem Link: https://leetcode.com/problems/design-graph-with-shortest-path-calculator/
 */

public class Graph {
    private List<(int to, int cost)>[] adjList;
    private const int INF = int.MaxValue;

    public Graph(int n, int[][] edges) {
        adjList = new List<(int to, int cost)>[n];
        for (int i = 0; i < n; i++) {
            adjList[i] = new List<(int to, int cost)>();
        }
        foreach (var edge in edges) {
            AddEdge(edge);
        }
    }

    public void AddEdge(int[] edge) {
        adjList[edge[0]].Add((edge[1], edge[2]));
    }

    public int ShortestPath(int node1, int node2) {
        int[] dist = new int[adjList.Length];
        for (int i = 0; i < dist.Length; i++) {
            dist[i] = INF;
        }
        dist[node1] = 0;
        var pq = new SortedSet<(int cost, int node)>() { (0, node1) };
        while (pq.Count > 0) {
            var (cost, node) = pq.Min;
            pq.Remove(pq.Min);
            if (node == node2) return cost;
            foreach (var (to, edgeCost) in adjList[node]) {
                int newCost = cost + edgeCost;
                if (newCost < dist[to]) {
                    pq.Remove((dist[to], to));
                    dist[to] = newCost;
                    pq.Add((newCost, to));
                }
            }
        }
        return -1;
    }
}