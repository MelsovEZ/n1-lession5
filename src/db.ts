import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL ||
            'mongodb+srv://yernur:ABH20OI0Jbk7XEbE@clusterzero.t76awpn.mongodb.net/sample_mflix');
        console.log('MongoDB connected...');
    } catch (err:any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;