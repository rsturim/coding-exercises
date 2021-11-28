class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(eventName, callback) {
    // Subscribe a callback to an eventName
    if (!Array.isArray(this.subscribers[eventName])) {
      this.subscribers[eventName] = [];
    }

    this.subscribers[eventName].push(callback);
  }

  publish(eventName, data) {
    // Execute callbacks for an eventName
    if (!Array.isArray(this.subscribers[eventName])) {
      return;
    }

    this.subscribers[eventName].forEach((cb) => {
       cb(data);
    });
  }

  unsubscribe(eventName, callback) {
    // Remove a previously added callback
    this.subscribers[eventName] = this.subscribers[eventName].filter((cb) => {
      return cb !== callback;
    });
  }
}

const pubSub = new PubSub();

// Example as browser event
pubSub.subscribe('click', (eventData) => console.log('Received a click!'));

pubSub.publish('click', { target: 'node' });

// Example as error captured
// pubSub.subscribe('error', (errorData) => pageTeamWithError(errorData));
// pubSub.subscribe('error', (errorData) => storeErrorDetails(errorData));

pubSub.publish('error', { message: 'It broke' });
