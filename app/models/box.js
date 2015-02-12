var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var boxSchema = new Schema({
  code: String,
  is_active: { type: Boolean, default: false }
});

boxSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

boxSchema.method('activate', function(cb) {
  var user = this;

  user.is_active = true;
  user.save(cb);

})

mongoose.model('Box', boxSchema);
