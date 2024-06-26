const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    // Khong bao gio co truong hop 2 slug trung nhau
}, {
    timestamps: true, // Dinh kem thoi gian
});

module.exports = mongoose.model('Course', Course);