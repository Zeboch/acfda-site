var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Advertisement Model
 * ==========
 */
var Advertisement = new keystone.List('Advertisement');

Advertisement.add({
	title: { type: String, required: true, initial: true },
	author: { type: Types.Relationship, ref: 'Member' },
	startPublicationDate: { type: Types.Date, format: 'DD-MM-YYYY' },
	endPublicationDate: { type: Types.Date, format: 'DD-MM-YYYY' },
	contact: { type: Types.Email },
	details: { type: Types.Markdown, required: true, initial: true },
	medias: { type: Types.CloudinaryImages }
});

/**
 * Registration
 */
// Advertisement.defaultColumns = 'title, author, startPublicationDate, endPublicationDate, contact, details';
Advertisement.register();
