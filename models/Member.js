var keystone = require('keystone');
var Types = keystone.Field.Types;
var User = require('./User.js');

/**
 * Member Model
 * ==========
 */
var Member = new keystone.List('Member', { inherits: User.User });

Member.add({
	job: { type: String },
	news: { type: Types.Textarea },
	availability: { type: Boolean, label: 'Disponible' },
	// cv: { type: Types.LocalFile },
	lang: { type: Types.Select, options: [
		{ value: 'fr', label: 'français' },
		{ value: 'en', label: 'anglais' }
	]},
	localisation: { type: Types.Location, defaults: { country: 'France' } },
	phone: { type: Types.Number, format: '00 00 00 00 00', required: true, initial: true},
	avatar: { type: Types.CloudinaryImage, publicID: 'slug', autoCleanup: true }
});

/**
 * Registration
 */
Member.defaultColumns = 'job, phone, avatar';
Member.register();

exports.Member = Member;
