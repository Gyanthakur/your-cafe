import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
	userId: {
		type: String,
		requirde: true,
	},
	items: {
		type: Array,
		requirde: true,
	},
	amount: {
		type: Number,
		requirde: true,
	},
	address: {
		type: Object,
		requirde: true,
	},
	status: {
		type: String,
		default: "Food Processing",
	},
	date: {
		type: Date,
		default: Date.now(),
	},
	payment: {
		type: Boolean,
		default: false,
	},
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
