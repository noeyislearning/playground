/**
 * 815. Bus Routes
 * Problem Link: https://leetcode.com/problems/bus-routes/
 */

class Solution {
    public int numBusesToDestination(int[][] routes, int source, int target) {
        if (source == target) return 0;

        Map<Integer, List<Integer>> stopToRoutes = new HashMap<>();
        for (int i = 0; i < routes.length; i++) {
            for (int stop : routes[i]) {
                stopToRoutes.computeIfAbsent(stop, x -> new ArrayList<>()).add(i);
            }
        }

        Queue<Integer> queue = new LinkedList<>();
        queue.offer(source);
        Set<Integer> visited = new HashSet<>();
        int buses = 0;

        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int stop = queue.poll();
                if (stop == target) return buses;

                for (int route : stopToRoutes.get(stop)) {
                    if (visited.add(route)) {
                        for (int nextStop : routes[route]) {
                            queue.offer(nextStop);
                        }
                    }
                }
            }
            buses++;
        }

        return -1;
    }
}