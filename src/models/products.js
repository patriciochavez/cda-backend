const { model, Schema } = require('mongoose');

const productSchema = new Schema(
    {
        description: 
        {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = model('Product', productSchema);