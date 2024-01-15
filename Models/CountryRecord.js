const mongoose = require("mongoose");

const countryRecord = new mongoose.Schema({
  country: String,
  visa_type: String,
  entry_type: String,
  processing_time: String,
  visa_service_provider: String,
  visa_requirements: {
    passport: {
      requirements: [String],
    },
    documents_required: [String],
  },
  photographs: {
    requirements: [String],
  },
  additional_documents: {
    financial_documents: {
      employed: [String],
      self_employed: [String],
    },
    supporting_documents: {
      employed: [String],
      self_employed: [String],
      student: [String],
      retired: [String],
    },
  },
  important_notes: {
    notes: [String],
  },
});

module.exports = mongoose.model("CountryRecord", countryRecord);
