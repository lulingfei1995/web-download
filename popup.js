// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let downloadButton = document.getElementById('downloadButton');

downloadButton.onclick = function(element) {
  console.log('!!!!!!!!!');
  let el = document.createElement('textarea');
  console.log(document.getElementsByTagName('video'));
  el.value = document.getElementsByTagName('video')[0].currentSrc
  el.setAttribute('readonly', '');
  el.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
};
