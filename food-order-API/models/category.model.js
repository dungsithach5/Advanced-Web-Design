const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true }
  });
  const Category = mongoose.model('categories', CategorySchema);