const FoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    address: { type: String, required: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true }
  });
const Food = mongoose.model('foods', FoodSchema);