import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../services/productService.js";

// Get all products
export const getAllProductsController = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a product by ID
export const getProductByIdController = async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Create a new product
export const createProductController = async (req, res) => {
  try {
    // Ensure req.files exists before mapping
    const imageUrls = req.files?.map(file => file.path) || []; // ✅ Fix: If no files, set empty array

    const productData = { 
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        condition: req.body.condition || "New",  // ✅ Default value
        reference: req.body.reference,
        stock: req.body.stock,
        price: req.body.price,
        deliveryTime: req.body.deliveryTime,
        images: imageUrls
    };

    const product = await createProduct(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: `Error creating product: ${error.message}` });
  }
};

// Update a product by ID
export const updateProductController = async (req, res) => {
    try {
        const imageUrls = req.files ? req.files.map(file => file.path) : []; 
        const updatedData = { ...req.body, images: imageUrls };
        const updatedProduct = await updateProduct(req.params.id, updatedData);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a product by ID
export const deleteProductController = async (req, res) => {
    try {
        const response = await deleteProduct(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
