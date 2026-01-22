import mongoose from 'mongoose';

const companyApplicationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    // Organization Details
    companyName: { type: String, required: true },
    companyUrl: { type: String, required: true },
    country: { type: String, required: true },
    industries: [{ type: String }],
    customIndustry: { type: String },
    employeesCount: { type: String },
    address: { type: String, required: true },
    // Primary Contact
    contactName: { type: String, required: true },
    contactRole: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
    // Purpose & Impact
    purpose: { type: String },
    values: { type: String },
    certificationReasons: [{ type: String }],
    employeeListeningMethods: [{ type: String }],
    internalTrustLevel: { type: String },
    challenges: { type: String },
    beneficiaries: { type: String },
    positiveImpact: { type: String },
    existingCertifications: { type: String, enum: ['yes', 'no'] },
    publicReporting: { type: String, enum: ['yes', 'no', 'in-progress', 'not-yet'] },
    // Declaration
    declarationAccepted: { type: Boolean, required: true },
    preScreeningCall: { type: Boolean, required: true }
}, {
    timestamps: true,
    collection: 'companyapplications'
});

const CompanyApplication = mongoose.model('CompanyApplication', companyApplicationSchema);

export default CompanyApplication;
