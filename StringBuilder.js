String.prototype.StringBuilder = function () {
        var builder = [],
            DEFAULT_VALUE = 1,
            that = this;

        function init() {
            append(that);
        }

        function append(value) {
            builder.push(value);
            return this;
        }
        function remove(i, j) {
            builder.splice(i, j || DEFAULT_VALUE);
            return this;
        }
        function insert(i, value) {
            builder.splice(i, 0, value);
            return this;
        }
        function clear() {
            builder = [];
            return this;
        }
        function toString(delimiter) {
            return builder.join(delimiter || '');
        }

        init();

        return {
            append: append,
            remove: remove,
            insert: insert,
            clear: clear,
            toString: toString
        }
    }
