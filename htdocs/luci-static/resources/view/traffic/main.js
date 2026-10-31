'use strict';
'require view';

return view.extend({
	load: function() {
		return Promise.resolve();
	},

	render: function() {
		var frame = E('iframe', {
			'src': '/traffic/',
			'style': 'width:100%;height:calc(100vh - 150px);min-height:600px;border:0;border-radius:8px;display:block'
		});
		return frame;
	},

	handleSaveApply: null,
	handleSave: null,
	handleReset: null
});
