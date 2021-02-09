/**
 * Copyright (c) 2019 Oracle and/or its affiliates. All rights reserved.
 * Licensed under the Universal Permissive License v 1.0 as shown at http://oss.oracle.com/licenses/upl.
 */
/* globals define,console */
define([
	"jquery",
	"mustache",
	"marked",
	"text!./layout.html"
], function ($, Mustache, Marked, templateHtml) {
	"use strict";

	// Content Layout constructor function.
	function ContentLayout(params) {
		this.contentItemData = params.contentItemData || {};
		this.scsData = params.scsData;
		this.contentClient = params.contentClient;
	}

	// Helper function to format a date field by locale.
	function dateToMDY(date) {
		if (!date) {
			return "";
		}

		var dateObj = new Date(date);

		var options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		};
		var formattedDate = dateObj.toLocaleDateString("en-US", options);

		return formattedDate;
	}

	// Helper function to parse markdown text.
	function parseMarkdown(mdText) {
		if (mdText && /^<!---mde-->\n\r/i.test(mdText)) {
			mdText = mdText.replace("<!---mde-->\n\r", "");
			mdText = Marked(mdText);
		}

		return mdText;
	}


	// Content Layout definition.
	ContentLayout.prototype = {
		// Specify the versions of the Content REST API that are supported by the this Content Layout.
		// The value for contentVersion follows Semantic Versioning syntax.
		// This allows applications that use the content layout to pass the data through in the expected format.
		contentVersion: ">=1.0.0 <2.0.0",

		// Main rendering function:
		// - Updates the data to handle any required additional requests and support both v1.0 and v1.1 Content REST APIs
		// - Expand the Mustache template with the updated data
		// - Appends the expanded template HTML to the parentObj DOM element
		render: function (parentObj) {
			var template,
				content = $.extend({}, this.contentItemData),
				contentClient = this.contentClient,
				contentType,
				secureContent = false;

			// If used with CECS Sites, Sites will pass in context information via the scsData property.
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

			//
			// Handle fields specific to this content type.
			//

			var moreItems;

			var referedIds = [];

      var body = fixRelativeLinks(data.body, SCS.sitePrefix, SCS.pageLanguageCode);
      data.divClass = "";
      /*OMNITURE CALL START*/
      if(data.omniture) {
        contentClient.getItem({
          id: data.omniture.id
        }).then(function(omniData) {
          contentClient.renderItem({
            data: {
              contentItemData: omniData,
              scsData: {
                contentClient: contentClient
              }
            },
            layout: 'JCOM-Omniture_Detail',
            container: parentObj
          })
        })
      }
      /* RENDER LEFT NAV START */
      if(data.downloadNavWidgets) {
        var widgetIDs = {};
        data.divClass = "jvc0w1 clearfix";
        data.downloadNavWidgets.forEach(function(widgetRef) {
          widgetIDs[widgetRef.id] = widgetRef.type;
        });
        contentClient.getItems({
          ids: Object.keys(widgetIDs)
        }).then(function(wgtsData) {
          wgtsData.items.forEach(function(widget) {
            var contEl = document.createElement("div");
            $('#leftNavSection').append(contEl);
            contentClient.renderItem({
              data: {
                contentItemData: widget,
                scsData: {
                  contentClient: contentClient
                }
              },
              layout: widgetIDs[widget.id]=='JCOM_PropertyHTML'?'JCOM-PropertyHTML_Detail':'JCOM-Widget_Detail',
              'container': contEl
            }).then(function(){
              debug("Added Nav Widget " + widget.id);
            },
            function (error) {
                console.error('error rendering layout onto the page: ' + JSON.stringify(error));
            });
          });
        });
      }
      /* RENDER LEFT NAV END */

      /* REPLACING EMBEDDED ITEMS START */
      var embedRegex = /\[!--\$CEC_EMBED_ASSET--\]([^:]+):([^\]]+)\[\/!--\$CEC_EMBED_ASSET--\]/;
      var embItems = [];
      var result;
      while((result = embedRegex.exec(body)) !== null) {
          var embType = result[1];
          var embID = result[2];
          var embSpan = "<span id='ci-embed-" + embID + "'></span>";
          body = body.replace(result[0],embSpan);
          embItems.push(embID);
      }
      if(embItems.length > 0) {
        contentClient.getItems({
          ids: embItems
        }).then(function(embData) {
          embData.items.forEach(function(item) {
            var ecEl = document.getElementById('ci-embed-' + item.id);
            contentClient.renderItem({
              data: {
                contentItemData: item,
                scsData: {
                  contentClient: contentClient
                }
              },
              layout: 'JCOM-PropertyHTML_Detail',
              'container': ecEl
            }).then(function(){
              debug("Added embed content " + item.id);
            },
            function (error) {
                console.error('error rendering layout onto the page: ' + JSON.stringify(error));
            });
          });
        });
      }
      /* REPLACING EMBEDDED ITEMS END */

      data.body = contentClient.expandMacros(body);
      if(data.title)
        document.title = data.title;
      if(data.jDescription) {
        var metaDesc = $('meta[name="description"]')[0];
        if(!metaDesc) {
          metaDesc = document.createElement("meta");
          metaDesc.setAttribute("name","description");
        }
        metaDesc.setAttribute("content",data.jDescription);
        $("head").append(metaDesc);
      }
      if(data.keywords) {
        var metaKW = $('meta[name="keywords"]')[0];
        if(!metaKW) {
          metaKW = document.createElement("meta");
          metaKW.setAttribute("name","keywords");
        }
        metaKW.setAttribute("content",data.keywords.join());
        $("head").append(metaKW);
      }
      if(data.robots) {
        var metaRBT = $('meta[name="robots"]')[0];
        if(!metaRBT) {
          metaRBT = document.createElement("meta");
          metaRBT.setAttribute("name","robots");
        }
        metaRBT.setAttribute("content",data.robots.join());
        $("head").append(metaRBT);
      }
      if(data.addHeadTags) {
        $(document.head).append(data.addHeadTags);
      }
      if(data.addBodyTags) {
        $(document.body).append(data.addBodyTags);
      }
			try {
				// Use Mustache to expand the HTML template with the data.
				template = Mustache.render(templateHtml, content);
				// Insert the expanded template into the passed in container.
				if (template) {
					$(parentObj).append(template);
          debug("Added Download Content template");
				}
			} catch (e) {
				console.error(e.stack);
			}
		}
	};

	return ContentLayout;
});
