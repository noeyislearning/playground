/**
 * 2694. Event Emitter 
 * Problem Link: https://leetcode.com/problems/event-emitter/
 * Solution Link (Personal):
 */

class EventEmitter {
  constructor() {
    this.subscriptions = new Map();
    this.orderCounter = 0;
  }

  subscribe(eventName, callback) {
    if (!this.subscriptions.has(eventName)) {
      this.subscriptions.set(eventName, []);
    }
    const order = this.orderCounter++;
    this.subscriptions.get(eventName).push({ order, callback });

    return {
      unsubscribe: () => {
        const subscriptions = this.subscriptions.get(eventName);
        if (subscriptions) {
          const index = subscriptions.findIndex((sub) => sub.order === order);
          if (index !== -1) {
            subscriptions.splice(index, 1);
          }
        }
      },
    };
  }

  emit(eventName, args = []) {
    const subscriptions = this.subscriptions.get(eventName);
    if (!subscriptions) {
      return [];
    }

    const results = subscriptions.map((subscription) => {
      try {
        return subscription.callback(...args);
      } catch (error) {
        return error;
      }
    });

    return results;
  }
}
