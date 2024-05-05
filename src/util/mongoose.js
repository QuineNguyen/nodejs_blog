module.exports = {
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    // Su dung map de chuyen cac thuoc tinh cua courses duoc luu trong prototype sang cac thuoc tinh cua mot object
    // Trong truong hop nhan ve nhieu doi tuong, map qua de toObject
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
    // Trong truong hop chi nhan mot doi tuong, return toObject
};