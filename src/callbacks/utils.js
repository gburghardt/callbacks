Callbacks.Utils = {
	self: {
		addCallback: function addCallback(name, method) {
			this.prototype.callbacks = this.prototype.callbacks || {};

			if (!this.prototype.callbacks[name]) {
				this.prototype.callbacks[name] = [];
			}
			else if (!this.prototype.callbacks[name] instanceof Array) {
				this.prototype.callbacks[name] = [this.prototype.callbacks[name]];
			}

			this.prototype.callbacks[name].push(method);

			return this;
		}
	},

	prototype: {
		callbacks: null,

		initCallbacks: function initCallbacks(types) {
			if (!this.hasOwnProperty("callbacks")) {
				this.callbacks = new Callbacks(this);
			}

			if (types) {
				this.callbacks.types = types;
			}
		},

		destroyCallbacks: function destroyCallbacks() {
			if (this.callbacks) {
				this.callbacks.destructor();
				this.callbacks = null;
			}
		}
	}
};
