/* globals define */
define(['knockout', 'jquery', 'text!./template.html', 'i18n!nls/header'], function(ko, $, sampleComponentTemplate, head) {
'use strict';
var ComponentViewModel = function (args) {
			// Boilerplate to help us store
			var self = this,
				SitesSDK = args.SitesSDK;

			// Store the args. Some times we need these for various functions.
			// For example the viewMode will tell you whether you are in edit or edit mode
			self.mode = args.viewMode;
			self.id = args.id;

			// Define the observables that we are binding
			self.showLogo = ko.observable(false);
			self.showNav = ko.observable(false);
			self.showSearch = ko.observable(false);
			self.navLinks = ko.observableArray([]);
			self.srchDefault = head.Search;

			// Define any computed functions, which are essentially read only observables.
			// This computed function returns the url of the image we were passed.

			self.resetNav = function() {
				self.renderNav();
			};

			self.renderNav = function() {
				self.navLinks([]);
				var siteMap = SCS.structureMap;
				var siteRoot = siteMap[SCS.navigationRoot];
				for(var i in siteRoot.children) {
					let pID = siteRoot.children[i]
					let page = siteMap[pID];
					if(!page.hideInNavigation && pID != SCS.navigationRoot) {
						let pUrl = SCSRenderAPI.getPageLinkUrl(pID);
						self.navLinks.push({ label: page.name, url: pUrl});
					}
				}
			};

			// Boilerplate that states we are still loading content
			self.customSettingsDataInitialized = ko.observable(false);
			self.initialized = ko.computed(function () {
				return self.customSettingsDataInitialized();
			}, self);

			// Load the data from the custom settings screen
      self.updateCustomSettingsData = $.proxy(function (customData) {
				// Boilerplate stating we have loaded the data.
				if(customData) {
					if(customData.hasOwnProperty('showLogo')) {
						self.showLogo(customData.showLogo);
					}
					if(customData.hasOwnProperty('showNav')) {
						self.showNav(customData.showNav);
					}
					if(customData.hasOwnProperty('showSearch')) {
						self.showSearch(customData.showSearch);
					}
				}
				self.resetNav();
				self.customSettingsDataInitialized(true);
			}, self);

			// Boilerplate to handle the settings update event, calling our above function
			self.updateSettings = $.proxy(function (settings) {
				if (settings.property === 'customSettingsData') {
					self.updateCustomSettingsData(settings.value);
				}
				self.resetNav();
			}, self);

			// Boilerplate to subscribe to an event stating the settings have updated
			SitesSDK.subscribe('SETTINGS_UPDATED', self.updateSettings);

			// Boilerplate to get our custom settings data and apply it by calling our above function
			SitesSDK.getProperty('customSettingsData', self.updateCustomSettingsData);
		};


var ComponentImpl = function (args) {

			// Initialze the custom component
			this.init(args);
		};

		// initialize all the values within the component from the given argument values
		ComponentImpl.prototype.init = function (args) {
			this.createViewModel(args);
			this.createTemplate(args);
			this.setupCallbacks();
		};

		// create the viewModel from the initial values
		ComponentImpl.prototype.createViewModel = function (args) {
			// create the viewModel
			this.viewModel = new ComponentViewModel(args);
		};

		// create the template based on the initial values
		ComponentImpl.prototype.createTemplate = function (args) {
			// create a unique ID for the div to add, this will be passed to the callback
			this.contentId = args.id + '_content_' + args.mode;

			// create a hidden custom component template that can be added to the DOM
			this.template = '<div id="' + this.contentId + '">' +
				sampleComponentTemplate +
				'</div>';
		};

		//
		// SDK Callbacks
		// setup the callbacks expected by the SDK API
		//
		ComponentImpl.prototype.setupCallbacks = function () {

			//
			// callback - render: add the component into the page
			//
			this.render = $.proxy(function (container) {
				var $container = $(container);

				// add the custom component template to the DOM
				$container.append(this.template);

				// apply the bindings
				ko.applyBindings(this.viewModel, $('#' + this.contentId)[0]);
				this.viewModel.resetNav();
			}, this);

			this.hydrate = function(parentObj) {
				$("input[name=Ntt]").attr("title", head.Search);
				$("input[name=Ntt]").attr("value", head.Search);
			};

			//
			// callback - update: handle property change event
			//
			this.update = $.proxy(function (args) {
				var self = this;

				// deal with each property changed
				$.each(args.properties, function (_index, property) {
					if (property) {
						if (property.name === 'customSettingsData') {
							self.viewModel.updateComponentData(property.value);
						} else if (property.name === 'componentLayout') {
							self.viewModel.updateLayout(property.value);
						}
					}
				});
			}, this);

			//
			// callback - dispose: cleanup after component when it is removed from the page
			//
			this.dispose = $.proxy(function () {
				// nothing required for this sample since knockout disposal will automatically clean up the node
			}, this);
		};

		//
		// return the factory API
		//

var componentFactory = {
createComponent: function (args, callback) {
				// return a new instance of the component
				return callback(new ComponentImpl(args));
			}
		};
 return componentFactory;
});
