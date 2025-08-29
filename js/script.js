'use strict';

// Event Bus
function createBus() {
    const topics = Object.create(null);

    function on(topic, handler) {

        // 1) Initialize the subscriber container for the topic
        if (!topics[topic]) topics[topic] = new Set();

        // 2) Add handler
        topics[topic].add(handler);

        // 3) Return the unsubscribe function
        return function unsubscribe() {
            off(topic, handler);
        };
    }

    function off(topic, handler) {

        // 1) Remove handler from topic
        const handlers = topics[topic];
        if (!handlers) return;
        handlers.delete(handler);

        // 2) Delete the topic if there are no subscribers left
        if (handlers.size === 0) {
            delete topics[topic];
        }
    }

    function emit(topic, payload, delay = 0) {
        const handlers = topics[topic];
        if (!handlers) return;

        // copy subscribers so that the iteration doesn't break during off()
        const toCall = Array.from(handlers);

        // Use setTimeout with delay
        setTimeout(() => {

            // Inside the timer, call all topic subscribers with payload
            toCall.forEach(handler => {
                try {
                    handler(payload);
                } catch (e) {
                    console.error(`Error in handler for topic "${topic}":`, e);
                }
            });
        }, delay);
    }

    return { on, off, emit };
}

// === TEST HARNESS ===

// 1) Basic asynchrony

const bus = createBus();
bus.on('tick', (x) => console.log('tick:', x));
bus.emit('tick', { step: 1 }, 0);
console.log('after schedule');

// Expectation: "after schedule" will appear in the console before "tick: { step: 1 }"


// 2) Chain of events

/*
const bus = createBus();
bus.on('tick', (x) => {
  console.log('handler step:', x.step);
  if (x.step === 1) {
    bus.emit('tick', { step: 2 }, 0);
  }
});
bus.emit('tick', { step: 1 }, 0);
 */

// Waiting: first "handler step: 1", then "handler step: 2"
// Reason: second emit gets into next event loop due to setTimeout


// 3) Unsubscribing between events
/*
const bus = createBus();
const off = bus.on('news', (x) => {
  console.log('news:', x);
  off();
});
bus.emit('news', 'A', 0);
bus.emit('news', 'B', 0);
 */

// Expectation: 'B' will not reach the handler


// 4) Multiple subscribers

/*
const bus = createBus();
bus.on('ev', (v) => console.log('h1', v));
bus.on('ev', (v) => console.log('h2', v));
bus.on('ev', (v) => console.log('h3', v));
bus.emit('ev', 42, 0);
 */

// Waiting: all three handlers are called
