/**
 * 2642. Design Graph With Shortest Path Calculator
 * Problem Link: https://leetcode.com/problems/design-graph-with-shortest-path-calculator/
 */

import java.util.*;

class Graph {
    class Edge {
        int to, cost;
        Edge(int to, int cost) {
            this.to = to;
            this.cost = cost;
        }
    }

    List<List<Edge>> graph;

    public Graph(int n, int[][] edges) {
        graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            addEdge(edge);
        }
    }

    public void addEdge(int[] edge) {
        graph.get(edge[0]).add(new Edge(edge[1], edge[2]));
    }

    public int shortestPath(int node1, int node2) {
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        int[] dist = new int[graph.size()];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[node1] = 0;
        pq.offer(new int[]{node1, 0});
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int node = curr[0], d = curr[1];
            if (d != dist[node]) continue;
            for (Edge edge : graph.get(node)) {
                int newDist = d + edge.cost;
                if (newDist < dist[edge.to]) {
                    dist[edge.to] = newDist;
                    pq.offer(new int[]{edge.to, newDist});
                }
            }
        }
        return dist[node2] == Integer.MAX_VALUE ? -1 : dist[node2];
    }
}