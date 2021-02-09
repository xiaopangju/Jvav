define([
  "jquery",
  "mustache",
  "marked",
  "text!./layout.html"
], function($, Mustache, Marked, templateHtml) {
  "use strict";

  function ContentLayout(params) {
    this.contentItemData = params.contentItemData || {};
    this.scsData = params.scsData;
    this.contentClient = params.contentClient;
  }
  ContentLayout.prototype = {
    contentVersion: ">=1.0.0 <2.0.0",
    render: function(parentObj) {
      var template,
        content = $.extend({}, this.contentItemData),
        contentClient = this.contentClient,
        contentType,
				secureContent = false;;
      if (this.scsData) {
				content = $.extend(content, {
					"scsData": this.scsData
				});
				contentType = content.scsData.showPublishedContent === true ? "published" : "draft";
				secureContent = content.scsData.secureContent;
			}

			// Support both v1.0 and v1.1 Content REST API response formats.
			// User-defined fields are passed through the 'data' property in v1.0 and 'fields' property in v1.1.
			var data = !contentClient.getInfo().contentVersion || contentClient.getInfo().contentVersion === "v1" ? content.data : content.fields;

			// Massage the data so that the 'fields' property is always there.
			// The corresponding layout.html template only checks for the ‘fields’ property.
			if (!contentClient.getInfo().contentVersion || contentClient.getInfo().contentVersion === "v1") {
				content.fields = content.data;
			}
      var propLabels = {};
      for (var l = 1; l <= 10; l++) {
        if(data["propertyAsset" + l])
          propLabels[data["propertyAsset" + l].id] = data["propertyAsset" + l + "Label"];
      }
      if (Object.keys(propLabels).length > 0) {
        var props = {},
          lang = SCS.pageLanguageCode ? SCS.pageLanguageCode : "en";
    		return $.when(
    		contentClient.getItems({
    			ids: Object.keys(propLabels),
    			language: lang
    		}),"en"!=lang?contentClient.getItems({
    			ids: Object.keys(propLabels),
    			language: "en"
    		}):null).done(function(transProps, enProps) {
    			Object.keys(propLabels).forEach(function(propID, index) {
    				var prop;
    				if(transProps.items !=null && transProps.items[index] && transProps.items[index].fields)
    					prop = transProps.items[index].fields.json;
    				else
    					prop = enProps.items[index].fields.json;
    				props[propLabels[propID]] = prop; //JSON.parse(JSON.parse(prop).value);
    			});
    			var propRegexp = /\[!prop:([^:]+):([^!]+)!\]/;
    			var newBody = content.fields.body;
    			var result;
    			while((result = propRegexp.exec(newBody)) !== null) {
    				var re = new RegExp(result[0].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g");
    				newBody = newBody.replace(re, props[result[1]][result[2]]);
    			}
    			newBody = newBody.replace(/\[!lang!\]/g, lang);
    			newBody = fixRelativeLinks(newBody, SCS.sitePrefix, SCS.pageLanguageCode);
    			content.fields.body = contentClient.expandMacros(newBody);
    			try {
    				template = Mustache.render(templateHtml, content);

    				// Insert the expanded template into the passed in container.
    				if (template) {
    					$(parentObj).append(template);
    				}
    			} catch (e) {
    				console.error(e.stack);
    			}
    		});
      } else {
        var newBody = content.fields.body;
        newBody = newBody.replace(/\[!lang!\]/g, lang);
        newBody = fixRelativeLinks(newBody, SCS.sitePrefix, SCS.pageLanguageCode);
        content.fields.body = contentClient.expandMacros(newBody);
        try {
          template = Mustache.render(templateHtml, content);

          // Insert the expanded template into the passed in container.
          if (template) {
            $(parentObj).append(template);
          }
        } catch (e) {
          console.error(e.stack);
        }
      }
    }
  }
  return ContentLayout;
});
