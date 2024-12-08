(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_type_visible"};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(e){var r=function(e){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:r+""}var o=function(){return e=function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationSettings=t,this._formElement=r,this._submitButton=this._formElement.querySelector(this._validationSettings.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector))},(t=[{key:"_showValidationError",value:function(e,t){var r=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._validationSettings.inputErrorClass),r.textContent=t,r.classList.add(this._validationSettings.errorClass)}},{key:"_hideValidationError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._validationSettings.inputErrorClass),t.classList.remove(this._validationSettings.errorClass),t.textContent=""}},{key:"resetValidate",value:function(){var e=this;this._inputList.forEach((function(t){e._hideValidationError(t)})),this._toggleButtonState()}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideValidationError(e):this._showValidationError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableValidationCheck",value:function(){this._setEventListeners()}},{key:"_disableSubmitButton",value:function(){this._submitButton.setAttribute("disabled","true"),this._submitButton.classList.add(this._validationSettings.inactiveButtonClass)}},{key:"_enableSubmitButton",value:function(){this._submitButton.classList.remove(this._validationSettings.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}}])&&r(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function u(e){var t=function(e){if("object"!=i(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}var c=function(){return e=function e(t,r,n,o,i){var a,c,s,l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a=this,s=function(){l._likeIcon.addEventListener("click",(function(){return l._interactLike()})),l._elementImages.addEventListener("click",(function(){return l._cardZoom(l._cardName,l._cardImage)})),l._userId===l._authorId?l._deleteIcon.addEventListener("click",(function(){return l._cardDelete(l,l._cardId)})):l._deleteIcon.remove()},(c=u(c="_addEventHandlers"))in a?Object.defineProperty(a,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[c]=s,this._card=t,this._cardName=this._card.name,this._cardImage=this._card.link,this._cardTemplate=r,this._userId=n,this._cardId=o.cardId,this._authorId=o.authorId,this._cardZoom=i.handleCardZoom,this._cardDelete=i.handleCardDelete,this._putLike=i.handleCardLike,this._removeLike=i.handleCardDeleteLike},(t=[{key:"_createCard",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".cards__item").cloneNode(!0)}},{key:"deleteCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"renderCardLike",value:function(e){this._likeArea=e.likes,0===this._likeArea.length?this.likeSelector.textContent="":this.likeSelector.textContent=this._likeArea.length,this._likedCard()?this._likeIcon.classList.add("cards__like_active"):this._likeIcon.classList.remove("cards__like_active")}},{key:"_likedCard",value:function(){var e=this;return this._likeArea.find((function(t){return t._id===e._userId}))}},{key:"_interactLike",value:function(){this._likedCard()?this._removeLike(this._cardId):this._putLike(this._cardId)}},{key:"makeCard",value:function(){return this._cardElement=this._createCard(),this._elementImages=this._cardElement.querySelector(".cards__image"),this._elementName=this._cardElement.querySelector(".cards__description"),this._likeIcon=this._cardElement.querySelector(".cards__like"),this._deleteIcon=this._cardElement.querySelector(".cards__delete"),this.likeSelector=this._cardElement.querySelector(".cards__like-counter"),this._elementName.textContent=this._cardName,this._elementImages.src=this._cardImage,this._elementImages.alt=this._cardName,this.renderCardLike(this._card),this._addEventHandlers(),this._cardElement}}])&&a(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,f(n.key),n)}}function f(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}var p=function(){return e=function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)},(t=[{key:"renderItems",value:function(e){e.forEach(this._renderer)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&l(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function v(e){var t=function(e){if("object"!=y(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}var m=function(){return e=function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.key&&i.close()},(n=v(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popupItem=document.querySelector(t)},(t=[{key:"open",value:function(){this._popupItem.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupItem.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupItem.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&d(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_(n.key),n)}}function _(e){var t=function(e){if("object"!=h(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:t+""}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}function g(e,t,r,n){var o=k(w(1&n?e.prototype:e),t,r);return 2&n&&"function"==typeof o?function(e){return o.apply(r,e)}:o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},k.apply(null,arguments)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}var j=function(e){function t(e,r){var n,o=r.callbackNotice;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t,r){return t=w(t),function(e,t){if(t&&("object"==h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,S()?Reflect.construct(t,r||[],w(e).constructor):t.apply(e,r))}(this,t,[e]))._submitButton=n._popupItem.querySelector(".popup__form"),n._callbackNotice=o,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(t,e),r=t,(n=[{key:"open",value:function(e,r){this._cardObject=e,this._cardId=r,g(t,"open",this,3)([])}},{key:"setEventListeners",value:function(){var e=this;this._submitButton.addEventListener("submit",(function(t){t.preventDefault(),e._callbackNotice(e._cardObject,e._cardId)})),g(t,"setEventListeners",this,3)([])}}])&&b(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(m);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,C(n.key),n)}}function C(e){var t=function(e){if("object"!=O(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==O(t)?t:t+""}function I(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(I=function(){return!!e})()}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},L.apply(null,arguments)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}var B=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=function(e,t,r){return t=T(t),function(e,t){if(t&&("object"==O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,I()?Reflect.construct(t,r||[],T(e).constructor):t.apply(e,r))}(this,t,[e]))._popupDescription=r._popupItem.querySelector(".popup__description"),r._popupImage=r._popupItem.querySelector(".popup__image"),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(t,e),r=t,n=[{key:"open",value:function(e,r){var n,o,i;this._popupDescription.textContent=e,this._popupImage.src=r,this._popupImage.alt=e,(n=t,o=this,"function"==typeof(i=L(T(1&3?n.prototype:n),"open",o))?function(e){return i.apply(o,e)}:i)([])}}],n&&P(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(m);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,R(n.key),n)}}function R(e){var t=function(e){if("object"!=D(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==D(t)?t:t+""}function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(A=function(){return!!e})()}function V(e,t,r,n){var o=N(U(1&n?e.prototype:e),t,r);return 2&n&&"function"==typeof o?function(e){return o.apply(r,e)}:o}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},N.apply(null,arguments)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}var H=function(e){function t(e,r){var n,o=r.callbackFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t,r){return t=U(t),function(e,t){if(t&&("object"==D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,A()?Reflect.construct(t,r||[],U(e).constructor):t.apply(e,r))}(this,t,[e]))._callbackFormSubmit=o,n._popupFormItem=n._popupItem.querySelector(".popup__form"),n._inputList=Array.from(n._popupFormItem.querySelectorAll(".popup__input")),n._sendButton=n._popupItem.querySelector(".popup__submit"),n._sendButtonText=n._sendButton.textContent,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(t,e),r=t,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;V(t,"setEventListeners",this,3)([]),this._popupFormItem.addEventListener("submit",(function(t){t.preventDefault(),e._callbackFormSubmit(e._getInputValues())}))}},{key:"putSavingProcessText",value:function(){this._sendButton.textContent="Сохранение..."}},{key:"returnSavingProcessText",value:function(){this._sendButton.textContent=this._sendButtonText}},{key:"close",value:function(){V(t,"close",this,3)([]),this._popupFormItem.reset()}}])&&x(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(m);function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function J(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,M(n.key),n)}}function M(e){var t=function(e){if("object"!=Z(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Z(t)?t:t+""}var z=function(){return e=function e(t){var r=t.usernameSelector,n=t.userDescriptionSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._username=document.querySelector(r),this._userDescription=document.querySelector(n),this._avatarLink=document.querySelector(o)},(t=[{key:"getUserInfo",value:function(){return{username:this._username.textContent,description:this._userDescription.textContent}}},{key:"setUserInfo",value:function(e){var t=e.username,r=e.description;this._username.textContent=t,this._userDescription.textContent=r}},{key:"setUserAvatar",value:function(e){this._avatarLink.src=e}}])&&J(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function G(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,K(n.key),n)}}function K(e){var t=function(e){if("object"!=$(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==$(t)?t:t+""}var Q=function(){return e=function e(t){var r=t.link,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=r,this._headers=n},(t=[{key:"_processingServerResponse",value:function(e){return e.ok?e.json():Promise.reject("код ошибки: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._link,"cards"),{headers:this._headers}).then((function(t){return e._processingServerResponse(t)}))}},{key:"addNewCard",value:function(e){var t=this,r=e.name,n=e.link;return fetch("".concat(this._link,"cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:r,link:n})}).then((function(e){return t._processingServerResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._link,"cards/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return t._processingServerResponse(e)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._link,"users/me"),{headers:this._headers}).then((function(t){return e._processingServerResponse(t)}))}},{key:"sendUserData",value:function(e){var t=this;return fetch("".concat(this._link,"users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.username,about:e.description})}).then((function(e){return t._processingServerResponse(e)}))}},{key:"sendAvatarData",value:function(e){var t=this;return fetch("".concat(this._link,"users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._processingServerResponse(e)}))}},{key:"putCardLike",value:function(e){var t=this;return fetch("".concat(this._link,"cards/").concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then((function(e){return t._processingServerResponse(e)}))}},{key:"deleteCardLike",value:function(e){var t=this;return fetch("".concat(this._link,"cards/").concat(e,"/likes"),{headers:this._headers,method:"DELETE"}).then((function(e){return t._processingServerResponse(e)}))}}])&&G(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),W=document.querySelector(".profile__editor"),X=document.querySelector(".profile__add-mesto"),Y=document.querySelector("#profile-popup"),ee=Y.querySelector(".popup__form"),te=document.querySelector("#cards-popup").querySelector(".popup__form"),re=Y.querySelector("#username-input"),ne=Y.querySelector("#description-input"),oe=document.querySelector("#avatar-popup").querySelector(".popup__form"),ie=document.querySelector(".profile__avatar-edit");function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var ue,ce=new Q({link:"https://mesto.nomoreparties.co/v1/frontend-st-cohort-201/",headers:{authorization:"40f4a4b4-eac4-46f9-a6b5-a8655d83f62f","Content-Type":"application/json"}}),se=new z({usernameSelector:".profile__name",userDescriptionSelector:".profile__description",userAvatarSelector:".profile__avatar"}),le=function(e){var t=new c(e,"#card-template",ue,{cardId:e._id,authorId:e.owner._id},{handleCardZoom:function(e,t){pe.open(e,t)},handleCardDelete:function(e,t){de.open(e,t)},handleCardLike:function(e){ce.putCardLike(e).then((function(e){t.renderCardLike(e)})).catch((function(e){console.log("При лайке карточки возникла ошибка, ".concat(e))}))},handleCardDeleteLike:function(e){ce.deleteCardLike(e).then((function(e){t.renderCardLike(e)})).catch((function(e){console.log("При дизлайке карточки возникла ошибка, ".concat(e))}))}});return t.makeCard()},fe=new p({renderer:function(e){fe.addItem(le(e))}},".cards");Promise.all([ce.getUserData(),ce.getInitialCards()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,r)||function(e,t){if(e){if("string"==typeof e)return ae(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ae(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];ue=o._id,se.setUserInfo({username:o.name,description:o.about}),fe.renderItems(i.reverse()),se.setUserAvatar(o.avatar)})).catch((function(e){console.log("Возникла глобальная ошибка, ".concat(e))}));var pe=new B("#image-popup");pe.setEventListeners();var ye=new H("#avatar-popup",{callbackFormSubmit:function(e){ye.putSavingProcessText(),ce.sendAvatarData(e).then((function(e){se.setUserAvatar(e.avatar),ye.close()})).catch((function(e){console.log("При обновлении аватара возникла ошибка, ".concat(e))})).finally((function(){ye.returnSavingProcessText()}))}});ye.setEventListeners();var de=new j("#delete-card",{callbackNotice:function(e,t){ce.deleteCard(t).then((function(){e.deleteCard(),de.close()})).catch((function(e){console.log("При удалении карточки возникла ошибка, ".concat(e))}))}});de.setEventListeners();var ve=new H("#profile-popup",{callbackFormSubmit:function(e){ve.putSavingProcessText(),ce.sendUserData(e).then((function(e){se.setUserInfo({username:e.name,description:e.about}),ve.close()})).catch((function(e){console.log("При редактировании профиля возникла ошибка, ".concat(e))})).finally((function(){ve.returnSavingProcessText()}))}});ve.setEventListeners();var me=new H("#cards-popup",{callbackFormSubmit:function(e){me.putSavingProcessText(),ce.addNewCard({name:e.placename,link:e.placeimage}).then((function(e){fe.addItem(le(e)),me.close()})).catch((function(e){console.log("При добавлении новой карточки возникла ошибка, ".concat(e))})).finally((function(){me.returnSavingProcessText()}))}});me.setEventListeners();var he=new o(e,te);he.enableValidationCheck();var be=new o(e,ee);be.enableValidationCheck();var _e=new o(e,oe);_e.enableValidationCheck(),W.addEventListener("click",(function(){ve.open(),be.resetValidate();var e=se.getUserInfo();re.value=e.username,ne.value=e.description})),ie.addEventListener("click",(function(){ye.open(),_e.resetValidate()})),X.addEventListener("click",(function(){me.open(),he.resetValidate()}))})();