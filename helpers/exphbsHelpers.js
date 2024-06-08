// helpers/hbsHelpers.js

module.exports = {
    formatDate: function (date) {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
};

