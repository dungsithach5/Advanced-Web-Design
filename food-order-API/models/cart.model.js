const CartSchema = new mongoose.Schema({
    is_order: { type: Boolean, required: true },
    account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'accounts', required: true }
  });
const Cart = mongoose.model('cart', CartSchema);