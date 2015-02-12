var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BoxSchema = new Schema({
  code: String,
  is_active: { type: Boolean, default: false }
});

BoxSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Box', BoxSchema);
